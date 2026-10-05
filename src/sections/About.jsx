import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";

const INFO = [
  { icon: "📍", label: "Location",  value: "Lagos, Nigeria",           bg: "rgba(124,58,237,0.15)" },
  { icon: "🎓", label: "Education", value: "Aptech Computer Education", bg: "rgba(6,182,212,0.15)"  },
  { icon: "📧", label: "Email",     value: "molatunji371@gmail.com",    bg: "rgba(236,72,153,0.15)", href: "mailto:molatunji371@gmail.com" },
  { icon: "🐙", label: "GitHub",    value: "molatunji-ctrl",            bg: "rgba(52,211,153,0.15)", href: "https://github.com/molatunji-ctrl" },
];

const FOCUS = [
  { color: "#A78BFA", title: "Full-stack apps",   text: "React front ends with Node.js and Express back ends and SQL or Firebase data." },
  { color: "#67E8F9", title: "Real-time features", text: "Live updates and admin dashboards using Firebase and Node.js." },
  { color: "#F9A8D4", title: "Clean interfaces",   text: "Responsive, accessible layouts that work well on phones first." },
  { color: "#6EE7B7", title: "Fast, installable",  text: "PWAs with offline support and quick load times." },
];

function InfoRow({ icon, label, value, bg, href }) {
  const content = (
    <>
      <div
        style={{
          width: 36, height: 36, borderRadius: 9, background: bg,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1rem", flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500 }}>{label}</div>
        <div style={{ fontSize: "0.92rem", color: "var(--text)", fontWeight: 500 }}>{value}</div>
      </div>
    </>
  );

  const style = { display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" };

  return href ? (
    <a
      href={href}
      className="info-link"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      style={style}
    >
      {content}
    </a>
  ) : (
    <div style={style}>{content}</div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeader label="About me" title={<>Two years of building,<br />still learning fast.</>} />

        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3rem", alignItems: "start" }}
        >
          {/* Left: bio + contact info */}
          <GlassCard style={{ padding: "2.5rem" }}>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.25rem", maxWidth: "60ch" }}>
              I'm <strong style={{ color: "var(--text)", fontWeight: 600 }}>Michael Molatunji</strong>, a
              full-stack developer with 2 years of experience, studying software engineering at{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>Aptech Computer Education</strong>{" "}
              in Lagos.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "2rem", maxWidth: "60ch" }}>
              I build products on my own alongside my coursework, so I'm used to taking a project from
              the first sketch to a live deployment. I care about software that is simple to use and
              reliable once people depend on it.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {INFO.map((item) => <InfoRow key={item.label} {...item} />)}
            </div>
          </GlassCard>

          {/* Right: what I work on */}
          <GlassCard delay={0.1} style={{ padding: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.25rem", fontWeight: 600,
                letterSpacing: "-0.02em", marginBottom: "1.5rem",
              }}
            >
              What I work on
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              {FOCUS.map(({ color, title, text }) => (
                <div key={title} style={{ display: "flex", gap: "1rem", borderLeft: `2px solid ${color}`, paddingLeft: "1rem" }}>
                  <div>
                    <div style={{ fontSize: "0.98rem", fontWeight: 600, marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
