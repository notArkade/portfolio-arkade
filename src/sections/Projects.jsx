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
    <div
      key={project.id}
      className="group relative h-[450px] w-[900px] overflow-hidden bg-black rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-all duration-500 
                   filter grayscale group-hover:grayscale-0 
                   group-hover:scale-105"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {project.title}
        </p>
      </div> */}
    </div>
  );
};

export default Projects;

// const cards = [
//   {
//     url: "/imgs/abstract/1.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];

// import React, { useState, useEffect, useRef } from "react";
// import { Element } from "react-scroll";
// import Button_2 from "../components/Button_2";
// import { projects } from "../constants";
// import { motion } from "framer-motion";
// import Rings from "../components/Rings";

// const Projects = () => {
//   const [currentProject, setCurrentProject] = useState(0);
//   const [isScrollLocked, setIsScrollLocked] = useState(false);
//   const sectionRef = useRef(null);
//   const scrollTimeoutRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = (e) => {
//       if (!sectionRef.current) return;

//       const section = sectionRef.current;
//       const rect = section.getBoundingClientRect();
//       const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

//       if (isInView && !isScrollLocked) {
//         // Lock scrolling when entering projects section
//         setIsScrollLocked(true);
//         e.preventDefault();

//         // Clear any existing timeout
//         if (scrollTimeoutRef.current) {
//           clearTimeout(scrollTimeoutRef.current);
//         }

//         // Determine scroll direction and move to next/previous project
//         const deltaY = e.deltaY;
//         if (deltaY > 0 && currentProject < projects.length - 1) {
//           // Scrolling down - next project
//           setCurrentProject(prev => prev + 1);
//         } else if (deltaY < 0 && currentProject > 0) {
//           // Scrolling up - previous project
//           setCurrentProject(prev => prev - 1);
//         } else if (deltaY > 0 && currentProject === projects.length - 1) {
//           // At last project, allow scroll to continue
//           scrollTimeoutRef.current = setTimeout(() => {
//             setIsScrollLocked(false);
//           }, 300);
//         }
//       } else if (!isInView && isScrollLocked) {
//         // Unlock when leaving section
//         setIsScrollLocked(false);
//       }
//     };

//     const handleKeyDown = (e) => {
//       if (!isScrollLocked) return;

//       if (e.key === 'ArrowRight' && currentProject < projects.length - 1) {
//         setCurrentProject(prev => prev + 1);
//       } else if (e.key === 'ArrowLeft' && currentProject > 0) {
//         setCurrentProject(prev => prev - 1);
//       }
//     };

//     // Add event listeners with passive: false to allow preventDefault
//     document.addEventListener('wheel', handleScroll, { passive: false });
//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('wheel', handleScroll);
//       document.removeEventListener('keydown', handleKeyDown);
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }
//     };
//   }, [currentProject, isScrollLocked]);

//   // Reset to first project when section comes into view from top
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setCurrentProject(0);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative h-screen overflow-hidden">
//       <Element name="projects">
//         <Rings
//           position1="top-[-70px] right-[-100px]"
//           position2="bottom-[-70px] left-[-100px]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

//         <div className="container h-full flex flex-col justify-center p-6 md:p-10">
//           <h1 className="text-3xl md:text-4xl text-white space-mono mb-10 text-center">
//             Projects
//           </h1>

//           {/* Progress Indicator */}
//           <div className="flex justify-center mb-8">
//             <div className="flex space-x-2">
//               {projects.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === currentProject ? 'bg-purple-400 w-8' : 'bg-gray-600'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Project Cards Container */}
//           <div className="relative flex-1 flex items-center justify-center">
//             <div className="relative w-full max-w-6xl h-96">
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={project.id}
//                   className={`absolute inset-0 ${
//                     index === currentProject ? 'pointer-events-auto' : 'pointer-events-none'
//                   }`}
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{
//                     opacity: index === currentProject ? 1 : 0,
//                     x: index === currentProject ? 0 : index < currentProject ? -100 : 100,
//                     scale: index === currentProject ? 1 : 0.8
//                   }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                 >
//                   <div className="h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
//                     {/* Project Header */}
//                     <div>
//                       <div className="flex items-center justify-between mb-6">
//                         <h2 className="text-2xl md:text-3xl font-bold text-white">
//                           {project.title}
//                         </h2>
//                         <div className="text-sm text-purple-300">
//                           {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
//                         </div>
//                       </div>

//                       {/* Tech Stack */}
//                       <div className="flex flex-wrap gap-2 mb-6">
//                         {project.techstack.split(', ').map((tech, techIndex) => (
//                           <span
//                             key={techIndex}
//                             className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Project Content */}
//                     <div className="flex-1 flex items-center">
//                       <div className="grid md:grid-cols-2 gap-8 w-full">
//                         {/* Description */}
//                         <div className="space-y-4">
//                           <p className="text-gray-300 leading-relaxed">
//                             {project.description}
//                           </p>

//                           <a
//                             href={project.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 group"
//                           >
//                             <span>View Live Project</span>
//                             <svg
//                               className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                             </svg>
//                           </a>
//                         </div>

//                         {/* Project Image */}
//                         <div className="flex items-center justify-center">
//                           {project.image && (
//                             <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
//                               <img
//                                 src={project.image}
//                                 alt={project.title}
//                                 className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
//                               />
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Hint */}
//           <div className="text-center text-gray-400 text-sm mt-8">
//             <p>Scroll to navigate through projects • Use arrow keys</p>
//             {currentProject === projects.length - 1 && (
//               <p className="text-purple-400 mt-2">Continue scrolling to proceed</p>
//             )}
//           </div>
//         </div>
//       </Element>
//     </section>
//   );
// };

// export default Projects;

// import React, { useState } from "react";
// import { Element } from "react-scroll";
// import Button_2 from "../components/Button_2";
// import { projects } from "../constants";
// import { Tooltip } from "react-tooltip";
// import { motion, AnimatePresence } from "framer-motion";
// import Rings from "../components/Rings";

// const Projects = () => {
//   const [expandedProject, setExpandedProject] = useState(null);

//   const toggleProject = (projectId) => {
//     setExpandedProject(expandedProject === projectId ? null : projectId);
//   };

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       <Element name="projects">
//         <Rings
//           position1="top-[-70px] right-[-100px]"
//           position2="bottom-[-70px] left-[-100px]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

//         <div className="container my-20 p-6 md:p-10 rounded-2xl">
//           <h1 className="text-3xl md:text-4xl text-white space-mono mb-10 max-sm:text-center">
//             Projects
//           </h1>

//           <div className="space-y-4">
//             {projects.map((project) => (
//               <motion.div
//                 key={project.id}
//                 className="relative bg-gradient-to-r from-neutral-600 to-neutral-700 rounded-xl overflow-hidden shadow-lg cursor-pointer"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Header - Always Visible */}
//                 <div
//                   className="flex items-center justify-between p-4 md:p-6"
//                   onClick={() => toggleProject(project.id)}
//                 >
//                   <div className="flex items-center justify-between w-full">
//                     <div>
//                       <h3 className="text-lg md:text-xl font-semibold text-white">
//                         {project.title}
//                       </h3>
//                       <p className="text-sm text-purple-200 mt-1">
//                         {project.techstack}
//                       </p>
//                     </div>

//                     <div className="flex items-center space-x-4">
//                       <span className="text-sm text-purple-200 hidden md:block">
//                         2019 - 2024
//                       </span>

//                       <motion.div
//                         animate={{
//                           rotate: expandedProject === project.id ? 45 : 0,
//                         }}
//                         transition={{ duration: 0.2 }}
//                         className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-xl font-bold"
//                       >
//                         +
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Expandable Content */}
//                 <AnimatePresence>
//                   {expandedProject === project.id && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-4 pb-4 md:px-6 md:pb-6">
//                         <div className="bg-black bg-opacity-20 rounded-lg p-4 md:p-6">
//                           <div className="flex flex-col md:flex-row gap-6">
//                             {/* Project Image */}
//                             {project.image && (
//                               <div className="md:w-1/3 flex-shrink-0">
//                                 <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full object-contain transition-all duration-300 group-hover:scale-105"
//                       />
//                               </div>
//                             )}

//                             {/* Project Details */}
//                             <div className="flex-1">
//                               <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
//                                 {project.description}
//                               </p>

//                               <div className="flex flex-wrap items-center gap-2 mb-4">
//                                 {project.techstack
//                                   .split(", ")
//                                   .map((tech, index) => (
//                                     <span
//                                       key={index}
//                                       className="px-3 py-1 bg-green-500/30 bg-opacity-30 text-purple-200 text-xs rounded-full"
//                                     >
//                                       {tech}
//                                     </span>
//                                   ))}
//                               </div>

//                               <div className="flex items-center justify-between">
//                                 <a
//                                   href={project.link}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="inline-flex items-center text-purple-300 hover:text-white text-sm transition-colors duration-200"
//                                   onClick={(e) => e.stopPropagation()}
//                                 >
//                                     <p className="mr-2 px-4 py-2 text-sm uppercase text-green-500 bg-green-500/10 border rounded-3xl hover:bg-green-500/50 space-mono">
//                                       {"//"} view project{" "}
//                                     </p>
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center justify-center my-10">
//           <Button_2>
//             <a
//               href="https://drive.google.com/file/d/1FSqjmsP0kD-_F9cK2OOFUWW_zrn6psN0/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Resume
//             </a>
//           </Button_2>
//         </div>
//       </Element>
//     </section>
//   );
// };

// export default Projects;

// import React from "react";
// import { Element } from "react-scroll";
// import Button_2 from "../components/Button_2";
// import { projects } from "../constants";
// import { Tooltip } from "react-tooltip";
// import { motion } from "framer-motion";
// import Rings from "../components/Rings";

// const Projects = () => {
//   return (
//     <section className="relative h-screen overflow-hidden">
//       <Element name="projects">
//         <Rings
//           position1="top-[-70px] right-[-100px]"
//           position2="bottom-[-70px] left-[-100px]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none" /> */}
//         {/* <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black pointer-events-none" /> */}
//         <div className="container my-20 p-6 md:p-10 rounded-2xl">
//           {/* bg-gradient-to-br from-[#000333] via-[#000000] to-[#000333] */}
//           <h1 className="text-3xl md:text-4xl text-white space-mono mb-10 max-sm:text-center">
//             Projects
//           </h1>
//           <div>
//             {projects.map(({ title, id, description }) => (
//               <div
//                 className="relative mb-4 bg-neutral-700/30 backdrop-blur-3xl rounded-md waves bg-center bg-cover"
//                 key={id}
//               >
//                 {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" /> */}
//                 <p className="text-2xl p-4">{title}</p>
//                 <p className="p-4">{description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex items-center justify-center my-10">
//           <Button_2>
//             <a
//               href="https://drive.google.com/file/d/1FSqjmsP0kD-_F9cK2OOFUWW_zrn6psN0/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Resume
//             </a>
//           </Button_2>
//         </div>
//       </Element>
//     </section>
//   );
// };

// export default Projects;

{
  /* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div> */
}
