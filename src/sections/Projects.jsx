import { useMemo, useState } from "react";
import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";
import { projects } from "../data/projects";

const ACCENT = {
  violet:   { icon: "rgba(124,58,237,0.15)", border: "rgba(124,58,237,0.25)", bar: "linear-gradient(90deg,#7C3AED,#06B6D4)" },
  cyan:     { icon: "rgba(6,182,212,0.15)",  border: "rgba(6,182,212,0.25)",  bar: "linear-gradient(90deg,#06B6D4,#34D399)" },
  pink:     { icon: "rgba(236,72,153,0.15)", border: "rgba(236,72,153,0.25)", bar: "linear-gradient(90deg,#EC4899,#7C3AED)" },
  gradient: { icon: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.15)", bar: "linear-gradient(90deg,#7C3AED,#EC4899,#06B6D4)" },
};

function LinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
      style={{
        padding: "0.4rem 0.8rem", borderRadius: 8, fontSize: "0.82rem", fontWeight: 500,
        background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
        color: "var(--text)", textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

function ProjectCard({ project, index }) {
  const acc = ACCENT[project.accent] ?? ACCENT.violet;

  return (
    <GlassCard
      delay={index * 0.08}
      style={{ padding: "2rem", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: acc.bar }} />

      <div
        aria-hidden="true"
        style={{
          width: 48, height: 48, borderRadius: 12, background: acc.icon, border: `1px solid ${acc.border}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.25rem",
        }}
      >
        {project.icon}
      </div>

      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
        {project.title}
      </h3>

      <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: "60ch" }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              padding: "0.2rem 0.6rem", borderRadius: 6, fontSize: "0.75rem", fontWeight: 500,
              background: "rgba(255,255,255,0.06)", color: "var(--text-muted)", border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.liveUrl || project.githubUrl) && (
        <div style={{ display: "flex", gap: "0.6rem", marginTop: "auto" }}>
          {project.liveUrl && <LinkButton href={project.liveUrl}>View live site</LinkButton>}
          {project.githubUrl && <LinkButton href={project.githubUrl}>View code</LinkButton>}
        </div>
      )}
    </GlassCard>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  // Filter chips: technologies used by at least two projects
  const filters = useMemo(() => {
    const counts = {};
    projects.forEach((p) => p.stack.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
    // Used by 2+ projects, but not by all of them (a filter that matches everything is useless)
    const shared = Object.keys(counts).filter((t) => counts[t] >= 2 && counts[t] < projects.length);
    return ["All", ...shared];
  }, []);

  const visible = active === "All" ? projects : projects.filter((p) => p.stack.includes(active));

  return (
    <section id="projects" style={{ padding: "7rem 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeader
          label="Projects"
          title="Things I've built and shipped."
          description="Real applications, each taken from design to deployment."
        />

        {filters.length > 2 && (
          <div role="group" aria-label="Filter projects by technology" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                style={{
                  padding: "0.4rem 0.95rem", borderRadius: 999, cursor: "pointer",
                  fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500,
                  border: `1px solid ${active === f ? "rgba(124,58,237,0.6)" : "var(--border)"}`,
                  background: active === f ? "rgba(124,58,237,0.2)" : "transparent",
                  color: active === f ? "var(--text)" : "var(--text-muted)",
                  transition: "background 0.2s, border-color 0.2s, color 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "2rem" }}>
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
