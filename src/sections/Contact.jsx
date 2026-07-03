import { useState } from "react";
import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";

const CONTACT_LINKS = [
  {
    href: "mailto:molatunji371@gmail.com",
    icon: "📧",
    label: "Email",
    value: "molatunji371@gmail.com",
    iconBg: "rgba(124,58,237,0.12)",
    iconBorder: "rgba(124,58,237,0.3)",
  },
  {
    href: "tel:09164902333",
    icon: "📞",
    label: "Phone",
    value: "09164902333",
    iconBg: "rgba(52,211,153,0.12)",
    iconBorder: "rgba(52,211,153,0.3)",
  },
  {
    href: "https://github.com/molatunji-ctrl",
    icon: "🐙",
    label: "GitHub",
    value: "molatunji-ctrl",
    iconBg: "rgba(255,255,255,0.06)",
    iconBorder: "rgba(255,255,255,0.15)",
  },
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm]         = useState(INITIAL_FORM);
  const [status, setStatus]     = useState("idle"); // idle | sending | success

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    /* Swap this setTimeout for your real EmailJS / API call */
    setTimeout(() => {
      setStatus("success");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 3500);
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: "7rem 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeader
          label="Get in touch"
          title={<>Let's build something<br />together.</>}
        />

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3rem", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Info card */}
          <GlassCard style={{ padding: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "0.75rem",
              }}
            >
              Say hello. 👋
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Whether you have a project idea, a collaboration proposal, or just want to connect — my inbox
              is always open.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {CONTACT_LINKS.map(({ href, icon, label, value, iconBg, iconBorder }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    textDecoration: "none",
                    color: "var(--text)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--violet-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                >
                  <div
                    style={{
                      width: 40, height: 40,
                      borderRadius: 10,
                      background: iconBg,
                      border: `1px solid ${iconBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                      transition: "transform 0.2s",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500, marginBottom: 1 }}>{label}</div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 500 }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </GlassCard>

          {/* Form card */}
          <GlassCard delay={0.15} style={{ padding: "2.5rem" }}>
            <form onSubmit={handleSubmit} noValidate>
              {/* Name + Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
                <div>
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    className="form-input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: "1.25rem" }}>
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  className="form-input"
                  type="text"
                  placeholder="Project idea, collaboration…"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                style={{
                  width: "100%",
                  padding: "0.875rem",
                  borderRadius: 10,
                  border: "none",
                  cursor: status === "idle" ? "pointer" : "default",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  transition: "opacity 0.2s, transform 0.2s, background 0.4s",
                  background:
                    status === "success"
                      ? "linear-gradient(135deg, #059669, #047857)"
                      : "linear-gradient(135deg, #7C3AED, #4F46E5)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                }}
              >
                {status === "idle"    && "Send message →"}
                {status === "sending" && "Sending…"}
                {status === "success" && "✓ Message sent!"}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
