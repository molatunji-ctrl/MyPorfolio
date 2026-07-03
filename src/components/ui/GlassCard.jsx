/**
 * GlassCard
 * A reusable glassmorphism card wrapper.
 *
 * Props:
 *  - className  {string}       Extra Tailwind / CSS classes
 *  - reveal     {boolean}      Attach scroll-reveal class (default true)
 *  - delay      {number}       CSS transition-delay in seconds (default 0)
 *  - style      {object}       Inline style overrides
 *  - children   {ReactNode}
 */
export default function GlassCard({
  className = "",
  reveal = true,
  delay = 0,
  style = {},
  children,
}) {
  return (
    <div
      className={`glass${reveal ? " reveal" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </div>
  );
}
