import { motion, useMotionValue, animate } from "framer-motion";
import { Element } from "react-scroll";
import { useState } from "react";
import { projects } from "../constants";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";

import { useNavigate } from "react-router-dom";

const CARD_WIDTH = 920; // card width + gap
const GAP = 32;

const Projects = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  return (
    <section className="min-h-screen container mb-40">
      <Element name="projects">
        {/* Header */}
        <div className="flex gap-4 justify-items-center mb-10 text-gray-500">
          <BsArrowUpRightCircleFill size={28} />
          <h1 className="text-3xl md:text-xl space-mono text-center uppercase">
            Projects
          </h1>
        </div>

        <div className="">
          {projects.map((project) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div
                key={project.id}
                // onClick={() => navigate(`/projects/${project.id}`)}
                className="font-mono border-[0.01px] border-gray-600 border-t-0 border-r-0 border-l-0 py-10 text-4xl group cursor-pointer"
              >
                <h1 className="transition-transform duration-500 group-hover:translate-x-4">
                  {project.title}
                </h1>
              </div>
            </a>
          ))}
        </div>
      </Element>
    </section>
  );
};

export default Projects;
