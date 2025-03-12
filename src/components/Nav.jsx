import React from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";
import Button_3 from "./Button_3";

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

  const NavLink = ({ title, className }) => (
    <LinkScroll
      to={title}
      offset={-100}
      smooth
      className={`cursor-pointer transition-all duration-300 ${className}`}
    >
      // <Button_3>{title}</Button_3>
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 py-7 left-0 z-50 w-full transition-all duration-500",
        hasScrolled && "py-2 bg-black/80 backdrop-blur-[8px] text-cyan-300"
      )}
    >
      <div className="w-full">
        <ul className="nav-li group">
        <NavLink title="home" className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        <NavLink title="skills" className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        <NavLink title="projects" className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        <NavLink title="about" className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        <NavLink title="contact" className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        </ul>
      </div>  
    </header>
  );
};

export default Nav;
