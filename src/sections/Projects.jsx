import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Element } from "react-scroll";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section>
      <Element name="projects">
        <div className="container my-20 p-6 md:p-10 rounded-2xl">
          <h1 className="text-3xl md:text-4xl text-gray-500 space-mono mb-10 max-sm:text-center">
            Projects
          </h1>
          <HorizontalScrollCarousel />
        </div>
      </Element>
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {projects.map((project) => {
            return <Card project={project} key={project.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-[450px] w-[900px] overflow-hidden rounded-xl"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-contain transition-all duration-500 
                   filter grayscale group-hover:grayscale-0 
                   group-hover:scale-105"
      />
    </a>
  );
};

export default Projects;

