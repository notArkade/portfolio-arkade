import React from "react";
import crt from "../assets/giphy.gif";

const AmbientVideo = () => {
  return (
    <img
      src={crt}
      alt="CRT ambient"
      className="
        absolute inset-0
        w-full h-full
        object-cover
        opacity-5
        pointer-events-none
        z-0
      "
    />
  );
};

export default AmbientVideo;
