import { useState } from "react";
import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";

/*
  Sending messages:
  1. Create a free form at https://formspree.io and copy its ID (the part after /f/).
  2. Add it to a .env file:  VITE_FORMSPREE_ID=yourFormId
  3. Add the same variable in Vercel → Project → Settings → Environment Variables, then redeploy.
  Without it, the form falls back to opening the visitor's email app.
*/
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
const EMAIL = "molatunji371@gmail.com";

const CONTACT_LINKS = [
  { href: `mailto:${EMAIL}`,                    icon: "📧", label: "Email",  value: EMAIL,            bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.3)" },
  { href: "tel:09164902333",                    icon: "📞", label: "Phone",  value: "09164902333",    bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.3)" },
  { href: "https://github.com/molatunji-ctrl",  icon: "🐙", label: "GitHub", value: "molatunji-ctrl", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.15)" },
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f) {
  const errors = {};
  if (!f.name.trim()) errors.name = "Enter your name.";
  if (!EMAIL_RE.test(f.email)) errors.email = "Enter a valid email address, like name@example.com.";
  if (f.message.trim().length < 10) errors.message = "Write at least 10 characters so I know how to help.";
  return errors;
}

export default function Contact() {
  const [form, setForm]     = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    // No endpoint configured: open the visitor's email app instead of pretending to send.
    if (!FORMSPREE_ID) {
      const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject || "Portfolio enquiry")}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  const fieldError = (name) =>
    errors[name] ? (
      <p id={`${name}-error`} role="alert" style={{ color: "#FCA5A5", fontSize: "0.8rem", marginTop: 6 }}>
        {errors[name]}
      </p>
    ) : null;

  const aria = (name) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <section id="contact" style={{ padding: "7rem 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeader label="Contact" title={<>Have a project in mind?<br />Let's talk.</>} />

        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3rem", alignItems: "start" }}
        >
          {/* Direct links */}
          <GlassCard style={{ padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
              Prefer to reach out directly?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "46ch" }}>
              I'm open to freelance projects, internships and junior developer roles. I usually reply within a day.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {CONTACT_LINKS.map(({ href, icon, label, value, bg, border }) => (
                <a
                  key={label}
                  href={href}
                  className="info-link"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.85rem", textDecoration: "none", color: "var(--text)" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: 40, height: 40, borderRadius: 10, background: bg, border: `1px solid ${border}`,
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500, marginBottom: 1 }}>{label}</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 500 }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </GlassCard>

          {/* Form */}
          <GlassCard delay={0.15} style={{ padding: "2.5rem" }}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
                <div>
                  <label className="form-label" htmlFor="name">Name</label>
                  <input id="name" name="name" className="form-input" type="text" autoComplete="name"
                         placeholder="Your name" value={form.name} onChange={handleChange} {...aria("name")} />
                  {fieldError("name")}
                </div>
                <div>
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="email" className="form-input" type="email" autoComplete="email"
                         placeholder="you@example.com" value={form.email} onChange={handleChange} {...aria("email")} />
                  {fieldError("email")}
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label className="form-label" htmlFor="subject">Subject (optional)</label>
                <input id="subject" name="subject" className="form-input" type="text"
                       placeholder="What is this about?" value={form.subject} onChange={handleChange} />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-textarea"
                          placeholder="Tell me what you need built and when you need it." value={form.message}
                          onChange={handleChange} {...aria("message")} />
                {fieldError("message")}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%", padding: "0.9rem", borderRadius: 10, border: "none",
                  cursor: status === "sending" ? "wait" : "pointer",
                  fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 600,
                  background: "linear-gradient(135deg, #7C3AED, #4F46E5)", color: "#fff",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              <div aria-live="polite" style={{ marginTop: "1rem", minHeight: "1.5rem", fontSize: "0.9rem" }}>
                {status === "success" && (
                  <span style={{ color: "#6EE7B7" }}>Message sent. I'll reply to your email soon.</span>
                )}
                {status === "error" && (
                  <span style={{ color: "#FCA5A5" }}>
                    Your message didn't send. Check your connection and try again, or email me at {EMAIL}.
                  </span>
                )}
              </div>
            </form>
          </GlassCard>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
