import { useEffect, useState } from "react";

const CameraHUD = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = time.toLocaleDateString([], {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="camera-hud opacity-50">
      {/* Top Left */}
      {/* <div
        className="
    fixed top-3 left-3
    w-7 h-7
    border-t-2 border-l-2
    border-[rgba(220,255,235,0.8)]
    opacity-60
    blur-[0.2px]
    pointer-events-none
    z-[5]
  "
      />

      <div
        className="
    fixed top-3 right-3
    w-7 h-7
    border-t-2 border-r-2
    border-[rgba(220,255,235,0.8)]
    opacity-60
    blur-[0.2px]
    pointer-events-none
    z-[5]
  "
      />

      <div
        className="
    fixed bottom-3 left-3
    w-7 h-7
    border-b-2 border-l-2
    border-[rgba(220,255,235,0.8)]
    opacity-60
    blur-[0.2px]
    pointer-events-none
    z-[5]
  "
      />

      <div
        className="
    fixed bottom-3 right-3
    w-7 h-7
    border-b-2 border-r-2
    border-[rgba(220,255,235,0.8)]
    opacity-60
    blur-[0.2px]
    pointer-events-none
    z-[5]
  "
      /> */}

      {/* Top Left */}
      <div className="hud-top-left flex items-center max-lg:hidden">
        <span className="rec-dot" />
        <span>REC</span>
      </div>

      {/* Top Right */}
      {/* <div className="hud-top-right">
        <span>🔋 92%</span>
      </div> */}

      {/* Bottom Left */}
      <div className="hud-bottom-right flex flex-col items-end max-lg:hidden">
        <span>{formattedTime}</span>
        <span>{formattedDate}</span>
      </div>

      {/* Bottom Right */}
      {/* <div className="hud-bottom-right">30 FPS · 2K</div> */}
    </div>
  );
};

export default CameraHUD;
