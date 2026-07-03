import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";

const INFO = [
  { icon: "📍", label: "Location",  value: "Lagos, Nigeria",           color: "#A78BFA", bg: "rgba(124,58,237,0.15)" },
  { icon: "🎓", label: "Education", value: "Aptech Computer Education", color: "#67E8F9", bg: "rgba(6,182,212,0.15)"  },
  { icon: "📧", label: "Email",     value: "molatunji371@gmail.com",    color: "#F9A8D4", bg: "rgba(236,72,153,0.15)" },
  { icon: "🐙", label: "GitHub",    value: "molatunji-ctrl",            color: "#6EE7B7", bg: "rgba(52,211,153,0.15)" },
];

const FOCUS = [
  { color: "#A78BFA", text: "Building scalable full-stack web applications"    },
  { color: "#67E8F9", text: "Real-time systems with Firebase & Node.js"         },
  { color: "#F9A8D4", text: "Responsive, accessible, pixel-perfect UIs"        },
  { color: "#6EE7B7", text: "PWAs with offline support & fast performance"      },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeader label="Who I am" title={<>Passionate developer,<br />curious mind.</>} />

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }}
          className="about-grid"
        >
          {/* Left — bio + info */}
          <GlassCard style={{ padding: "2.5rem" }}>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              I'm <strong style={{ color: "var(--text)", fontWeight: 600 }}>Michael Molatunji</strong>, a
              first-year software engineering student at{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>Aptech Computer Education</strong>{" "}
              in Lagos, Nigeria, who builds full-stack products independently alongside coursework.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
              I believe great software should feel invisible — it should just work, beautifully. Every
              project is a chance to push my skills and deliver something that genuinely makes a difference.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {INFO.map(({ icon, label, value, color, bg }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: 36, height: 36,
                      borderRadius: 9,
                      background: bg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1rem", flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500 }}>{label}</div>
                    <div style={{ fontSize: "0.88rem", color: "var(--text)", fontWeight: 500 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Right — quote + focus */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Quote card */}
            <GlassCard delay={0.1} style={{ padding: "2rem", borderLeft: "2px solid var(--violet)" }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "3rem",
                  lineHeight: 0,
                  color: "var(--violet)",
                  opacity: 0.4,
                  marginBottom: "1.25rem",
                }}
              >
                "
              </div>
              <p style={{ fontSize: "1.05rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.75 }}>
                I don't just write code — I solve problems, build products, and learn relentlessly.
                Every project is a new chapter in becoming a better engineer.
              </p>
            </GlassCard>

            {/* Focus card */}
            <GlassCard delay={0.2} style={{ padding: "2rem" }}>
              <p
                style={{
                  fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600,
                  letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem",
                }}
              >
                What I focus on
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {FOCUS.map(({ color, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                    <span style={{ color, fontSize: "1.1rem", flexShrink: 0 }}>→</span>
                    {text}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
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
