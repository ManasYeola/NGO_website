"use client";

import { useState } from "react";
import Link from "next/link";

/* ────────────────────────────────────────────────────────────
   SVG Icon Components  –  simple, monochrome, no emojis
──────────────────────────────────────────────────────────── */
const Icon = {
  /* ── Institutional / Society ── */
  Building: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
    </svg>
  ),
  ChartBar: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="12" width="4" height="9"/><rect x="10" y="8" width="4" height="13"/><rect x="17" y="4" width="4" height="17"/>
    </svg>
  ),
  Search: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  FileText: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  Briefcase: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="9.5" y1="14.5" x2="14.5" y2="14.5"/>
    </svg>
  ),
  Scale: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21h10"/><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
    </svg>
  ),
  /* ── Temple ── */
  Scroll: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h12a2 2 0 0 0 0-4H8"/><path d="M8 21a2 2 0 0 1 0-4"/><path d="M8 17H4a2 2 0 0 1 0-4h4"/><path d="M8 13V7a4 4 0 0 1 8 0v10"/><line x1="12" y1="11" x2="16" y2="11"/>
    </svg>
  ),
  Landmark: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>
    </svg>
  ),
  Shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Lock: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Home: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Users: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  /* ── NGO ── */
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  CreditCard: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Wifi: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>
    </svg>
  ),
  Link2: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  ClipboardList: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/>
    </svg>
  ),
  /* ── UI ── */
  Calendar: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Check: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
};

/* ─────────────────────────── Data ─────────────────────────── */
const deadlines = [
  { service: "Annual Compliance Audit",     category: "All",          date: "31 Mar 2025", priority: "high"   },
  { service: "FCRA Renewal Filing",         category: "NGOs",         date: "30 Apr 2025", priority: "high"   },
  { service: "Trust Deed Amendment",        category: "Temples",      date: "15 May 2025", priority: "medium" },
  { service: "12A / 80G Re-Registration",   category: "NGOs",         date: "30 Jun 2025", priority: "high"   },
  { service: "Society Registration Renewal",category: "Institutions", date: "31 Jul 2025", priority: "medium" },
  { service: "IT Returns Filing (Trust)",   category: "Temples",      date: "31 Jul 2025", priority: "medium" },
  { service: "CSR Utilisation Report",      category: "Institutions", date: "30 Sep 2025", priority: "low"    },
  { service: "Annual Returns (MCA)",        category: "NGOs",         date: "30 Nov 2025", priority: "low"    },
  { service: "DARPAN Registration",         category: "NGOs",         date: "15 Dec 2025", priority: "low"    },
  { service: "Endowment Property Audit",    category: "Temples",      date: "31 Dec 2025", priority: "medium" },
];

const institutionServices = [
  { IconCmp: Icon.Building,      title: "Society Registration",      desc: "End-to-end registration under the Societies Registration Act, 1860 — from drafting MOA & rules to the final certificate.", tag: "Legal"        },
  { IconCmp: Icon.ChartBar,      title: "CSR Advisory & Reporting",  desc: "Structured CSR planning, fund utilisation tracking, and mandatory annual reporting to MCA for eligible institutions.",    tag: "Compliance"   },
  { IconCmp: Icon.Search,        title: "Statutory Audit",           desc: "Independent audit of financial statements ensuring transparency, regulatory compliance, and stakeholder confidence.",       tag: "Audit"        },
  { IconCmp: Icon.FileText,      title: "NITI Aayog Darpan",         desc: "Registration on the NITI Aayog NGO Darpan portal — mandatory prerequisite for accessing central government grants.",       tag: "Registration" },
  { IconCmp: Icon.Briefcase,     title: "Grant Proposal Writing",    desc: "Professionally crafted proposals aligned with funding body requirements to maximise your grant success rate.",             tag: "Fundraising"  },
  { IconCmp: Icon.Scale,         title: "Legal Due Diligence",       desc: "Comprehensive review of governing documents, land records, and existing licences to ensure clean legal standing.",         tag: "Legal"        },
];

const templeServices = [
  { IconCmp: Icon.Scroll,        title: "Trust Deed Drafting",       desc: "Expert drafting of religious trust deeds with all mandatory clauses, deity schedules, and trustee provisions.",           tag: "Legal"        },
  { IconCmp: Icon.Landmark,      title: "Endowment Management",      desc: "Structured management of temple endowments, land, and movable assets in compliance with state HR&CE Acts.",               tag: "Finance"      },
  { IconCmp: Icon.Shield,        title: "Section 10(23C) Exemption", desc: "Assistance in obtaining and maintaining income-tax exemption for religious and charitable trusts.",                       tag: "Tax"          },
  { IconCmp: Icon.Lock,          title: "Hundi & Collection Audit",  desc: "Transparent auditing of daily hundi collections, donation records, and disbursements for full accountability.",           tag: "Audit"        },
  { IconCmp: Icon.Home,          title: "Construction Approvals",    desc: "Navigating municipal and HR&CE department approvals for new construction, renovation, and expansion projects.",           tag: "Regulatory"   },
  { IconCmp: Icon.Users,         title: "Trustee Board Governance",  desc: "Setting up governance frameworks, board meeting protocols, and succession planning for temple trusts.",                   tag: "Governance"   },
];

const ngoServices = [
  { IconCmp: Icon.Globe,         title: "FCRA Registration",         desc: "Full-service assistance for obtaining and renewing FCRA registration to receive international funds legally.",           tag: "Compliance"   },
  { IconCmp: Icon.CreditCard,    title: "12A & 80G Certification",   desc: "Obtaining and renewing income-tax exemption certificates that make your NGO eligible for tax-free donations.",          tag: "Tax"          },
  { IconCmp: Icon.TrendingUp,    title: "Impact Measurement",        desc: "Designing M&E frameworks, data collection tools, and compelling impact reports for donors and grantmakers.",            tag: "Strategy"     },
  { IconCmp: Icon.Wifi,          title: "Digital Fundraising Setup", desc: "Setting up compliant donation portals, 80G receipt automation, and multi-gateway payment integration.",                  tag: "Fundraising"  },
  { IconCmp: Icon.Link2,         title: "Partnership Agreements",    desc: "Drafting MoUs, sub-grant agreements, and partnership deeds that protect your NGO's interests and IP.",                  tag: "Legal"        },
  { IconCmp: Icon.ClipboardList, title: "Project Proposal & Report", desc: "Turnkey proposal writing, budget preparation, and utilisation certificate generation for bilateral funders.",           tag: "Reporting"    },
];

/* ─── Palette — warm slate + terracotta, away from generic purple/green ── */
const catStyle: Record<string, { color: string; bg: string; border: string }> = {
  All:          { color: "#9b8ea0",   bg: "rgba(155,142,160,0.12)", border: "rgba(155,142,160,0.25)" },
  Institutions: { color: "#4f7fa8",   bg: "rgba(79,127,168,0.12)",  border: "rgba(79,127,168,0.25)"  },
  Temples:      { color: "#b5813d",   bg: "rgba(181,129,61,0.12)",  border: "rgba(181,129,61,0.25)"  },
  NGOs:         { color: "#4a9b7c",   bg: "rgba(74,155,124,0.12)",  border: "rgba(74,155,124,0.25)"  },
};

const priorityConfig: Record<string, { label: string; color: string; bg: string; dot: string }> = {
  high:   { label: "Urgent",  color: "#c0614a", bg: "rgba(192,97,74,0.10)",   dot: "#c0614a" },
  medium: { label: "Due Soon",color: "#b5813d", bg: "rgba(181,129,61,0.10)",  dot: "#b5813d" },
  low:    { label: "Routine", color: "#4a9b7c", bg: "rgba(74,155,124,0.10)",  dot: "#4a9b7c" },
};

const tabAccent: Record<string, { color: string; bg: string; border: string }> = {
  institutions: catStyle.Institutions,
  temples:      catStyle.Temples,
  ngos:         catStyle.NGOs,
};

type Tab = "institutions" | "temples" | "ngos";

export default function OurServicesPage() {
  const [activeTab, setActiveTab]         = useState<Tab>("institutions");
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const filteredDeadlines =
    filterCategory === "All"
      ? deadlines
      : deadlines.filter((d) => d.category === filterCategory || d.category === "All");

  const servicesMap: Record<Tab, typeof institutionServices> = {
    institutions: institutionServices,
    temples:      templeServices,
    ngos:         ngoServices,
  };

  const tabLabels: { key: Tab; label: string }[] = [
    { key: "institutions", label: "Institutions" },
    { key: "temples",      label: "Temples"      },
    { key: "ngos",         label: "NGOs"         },
  ];

  return (
    <div className="page-wrapper">

      {/* ══════════════════════════════════
          HERO — editorial, typographic
      ══════════════════════════════════ */}
      <section style={{ padding: "96px 24px 72px", position: "relative", overflow: "hidden" }}>

        {/* Subtle ruled background lines — design detail, not AI orbs */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 79px, var(--surface-border) 80px)",
          opacity: 0.35,
        }} />

        {/* Thin left accent bar */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: 3,
          background: "linear-gradient(to bottom, transparent, #b5813d 30%, #4f7fa8 70%, transparent)",
          opacity: 0.7,
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "680px" }}>
            {/* Eyebrow */}
            <p style={{
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "#b5813d",
              marginBottom: "20px", animation: "fade-up 0.5s ease both",
            }}>
              InHouse Advisory — Legal &amp; Compliance
            </p>

            <h1 style={{
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              fontWeight: 900, lineHeight: 1.06, letterSpacing: "-0.02em",
              color: "var(--foreground)",
              marginBottom: "24px", animation: "fade-up 0.6s ease 0.1s both",
            }}>
              Our<br/>
              <span style={{
                fontStyle: "italic", fontWeight: 300, letterSpacing: "0",
                background: "linear-gradient(100deg, #b5813d 0%, #c0614a 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Services
              </span>
            </h1>

            <p style={{
              fontSize: "1.05rem", color: "var(--foreground-muted)", lineHeight: 1.75,
              maxWidth: "540px", marginBottom: "40px",
              animation: "fade-up 0.6s ease 0.2s both",
            }}>
              Structured legal, compliance, and advisory work for Institutions, Temples,
              and NGOs. We handle the regulatory complexity so you can stay focused on
              what matters.
            </p>

            {/* Horizontal rule stats */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid var(--surface-border)",
              animation: "fade-up 0.7s ease 0.3s both",
            }} className="hero-stats">
              {[
                { n: "18+",  l: "Distinct services" },
                { n: "500+", l: "Entities served"   },
                { n: "12+",  l: "Years of practice" },
              ].map((s, i) => (
                <div key={s.n} style={{
                  padding: "24px 0",
                  borderRight: i < 2 ? "1px solid var(--surface-border)" : "none",
                  paddingRight: i < 2 ? "24px" : "0",
                  paddingLeft: i > 0 ? "24px" : "0",
                }}>
                  <div style={{
                    fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em",
                    color: "var(--foreground)", lineHeight: 1,
                  }}>{s.n}</div>
                  <div style={{
                    fontSize: "0.78rem", color: "var(--foreground-faint)",
                    marginTop: "6px", fontWeight: 500,
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          DEADLINE TABLE
      ══════════════════════════════════ */}
      <section style={{ padding: "0 24px 88px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Section label + heading */}
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            flexWrap: "wrap", gap: "20px", marginBottom: "36px",
          }}>
            <div>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#4a9b7c", marginBottom: "8px",
              }}>Filing Calendar</p>
              <h2 style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800,
                letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.1,
              }}>
                Compliance Deadlines
              </h2>
            </div>

            {/* Category filter — pill group */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {["All", "Institutions", "Temples", "NGOs"].map((cat) => {
                const active = filterCategory === cat;
                const cs = catStyle[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    style={{
                      padding: "7px 16px", fontSize: "0.8rem", fontWeight: 600,
                      borderRadius: "6px", cursor: "pointer", transition: "all 0.2s ease",
                      border: `1px solid ${active ? cs.border : "var(--surface-border)"}`,
                      background: active ? cs.bg : "transparent",
                      color: active ? cs.color : "var(--foreground-muted)",
                      letterSpacing: "0.02em",
                    }}
                  >{cat}</button>
                );
              })}
            </div>
          </div>

          {/* Table shell */}
          <div style={{
            border: "1px solid var(--surface-border)", borderRadius: "12px", overflow: "hidden",
          }}>
            {/* Header row */}
            <div
              className="dtbl-header"
              style={{
                display: "grid", gridTemplateColumns: "2fr 1.1fr 1.1fr 0.9fr",
                padding: "12px 24px",
                background: "var(--surface)",
                borderBottom: "1px solid var(--surface-border)",
              }}
            >
              {["Service / Filing", "Entity", "Due Date", "Status"].map((col) => (
                <span key={col} style={{
                  fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.15em",
                  textTransform: "uppercase", color: "var(--foreground-faint)",
                }}>{col}</span>
              ))}
            </div>

            {/* Rows */}
            {filteredDeadlines.map((row, i) => {
              const pc  = priorityConfig[row.priority];
              const cs  = catStyle[row.category] ?? catStyle.All;
              const isLast = i === filteredDeadlines.length - 1;
              return (
                <div
                  key={i}
                  className="dtbl-row"
                  style={{
                    display: "grid", gridTemplateColumns: "2fr 1.1fr 1.1fr 0.9fr",
                    padding: "16px 24px", alignItems: "center",
                    borderBottom: isLast ? "none" : "1px solid var(--surface-border)",
                    transition: "background 0.15s ease", cursor: "default",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  {/* Service name */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: pc.dot, flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)",
                    }}>{row.service}</span>
                  </div>

                  {/* Category */}
                  <span style={{
                    fontSize: "0.75rem", fontWeight: 600, color: cs.color,
                    background: cs.bg, border: `1px solid ${cs.border}`,
                    padding: "3px 10px", borderRadius: "4px", display: "inline-block",
                  }}>{row.category}</span>

                  {/* Date */}
                  <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "var(--foreground-muted)", fontSize: "0.86rem" }}>
                    <span style={{ opacity: 0.5 }}><Icon.Calendar /></span>
                    {row.date}
                  </div>

                  {/* Priority */}
                  <span style={{
                    fontSize: "0.73rem", fontWeight: 700,
                    color: pc.color, background: pc.bg,
                    padding: "3px 10px", borderRadius: "4px",
                    display: "inline-block", letterSpacing: "0.04em",
                  }}>{pc.label}</span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div style={{ display: "flex", gap: "18px", marginTop: "14px", justifyContent: "flex-end", flexWrap: "wrap" }}>
            {Object.values(priorityConfig).map((pc) => (
              <div key={pc.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.74rem", color: "var(--foreground-faint)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: pc.dot, flexShrink: 0 }} />
                {pc.label}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          SERVICES BY ENTITY TYPE
      ══════════════════════════════════ */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Heading */}
          <div style={{
            display: "flex", alignItems: "flex-start", gap: "40px",
            marginBottom: "44px", flexWrap: "wrap",
          }}>
            <div style={{ flex: "0 0 auto" }}>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#4f7fa8", marginBottom: "8px",
              }}>Scope of Work</p>
              <h2 style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800,
                letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.1,
              }}>
                Services by<br/>Entity Type
              </h2>
            </div>
            <p style={{
              flex: "1 1 280px", fontSize: "0.93rem", color: "var(--foreground-muted)",
              lineHeight: 1.75, paddingTop: "30px",
            }}>
              Each category carries its own regulatory landscape. Select your entity
              type to explore the specific work we undertake — no generic packages,
              only what's relevant to you.
            </p>
          </div>

          {/* Tab strip — horizontal rule style */}
          <div style={{
            display: "flex", borderBottom: "1px solid var(--surface-border)",
            marginBottom: "40px", gap: "0",
          }}>
            {tabLabels.map(({ key, label }) => {
              const isActive = activeTab === key;
              const ac = tabAccent[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    padding: "14px 28px", fontSize: "0.88rem", fontWeight: isActive ? 700 : 500,
                    cursor: "pointer", background: "transparent",
                    border: "none", borderBottom: `2px solid ${isActive ? ac.color : "transparent"}`,
                    color: isActive ? ac.color : "var(--foreground-muted)",
                    transition: "all 0.2s ease", letterSpacing: "0.01em",
                    marginBottom: "-1px",
                  }}
                >{label}</button>
              );
            })}
          </div>

          {/* Cards */}
          <div
            className="svc-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--surface-border)" }}
          >
            {servicesMap[activeTab].map((svc, i) => {
              const ac = tabAccent[activeTab];
              return (
                <div
                  key={svc.title}
                  className="svc-card"
                  style={{
                    background: "var(--background)",
                    padding: "32px 28px",
                    position: "relative",
                    transition: "background 0.25s ease",
                    cursor: "default",
                    borderLeft: i % 3 === 0 ? "none" : undefined,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--background)";
                  }}
                >
                  {/* Top accent strip */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2,
                    background: i === 0 || i === 1 || i === 2
                      ? `linear-gradient(90deg, ${ac.color}66, transparent)`
                      : "transparent",
                    opacity: i < 3 ? 1 : 0,
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: 44, height: 44, borderRadius: "8px",
                    background: "var(--surface)", border: "1px solid var(--surface-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: ac.color, marginBottom: "18px",
                  }}>
                    <svc.IconCmp />
                  </div>

                  {/* Tag */}
                  <span style={{
                    fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: ac.color, display: "block",
                    marginBottom: "8px",
                  }}>{svc.tag}</span>

                  {/* Title */}
                  <h3 style={{
                    fontSize: "1rem", fontWeight: 700, color: "var(--foreground)",
                    marginBottom: "10px", lineHeight: 1.3,
                  }}>{svc.title}</h3>

                  {/* Description */}
                  <p style={{
                    fontSize: "0.85rem", color: "var(--foreground-muted)",
                    lineHeight: 1.72,
                  }}>{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          CTA — understated, editorial
      ══════════════════════════════════ */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "0",
            border: "1px solid var(--surface-border)",
            borderRadius: "12px", overflow: "hidden",
          }} className="cta-grid">

            {/* Left text panel */}
            <div style={{
              padding: "56px 48px",
              background: "var(--surface)",
              borderRight: "1px solid var(--surface-border)",
            }}>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#b5813d", marginBottom: "16px",
              }}>Start Here</p>
              <h2 style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 800,
                letterSpacing: "-0.02em", color: "var(--foreground)",
                lineHeight: 1.15, marginBottom: "18px",
              }}>
                Not sure which service fits your organisation?
              </h2>
              <p style={{
                fontSize: "0.93rem", color: "var(--foreground-muted)",
                lineHeight: 1.75, marginBottom: "32px",
              }}>
                Book a free 30-minute consultation. Our team will review your entity
                type, current compliance status, and pending filings — then suggest
                exactly what you need.
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
                  Book a Free Consultation
                  <Icon.ArrowRight />
                </Link>
                <Link href="/our-story" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "12px 24px", borderRadius: "8px",
                  border: "1px solid var(--surface-border)",
                  background: "transparent", color: "var(--foreground-muted)",
                  fontWeight: 600, fontSize: "0.88rem",
                  textDecoration: "none", transition: "all 0.2s ease",
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
                  About InHouse
                </Link>
              </div>
            </div>

            {/* Right checklist panel */}
            <div style={{ padding: "56px 48px", background: "var(--bg-secondary)" }}>
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--foreground-faint)",
                marginBottom: "24px",
              }}>What to expect</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  "Review of your current compliance status",
                  "Identification of missed or upcoming filings",
                  "Customised service roadmap for your entity",
                  "Transparent fee structure, no hidden charges",
                  "Ongoing support throughout the engagement",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: "rgba(181,129,61,0.15)", border: "1px solid rgba(181,129,61,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#b5813d", flexShrink: 0, marginTop: "1px",
                    }}>
                      <Icon.Check />
                    </div>
                    <span style={{ fontSize: "0.88rem", color: "var(--foreground-muted)", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .dtbl-header { grid-template-columns: 1fr 1fr !important; }
          .dtbl-row    { grid-template-columns: 1fr 1fr !important; row-gap: 10px; }
          .cta-grid    { grid-template-columns: 1fr !important; }
          .hero-stats  { grid-template-columns: repeat(3,1fr) !important; }
          .svc-grid    { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .dtbl-header { display: none !important; }
          .dtbl-row    { grid-template-columns: 1fr !important; row-gap: 8px; }
          .hero-stats  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
