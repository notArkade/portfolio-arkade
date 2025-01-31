import React from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

const Nav = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      to={title}
      offset={-100}
      smooth
      className="cursor-pointer p-2 text-xl tracking-[-0.07em] hover:bg-cyan-300 transition-all duration-300 hover:font-medium hover:text-black hover:px-4 [clip-path:polygon(0%_0%,100%_0%,100%_80%,90%_100%,0%_100%)]"
    >
      // {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 py-7 left-0 z-50 w-full transition-all duration-500",
        hasScrolled && "py-2 bg-black/80 backdrop-blur-[8px]"
      )}
    >
      <div className="w-full">
        <ul className="nav-li">
          <NavLink title="home" />
          <NavLink title="skills" />
          <NavLink title="projects" />
          <NavLink title="about" />
          <NavLink title="contact" />
        </ul>
      </div>  
    </header>
  );
};

export default Nav;
