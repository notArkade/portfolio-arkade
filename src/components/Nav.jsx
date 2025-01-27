import React from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

const Nav = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({title}) => (
    <LinkScroll>
    </LinkScroll>
  )

  return (
    <header
      className={clsx(
        "fixed top-7 left-0 z-50 w-full transition-all duration-500",
        hasScrolled && "py-2 bg-black/10 backdrop-blur-[8px]"
      )}
    >
      <div>
        <h1 className="text-white font-bold text-4xl">Hello</h1>
      </div>
    </header>
  );
};

export default Nav;
