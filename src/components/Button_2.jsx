
import React from "react";
import useHoverTextEffect from "../text-animation";

const Button_2 = ({ href, onClick, children }) => {
  const headingRef = useHoverTextEffect();

  return href ? (
    <a
      href={href}
      className="text-4xl space-mono cursor-pointer uppercase p-2 border border-gray-700 rounded-md text-red-400 hover:text-gray-300  hover:bg-red-800"
    >
      <span 
      // ref={headingRef} 
      className="mx-2">{children}</span>
      {/* <span className="ml-2">{">>"}</span> */}
    </a>
  ) : (
    <button
      onClick={onClick}
      className="md:text-xl space-mono cursor-pointer p-4 border border-gray-700 rounded-xl text-red-800 hover:text-gray-300 hover:border-red-800 transition-all"
    >
      <span 
      // ref={headingRef} 
      className="mx-2">{children}</span>
      {/* <span className="ml-2">{">>"}</span> */}
    </button>
  );
};

export default Button_2;
