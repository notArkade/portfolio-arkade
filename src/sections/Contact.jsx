import React from "react";
import { Element } from "react-scroll";
import { socials } from "../constants";

const Contact = () => {
  return (
    <section>
      <Element name="contact">
        <div className="flex justify-center items-center p-10 space-x-2">
          {socials.map(({ id, url, Icon, site }) => (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon size={32} className="text-gray-500 hover:text-gray-300 transition-all duration-300 mx-[20px]" title={site} />
              </a>
          ))}
        </div>
      </Element>
    </section>
  );
};

export default Contact;
