import React from "react";
import { Element } from "react-scroll";
import Button_2 from "../components/Button_2";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section>
      <Element name="projects">
        <div className="container my-20 p-10 rounded-2xl bg-gradient-to-br from-[#000333] via-[#000000] to-[#000333]">
          <h1 className="text-4xl font-bold text-gray-200 space-mono mb-5">Projects</h1>
          <div className="grid grid-cols-2 gap-4">
            {projects.map(({ id, title, description}) => (
              <div className="relative border-3 border-gray-900 bg-gray-950 h-[300px] rounded-2xl p-5 shadow-lg">
                <h2 className="text-2xl font-semibold uppercase text-gray-300 mb-5">
                  {title}
                </h2>
                <p className="text-lg text-gray-600 my-2 mb-5 w-full">
                  {description}
                </p>
                <div className="absolute bottom-5 right-5">
                  <Button_2 href="">View Project</Button_2>
                </div>
              </div>
            ))}
          </div>
        </div>
          <div className="flex items-center justify-center mb-20">
            <Button_2 href="#">View Resume</Button_2>
          </div>
      </Element>
    </section>
  );
};

export default Projects;
