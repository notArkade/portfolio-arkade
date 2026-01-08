// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import { Element } from "react-scroll";
// import { projects } from "../constants";
// import { BsArrowUpRightCircleFill } from "react-icons/bs";

// const Projects = () => {
//   return (
//     <section className="relative bg-black backdrop-blur-[8px]">
//       <Element name="projects" className="relative">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />
//         <div className="mt-20 p-6 md:p-0 rounded-2xl">
//           {/* <h1 className="text-3xl md:text-4xl text-gray-500 space-mono mb-10 max-sm:text-center">
//             Projects
//           </h1> */}
//           <HorizontalScrollCarousel />
//         </div>
//       </Element>
//     </section>
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["10%", "-82.12%"]);

//   // Background: stay white until the very end, then turn black
//   // const background = useTransform(
//   //   scrollYProgress,
//   //   [0, 0.95, 1], // transition happens only near the last card
//   //   ["#ffffff", "#ffffff", "#000000"]
//   // );

//   // Text: stay black until the very end, then turn white
//   // const textColor = useTransform(
//   //   scrollYProgress,
//   //   [0, 0.95, 1],
//   //   ["#000000", "#000000", "#ffffff"]
//   // );

//   return (
//     <motion.section
//       ref={targetRef}
//       className="relative h-[100vh]"
//       // style={{ background }}
//     >
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <div style={{ x }} className="flex gap-10">
//           <div className="flex items-center justify-center">
//             <h1 className="flex gap-4 justify-center items-center text-3xl md:text-4xl text-gray-500 space-mono mb-10 text-center ml-90 mr-64">
//               Projects
//               <BsArrowUpRightCircleFill size={48} />
//             </h1>

//             <div className="flex gap-5">
//               {projects.map((project) => (
//                 <Card project={project} key={project.id} />
//               ))}
//             </div>
//             {/* <h1 className="flex gap-4 justify-center items-center text-3xl md:text-4xl text-gray-700 space-mono mb-10 text-center ml-80 whitespace-nowrap">
//               More to come...
//             </h1> */}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// const Card = ({ project }) => {
//   return (
//     <a
//       href={project.link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="group relative h-[450px] w-[900px] overflow-hidden rounded-xl"
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-full w-full object-contain transition-all duration-500
//                    filter grayscale group-hover:grayscale-0
//                    group-hover:scale-105"
//       />
//     </a>
//   );
// };

// export default Projects;

import { motion, useMotionValue, animate } from "framer-motion";
import { Element } from "react-scroll";
import { useState } from "react";
import { projects } from "../constants";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";

const CARD_WIDTH = 920; // card width + gap
const GAP = 32;

const Projects = () => {
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);

  const maxIndex = projects.length - 1;
  const maxX = -maxIndex * (CARD_WIDTH + GAP);

  const slideTo = (i) => {
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);
    animate(x, -clamped * (CARD_WIDTH + GAP), {
      type: "spring",
      stiffness: 120,
      damping: 20,
    });
  };

  return (
    <section className="bg-black py-24 overflow-hidden h-[100vh]">
      <Element name="projects">
        {/* Header */}
        <h1 className="flex gap-4 justify-center items-center text-3xl md:text-4xl text-gray-500 space-mono mb-10 text-center ml-90 mr-64">
          Projects
          <BsArrowUpRightCircleFill size={42} />
        </h1>

        {/* Carousel */}
        <div className="relative max-w-full">
          {/* Left Arrow */}
          <button
            onClick={() => slideTo(index - 1)}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition"
          >
            <BsArrowLeftCircleFill size={42} />
          </button>

          {/* Track */}
          <motion.div
            className="flex gap-8 px-24 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: maxX, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              const newIndex = Math.round(-x.get() / (CARD_WIDTH + GAP));
              slideTo(newIndex);
            }}
          >
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={() => slideTo(index + 1)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition"
          >
            <BsArrowRightCircleFill size={42} />
          </button>
        </div>

        {/* Slider */}
        {/* <div className="mt-10 flex justify-center">
        <input
          type="range"
          min={0}
          max={maxIndex}
          value={index}
          onChange={(e) => slideTo(Number(e.target.value))}
          className="w-[300px] accent-gray-500"
          />
          </div> */}
      </Element>
    </section>
  );
};

const Card = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-[450px] w-[900px]
        shrink-0 overflow-hidden rounded-xl"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-contain
          transition-all duration-500
          grayscale group-hover:grayscale-0
          group-hover:scale-105"
      />
    </a>
  );
};

export default Projects;
