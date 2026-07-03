export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem",
        textAlign: "center",
        color: "var(--text-faint)",
        fontSize: "0.8rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <p>
        © {year} Michael Molatunji · Built with ❤️ in Lagos ·{" "}
        <a
          href="https://github.com/molatunji-ctrl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--violet-light)", textDecoration: "none" }}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
