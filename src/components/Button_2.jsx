import React from "react";
import useHoverTextEffect from "../text-animation";

const Button_2 = ({ href, onClick, children }) => {
  const headingRef = useHoverTextEffect();

  return href ? (
    <a
      href={href}
      className="text-sm space-mono cursor-pointer uppercase p-2"
    >
      <span 
      // ref={headingRef} 
      className="hover:mx-2 hover:tracking-[0.3em] transition-all duration-300">{children}</span>
      <span className="hover:mx-2 ml-2 transition-all duration-600">{">>"}</span>
    </a>
  ) : (
    <button
      onClick={onClick}
      className="text-sm space-mono cursor-pointer uppercase p-2"
    >
      <span 
      // ref={headingRef} 
      className="hover:mx-2 hover:tracking-[0.3em] transition-all duration-300">{children}</span>
      <span className="hover:mx-2 ml-2 transition-all duration-600">{">>"}</span>
    </button>
  );
};

export default Button_2;
