import React from "react";
import { Element } from "react-scroll";
import Button_2 from "../components/Button_2";
import { projects } from "../constants";
import { Tooltip } from "react-tooltip";

const Projects = () => {
  return (
    <section>
      <Element name="projects">
        <div className="container my-20 p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#000333] via-[#000000] to-[#000333]">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-200 space-mono mb-5 max-sm:text-center">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map(({ id, title, description}) => (
              <div className="relative border-2 border-gray-900 bg-gray-950 rounded-2xl p-5 shadow-lg min-h-[250px] md:min-h-[300px] lg:min-h-[300px] flex flex-col justify-between">
                <h2 className="text-xl md:text-2xl font-semibold uppercase text-gray-300 mb-3">
                  {title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-4 flex-grow">
                  {description}
                </p>
                <div className="mt-auto flex justify-end">
                  <Button_2 href="">View Project</Button_2>
                </div>
              </div>
            ))}
          </div>
        </div>
          <div className="flex items-center justify-center mt-10">
            <Button_2 href="#">View Resume</Button_2>
          </div>
      </Element>
    </section>
  );
};

export default Projects;
