import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";
import { projects } from "../data/projects";

/* Accent colour config */
const ACCENT = {
  violet:   { icon: "rgba(124,58,237,0.15)", iconBorder: "rgba(124,58,237,0.25)", bar: "linear-gradient(90deg,#7C3AED,#06B6D4)" },
  cyan:     { icon: "rgba(6,182,212,0.15)",  iconBorder: "rgba(6,182,212,0.25)",  bar: "linear-gradient(90deg,#06B6D4,#34D399)" },
  pink:     { icon: "rgba(236,72,153,0.15)", iconBorder: "rgba(236,72,153,0.25)", bar: "linear-gradient(90deg,#EC4899,#7C3AED)" },
  gradient: { icon: "rgba(255,255,255,0.06)",iconBorder: "rgba(255,255,255,0.15)", bar: "linear-gradient(90deg,#7C3AED,#EC4899,#06B6D4)" },
};

function ProjectCard({ project, index }) {
  const acc = ACCENT[project.accent] ?? ACCENT.violet;

  return (
    <GlassCard
      delay={index * 0.1}
      style={{ padding: "2rem", position: "relative", overflow: "hidden" }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 2,
          borderRadius: "20px 20px 0 0",
          background: acc.bar,
        }}
      />

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        {/* Icon */}
        <div
          style={{
            width: 48, height: 48,
            borderRadius: 12,
            background: acc.icon,
            border: `1px solid ${acc.iconBorder}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.4rem",
          }}
        >
          {project.icon}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live site"
              style={{
                width: 34, height: 34,
                borderRadius: 8,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "var(--text)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                width: 34, height: 34,
                borderRadius: 8,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "var(--text)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              ⌥
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.15rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          lineHeight: 1.7,
          marginBottom: "1.25rem",
        }}
      >
        {project.description}
      </p>

      {/* Stack pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              padding: "0.2rem 0.6rem",
              borderRadius: 6,
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              background: "rgba(255,255,255,0.06)",
              color: "var(--text-muted)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeader
          label="What I've built"
          title="Featured projects."
          description="Real-world applications built with care — from design to deployment."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
