"use client";

import { useState, useEffect, useRef } from "react";

const socials = [
  {
    name: "Instagram",
    handle: "@inhousengo",
    href: "#",
    color: "#e1306c",
    bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "InHouse NGO",
    href: "#",
    color: "#1877f2",
    bg: "#1877f2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    handle: "@inhousengo",
    href: "#",
    color: "#e8eaf6",
    bg: "#000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "InHouse NGO",
    href: "#",
    color: "#fff",
    bg: "#0a66c2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "InHouse NGO",
    href: "#",
    color: "#fff",
    bg: "#ff0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function SocialSidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="social-sidebar-wrapper">
      {/* Backdrop blur overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            zIndex: 1100,
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* Sidebar panel */}
      <div
        ref={sidebarRef}
        style={{
          position: "fixed",
          top: "50%",
          right: 0,
          /*
           * When CLOSED: translate only the panel width (260px) → tab (36px) stays
           * peeking at the right edge.
           * When OPEN:   translate(0) → full panel + tab visible.
           */
          transform: open ? "translate(0, -50%)" : "translate(260px, -50%)",
          zIndex: 1101,
          display: "flex",
          alignItems: "stretch",
          minHeight: "320px",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          filter: open ? "drop-shadow(-8px 0 32px rgba(124,58,237,0.3))" : "none",
        }}
      >
        {/* Pull Tab */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close social links" : "Open social links"}
          style={{
            width: 36,
            alignSelf: "stretch",
            background: "linear-gradient(180deg, #7c3aed 0%, #a855f7 50%, #f59e0b 100%)",
            border: "none",
            borderRadius: "12px 0 0 12px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: "12px 0",
            transition: "opacity 0.2s ease, width 0.2s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        >
          {/* Share icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="16"
            height="16"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>

          {/* Vertical label */}
          <span
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              color: "#fff",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.9,
              userSelect: "none",
            }}
          >
            Follow Us
          </span>

          {/* Arrow indicator */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="14"
            height="14"
            style={{
              transform: open ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.35s ease",
              opacity: 0.8,
            }}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Panel body */}
        <div
          style={{
            width: 260,
            background: "var(--surface)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderLeft: "1px solid var(--surface-border)",
            display: "flex",
            flexDirection: "column",
            padding: "28px 20px 24px",
            gap: "8px",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "12px" }}>
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "4px",
              }}
            >
              Connect With Us
            </p>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "var(--foreground)",
                lineHeight: 1.2,
              }}
            >
              Follow Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Journey
              </span>
            </h3>
          </div>

          {/* Social links */}
          {socials.map((s, i) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-sidebar-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "12px 14px",
                borderRadius: "12px",
                textDecoration: "none",
                background: "transparent",
                border: "1px solid var(--surface-border)",
                transition: "all 0.25s ease",
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(-4px)";
                el.style.background = "var(--surface-hover)";
                el.style.borderColor = `${s.color}50`;
                el.style.boxShadow = `0 4px 20px ${s.color}20`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(0)";
                el.style.background = "transparent";
                el.style.borderColor = "var(--surface-border)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Platform icon with colored circle */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: s.color,
                  flexShrink: 0,
                  boxShadow: `0 2px 10px ${s.color}30`,
                }}
              >
                {s.icon}
              </div>

              {/* Name & handle */}
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--foreground-muted)",
                    marginTop: "1px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {s.handle}
                </div>
              </div>

              {/* External link arrow */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--foreground-faint)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
                style={{ marginLeft: "auto", flexShrink: 0 }}
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}

          {/* Footer tagline */}
          <div
            style={{
              marginTop: "16px",
              paddingTop: "16px",
              borderTop: "1px solid var(--surface-border)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--foreground-faint)",
                lineHeight: 1.5,
              }}
            >
              Stay updated with our latest stories, events, and impact.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          /* Narrower panel on small screens */
        }
      `}</style>
    </div>
  );
}
