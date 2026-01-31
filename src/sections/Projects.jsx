import { motion, useMotionValue, animate } from "framer-motion";
import { Element } from "react-scroll";
import { useState } from "react";
import { projects } from "../constants";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";

const CARD_WIDTH = 920; // card width + gap
const GAP = 32;

const Projects = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  return (
    <Element name="projects">
      <section className="min-h-screen container mb-40 max-md:px-8">
        {/* Header */}
        <div className="flex gap-4 justify-items-center mb-10 text-gray-500">
          <BsArrowUpRightCircleFill size={28} />
          <h1 className="text-3xl md:text-xl space-mono text-center uppercase">
            Projects
          </h1>
        </div>

        <div>
          {projects.map((project) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div
                key={project.id}
                // onClick={() => navigate(`/projects/${project.id}`)}
                className="font-mono flex items-center border-[0.01px] border-gray-600 hover:text-[#7CFFB2] border-t-0 border-r-0 border-l-0 py-10 text-4xl group cursor-default"
              >
                <IoMdArrowDropright
                  className="text-[#7CFFB2] -translate-x-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                  size={32}
                />

                <h1 className="transition-transform duration-300 -translate-x-6 group-hover:translate-x-1">
                  {project.title}
                </h1>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
