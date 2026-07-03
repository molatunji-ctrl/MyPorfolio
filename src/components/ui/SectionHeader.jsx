/**
 * SectionHeader
 *
 * Props:
 *  - label       {string}   Small uppercase eyebrow label
 *  - title       {string|ReactNode}  Large heading (supports JSX for line breaks)
 *  - description {string}   Optional muted paragraph below title
 *  - className   {string}   Extra classes on the wrapper
 */
export default function SectionHeader({ label, title, description, className = "" }) {
  return (
    <div className={`mb-14 reveal ${className}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
