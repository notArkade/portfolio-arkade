const NeonText = ({ text }) => {
  return (
    <svg
      viewBox="0 0 1500 420"
      className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-7xl mx-auto"
    >
      <defs>
        {/* Glow */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="none"
        stroke="#7CFFB2"
        strokeWidth="4"
        strokeDasharray="80 12"
        filter="url(#glow)"
        className="font-mono text-[300px] neon-flicker uppercase tracking-[0.2em] select-none"
      >
        {text}
      </text>
    </svg>
  );
};

export default NeonText;
