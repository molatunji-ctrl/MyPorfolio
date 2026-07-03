import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";
import { skills } from "../data/skills";

/* Tag colour map */
const TAG_STYLES = {
  violet: { color: "#A78BFA", border: "rgba(124,58,237,0.35)", bg: "rgba(124,58,237,0.08)" },
  cyan:   { color: "#67E8F9", border: "rgba(6,182,212,0.35)",  bg: "rgba(6,182,212,0.08)"  },
  pink:   { color: "#F9A8D4", border: "rgba(236,72,153,0.35)", bg: "rgba(236,72,153,0.08)" },
  green:  { color: "#6EE7B7", border: "rgba(52,211,153,0.35)", bg: "rgba(52,211,153,0.08)" },
  amber:  { color: "#FCD34D", border: "rgba(245,158,11,0.35)", bg: "rgba(245,158,11,0.08)" },
};

function SkillTag({ label, variant }) {
  const s = TAG_STYLES[variant] ?? TAG_STYLES.violet;
  return (
    <span
      style={{
        padding: "0.3rem 0.8rem",
        borderRadius: 999,
        fontSize: "0.78rem",
        fontWeight: 500,
        border: `1px solid ${s.border}`,
        background: s.bg,
        color: s.color,
        transition: "transform 0.2s",
        cursor: "default",
        display: "inline-block",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "7rem 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeader
          label="What I know"
          title="My tech stack."
          description="A curated set of tools I use to bring ideas from concept to production."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skills.map(({ category, dotColor, variant, items }, i) => (
            <GlassCard key={category} delay={i * 0.08} style={{ padding: "2rem" }}>
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    width: 8, height: 8,
                    borderRadius: "50%",
                    background: dotColor,
                    flexShrink: 0,
                  }}
                />
                {category}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {items.map((item) => (
                  <SkillTag key={item} label={item} variant={variant} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
