/* Animated gradient orbs + grid texture — rendered behind all content */

const ORBS = [
  { size: 600, color: "#7C3AED", top: "-10%",  left: "-10%",  delay: "0s"   },
  { size: 500, color: "#06B6D4", bottom: "5%", right: "-10%", delay: "-6s"  },
  { size: 400, color: "#EC4899", top: "40%",   left: "50%",   delay: "-12s" },
  { size: 300, color: "#4F46E5", top: "70%",   left: "15%",   delay: "-3s"  },
];

export default function BackgroundCanvas() {
  return (
    <>
      {/* Orbs layer */}
      <div
        aria-hidden="true"
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}
      >
        {ORBS.map(({ size, color, delay, ...pos }, i) => (
          <div
            key={i}
            className="bg-orb"
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              filter: "blur(80px)",
              opacity: 0.35,
              willChange: "transform",
              animation: "drift 18s ease-in-out infinite",
              animationDelay: delay,
              ...pos,
            }}
          />
        ))}
      </div>

      {/* Grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(40px, -30px) scale(1.05); }
          66%       { transform: translate(-25px, 20px) scale(0.97); }
        }
        /* Phones: fewer, cheaper orbs so scrolling stays smooth and battery lasts */
        @media (max-width: 768px) {
          .bg-orb { filter: blur(50px) !important; }
          .bg-orb:nth-child(n + 3) { display: none; }
        }
      `}</style>
    </>
  );
}
