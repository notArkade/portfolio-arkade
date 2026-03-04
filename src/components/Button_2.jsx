import React from "react";

const Button_2 = ({ href, onClick, children }) => {

  return href ? (
    <a
      href={href}
      className="text-4xl space-mono cursor-pointer uppercase p-2 border border-gray-700 rounded-md text-[#7CFFB2] hover:text-gray-300  hover:bg-red-800"
    >
      <span 
      // ref={headingRef} 
      className="mx-2">{children}</span>
      {/* <span className="ml-2">{">>"}</span> */}
    </a>
  ) : (
    <button
      onClick={onClick}
      className="md:text-xl space-mono cursor-pointer p-4 border border-gray-300 rounded-md text-gray-300 hover:text-[#7CFFB2] hover:border-[#7CFFB2] transition-all max-xl:w-full"
    >
      <span 
      // ref={headingRef} 
      className="mx-2">{children}</span>
      {/* <span className="ml-2">{">>"}</span> */}
    </button>
  );
};

export default Button_2;
