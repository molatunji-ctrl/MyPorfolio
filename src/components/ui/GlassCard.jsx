import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * GlassCard
 * A reusable glassmorphism card wrapper.
 *
 * Props:
 *  - className  {string}       Extra Tailwind / CSS classes
 *  - reveal     {boolean}      Attach scroll-reveal class (default true)
 *  - delay      {number}       Reveal transition-delay in seconds (default 0)
 *  - style      {object}       Inline style overrides
 *  - children   {ReactNode}
 *
 * The delay only applies to the entrance. It is cleared once the first
 * transition ends, so hover effects on the card respond instantly.
 */
export default function GlassCard({
  className = "",
  reveal = true,
  delay = 0,
  style = {},
  children,
}) {
  const ref = useScrollReveal();

  const clearDelay = (e) => {
    if (e.target === e.currentTarget) e.currentTarget.style.transitionDelay = "0s";
  };

  return (
    <div
      ref={reveal ? ref : undefined}
      className={`glass${reveal ? " reveal" : ""} ${className}`}
      onTransitionEnd={delay ? clearDelay : undefined}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </div>
  );
}
