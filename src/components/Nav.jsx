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

  const NavLink = ({ title, className, offset = 0 }) => (
    <LinkScroll
      to={title}
      offset={offset}
      smooth
      className={`cursor-pointer transition-all duration-300 font-bold hover:text-white ${className}`}
    >
      <Button_3>{title}</Button_3>
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 py-7 left-0 z-50 w-full transition-all duration-500 text-gray-500",
        hasScrolled && "py-2 bg-black/80 backdrop-blur-[8px] text-green-500"
      )}
    >
      <div className="w-full">
        <ul className="nav-li group">
        <NavLink title="home" offset={-280} className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        <NavLink title="skills" offset={-280} className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        <NavLink title="about" offset={1000} className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        <NavLink title="projects" className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        <NavLink title="contact" className="peer opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-400" />
        </ul>
      </div>  
    </header>
  );
};

export default Nav;
