"use client";

import Image from "next/image";
import { useState } from "react";
import { useReveal } from "../components/useReveal";

const galleryImages = [
  {
    src: "/gallery1.png",
    title: "Volunteer Drive 2024",
    category: "Community",
    desc: "Over 200 volunteers came together on a single Sunday to distribute essentials across 3 Delhi districts — food, hygiene kits, and warm clothing.",
  },
  {
    src: "/gallery2.png",
    title: "Education Program",
    category: "Education",
    desc: "Our weekend tutoring centres have helped 1,400+ children from slum areas stay in school and achieve grade-level literacy.",
  },
  {
    src: "/gallery3.png",
    title: "Health Camp – Rural Outreach",
    category: "Healthcare",
    desc: "Free check-ups, medicines, and specialist consultations delivered to 600 patients in a single-day mobile health camp in rural Bihar.",
  },
  {
    src: "/gallery4.png",
    title: "Green Earth Initiative",
    category: "Environment",
    desc: "50,000 saplings planted across Uttarakhand and Himachal Pradesh, restoring degraded forest cover and engaging local youth as green ambassadors.",
  },
  {
    src: "/gallery5.png",
    title: "Community Food Drive",
    category: "Community",
    desc: "During the COVID crisis, InHouse distributed 1.2 lakh meal kits to daily-wage workers and migrant families stranded across the city.",
  },
  {
    src: "/gallery6.png",
    title: "Women Empowerment Workshop",
    category: "Empowerment",
    desc: "Skill-building sessions in tailoring, digital literacy, and micro-finance helped 300+ women launch their own home-based businesses.",
  },
];

const categories = ["All", "Community", "Education", "Healthcare", "Environment", "Empowerment"];

const catColors: Record<string, string> = {
  All:         "#9b8ea0",
  Community:   "#b5813d",
  Education:   "#4f7fa8",
  Healthcare:  "#4a9b7c",
  Environment: "#4a9b7c",
  Empowerment: "#c0614a",
};

export default function ImagesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<(typeof galleryImages)[0] | null>(null);
  const galleryReveal = useReveal(0.05);
  const ctaReveal     = useReveal(0.1);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="page-wrapper">

      {/* ── Header ── */}
      <section className="page-header-section" style={{ padding: "96px 24px 60px", position: "relative", overflow: "hidden" }}>
        <div className="page-header-rule" style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 79px, var(--page-header-line) 80px)",
          opacity: 1,
        }} />
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
          background: "linear-gradient(to bottom, transparent, #b5813d 30%, #4a9b7c 70%, transparent)",
          opacity: 0.7,
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#b5813d", marginBottom: "16px",
            animation: "fade-up 0.5s ease both",
          }}>Visual Stories</p>
          <h1 style={{
            fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900,
            lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--foreground)",
            marginBottom: "16px", animation: "fade-up 0.6s ease 0.1s both",
          }}>
            Our<br />
            <span style={{
              fontStyle: "italic", fontWeight: 300,
              background: "linear-gradient(100deg, #b5813d 0%, #c0614a 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Gallery</span>
          </h1>
          <p style={{
            fontSize: "1rem", color: "var(--foreground-muted)", lineHeight: 1.75,
            maxWidth: "500px", animation: "fade-up 0.6s ease 0.2s both",
          }}>
            Every photo tells a story of hope, resilience, and the power of collective action.
          </p>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section style={{ padding: "0 24px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {categories.map((cat) => {
              const active = activeCategory === cat;
              const col = catColors[cat] ?? "#9b8ea0";
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "7px 16px", fontSize: "0.8rem", fontWeight: 600,
                    borderRadius: "6px", cursor: "pointer", transition: "all 0.2s ease",
                    border: `1px solid ${active ? col + "60" : "var(--surface-border)"}`,
                    background: active ? col + "18" : "transparent",
                    color: active ? col : "var(--foreground-muted)",
                    letterSpacing: "0.02em",
                  }}
                >{cat}</button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            ref={galleryReveal.ref}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "16px",
            }} className="gallery-grid">
            {filtered.map((img, idx) => {
              const col = catColors[img.category] ?? "#b5813d";
              return (
                <div
                  key={img.src}
                  style={{
                    position: "relative", borderRadius: "20px", overflow: "hidden",
                    aspectRatio: "4/3", cursor: "pointer",
                    boxShadow: "var(--shadow-sm)",
                    opacity: galleryReveal.visible ? 1 : 0,
                    filter: galleryReveal.visible ? "blur(0)" : "blur(8px)",
                    transform: galleryReveal.visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
                    transition: `opacity 0.5s ease ${idx * 0.09}s, filter 0.5s ease ${idx * 0.09}s, transform 0.5s cubic-bezier(0.23,1,0.32,1) ${idx * 0.09}s, box-shadow 0.3s ease`,
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setLightbox(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  />

                  {/* Bottom label — always visible */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
                    display: "flex", alignItems: "flex-end", padding: "16px 18px",
                  }}>
                    <div>
                      <span style={{
                        display: "inline-block", padding: "2px 8px",
                        background: col + "cc", color: "#fff",
                        fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase", borderRadius: "3px", marginBottom: "6px",
                      }}>{img.category}</span>
                      <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                        {img.title}
                      </p>
                    </div>
                  </div>

                  {/* Hover card */}
                  <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: hoveredIdx === idx
                      ? "translate(-50%,-50%) scale(1)"
                      : "translate(-50%,-50%) scale(0.9)",
                    width: "calc(100% - 32px)", maxWidth: "300px",
                    background: "rgba(8,8,20,0.9)",
                    backdropFilter: "blur(16px)",
                    border: `1px solid ${col}44`,
                    borderRadius: "8px", padding: "18px",
                    zIndex: 10, pointerEvents: "none",
                    opacity: hoveredIdx === idx ? 1 : 0,
                    transition: "opacity 0.25s ease, transform 0.25s cubic-bezier(0.34,1.4,0.64,1)",
                  }}>
                    <span style={{
                      fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: col, display: "block", marginBottom: "8px",
                    }}>{img.category}</span>
                    <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#e8eaf6", marginBottom: "8px", lineHeight: 1.3 }}>
                      {img.title}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "rgba(232,234,246,0.65)", lineHeight: 1.65 }}>
                      {img.desc}
                    </p>
                    <div style={{
                      marginTop: "12px", paddingTop: "10px",
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                      fontSize: "0.68rem", color: "rgba(232,234,246,0.38)",
                      display: "flex", alignItems: "center", gap: "5px",
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="11" height="11">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                      Click to expand
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            ref={ctaReveal.ref}
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              borderRadius: "40px", overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid rgba(255,255,255,0.06)",
            }} className="cta-grid">
            <div style={{
              padding: "52px 48px",
              background: "linear-gradient(135deg, var(--surface) 0%, rgba(181,129,61,0.04) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRight: "1px solid rgba(255,255,255,0.05)",
              opacity: ctaReveal.visible ? 1 : 0,
              transform: ctaReveal.visible ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b5813d", marginBottom: "14px" }}>
                Behind the Lens
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.2, marginBottom: "14px" }}>
                Capture the Change
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)", lineHeight: 1.75, marginBottom: "26px" }}>
                Are you a photographer or videographer? Join our volunteer team and help document the stories that matter.
              </p>
              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 26px", borderRadius: "100px",
                background: "linear-gradient(135deg, #b5813d, #c8a96e)", color: "#fff",
                fontWeight: 700, fontSize: "0.88rem",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(181,129,61,0.35)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(181,129,61,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(181,129,61,0.35)";
                }}
              >
                Join Our Team
              </a>
            </div>
            <div style={{
              padding: "52px 48px", background: "var(--bg-secondary)",
              opacity: ctaReveal.visible ? 1 : 0,
              transform: ctaReveal.visible ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 0.6s ease 0.12s, transform 0.6s cubic-bezier(0.23,1,0.32,1) 0.12s",
            }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--foreground-faint)", marginBottom: "20px" }}>
                Gallery by Numbers
              </p>
              {[
                { n: "6+",   l: "Programme areas documented" },
                { n: "200+", l: "Field photos in our archive" },
                { n: "8",    l: "States where we operate" },
                { n: "2024", l: "Latest field documentation" },
              ].map((item, i, arr) => (
                <div key={item.n} style={{
                  display: "flex", alignItems: "baseline", gap: "16px",
                  padding: "14px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--surface-border)" : "none",
                }}>
                  <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--foreground)", minWidth: "70px", letterSpacing: "-0.02em" }}>
                    {item.n}
                  </span>
                  <span style={{ fontSize: "0.84rem", color: "var(--foreground-muted)" }}>{item.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(0,0,0,0.90)",
            backdropFilter: "blur(10px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px", animation: "fade-up 0.2s ease both",
          }}
        >
          <div
            className="lightbox-panel"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative", maxWidth: "860px", width: "100%",
              borderRadius: "10px", overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
              <Image src={lightbox.src} alt={lightbox.title} fill sizes="860px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{
              background: "rgba(8,8,20,0.97)", padding: "18px 24px",
              display: "flex", alignItems: "center", gap: "14px",
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, color: "#e8eaf6", fontSize: "0.95rem", marginBottom: "4px" }}>
                  {lightbox.title}
                </p>
                <p style={{ color: "rgba(232,234,246,0.55)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  {lightbox.desc}
                </p>
              </div>
              <span style={{
                padding: "3px 10px", borderRadius: "4px",
                background: (catColors[lightbox.category] ?? "#b5813d") + "22",
                border: `1px solid ${(catColors[lightbox.category] ?? "#b5813d")}44`,
                fontSize: "0.72rem", fontWeight: 700,
                color: catColors[lightbox.category] ?? "#b5813d",
                whiteSpace: "nowrap",
              }}>{lightbox.category}</span>
            </div>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: "12px", right: "12px",
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff", fontSize: "0.9rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(180,100,60,0.8)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.65)"; }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
