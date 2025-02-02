import React from "react";

const Button = ({ href, onClick, children }) => {
  return href ? (
    <a
      href={href}
      className="text-2xl space-mono cursor-pointer uppercase hover:text-black hover:font-medium transition-all duration-300 hover:bg-cyan-300 p-2 hover:px-4 [clip-path:polygon(0%_0%,100%_0%,100%_80%,90%_100%,0%_100%)]"
    >
      <span>{children}</span>
      <span className="ml-2">{">>"}</span>
    </a>
  ) : (
    <button
      onClick={onClick}
      className="text-2xl space-mono cursor-pointer uppercase hover:text-black hover:font-medium transition-all duration-300 hover:bg-cyan-300 p-2 hover:px-4 [clip-path:polygon(0%_0%,100%_0%,100%_80%,90%_100%,0%_100%)]"
    >
      <span>{children}</span>
      <span className="ml-2">{">>"}</span>
    </button>
  );
};

export default Button;
