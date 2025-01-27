import React from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

const Nav = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      smooth
      className="text-white cursor-pointer text-2xl tracking-[-0.07em]"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 pt-10 left-0 z-50 w-full transition-all duration-500",
        hasScrolled && "py-2 bg-black/10 backdrop-blur-[8px]"
      )}
    >
      <div className="container">
        <li className="nav-li">
          <NavLink title="// home" />
          <NavLink title="// projects" />
          <NavLink title="// about" />
          <NavLink title="// contact" />
        </li>
      </div>
    </header>
  );
};

export default Nav;
