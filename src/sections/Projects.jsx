import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Element } from "react-scroll";
import { projects } from "../constants";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Projects = () => {
  return (
    <section className="relative bg-black backdrop-blur-[8px]">
      <Element name="projects" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />
        <div className="mt-20 p-6 md:p-0 rounded-2xl">
          {/* <h1 className="text-3xl md:text-4xl text-gray-500 space-mono mb-10 max-sm:text-center">
            Projects
          </h1> */}
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

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-79.75%"]);

  // Background: stay white until the very end, then turn black
  // const background = useTransform(
  //   scrollYProgress,
  //   [0, 0.95, 1], // transition happens only near the last card
  //   ["#ffffff", "#ffffff", "#000000"]
  // );

  // Text: stay black until the very end, then turn white
  // const textColor = useTransform(
  //   scrollYProgress,
  //   [0, 0.95, 1],
  //   ["#000000", "#000000", "#ffffff"]
  // );

  return (
    <motion.section
      ref={targetRef}
      className="relative h-[700vh]"
      // style={{ background }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          <div className="flex items-center justify-center">
            <h1 className="flex gap-4 justify-center items-center text-3xl md:text-4xl text-gray-500 space-mono mb-10 text-center mr-64">
              Projects
              <BsArrowUpRightCircleFill size={48} />
            </h1>

            <div className="flex gap-5">
              {projects.map((project) => (
                <Card project={project} key={project.id} />
              ))}
            </div>
            {/* <h1 className="flex gap-4 justify-center items-center text-3xl md:text-4xl text-gray-700 space-mono mb-10 text-center ml-80 whitespace-nowrap">
              More to come...
            </h1> */}
          </div>
        </motion.div>
      </div>
    </motion.section>
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
