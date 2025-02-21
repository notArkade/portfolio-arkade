import React from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";

const Projects = () => {
  return (
    <section>
      <Element name="projects">
        <div className="container my-20 p-10 border-3 border-gray-600 rounded-2xl">
          <h1 className="text-4xl font-bold space-mono mb-5">Projects</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-600 p-4 rounded-lg">Item</div>
            <div className="bg-gray-600 p-4 rounded-lg">Item</div>
            <div className="bg-gray-600 p-4 rounded-lg">Item</div>
            <div className="bg-gray-600 p-4 rounded-lg">Item</div>
          </div>
        </div>
          <div className="flex items-center justify-center mb-20">
            <Button href="#">View Resume</Button>
          </div>
      </Element>
    </section>
  );
};

export default Projects;
