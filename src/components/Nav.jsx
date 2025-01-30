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
      className="cursor-pointer text-xl tracking-[-0.07em] glow-text"
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
