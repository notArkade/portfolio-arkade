import React from "react";

const Button = ({href, onClick, children}) => {
    const Inner = () => (
        <>
        <span>
            {children}
        </span>
        </>
    )
  return (
        <button className="text-2xl cursor-pointer uppercase hover:text-black hover:font-medium transition-all duration-300 hover:bg-cyan-300 p-2 hover:px-4 [clip-path:polygon(0%_0%,100%_0%,100%_80%,90%_100%,0%_100%)]" onClick={onClick}>
            <Inner />
        </button>
    
  );
};

export default Button;

{/* <p className="ml-auto flex flex-row-reverse">
  <a className="text-2xl cursor-pointer uppercase hover:text-black hover:font-medium transition-all duration-300 hover:bg-cyan-300 p-2 hover:px-4 [clip-path:polygon(0%_0%,100%_0%,100%_80%,90%_100%,0%_100%)]">
    check stats {">>"}
  </a>
</p> */}