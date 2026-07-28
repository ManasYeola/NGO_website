"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "../components/useReveal";

const timeline = [
  {
    year: "2010",
    title: "The Spark",
    desc: "Founded by a group of 8 passionate friends in Delhi, InHouse started as a weekend tutoring initiative for underprivileged children in nearby slums.",
    color: "#4f7fa8",
  },
  {
    year: "2013",
    title: "First Health Camp",
    desc: "Partnered with local doctors to run our first free health camp. Over 400 patients received checkups in a single day — the day we knew we had to scale.",
    color: "#4a9b7c",
  },
  {
    year: "2015",
    title: "Government Recognition",
    desc: "Registered as an official NGO and received our first government grant, enabling us to expand into three new states and launch the Women Empowerment Program.",
    color: "#b5813d",
  },
  {
    year: "2018",
    title: "Going Green",
    desc: "Launched the Green Earth Initiative, planting over 50,000 trees in partnership with forest departments in Uttarakhand and Himachal Pradesh.",
    color: "#4a9b7c",
  },
  {
    year: "2021",
    title: "COVID Response",
    desc: "During the pandemic, InHouse distributed 1.2 lakh meal kits, set up oxygen support helplines, and arranged free transportation for vaccination drives.",
    color: "#9b8ea0",
  },
  {
    year: "2024",
    title: "15,000 Lives & Beyond",
    desc: "Now active in 8 states with over 120 dedicated volunteers, we continue to grow our impact and vision for a more equitable India.",
    color: "#c0614a",
  },
];

const team = [
  {
    name: "Anjali Verma",
    role: "Founder & Executive Director",
    initials: "AV",
    color: "#4f7fa8",
    bio: "A social entrepreneur with 15+ years in community development, Anjali's unwavering belief in collective action built InHouse from the ground up.",
  },
  {
    name: "Rohit Nair",
    role: "Director of Programs",
    initials: "RN",
    color: "#b5813d",
    bio: "Rohit oversees all field operations across 8 states, ensuring every initiative reaches its intended beneficiaries with maximum impact.",
  },
  {
    name: "Dr. Prerna Singh",
    role: "Head of Healthcare",
    initials: "PS",
    color: "#4a9b7c",
    bio: "A public health specialist, Dr. Prerna designs and leads all medical outreach and health education programs.",
  },
  {
    name: "Vikram Choudhary",
    role: "Head of Partnerships",
    initials: "VC",
    color: "#9b8ea0",
    bio: "Vikram builds bridges between InHouse and corporates, government bodies, and international organizations to amplify our reach.",
  },
];

const values = [
  { title: "Inclusivity",  desc: "Every person deserves dignity, opportunity, and support, regardless of background." },
  { title: "Integrity",    desc: "We operate with radical transparency in how we raise and deploy every rupee."        },
  { title: "Innovation",   desc: "We challenge conventional approaches to find smarter, lasting solutions."            },
  { title: "Passion",      desc: "We are driven by an unrelenting belief that a better world is possible."            },
];

const valueAccents = ["#4f7fa8", "#b5813d", "#4a9b7c", "#c0614a"];

function useScrollReveal(threshold = 0.18) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function TimelineCard({ item, align }: { item: (typeof timeline)[0]; align: "left" | "right" }) {
  return (
    <div style={{
      padding: "24px 28px",
      maxWidth: "360px", width: "100%",
      background: "var(--bg-secondary)",
      border: "1px solid var(--surface-border)",
      borderRadius: "10px",
      position: "relative", overflow: "hidden",
      transition: "border-color 0.25s ease",
    }}>
      {/* Side accent bar */}
      <div style={{
        position: "absolute", top: 0,
        [align === "left" ? "left" : "right"]: 0,
        width: "3px", height: "100%",
        background: `linear-gradient(to bottom, ${item.color}, transparent)`,
      }} />
      <div style={{
        display: "inline-flex", alignItems: "center",
        padding: "3px 12px", borderRadius: "4px",
        background: `${item.color}18`, border: `1px solid ${item.color}40`,
        fontSize: "0.78rem", fontWeight: 800,
        color: item.color, marginBottom: "12px",
        letterSpacing: "0.05em",
      }}>
        {item.year}
      </div>
      <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "8px" }}>
        {item.title}
      </h3>
      <p style={{ color: "var(--foreground-muted)", lineHeight: 1.7, fontSize: "0.87rem" }}>
        {item.desc}
      </p>
    </div>
  );
}

function TimelineItem({ item, index }: { item: (typeof timeline)[0]; index: number }) {
  const { ref, visible } = useScrollReveal();
  const isLeft = index % 2 === 0;
  return (
    <div ref={ref}
      className="timeline-item-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 60px 1fr",
        alignItems: "center",
        marginBottom: "56px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : isLeft ? "translateX(-60px)" : "translateX(60px)",
        transition: `opacity 0.5s cubic-bezier(0.4,0,0.2,1) ${index * 0.06}s, transform 0.5s cubic-bezier(0.4,0,0.2,1) ${index * 0.06}s`,
      }}>
      {/* Left cell — hidden on mobile */}
      {isLeft ? (
        <div className="timeline-left-cell" style={{ display: "flex", justifyContent: "flex-end", paddingRight: "12px" }}>
          <TimelineCard item={item} align="right" />
        </div>
      ) : <div className="timeline-left-cell" />}

      {/* Center dot */}
      <div className="timeline-center-cell" style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
        {/* Outer halo ring */}
        <div style={{
          position: "absolute",
          width: 56, height: 56, borderRadius: "50%",
          border: `1.5px solid ${item.color}`,
          opacity: visible ? 0.35 : 0,
          transform: visible ? "scale(1)" : "scale(0.6)",
          transition: `opacity 0.6s ease ${index * 0.06 + 0.15}s, transform 0.6s ease ${index * 0.06 + 0.15}s`,
          animation: visible ? `timeline-pulse 2.4s ease-in-out ${index * 0.4}s infinite` : "none",
          pointerEvents: "none",
        }} />
        {/* Main dot */}
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: `${item.color}22`,
          border: `2px solid ${item.color}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: `box-shadow 0.5s ease ${index * 0.06}s`,
          boxShadow: visible
            ? `0 0 0 4px ${item.color}25, 0 0 24px ${item.color}70, 0 0 52px ${item.color}35`
            : "none",
        }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: item.color,
            boxShadow: visible ? `0 0 8px ${item.color}` : "none",
            transition: `box-shadow 0.5s ease ${index * 0.06}s`,
          }} />
        </div>
      </div>

      {/* Right cell — shown on mobile as the main content */}
      {!isLeft ? (
        <div className="timeline-right-cell" style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "12px" }}>
          <TimelineCard item={item} align="left" />
        </div>
      ) : (
        <div className="timeline-right-cell" style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "12px" }}>
          {/* On desktop this is empty for left items; on mobile shows the card */}
          <div className="mobile-timeline-card" style={{ display: "none" }}>
            <TimelineCard item={item} align="left" />
          </div>
        </div>
      )}
    </div>
  );
}

function buildWavyPath(totalH: number, n: number): string {
  if (totalH <= 0 || n <= 0) return "";
  const segH = totalH / n;
  let d = "M 100,0 ";
  for (let i = 0; i < n; i++) {
    const y0 = i * segH;
    const yMid = y0 + segH / 2;
    const yEnd = (i + 1) * segH;
    const cx = i % 2 === 0 ? 28 : 172;
    const cp1y = y0 + segH * 0.25;
    const cp2y = yMid + segH * 0.18;
    d += `C ${cx},${cp1y} ${cx},${cp2y} 100,${yEnd} `;
  }
  return d;
}

function RoadmapTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const livePathRef = useRef<SVGPathElement>(null);
  const [containerH, setContainerH] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const update = () => setContainerH(containerRef.current!.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!livePathRef.current || !containerRef.current || containerH === 0) return;
    const path = livePathRef.current;
    const container = containerRef.current;
    const pl = path.getTotalLength();
    path.style.strokeDasharray = String(pl);
    path.style.strokeDashoffset = String(pl);
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrolled = Math.max(0, window.innerHeight * 0.5 - rect.top);
      const pct = Math.min(1, Math.max(0, scrolled / container.scrollHeight));
      path.style.strokeDashoffset = String(pl * (1 - pct));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [containerH]);

  const pathD = buildWavyPath(containerH, timeline.length);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {containerH > 0 && (
        <svg aria-hidden="true" style={{
          position: "absolute", left: "50%", top: 0,
          transform: "translateX(-50%)",
          width: "200px", height: `${containerH}px`,
          overflow: "visible", pointerEvents: "none", zIndex: 0,
        }} viewBox={`0 0 200 ${containerH}`}>
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#4f7fa8" />
              <stop offset="30%"  stopColor="#4a9b7c" />
              <stop offset="55%"  stopColor="#b5813d" />
              <stop offset="80%"  stopColor="#9b8ea0" />
              <stop offset="100%" stopColor="#c0614a" />
            </linearGradient>
            {/* Glow filter for the live path */}
            <filter id="pathGlow" x="-40%" y="-5%" width="180%" height="110%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Ghost trail */}
          <path d={pathD} fill="none" stroke="rgba(180,160,140,0.06)" strokeWidth="5" strokeLinecap="round" />
          {/* Glowing live path */}
          <path ref={livePathRef} d={pathD} fill="none" stroke="url(#waveGrad)" strokeWidth="3.5" strokeLinecap="round" filter="url(#pathGlow)" />
        </svg>
      )}
      {timeline.map((item, i) => (
        <TimelineItem key={item.year} item={item} index={i} />
      ))}
    </div>
  );
}

export default function OurStoryPage() {
  const missionReveal = useReveal(0.12);
  const valuesReveal  = useReveal(0.1);
  const teamReveal    = useReveal(0.1);
  const ctaReveal     = useReveal(0.1);

  return (
    <div className="page-wrapper">

      {/* ── Hero ── */}
      <section className="page-header-section" style={{
        padding: "96px 24px 72px", position: "relative", overflow: "hidden",
      }}>
        <div className="page-header-rule" style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 79px, var(--page-header-line) 80px)",
          opacity: 1,
        }} />
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
          background: "linear-gradient(to bottom, transparent, #b5813d 30%, #4f7fa8 70%, transparent)",
          opacity: 0.7,
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "620px" }}>
            <p style={{
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "#b5813d", marginBottom: "20px",
              animation: "fade-up 0.5s ease both",
            }}>Since 2010</p>
            <h1 style={{
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900,
              lineHeight: 1.06, letterSpacing: "-0.02em",
              color: "var(--foreground)",
              marginBottom: "20px", animation: "fade-up 0.6s ease 0.1s both",
            }}>
              Our<br />
              <span style={{
                fontStyle: "italic", fontWeight: 300,
                background: "linear-gradient(100deg, #b5813d 0%, #c0614a 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Story</span>
            </h1>
            <p style={{
              fontSize: "1.05rem", color: "var(--foreground-muted)", lineHeight: 1.75,
              animation: "fade-up 0.6s ease 0.2s both",
            }}>
              A journey born from empathy, fuelled by action, and sustained by community.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            ref={missionReveal.ref}
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0",
              borderRadius: "40px", overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid rgba(255,255,255,0.06)",
            }} className="mission-grid">
            {[
              { label: "Our Mission", color: "#b5813d", text: "To create a just, equitable, and sustainable society where every individual — regardless of their economic background — has access to quality education, healthcare, and opportunities for growth." },
              { label: "Our Vision",  color: "#4f7fa8", text: "An India where no child drops out of school due to poverty, no family skips meals, and every woman has the freedom and power to define her own future." },
            ].map((item, i) => (
              <div key={item.label} style={{
                padding: "48px 44px",
                background: i === 0
                  ? "linear-gradient(135deg, var(--surface) 0%, rgba(181,129,61,0.05) 100%)"
                  : "var(--bg-secondary)",
                backdropFilter: i === 0 ? "blur(16px)" : "none",
                WebkitBackdropFilter: i === 0 ? "blur(16px)" : "none",
                borderRight: i === 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                opacity: missionReveal.visible ? 1 : 0,
                transform: missionReveal.visible
                  ? "perspective(700px) rotateX(0deg) translateY(0)"
                  : "perspective(700px) rotateX(-18deg) translateY(28px)",
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.15}s`,
                position: "relative",
              }}>
                {/* Accent top strip */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(to right, ${item.color}, transparent)`,
                  borderRadius: i === 0 ? "40px 0 0 0" : "0 40px 0 0",
                }} />
                <p style={{
                  fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: item.color, marginBottom: "16px",
                }}>{item.label}</p>
                <p style={{ color: "var(--foreground-muted)", lineHeight: 1.78, fontSize: "0.95rem" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#4a9b7c", marginBottom: "8px",
            }}>Our Journey</p>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800,
              letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.1,
            }}>14 Years of Impact</h2>
            <p style={{ color: "var(--foreground-faint)", fontSize: "0.85rem", marginTop: "10px" }}>
              Scroll to travel the road we&apos;ve walked
            </p>
          </div>
          <RoadmapTimeline />
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px", animation: "fade-up 0.5s ease both" }}>
            <p style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#b5813d", marginBottom: "8px",
            }}>What Drives Us</p>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800,
              letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.1,
            }}>Our Core Values</h2>
          </div>
          <div
            ref={valuesReveal.ref}
            style={{
              display: "grid", gridTemplateColumns: "repeat(4,1fr)",
              gap: "16px",
            }} className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} style={{
                background: "var(--surface)",
                padding: "32px 24px",
                borderRadius: "28px",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "var(--shadow-sm)",
                cursor: "default",
                opacity: valuesReveal.visible ? 1 : 0,
                transform: valuesReveal.visible ? "scale(1)" : "scale(0.82)",
                transition: `opacity 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s, box-shadow 0.3s ease`,
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  width: 3, height: 28, borderRadius: "2px",
                  background: `linear-gradient(to bottom, ${valueAccents[i]}, ${valueAccents[i]}55)`,
                  marginBottom: "20px",
                  boxShadow: `0 0 12px ${valueAccents[i]}50`,
                }} />
                <h3 style={{
                  fontSize: "1rem", fontWeight: 700, color: "var(--foreground)",
                  marginBottom: "10px",
                }}>{v.title}</h3>
                <p style={{ color: "var(--foreground-muted)", fontSize: "0.86rem", lineHeight: 1.68 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px", animation: "fade-up 0.5s ease both" }}>
            <p style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#4f7fa8", marginBottom: "8px",
            }}>The People Behind It</p>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800,
              letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.1,
            }}>Meet the Team</h2>
          </div>
          <div
            ref={teamReveal.ref}
            style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "24px",
            }}>
            {team.map((member, i) => (
              <div key={member.name} style={{
                padding: "32px 24px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--surface-border)",
                borderRadius: "10px",
                opacity: teamReveal.visible ? 1 : 0,
                filter: teamReveal.visible ? "blur(0)" : "blur(10px)",
                transform: teamReveal.visible ? "translateY(0)" : "translateY(22px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, filter 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.25s ease`,
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = member.color + "55"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--surface-border)"; }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: `${member.color}18`, border: `2px solid ${member.color}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.88rem", fontWeight: 800, color: member.color,
                  marginBottom: "16px",
                  animation: teamReveal.visible ? `orbit-in 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.1 + 0.2}s both` : "none",
                }}>{member.initials}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "4px" }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: "0.75rem", color: member.color, fontWeight: 600, marginBottom: "12px" }}>
                  {member.role}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--foreground-muted)", lineHeight: 1.68 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            borderRadius: "40px", overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid rgba(255,255,255,0.06)",
          }} className="cta-grid">
            <div style={{ padding: "56px 48px",
              background: "linear-gradient(135deg, var(--surface) 0%, rgba(181,129,61,0.04) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRight: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b5813d", marginBottom: "16px" }}>
                Be Part of Our Story
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.2, marginBottom: "16px" }}>
                The next chapter is being written right now.
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)", lineHeight: 1.75, marginBottom: "28px" }}>
                Join us as a volunteer, donor, or partner and help shape an equitable future.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  padding: "13px 26px", borderRadius: "100px",
                  background: "linear-gradient(135deg, #b5813d, #c8a96e)", color: "#fff",
                  fontWeight: 700, fontSize: "0.88rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(181,129,61,0.35)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  display: "inline-flex",
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
                  Get Involved
                </Link>
                <Link href="/testimonials" style={{
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
                  Read Testimonials
                </Link>
              </div>
            </div>
            <div style={{ padding: "56px 48px", background: "var(--bg-secondary)" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--foreground-faint)", marginBottom: "20px" }}>
                Ways to Contribute
              </p>
              {["Volunteer your time at a local chapter", "Donate to fund specific programmes", "Partner with us as a corporate or institution", "Spread awareness in your network", "Share your professional skills pro-bono"].map((item) => (
                <div key={item} style={{
                  display: "flex", alignItems: "flex-start", gap: "12px",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--surface-border)",
                }}>
                  <div style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "#b5813d", flexShrink: 0, marginTop: "8px",
                  }} />
                  <span style={{ fontSize: "0.87rem", color: "var(--foreground-muted)", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes timeline-pulse {
          0%, 100% { transform: scale(1);   opacity: 0.35; }
          50%       { transform: scale(1.5); opacity: 0;    }
        }
        @media (max-width: 768px) {
          .mission-grid { grid-template-columns: 1fr !important; }
          .values-grid  { grid-template-columns: repeat(2,1fr) !important; }
          .cta-grid     { grid-template-columns: 1fr !important; }

          /* Timeline: left-side layout on mobile */
          .timeline-item-grid {
            grid-template-columns: 52px 1fr !important;
            margin-bottom: 36px !important;
          }
          .timeline-left-cell { display: none !important; }
          .timeline-center-cell { grid-column: 1 !important; }
          .timeline-right-cell {
            grid-column: 2 !important;
            padding-left: 12px !important;
            display: flex !important;
            justify-content: flex-start !important;
          }
          .timeline-right-cell > * { max-width: 100% !important; width: 100% !important; }
          /* Show mobile card for left items */
          .mobile-timeline-card { display: block !important; width: 100%; }
        }
        @media (max-width: 480px) {
          .values-grid  { grid-template-columns: 1fr !important; }
          .timeline-item-grid { margin-bottom: 28px !important; }
        }
      `}</style>
    </div>
  );
}
