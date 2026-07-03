import { useScrollReveal } from "../hooks/useScrollReveal";

/* ── Floating badge ───────────────────────────────────────── */
function FloatingBadge({ children, style = {} }) {
  return (
    <div
      style={{
        position: "absolute",
        background: "rgba(6,6,15,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "0.45rem 0.9rem",
        fontSize: "0.78rem",
        fontWeight: 500,
        whiteSpace: "nowrap",
        animation: "float 3s ease-in-out infinite",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Avatar visual ────────────────────────────────────────── */
function AvatarVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: 300,
        height: 300,
        flexShrink: 0,
      }}
    >
      {/* Outer dashed ring */}
      <div
        style={{
          position: "absolute",
          inset: -32,
          borderRadius: "50%",
          border: "1px dashed rgba(124,58,237,0.2)",
          animation: "spin 20s linear infinite reverse",
        }}
      />
      {/* Gradient ring */}
      <div
        style={{
          position: "absolute",
          inset: -16,
          borderRadius: "50%",
          border: "1px solid transparent",
          background:
            "linear-gradient(rgba(6,6,15,0), rgba(6,6,15,0)) padding-box, linear-gradient(135deg, rgba(124,58,237,0.6), rgba(6,182,212,0.6)) border-box",
          animation: "spin 8s linear infinite",
        }}
      />
      {/* Core */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.12))",
          border: "1px solid rgba(124,58,237,0.3)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "4.5rem",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            background:
              "linear-gradient(135deg, var(--violet-light), var(--cyan))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          MM
        </span>
      </div>

      {/* Floating badges */}
      <FloatingBadge
        style={{
          top: "6%",
          right: "-16%",
          color: "var(--violet-light)",
          borderColor: "rgba(124,58,237,0.35)",
          animationDelay: "0s",
        }}
      >
        ⚛️ React / Vite
      </FloatingBadge>
      <FloatingBadge
        style={{
          bottom: "10%",
          left: "-18%",
          color: "var(--cyan-light)",
          borderColor: "rgba(6,182,212,0.35)",
          animationDelay: "-1.5s",
        }}
      >
        🔥 Firebase
      </FloatingBadge>
      <FloatingBadge
        style={{
          top: "60%",
          right: "-20%",
          color: "#6EE7B7",
          borderColor: "rgba(52,211,153,0.35)",
          animationDelay: "-0.75s",
        }}
      >
        🟢 Node.js
      </FloatingBadge>
    </div>
  );
}

/* ── Stats bar ────────────────────────────────────────────── */
function StatItem({ num, label }) {
  return (
    <div
      className="glass"
      style={{ padding: "1.5rem", textAlign: "center" }}
    >
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "2rem",
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: "0.4rem",
          background:
            "linear-gradient(135deg, var(--violet-light), var(--cyan))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ── Hero section ─────────────────────────────────────────── */
export default function Hero() {
  const statsRef = useScrollReveal();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        {/* Hero grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            {/* Eyebrow badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.35rem 0.85rem",
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.3)",
                borderRadius: 999,
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--violet-light)",
                marginBottom: "1.5rem",
                letterSpacing: "0.04em",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--violet-light)",
                  animation: "pulse_dot 2s ease-in-out infinite",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              Available for work
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Building digital
              <br />
              <span className="grad-text">experiences</span>
              <br />
              that matter.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                maxWidth: 440,
                marginBottom: "2.5rem",
              }}
            >
              Full-stack developer from Lagos, Nigeria. I craft fast, beautiful,
              and purposeful web applications — from church platforms to
              restaurant apps.
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary">
                View my work
              </a>
              <a href="#contact" className="btn-outline">
                Let's talk
              </a>
            </div>
          </div>

          {/* Right — avatar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="hero-avatar"
          >
            <AvatarVisual />
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          <StatItem num="5+" label="Projects Built" />
          <StatItem num="8+" label="Technologies" />
          <StatItem num="1"  label="Year Coding"   />
        </div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-avatar { display: none !important; }
        }
      `}</style>
    </section>
  );
}
