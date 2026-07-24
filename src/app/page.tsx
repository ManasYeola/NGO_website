"use client";

import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "15K+", label: "Lives Impacted" },
  { value: "120+", label: "Volunteers"     },
  { value: "8",    label: "States Covered" },
  { value: "200+", label: "Projects Done"  },
];

const initiatives = [
  {
    title: "Education",
    desc: "Bringing quality learning to underserved communities through scholarships, tutoring, and digital literacy programmes.",
    tag: "01",
  },
  {
    title: "Healthcare",
    desc: "Free medical camps, mental health support, and nutrition programmes reaching the most vulnerable populations.",
    tag: "02",
  },
  {
    title: "Environment",
    desc: "Planting trees, promoting sustainable agriculture, and empowering communities to lead green initiatives.",
    tag: "03",
  },
  {
    title: "Women Empowerment",
    desc: "Skill-building workshops, micro-finance, and leadership programmes for women across rural India.",
    tag: "04",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/hero_bg.png"
            alt="Hero background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.80) 100%)",
          }} />
          {/* Thin left accent bar over image */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
            background: "linear-gradient(to bottom, transparent, #b5813d 30%, #4f7fa8 70%, transparent)",
            opacity: 0.8, zIndex: 1,
          }} />
        </div>

        <div style={{
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
              <span style={{ color: "#fff" }}>Changing Lives,</span>
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
              fontSize: "1.1rem", color: "rgba(255,255,255,0.75)",
              lineHeight: 1.78, marginBottom: "40px", maxWidth: "560px",
              animation: "fade-up 0.6s ease 0.2s both",
            }}>
              InHouse NGO works tirelessly to uplift communities through education, healthcare,
              environmental action, and women empowerment across India.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: "fade-up 0.6s ease 0.3s both" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 26px", borderRadius: "8px",
                background: "#b5813d", color: "#fff",
                fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Get Involved
              </Link>
              <Link href="/our-story" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 26px", borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "transparent", color: "rgba(255,255,255,0.85)",
                fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                transition: "all 0.2s ease",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}
              >
                Our Story
              </Link>
            </div>

            {/* Stats row */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              marginTop: "64px", animation: "fade-up 0.7s ease 0.4s both",
            }} className="hero-stats">
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  padding: "20px 0",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  paddingRight: i < stats.length - 1 ? "16px" : "0",
                  paddingLeft: i > 0 ? "16px" : "0",
                }}>
                  <div style={{
                    fontSize: "1.8rem", fontWeight: 900,
                    letterSpacing: "-0.03em", color: "#c8a96e", lineHeight: 1,
                  }}>{s.value}</div>
                  <div style={{
                    fontSize: "0.74rem", color: "rgba(255,255,255,0.5)",
                    marginTop: "5px", fontWeight: 500,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Initiatives ── */}
      <section style={{ padding: "100px 24px" }}>
        {/* Section header */}
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "flex", alignItems: "flex-end",
            justifyContent: "space-between", flexWrap: "wrap",
            gap: "20px", marginBottom: "56px",
          }}>
            <div>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#b5813d", marginBottom: "8px",
              }}>What We Do</p>
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

          {/* Cards — horizontal rule grid style */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px", background: "var(--surface-border)",
            border: "1px solid var(--surface-border)",
          }} className="initiatives-grid">
            {initiatives.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--background)", padding: "40px 36px",
                  transition: "background 0.22s ease", cursor: "default",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--background)"; }}
              >
                <span style={{
                  fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.18em",
                  color: "#b5813d", display: "block", marginBottom: "16px",
                }}>{item.tag}</span>
                <h3 style={{
                  fontSize: "1.2rem", fontWeight: 700, color: "var(--foreground)",
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
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            border: "1px solid var(--surface-border)", borderRadius: "12px", overflow: "hidden",
          }} className="cta-grid">
            <div style={{
              padding: "56px 48px", background: "var(--surface)",
              borderRight: "1px solid var(--surface-border)",
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
                  padding: "12px 24px", borderRadius: "8px",
                  background: "#b5813d", color: "#fff",
                  fontWeight: 700, fontSize: "0.88rem",
                  textDecoration: "none", transition: "opacity 0.2s ease",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  Start Today
                </Link>
                <Link href="/testimonials" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "12px 24px", borderRadius: "8px",
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

            {/* Right panel — simple stat list */}
            <div style={{ padding: "56px 48px", background: "var(--bg-secondary)" }}>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--foreground-faint)",
                marginBottom: "24px",
              }}>Our Impact at a Glance</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { n: "15,000+", l: "Lives impacted across 8 states" },
                  { n: "120+",    l: "Dedicated volunteers on the ground" },
                  { n: "200+",    l: "Projects completed since 2010" },
                  { n: "1.2 L",   l: "Meal kits distributed during COVID" },
                ].map((item, i, arr) => (
                  <div key={item.n} style={{
                    display: "flex", alignItems: "baseline", gap: "16px",
                    padding: "18px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--surface-border)" : "none",
                  }}>
                    <span style={{
                      fontSize: "1.3rem", fontWeight: 800, color: "var(--foreground)",
                      letterSpacing: "-0.02em", minWidth: "80px",
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
        @media (max-width: 768px) {
          .hero-stats { grid-template-columns: repeat(2,1fr) !important; }
          .initiatives-grid { grid-template-columns: 1fr !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
