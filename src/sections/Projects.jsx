import React from "react";
import { Element } from "react-scroll";
import Button_2 from "../components/Button_2";
import { projects } from "../constants";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section>
      <Element name="projects">
        <div className="container my-20 p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#000333] via-[#000000] to-[#000333]">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-200 space-mono mb-10 max-sm:text-center">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              // First project spans 2 columns in the first row
              const isLarge1 = index === 0;
              // Fourth project spans 2 columns in the second row
              const isLarge2 = index === 3;

              return (
                <motion.a
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.05,
                    },
                  }}
                  viewport={{ 
                    once: true, 
                  //   amount: 0.5 
                  }}
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative bg-transparent border border-black hover:border-gray-800 duration-300 rounded-xl overflow-hidden shadow-lg group transition-all transform ${
                    isLarge1 || isLarge2 ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  <div className="flex items-center justify-center overflow-hidden">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-contain transition-all duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="relative p-6 bg-gray-950">
                    <h2 className="text-xl font-semibold text-gray-200 mb-2">
                      {project.title}
                    </h2>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 text-sm mt-2 group-hover:-translate-y-5 group-hover:opacity-0 transition-all duration-300">
                        {project.techstack}
                      </p>
                      <div className="absolute flex items-center text-sm text-gray-400 mt-4 w-full opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
                        <p className="mr-2 text-sm uppercase text-red-400 space-mono">
                          {"//"} view project{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center my-10">
          <Button_2 href="#">View Resume</Button_2>
        </div>
      </Element>
    </section>
  );
};

export default Projects;
