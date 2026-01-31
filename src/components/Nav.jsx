import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";
import Button_3 from "./Button_3";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";

const Nav = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ title, className, offset = 0, onClick }) => (
    <LinkScroll
      to={title}
      offset={offset}
      smooth
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 font-bold hover:text-white ${className}`}
    >
      <Button_3>{title}</Button_3>
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-900 select-none",
        hasScrolled && "bg-black/80 backdrop-blur-[20px]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 items-center">

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12 text-gray-500 group justify-self-center">
          <NavLink title="home" offset={-280} />
          <NavLink title="about" offset={-200} />
          <NavLink title="skills" offset={-280} />
          <NavLink title="projects" offset={-200} />
          <NavLink title="contact" />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden justify-self-end text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaRegWindowClose size={28} /> : <RxHamburgerMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-500 bg-[#111]",
          isOpen ? "min-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col items-center gap-8 uppercase py-24 text-gray-400">
          <NavLink title="home" offset={-280} onClick={() => setIsOpen(false)} />
          <NavLink title="about" offset={-200} onClick={() => setIsOpen(false)} />
          <NavLink title="skills" offset={-280} onClick={() => setIsOpen(false)} />
          <NavLink title="projects" offset={-200} onClick={() => setIsOpen(false)} />
          <NavLink title="contact" onClick={() => setIsOpen(false)} />
        </ul>
      </div>
    </header>
  );
};

export default Nav;

