import React, { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

  return (
    <header className={clsx("fixed top-5 left-0 z-50 w-full transition-all duration-500", 
        hasScrolled && "py-2 bg-black/10 backdrop-blur-[8px]"
    )}>
      <div>
        <h1 className="text-white font-bold text-4xl">Hello</h1>
      </div>
    </header>
  );
};

export default Header;
