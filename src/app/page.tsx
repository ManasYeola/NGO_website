"use client";

import Link from "next/link";
import { useReveal } from "./components/useReveal";
import { useCountUp } from "./components/useCountUp";

/* Parsed stats: target number + display suffix */
const stats = [
  { target: 15,  suffix: "K+", label: "Lives Impacted" },
  { target: 120, suffix: "+",  label: "Volunteers"     },
  { target: 8,   suffix: "",   label: "States Covered"  },
  { target: 200, suffix: "+",  label: "Projects Done"   },
];

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, count } = useCountUp(stat.target, 1800, index * 120);
  return (
    <div ref={ref} style={{
      padding: "20px 0",
      borderRight: index < stats.length - 1 ? "1px solid var(--hero-border-cell)" : "none",
      paddingRight: index < stats.length - 1 ? "16px" : "0",
      paddingLeft: index > 0 ? "16px" : "0",
    }}>
      <div style={{
        fontSize: "1.8rem", fontWeight: 900,
        letterSpacing: "-0.03em", color: "#c8a96e", lineHeight: 1,
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{
        fontSize: "0.74rem", color: "var(--hero-text-faint)",
        marginTop: "5px", fontWeight: 500,
      }}>{stat.label}</div>
    </div>
  );
}

const initiatives = [
  {
    title: "Education",
    desc: "Bringing quality learning to underserved communities through scholarships, tutoring, and digital literacy programmes.",
    tag: "Education",
    accent: "#4f7fa8",
    accentBg: "rgba(79,127,168,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: "Healthcare",
    desc: "Free medical camps, mental health support, and nutrition programmes reaching the most vulnerable populations.",
    tag: "Healthcare",
    accent: "#4a9b7c",
    accentBg: "rgba(74,155,124,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    title: "Environment",
    desc: "Planting trees, promoting sustainable agriculture, and empowering communities to lead green initiatives.",
    tag: "Environment",
    accent: "#5a9e6e",
    accentBg: "rgba(90,158,110,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.34A1 1 0 0 0 4.7 21C8 19 11.17 16.5 13 12c1 2 1 4 0 6 2.5-1 5-4.5 5-8 0-3-1-6-1-6z"/>
      </svg>
    ),
  },
  {
    title: "Women Empowerment",
    desc: "Skill-building workshops, micro-finance, and leadership programmes for women across rural India.",
    tag: "Empowerment",
    accent: "#c0614a",
    accentBg: "rgba(192,97,74,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M12 12v8M8 16h8"/>
      </svg>
    ),
  },
];

const impactStats = [
  { n: "15,000+", l: "Lives impacted across 8 states" },
  { n: "120+",    l: "Dedicated volunteers on the ground" },
  { n: "200+",    l: "Projects completed since 2010" },
  { n: "1.2 L",   l: "Meal kits distributed during COVID" },
];

export default function HomePage() {
  const initiativesReveal = useReveal(0.1);
  const ctaReveal = useReveal(0.1);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* ── Cinematic background system ── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "var(--hero-bg)", transition: "background 0.35s ease" }}>

          {/* Orb 1 — blue-teal, left-centre */}
          <div style={{
            position: "absolute",
            width: "65vw", height: "65vw",
            borderRadius: "50%",
            top: "50%", left: "-10%",
            transform: "translateY(-50%)",
            background: "radial-gradient(circle, var(--hero-orb1, #1a3a5c) 0%, transparent 70%)",
            opacity: 0.55,
            animation: "hero-orb1 8s ease-in-out infinite",
          }} />

          {/* Orb 2 — warm gold, top-right */}
          <div style={{
            position: "absolute",
            width: "50vw", height: "50vw",
            borderRadius: "50%",
            top: "-15%", right: "0%",
            background: "radial-gradient(circle, var(--hero-orb2, #3d2a0a) 0%, transparent 65%)",
            opacity: 0.5,
            animation: "hero-orb2 10s ease-in-out infinite",
          }} />

          {/* Orb 3 — teal accent, bottom-right */}
          <div style={{
            position: "absolute",
            width: "40vw", height: "40vw",
            borderRadius: "50%",
            bottom: "-10%", right: "15%",
            background: "radial-gradient(circle, var(--hero-orb3, #0d2e24) 0%, transparent 65%)",
            opacity: 0.45,
            animation: "hero-orb3 12s ease-in-out infinite",
          }} />

          {/* Sweeping diagonal light beam */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(118deg, transparent 0%, transparent 38%, rgba(181,129,61,0.09) 45%, rgba(181,129,61,0.05) 50%, transparent 58%, transparent 100%)",
            animation: "hero-beam 6s ease-in-out infinite",
          }} />

          {/* Perspective grid floor */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
            backgroundImage: `
              linear-gradient(to right, rgba(181,129,61,0.10) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(181,129,61,0.10) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.9) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.9) 100%)",
            transform: "perspective(500px) rotateX(40deg)",
            transformOrigin: "bottom center",
            opacity: 0.4,
          }} />

          {/* Vignette edges */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.18) 100%)",
          }} />

          {/* Thin left accent bar */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
            background: "linear-gradient(to bottom, transparent, #b5813d 30%, #4a9b7c 70%, transparent)",
            opacity: 0.9, zIndex: 1,
          }} />

          {/* Diagonal wedge at bottom */}
          <div className="diagonal-wedge" style={{ height: 100 }} />
        </div>

        <div
          className="hero-content"
          style={{
            position: "relative", zIndex: 1,
            maxWidth: "1200px", margin: "0 auto",
            padding: "120px 24px 80px", width: "100%",
          }}>
          <div style={{ maxWidth: "680px" }}>
            <p style={{
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "#b5813d",
              marginBottom: "20px", animation: "fade-up 0.5s ease both",
            }}>
              Est. 2010 — Making a Difference
            </p>

            <h1 style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 900, lineHeight: 1.06, letterSpacing: "-0.02em",
              marginBottom: "24px", animation: "fade-up 0.6s ease 0.1s both",
            }}>
              <span style={{ color: "var(--hero-text)" }}>Changing Lives,</span>
              <br />
              <span style={{
                fontStyle: "italic", fontWeight: 300,
                background: "linear-gradient(100deg, #c8a96e 0%, #e8c49a 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                One Step at a Time
              </span>
            </h1>

            <p style={{
              fontSize: "1.1rem", color: "var(--hero-text-muted)",
              lineHeight: 1.78, marginBottom: "40px", maxWidth: "560px",
              animation: "fade-up 0.6s ease 0.2s both",
            }}>
              InHouse NGO works tirelessly to uplift communities through education, healthcare,
              environmental action, and women empowerment across India.
            </p>

            <div className="hero-btns" style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: "fade-up 0.6s ease 0.3s both" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 30px", borderRadius: "100px",
                background: "linear-gradient(135deg, #b5813d, #c8a96e)",
                color: "#fff",
                fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
                boxShadow: "0 4px 24px rgba(181,129,61,0.45)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(181,129,61,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(181,129,61,0.45)";
                }}
              >
                Get Involved
              </Link>
              <Link href="/our-story" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 30px", borderRadius: "100px",
                border: "1px solid var(--hero-btn-ghost-border)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                color: "var(--hero-btn-ghost-color)",
                fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                transition: "all 0.2s ease",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--hero-text)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--hero-btn-ghost-border)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
              >
                Our Story
              </Link>
            </div>

            {/* Stats row */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid var(--hero-border)",
              marginTop: "64px", animation: "fade-up 0.7s ease 0.4s both",
            }} className="hero-stats">
              {stats.map((s, i) => (
                <StatItem key={s.label} stat={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Initiatives ── */}
      <section style={{ padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{
            display: "flex", alignItems: "flex-end",
            justifyContent: "space-between", flexWrap: "wrap",
            gap: "20px", marginBottom: "48px",
            animation: "fade-up 0.6s ease both",
          }}>
            <div>
              <span className="tag-pill" style={{ background: "rgba(181,129,61,0.14)", color: "#b5813d", marginBottom: "12px" }}>What We Do</span>
              <h2 style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800,
                letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.1,
              }}>
                Our Key Initiatives
              </h2>
            </div>
            <p style={{
              maxWidth: "380px", fontSize: "0.9rem", color: "var(--foreground-muted)",
              lineHeight: 1.75,
            }}>
              Four pillars that define our mission and shape every project we undertake.
            </p>
          </div>

          {/* Floating card grid — no hard borders between cells */}
          <div
            ref={initiativesReveal.ref}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }} className="initiatives-grid">
            {initiatives.map((item, i) => (
              <div
                key={item.title}
                className="card-float"
                style={{
                  background: "var(--surface)",
                  padding: "40px 36px",
                  cursor: "default",
                  gridColumn: (i === 0 || i === 3) ? "span 2" : "span 1",
                  opacity: initiativesReveal.visible ? 1 : 0,
                  filter: initiativesReveal.visible ? "blur(0)" : "blur(8px)",
                  transform: initiativesReveal.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.55s ease ${i * 0.1}s, filter 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--bg-secondary)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--surface)";
                }}
              >
                {/* Top gradient strip */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: `linear-gradient(to right, ${item.accent}, ${item.accent}88)`,
                  borderRadius: "24px 24px 0 0",
                }} />

                {/* Icon orb */}
                <div style={{
                  width: 52, height: 52, borderRadius: "16px",
                  background: item.accentBg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: item.accent,
                  marginBottom: "20px",
                  border: `1px solid ${item.accent}30`,
                }}>
                  {item.icon}
                </div>

                <span className="tag-pill" style={{
                  background: item.accentBg,
                  color: item.accent,
                  marginBottom: "14px",
                }}>{item.tag}</span>
                <h3 style={{
                  fontSize: "1.25rem", fontWeight: 700, color: "var(--foreground)",
                  marginBottom: "12px", letterSpacing: "-0.01em",
                }}>{item.title}</h3>
                <p style={{
                  color: "var(--foreground-muted)", lineHeight: 1.72, fontSize: "0.88rem",
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Soft split panel — no hard borders */}
          <div
            ref={ctaReveal.ref}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderRadius: "40px",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            className="cta-grid"
          >
            {/* Left panel */}
            <div style={{
              padding: "60px 52px",
              background: "linear-gradient(135deg, var(--surface) 0%, rgba(181,129,61,0.04) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRight: "1px solid rgba(255,255,255,0.05)",
              opacity: ctaReveal.visible ? 1 : 0,
              transform: ctaReveal.visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            }}>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#b5813d", marginBottom: "16px",
              }}>Join the Movement</p>
              <h2 style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 800,
                letterSpacing: "-0.02em", color: "var(--foreground)",
                lineHeight: 1.15, marginBottom: "18px",
              }}>
                Ready to make a difference?
              </h2>
              <p style={{
                fontSize: "0.92rem", color: "var(--foreground-muted)",
                lineHeight: 1.75, marginBottom: "32px",
              }}>
                Join thousands of changemakers. Volunteer, donate, or spread the word —
                every action counts.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "13px 26px", borderRadius: "100px",
                  background: "linear-gradient(135deg, #b5813d, #c8a96e)",
                  color: "#fff",
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
                  Start Today
                </Link>
                <Link href="/testimonials" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "13px 26px", borderRadius: "100px",
                  border: "1px solid var(--surface-border)",
                  background: "transparent", color: "var(--foreground-muted)",
                  fontWeight: 600, fontSize: "0.88rem", textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--foreground-faint)";
                    (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--surface-border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--foreground-muted)";
                  }}
                >
                  Hear from Others
                </Link>
              </div>
            </div>

            {/* Right panel — stat list */}
            <div style={{
              padding: "60px 52px",
              background: "var(--bg-secondary)",
              opacity: ctaReveal.visible ? 1 : 0,
              transform: ctaReveal.visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.6s ease 0.12s, transform 0.6s cubic-bezier(0.23,1,0.32,1) 0.12s",
            }}>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--foreground-faint)",
                marginBottom: "28px",
              }}>Our Impact at a Glance</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {impactStats.map((item, i, arr) => (
                  <div key={item.n} style={{
                    display: "flex", alignItems: "center", gap: "20px",
                    padding: "18px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}>
                    <span style={{
                      fontSize: "1.4rem", fontWeight: 900, color: "var(--foreground)",
                      letterSpacing: "-0.03em", minWidth: "90px",
                      background: "linear-gradient(135deg, var(--foreground) 0%, #c8a96e 100%)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>{item.n}</span>
                    <span style={{ fontSize: "0.85rem", color: "var(--foreground-muted)", lineHeight: 1.5 }}>
                      {item.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero background animations ── */
        @keyframes hero-orb1 {
          0%, 100% { transform: translateY(-50%) scale(1);    opacity: 0.75; }
          50%       { transform: translateY(-53%) scale(1.08); opacity: 0.55; }
        }
        @keyframes hero-orb2 {
          0%, 100% { transform: scale(1)    translateY(0);   opacity: 0.6; }
          50%       { transform: scale(1.12) translateY(4%);  opacity: 0.4; }
        }
        @keyframes hero-orb3 {
          0%, 100% { transform: scale(1)    translateY(0);   opacity: 0.55; }
          50%       { transform: scale(1.15) translateY(-5%); opacity: 0.35; }
        }
        @keyframes hero-beam {
          0%, 100% { opacity: 0.6; transform: skewX(0deg);   }
          50%       { opacity: 1;   transform: skewX(-3deg);  }
        }
        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-stats { grid-template-columns: repeat(2,1fr) !important; }
          .initiatives-grid { grid-template-columns: 1fr !important; }
          .initiatives-grid > * { grid-column: span 1 !important; }
          .cta-grid { grid-template-columns: 1fr !important; flex-direction: column; }
        }
      `}</style>
    </>
  );
}
