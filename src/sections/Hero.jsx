import { useScrollReveal } from "../hooks/useScrollReveal";

/* ── Profile card: one memorable element for the hero ─────── */
const PROFILE = [
  ["role",       "full-stack developer"],
  ["experience", "2 years"],
  ["based in",   "Lagos, Nigeria"],
  ["stack",      "React, Node.js, Firebase"],
  ["shipped",    "church platform, restaurant app"],
];

function ProfileCard() {
  return (
    <div
      className="glass"
      role="img"
      aria-label="Profile summary: full-stack developer, 2 years of experience, based in Lagos, Nigeria, working with React, Node.js and Firebase."
      style={{ width: "100%", maxWidth: 440, padding: 0, overflow: "hidden" }}
    >
      {/* Window bar */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "0.8rem 1.1rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#F87171" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FBBF24" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#34D399" }} />
        <span style={{ marginLeft: 8, fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" }}>
          michael.profile
        </span>
      </div>

      {/* Lines */}
      <dl
        style={{
          margin: 0, padding: "1.4rem 1.4rem 1.6rem",
          fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
          fontSize: "0.88rem", lineHeight: 2,
        }}
      >
        {PROFILE.map(([k, v]) => (
          <div key={k} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <dt style={{ minWidth: 96, color: "var(--violet-light)" }}>{k}</dt>
            <dd style={{ margin: 0, color: "var(--text)" }}>{v}</dd>
          </div>
        ))}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <dt style={{ minWidth: 96, color: "var(--violet-light)" }}>status</dt>
          <dd style={{ margin: 0, color: "#6EE7B7" }}>
            open to work<span className="cursor" aria-hidden="true" />
          </dd>
        </div>
      </dl>
    </div>
  );
}

/* ── Quiet facts row ──────────────────────────────────────── */
function Fact({ value, label }) {
  return (
    <div style={{ padding: "0 1.5rem", borderLeft: "1px solid var(--border)" }}>
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.5rem", fontWeight: 700,
          letterSpacing: "-0.02em", color: "var(--text)",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}

export default function Hero() {
  const factsRef = useScrollReveal();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        paddingTop: 80, position: "relative", zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
        <div
          className="hero-grid"
          style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", alignItems: "center" }}
        >
          {/* Left */}
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 3.7rem)",
                fontWeight: 700, lineHeight: 1.08,
                letterSpacing: "-0.035em", marginBottom: "1.25rem",
              }}
            >
              I build full-stack web apps people actually use.
            </h1>

            <p
              style={{
                fontSize: "1.1rem", color: "var(--text-muted)",
                lineHeight: 1.7, maxWidth: 520, marginBottom: "2.25rem",
              }}
            >
              I'm Michael, a developer in Lagos with 2 years of experience. I've
              shipped a church platform and a restaurant app, from the interface
              to the database.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary">See my projects</a>
              <a href="#contact" className="btn-outline">Contact me</a>
            </div>
          </div>

          {/* Right */}
          <div className="hero-card" style={{ display: "flex", justifyContent: "center" }}>
            <ProfileCard />
          </div>
        </div>

        {/* Facts */}
        <div
          ref={factsRef}
          className="reveal"
          style={{ display: "flex", flexWrap: "wrap", rowGap: "1.25rem", marginTop: "4rem" }}
        >
          <div style={{ paddingRight: "1.5rem" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
              2 years
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>of experience</div>
          </div>
          <Fact value="5+" label="projects built" />
          <Fact value="15+" label="technologies used" />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
