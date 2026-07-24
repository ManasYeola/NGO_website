import Link from "next/link";

const footerLinks = {
  Pages: [
    { label: "Home",        href: "/"             },
    { label: "Our Story",   href: "/our-story"    },
    { label: "Our Services",href: "/our-services"  },
    { label: "Gallery",     href: "/images"        },
    { label: "Testimonials",href: "/testimonials"  },
    { label: "Contact Us",  href: "/contact"       },
  ],
  Connect: [
    { label: "Facebook",   href: "#" },
    { label: "Instagram",  href: "#" },
    { label: "Twitter / X",href: "#" },
    { label: "LinkedIn",   href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background: "var(--footer-bg)",
      borderTop: "1px solid var(--footer-border)",
      padding: "64px 24px 32px",
      transition: "background 0.35s ease, border-color 0.35s ease",
    }}>
      <style>{`
        .footer-link {
          color: var(--footer-text);
          text-decoration: none;
          font-size: 0.86rem;
          transition: color 0.2s ease;
          line-height: 1.6;
        }
        .footer-link:hover { color: var(--foreground); }
        .footer-social-btn {
          padding: 5px 12px;
          border-radius: 5px;
          background: transparent;
          border: 1px solid var(--footer-border);
          color: var(--footer-text);
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .footer-social-btn:hover {
          border-color: var(--foreground-faint);
          color: var(--foreground);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-brand-col { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand-col">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              {/* Logo mark */}
              <div style={{
                width: 36, height: 36, borderRadius: "8px",
                border: "1.5px solid var(--footer-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.9rem", fontWeight: 800, color: "var(--foreground-muted)",
              }}>IH</div>
              <span style={{
                fontSize: "1.1rem", fontWeight: 800,
                color: "var(--foreground)", letterSpacing: "-0.01em",
              }}>InHouse</span>
            </div>
            <p style={{
              color: "var(--footer-text)", lineHeight: 1.72,
              fontSize: "0.88rem", maxWidth: "280px", marginBottom: "20px",
            }}>
              Empowering communities, transforming lives. Together, we build a better
              tomorrow through compassion, action, and solidarity.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Facebook", "Instagram", "X", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="footer-social-btn">{s}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--footer-text-faint)",
                marginBottom: "18px",
              }}>{title}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--footer-border)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}>
          <p style={{ color: "var(--footer-text-faint)", fontSize: "0.82rem" }}>
            &copy; {new Date().getFullYear()} InHouse NGO. All rights reserved.
          </p>
          <p style={{ color: "var(--footer-text-faint)", fontSize: "0.8rem" }}>
            Built for a better world.
          </p>
        </div>
      </div>
    </footer>
  );
}
