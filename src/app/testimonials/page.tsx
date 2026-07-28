"use client";

import { useReveal } from "../components/useReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Scholarship Recipient, Rajasthan",
    avatar: "PS",
    color: "#4f7fa8",
    quote: "InHouse NGO's scholarship program changed my life. I was on the verge of dropping out of school when they stepped in. Today I'm in my second year of engineering because someone believed in me.",
  },
  {
    name: "Ramesh Kumar",
    role: "Village Health Camp Participant, Bihar",
    avatar: "RK",
    color: "#b5813d",
    quote: "The free medical camp organised by InHouse caught my father's diabetes early. We had no money for a hospital. Their doctors treated him with such care — it was like family helping family.",
  },
  {
    name: "Meena Devi",
    role: "Women Empowerment Workshop, UP",
    avatar: "MD",
    color: "#4a9b7c",
    quote: "I learned tailoring at the InHouse skill workshop. Now I run my own small business from home and support my three children. It gave me confidence I never thought I had.",
  },
  {
    name: "Arjun Mishra",
    role: "Volunteer, Delhi Chapter",
    avatar: "AM",
    color: "#9b8ea0",
    quote: "Volunteering with InHouse has been the most fulfilling experience of my life. The dedication of the team is unmatched. Every weekend I spend here feels more meaningful than a week in an office.",
  },
  {
    name: "Sunita Patel",
    role: "Community Leader, Gujarat",
    avatar: "SP",
    color: "#c0614a",
    quote: "When we planted 500 trees last monsoon with InHouse, the whole village came together. Children who had never cared about nature suddenly became little environmental champions. It was remarkable.",
  },
  {
    name: "Dr. Kavitha Rao",
    role: "Partner Doctor, Karnataka",
    avatar: "KR",
    color: "#4f7fa8",
    quote: "Working with InHouse health camps across rural Karnataka has been humbling. Their logistics and community trust-building is exceptional. They reach people that the formal system simply doesn't.",
  },
];

function RatingDots({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{
          width: 5, height: 5, borderRadius: "50%", background: "#b5813d",
        }} />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const cardsReveal = useReveal(0.08);
  const quoteReveal = useReveal(0.15);
  const ctaReveal   = useReveal(0.1);

  return (
    <div className="page-wrapper">

      {/* ── Header ── */}
      <section className="page-header-section" style={{ padding: "96px 24px 72px", position: "relative", overflow: "hidden" }}>
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
          }}>Real Stories</p>
          <h1 style={{
            fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900,
            lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--foreground)",
            marginBottom: "16px", animation: "fade-up 0.6s ease 0.1s both",
          }}>
            Voices of<br />
            <span style={{
              fontStyle: "italic", fontWeight: 300,
              background: "linear-gradient(100deg, #b5813d 0%, #c0614a 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Impact</span>
          </h1>
          <p style={{
            fontSize: "1rem", color: "var(--foreground-muted)", lineHeight: 1.75,
            maxWidth: "500px", animation: "fade-up 0.6s ease 0.2s both",
          }}>
            Hear from the people whose lives have been transformed by the power of community and compassion.
          </p>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            ref={cardsReveal.ref}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "20px",
            }} className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="testimonial-card"
                style={{
                  position: "relative",
                  cursor: "default",
                  opacity: cardsReveal.visible ? 1 : 0,
                  filter: cardsReveal.visible ? "blur(0)" : "blur(10px)",
                  transform: cardsReveal.visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
                  transition: `opacity 0.55s ease ${i * 0.08}s, filter 0.55s ease ${i * 0.08}s, transform 0.55s ease ${i * 0.08}s`,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
              >
                {/* Top accent strip keyed to person&apos;s color */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(to right, ${t.color}, ${t.color}55)`,
                  borderRadius: "28px 28px 0 0",
                }} />

                <RatingDots count={5} />

                <p style={{
                  color: "var(--foreground-muted)", lineHeight: 1.78,
                  fontSize: "0.9rem", marginBottom: "24px",
                  fontStyle: "italic",
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: `${t.color}18`, border: `2px solid ${t.color}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.75rem", fontWeight: 800, color: t.color, flexShrink: 0,
                    boxShadow: `0 0 16px ${t.color}30`,
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--foreground)", fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--foreground-faint)", marginTop: "2px" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infinite Scrolling Marquee ── */}
      <section style={{ padding: "0 0 80px", overflow: "hidden" }}>
        {/* Fade masks on left and right edges */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
            background: "linear-gradient(to right, var(--background), transparent)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
            background: "linear-gradient(to left, var(--background), transparent)",
            pointerEvents: "none",
          }} />

          {/* Row 1 — scrolls left */}
          <div className="marquee-track" style={{ marginBottom: "16px" }}>
            <div className="marquee-inner marquee-left">
              {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="marquee-card" style={{ borderTop: `3px solid ${t.color}` }}>
                  <div style={{ display: "flex", gap: "3px", marginBottom: "10px" }}>
                    {[0,1,2,3,4].map(s => <div key={s} style={{ width: 4, height: 4, borderRadius: "50%", background: "#b5813d" }} />)}
                  </div>
                  <p style={{
                    fontSize: "0.82rem", color: "var(--foreground-muted)",
                    lineHeight: 1.65, fontStyle: "italic", marginBottom: "14px",
                    display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: `${t.color}20`, border: `1.5px solid ${t.color}50`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", fontWeight: 800, color: t.color, flexShrink: 0,
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--foreground)" }}>{t.name}</div>
                      <div style={{ fontSize: "0.68rem", color: "var(--foreground-faint)" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="marquee-track">
            <div className="marquee-inner marquee-right">
              {[...testimonials, ...testimonials, ...testimonials].reverse().map((t, i) => (
                <div key={i} className="marquee-card" style={{ borderTop: `3px solid ${t.color}` }}>
                  <div style={{ display: "flex", gap: "3px", marginBottom: "10px" }}>
                    {[0,1,2,3,4].map(s => <div key={s} style={{ width: 4, height: 4, borderRadius: "50%", background: "#b5813d" }} />)}
                  </div>
                  <p style={{
                    fontSize: "0.82rem", color: "var(--foreground-muted)",
                    lineHeight: 1.65, fontStyle: "italic", marginBottom: "14px",
                    display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: `${t.color}20`, border: `1.5px solid ${t.color}50`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", fontWeight: 800, color: t.color, flexShrink: 0,
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--foreground)" }}>{t.name}</div>
                      <div style={{ fontSize: "0.68rem", color: "var(--foreground-faint)" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Quote ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            ref={quoteReveal.ref}
            style={{
              borderRadius: "32px", overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              display: "grid", gridTemplateColumns: "6px 1fr",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
            {/* Accent bar — draws down */}
            <div style={{
              background: "linear-gradient(to bottom, #b5813d, #c0614a)",
              transformOrigin: "top",
              transform: quoteReveal.visible ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1)",
            }} />
            <div
              className="featured-quote-inner"
              style={{
              padding: "48px 52px",
              background: "var(--surface)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              opacity: quoteReveal.visible ? 1 : 0,
              transform: quoteReveal.visible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}>
              <p style={{
                fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#b5813d", marginBottom: "24px",
              }}>InHouse Motto</p>
              <p style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", fontWeight: 600,
                color: "var(--foreground)", lineHeight: 1.55, marginBottom: "20px",
                fontStyle: "italic",
              }}>
                &ldquo;The smallest act of kindness is worth more than the grandest intention.&rdquo;
              </p>
              <p style={{ color: "var(--foreground-faint)", fontSize: "0.82rem", fontWeight: 500 }}>
                — InHouse NGO, Est. 2010
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Share Your Story CTA ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            ref={ctaReveal.ref}
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              borderRadius: "40px",
              overflow: "hidden",
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
              transform: ctaReveal.visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b5813d", marginBottom: "14px" }}>
                Share Your Story
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.2, marginBottom: "14px" }}>
                Has InHouse made a difference in your life?
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)", lineHeight: 1.75, marginBottom: "26px" }}>
                Your voice inspires others to take action. We&apos;d love to hear your story and share it with our community.
              </p>
              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", borderRadius: "100px",
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
                Write to Us
              </a>
            </div>
            <div style={{
              padding: "52px 48px", background: "var(--bg-secondary)",
              opacity: ctaReveal.visible ? 1 : 0,
              transform: ctaReveal.visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.6s ease 0.12s, transform 0.6s cubic-bezier(0.23,1,0.32,1) 0.12s",
            }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--foreground-faint)", marginBottom: "20px" }}>
                Voices in Numbers
              </p>
              {[
                { n: "6",    l: "Stories featured here" },
                { n: "15K+", l: "Lives impacted overall" },
                { n: "8",    l: "States with active stories" },
                { n: "2010", l: "First story written" },
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

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        .marquee-track {
          overflow: hidden;
        }
        .marquee-inner {
          display: flex;
          gap: 16px;
          width: max-content;
          will-change: transform;
        }
        .marquee-left {
          animation: marquee-left 38s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 42s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
        .marquee-card {
          flex-shrink: 0;
          width: 300px;
          background: var(--surface);
          border-radius: 20px;
          padding: 22px 24px;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(255,255,255,0.05);
          cursor: default;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        [data-theme="light"] .marquee-card {
          border-color: rgba(26,22,48,0.07);
        }
        .marquee-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
          .marquee-card { width: 240px; }
        }
      `}</style>
    </div>
  );
}
