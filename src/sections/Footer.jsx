import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <Element name="contact">
      <footer>
        <div>
          <ul className="flex flex-1 items-center px-40 justify-between mx-auto py-20 bg-black z-2 space-mono ">
            <a href="mailto:arkadip671@gmail.com">
              <li className="text-4xl uppercase border-b-0 border-l-2 text-gray-500 hover:text-gray-100 p-4 neon-flicker">
                Let's create together
              </li>
            </a>
            <div className="text-3xl flex flex-col leading-16">
              <a
                href="https://www.linkedin.com/in/arkadip-das-628a02278/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex text-gray-500 hover:text-gray-100 justify-center gap-4 items-center">
                  <li>LinkedIn</li>
                  <GoArrowUpRight size={40} />
                </div>
              </a>
              <a
                href="https://github.com/notArkade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex text-gray-500 hover:text-gray-100 justify-center gap-4 items-center">
                  <li>Github</li>
                  <GoArrowUpRight size={40} />
                </div>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex text-gray-500 hover:text-gray-100 justify-center gap-4 items-center">
                  <li>Instagram</li>
                  <GoArrowUpRight size={40} />
                </div>
              </a>
            </div>
          </ul>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
