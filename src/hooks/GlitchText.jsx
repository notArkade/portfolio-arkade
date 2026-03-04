import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// SIGNAL GLITCH — random horizontal displacement bursts
// Usage: <GlitchText>your word</GlitchText>
// Props:
//   interval  (ms) — average time between glitch bursts  (default: 3000)
//   duration  (ms) — how long each burst lasts           (default: 200)
//   intensity (px) — max horizontal slice displacement   (default: 6)
//   className       — additional classes                  (default: "")
// ─────────────────────────────────────────────

const GlitchText = ({
  children,
  interval = 3000,
  duration = 200,
  intensity = 6,
  className = "",
}) => {
  const [glitching, setGlitching] = useState(false);
  const [slices, setSlices] = useState([]);
  const ref = useRef();
  const observing = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let burstTimeout;
    let stopTimeout;
    let loopTimeout;

    const randomBetween = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const burst = () => {
      // generate 2–3 random clip slices each burst
      const count = randomBetween(2, 3);
      const newSlices = Array.from({ length: count }, (_, i) => {
        const top = randomBetween(5, 80);
        const height = randomBetween(8, 25);
        const shift = (Math.random() > 0.5 ? 1 : -1) * randomBetween(2, intensity);
        const color = i % 2 === 0 ? "#ff0040" : "#00eeff";
        return { top, height, shift, color };
      });

      setSlices(newSlices);
      setGlitching(true);

      stopTimeout = setTimeout(() => {
        setGlitching(false);
        setSlices([]);
      }, duration + randomBetween(0, 150));

      // schedule next burst
      loopTimeout = setTimeout(burst, interval + randomBetween(-800, 800));
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observing.current) {
          observing.current = true;
          // small random startup delay so multiple words don't sync
          burstTimeout = setTimeout(burst, randomBetween(0, interval));
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(element);

    return () => {
      obs.disconnect();
      clearTimeout(burstTimeout);
      clearTimeout(stopTimeout);
      clearTimeout(loopTimeout);
    };
  }, [interval, duration, intensity]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block", position: "relative" }}
    >
      {/* main text — shifts slightly during glitch */}
      <span
        style={{
          display: "inline-block",
          animation: glitching ? `glitchShift ${duration}ms steps(4) forwards` : "none",
        }}
      >
        {children}
      </span>

      {/* rgb slice layers */}
      {glitching &&
        slices.map((s, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              display: "inline-block",
              clipPath: `inset(${s.top}% 0 ${Math.max(0, 100 - s.top - s.height)}% 0)`,
              transform: `translateX(${s.shift}px)`,
              color: s.color,
              // background matches your site bg to "cut" the text
              background: "var(--site-bg, #080808)",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {children}
          </span>
        ))}

      <style>{`
        @keyframes glitchShift {
          0%   { transform: translateX(0)     skewX(0deg);   }
          20%  { transform: translateX(-3px)  skewX(-1deg);  }
          40%  { transform: translateX(3px)   skewX(1deg);   }
          60%  { transform: translateX(-2px)  skewX(0.5deg); }
          80%  { transform: translateX(2px)   skewX(-0.5deg);}
          100% { transform: translateX(0)     skewX(0deg);   }
        }
      `}</style>
    </span>
  );
};

export default GlitchText;