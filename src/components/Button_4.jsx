
import React from "react";
import useHoverTextEffect from "../text-animation";

const Button_4 = ({ href, onClick, children }) => {
  const headingRef = useHoverTextEffect();

  return href ? (
    <a
      href={href}
      className="text-4xl space-mono cursor-pointer uppercase p-2 border border-gray-700 rounded-md text-[#7CFFB2] hover:text-gray-300 hover:bg-red-800"
    >
      <span 
      // ref={headingRef} 
      className="mx-2">{children}</span>
      {/* <span className="ml-2">{">>"}</span> */}
    </a>
  ) : (
    <button
      onClick={onClick}
      className="md:text-xl space-mono cursor-pointer p-4 border border-[#7CFFB2] rounded-md text-[#7CFFB2] hover:bg-[#7CFFB2] bg-transparent hover:text-gray-700 hover:border-gray-700 transition-all max-xl:w-full"
    >
      <span 
      // ref={headingRef} 
      className="mx-2">{children}</span>
      {/* <span className="ml-2">{">>"}</span> */}
    </button>
  );
};

export default Button_4;
