"use client";

import { useState } from "react";

const contactInfo = [
  {
    label: "Address",
    detail: "12, Greenway Road, Civil Lines\nNew Delhi – 110054, India",
  },
  {
    label: "Phone",
    detail: "+91 98765 43210\n+91 11 2345 6789",
  },
  {
    label: "Email",
    detail: "hello@inhousengo.org\nsupport@inhousengo.org",
  },
  {
    label: "Office Hours",
    detail: "Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">

      {/* ── Header ── */}
      <section style={{ padding: "96px 24px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 79px, var(--surface-border) 80px)",
          opacity: 0.3,
        }} />
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
          background: "linear-gradient(to bottom, transparent, #4f7fa8 30%, #4a9b7c 70%, transparent)",
          opacity: 0.7,
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#4f7fa8", marginBottom: "16px",
            animation: "fade-up 0.5s ease both",
          }}>Get in Touch</p>
          <h1 style={{
            fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900,
            lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--foreground)",
            marginBottom: "16px", animation: "fade-up 0.6s ease 0.1s both",
          }}>
            Contact<br />
            <span style={{
              fontStyle: "italic", fontWeight: 300,
              background: "linear-gradient(100deg, #4f7fa8 0%, #4a9b7c 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Us</span>
          </h1>
          <p style={{
            fontSize: "1rem", color: "var(--foreground-muted)", lineHeight: 1.75,
            maxWidth: "500px", animation: "fade-up 0.6s ease 0.2s both",
          }}>
            Whether you&apos;d like to volunteer, donate, partner, or simply learn more — we&apos;re here for you.
          </p>
        </div>
      </section>

      {/* ── Content Grid ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "0",
            border: "1px solid var(--surface-border)", borderRadius: "10px", overflow: "hidden",
          }} className="contact-grid">

            {/* Left – Info */}
            <div style={{
              background: "var(--bg-secondary)",
              borderRight: "1px solid var(--surface-border)",
            }}>
              {contactInfo.map((item, i) => (
                <div key={item.label} style={{
                  padding: "28px 32px",
                  borderBottom: i < contactInfo.length - 1 ? "1px solid var(--surface-border)" : "none",
                }}>
                  <p style={{
                    fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#4f7fa8", marginBottom: "10px",
                  }}>{item.label}</p>
                  {item.detail.split("\n").map((line, j) => (
                    <p key={j} style={{
                      color: "var(--foreground-muted)", fontSize: "0.88rem", lineHeight: 1.7,
                    }}>{line}</p>
                  ))}
                </div>
              ))}

              {/* Social links */}
              <div style={{ padding: "28px 32px" }}>
                <p style={{
                  fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "#4f7fa8", marginBottom: "14px",
                }}>Follow Us</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      style={{
                        padding: "6px 14px", borderRadius: "5px",
                        background: "var(--surface)",
                        border: "1px solid var(--surface-border)",
                        color: "var(--foreground-muted)", fontSize: "0.78rem",
                        textDecoration: "none", fontWeight: 600,
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,127,168,0.5)";
                        (e.currentTarget as HTMLElement).style.color = "#4f7fa8";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--surface-border)";
                        (e.currentTarget as HTMLElement).style.color = "var(--foreground-muted)";
                      }}
                    >{s}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right – Form */}
            <div style={{ padding: "40px 44px", background: "var(--surface)" }}>
              {submitted ? (
                <div style={{ padding: "48px 0", textAlign: "center" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "rgba(74,155,124,0.15)", border: "1.5px solid rgba(74,155,124,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a9b7c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "10px" }}>
                    Message Sent
                  </h2>
                  <p style={{ color: "var(--foreground-muted)", lineHeight: 1.7, marginBottom: "28px", fontSize: "0.9rem" }}>
                    Thank you for reaching out. Our team will get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); }}
                    style={{
                      padding: "11px 24px", borderRadius: "8px",
                      border: "1px solid var(--surface-border)",
                      background: "transparent", color: "var(--foreground-muted)",
                      fontWeight: 600, fontSize: "0.88rem", cursor: "pointer",
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
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <p style={{
                    fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "#4f7fa8", marginBottom: "14px",
                  }}>Direct Message</p>
                  <h2 style={{
                    fontSize: "1.4rem", fontWeight: 800, color: "var(--foreground)",
                    marginBottom: "6px", letterSpacing: "-0.01em",
                  }}>Send Us a Message</h2>
                  <p style={{ color: "var(--foreground-muted)", fontSize: "0.86rem", marginBottom: "28px", lineHeight: 1.65 }}>
                    Fill in the form and we&apos;ll respond as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="form-row">
                      <div>
                        <label style={{
                          display: "block", fontSize: "0.75rem", fontWeight: 700,
                          color: "var(--foreground-muted)", marginBottom: "7px",
                          letterSpacing: "0.04em", textTransform: "uppercase",
                        }}>Your Name</label>
                        <input
                          id="contact-name"
                          className="form-input"
                          type="text"
                          placeholder="Rahul Sharma"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label style={{
                          display: "block", fontSize: "0.75rem", fontWeight: 700,
                          color: "var(--foreground-muted)", marginBottom: "7px",
                          letterSpacing: "0.04em", textTransform: "uppercase",
                        }}>Email Address</label>
                        <input
                          id="contact-email"
                          className="form-input"
                          type="email"
                          placeholder="you@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{
                        display: "block", fontSize: "0.75rem", fontWeight: 700,
                        color: "var(--foreground-muted)", marginBottom: "7px",
                        letterSpacing: "0.04em", textTransform: "uppercase",
                      }}>Subject</label>
                      <select
                        id="contact-subject"
                        className="form-input"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        required
                        style={{ cursor: "pointer" }}
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="volunteer">I want to Volunteer</option>
                        <option value="donate">I want to Donate</option>
                        <option value="partner">Partnership Enquiry</option>
                        <option value="media">Media / Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: "block", fontSize: "0.75rem", fontWeight: 700,
                        color: "var(--foreground-muted)", marginBottom: "7px",
                        letterSpacing: "0.04em", textTransform: "uppercase",
                      }}>Message</label>
                      <textarea
                        id="contact-message"
                        className="form-input"
                        placeholder="Tell us how we can help..."
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                        style={{ resize: "vertical" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        padding: "13px 24px", borderRadius: "8px",
                        background: loading ? "rgba(181,129,61,0.5)" : "#b5813d",
                        color: "#fff", fontWeight: 700, fontSize: "0.88rem",
                        border: "none", cursor: loading ? "not-allowed" : "pointer",
                        transition: "opacity 0.2s ease", letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
