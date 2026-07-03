import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState("");
  const [scrolled, setScrolled] = useState(false);

  /* Highlight active nav link on scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      const y = window.scrollY + 120;
      sections.forEach((s) => {
        if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
          setActive(`#${s.id}`);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(6,6,15,0.75)"
            : "rgba(6,6,15,0.4)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 700,
            background: "linear-gradient(135deg, var(--violet-light), var(--cyan))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
        >
          MM.
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  color: active === href ? "var(--text)" : "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    active === href ? "var(--text)" : "var(--text-muted)")
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:molatunji371@gmail.com"
          className="btn-primary hidden md:inline-block"
          style={{ fontSize: "0.875rem" }}
        >
          Hire me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            color: "var(--text)",
            fontSize: "1.5rem",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 65,
            left: 0,
            right: 0,
            background: "rgba(6,6,15,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:molatunji371@gmail.com"
            onClick={closeMenu}
            style={{ color: "var(--violet-light)", textDecoration: "none", fontWeight: 600 }}
          >
            Hire me →
          </a>
        </div>
      )}
    </>
  );
}
