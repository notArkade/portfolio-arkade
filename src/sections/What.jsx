import { useState } from "react";
import monkey from "../assets/monkey-calling.gif";
import Marquee from "../components/MarqueeEffect/Marquee";
import AsciiMotionAnimation from "../components/ascii-motion";
import { useCallback, useRef } from "react";

const What = () => {
  const [hovered, setHovered] = useState(false);

  const playbackRef = useRef(null);
  const handleReady = useCallback((api) => {
    playbackRef.current = api;
  }, []);

  return (
    <>
      <div className="relative group text-center my-20 mb-40 cursor-default select-none">
        <div className="text-gray-600 text-3xl font-bold inter flex justify-center items-center">
          <span className="transition-transform duration-300 group-hover:-translate-x-66 group-hover:scale-200">
            What&apos;s happe
          </span>

          <span className="transition-transform duration-300 group-hover:translate-x-48 group-hover:scale-200">
            ning here?
          </span>
        </div>

        <img
          src={monkey}
          alt="popup"
          className="
        pointer-events-none
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-32
        opacity-0 scale-0
        transition-all duration-200 ease-out
        group-hover:opacity-100
        group-hover:scale-200
        "
        />
      </div>
      {/* <div className="grid grid-cols-2 text-center text-gray-400 font-bold">
        <p className="text-9xl tracking-[-1.2rem]">WO</p>
        <p className="text-9xl tracking-[-1.2rem]">RK</p>
      </div> */}

      <div className="mb-20">
        <AsciiMotionAnimation
          showControls={false}
          autoPlay={true}
          onReady={handleReady}
        />
        {/* <button onClick={() => playbackRef.current?.play()}>
          Play from code
        </button> */}
      </div>
    </>
  );
};

export default What;
