import { useState } from "react";
import monkey from "../assets/monkey-calling.gif";

const What = () => {
  const [hovered, setHovered] = useState(false);

  return (
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
  );
};

export default What;
