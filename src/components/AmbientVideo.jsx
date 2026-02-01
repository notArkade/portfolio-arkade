import React, { useEffect, useState } from "react";
import dvd from "../assets/dvd.gif";

const AmbientVideo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={dvd}
      alt="CRT ambient"
      className={`
        absolute inset-0
        w-full h-full
        object-cover
        pointer-events-none
        z-0
        transition-opacity duration-[2500ms] ease-in-out
        ${visible ? "opacity-10" : "opacity-0"}
      `}
    />
  );
};

export default AmbientVideo;
