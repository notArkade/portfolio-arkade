// import React from "react";
// import { Element } from "react-scroll";
// import { useRef, useState, useEffect } from "react";

// const About = () => {
//   const textRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const mainText =
//     "Hello there, I am Arkadip, a college student pursuing a degree in o wait what the...this was not supposed to happen, currently learning React and expanding my skills in web development.";
//   const smallText = "ABOUT ME";
//   const buttonText = "// KILL SWITCH";

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!textRef.current) return;

//       const element = textRef.current;
//       const rect = element.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Calculate progress based on element position
//       const elementTop = rect.top;
//       const elementHeight = rect.height;

//       // Start animation when element is in view
//       const startPoint = windowHeight;
//       const endPoint = -elementHeight;

//       if (elementTop <= startPoint && elementTop >= endPoint) {
//         const progress = (startPoint - elementTop) / (startPoint - endPoint);
//         setScrollProgress(Math.max(0, Math.min(1, progress)));
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const renderAnimatedText = (text, isTitle = false) => {
//     const letters = text.split("");
//     const totalLetters = letters.length;

//     return letters.map((letter, index) => {
//       const letterProgress = scrollProgress * totalLetters;
//       const isActive = letterProgress >= index;
//       const opacity = Math.max(0, Math.min(1, letterProgress - index));

//       return (
//         <span
//           key={index}
//           className={`inline-block transition-all duration-300 ${
//             isTitle ? "text-4xl md:text-5xl lg:text-4xl" : "text-sm"
//           }`}
//           style={{
//             color: isActive ? "#ffffff" : "#22c55e/50",
//             opacity: opacity,
//             transform: `translateY(${isActive ? "0px" : "50px"})`,
//           }}
//         >
//           {letter === " " ? "\u00A0" : letter}
//         </span>
//       );
//     });
//   };

//   // Logo component
//   const Logo = () => (
//     <div className="w-48 h-48 relative flex-shrink-0">
//       <div className="absolute top-0 left-0 w-20 h-20 bg-gray-800 rounded-tr-full"></div>
//       <div className="absolute top-0 right-0 w-20 h-20 bg-gray-700 rounded-bl-full"></div>
//       <div className="absolute bottom-0 left-0 w-20 h-20 bg-gray-600 rounded-br-full"></div>
//       <div className="absolute bottom-0 right-0 w-20 h-20 bg-gray-500 rounded-tl-full"></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full"></div>
//     </div>
//   );

//   return (
//     <section className="relative min-h-screen hex p-8">
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
//       <Element name="about">

//         {/* Main text animation section */}
//         <section
//           ref={textRef}
//           className="min-h-screen flex items-center justify-center px-8 py-16"
//         >
//           <div className="max-w-6xl mx-auto flex items-start gap-16 sticky">
//             {/* Logo */}
//             {/* <Logo />z */}

//             {/* Text content */}
//             <div className="flex-1 space-y-8">
//               {/* Small text */}
//               <div className="tracking-widest font-light text-white/60 space-mono select-none">
//                 {renderAnimatedText(smallText)}
//               </div>

//               {/* Main animated text */}
//               <div className="font-extralight leading-tight tracking-[0.2em] select-none inter">
//                 {renderAnimatedText(mainText, true)}
//               </div>

//               {/* Button */}
//               <div className="pt-8">
//                 <button className="px-8 py-3 border border-red-500 text-red-500 tracking-[0.8em] text-sm hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300">
//                   {buttonText}
//                 </button>
//               </div>

//               {/* Progress indicator */}
//               <div className="pt-4">
//                 <div className="w-full bg-gray-700 rounded-full h-1">
//                   <div
//                     className="bg-red-500 h-1 rounded-full transition-all duration-100"
//                     style={{ width: `${scrollProgress * 100}%` }}
//                   />
//                 </div>
//                 <div className="text-xs text-white/40 mt-2">
//                   LOADING: {Math.round(scrollProgress * 100)}%
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//       </Element>
//     </section>
//   );
// };

// export default About;

import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Button_2 from "../components/Button_2";

const AnimatedText = ({ text, scrollYProgress, className }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => {
        const start = i * 0.01; // stagger each letter
        const end = start + 0.5; // duration of fade per letter

        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#000000", "#999999"]
        );

        return (
          <motion.span key={i} style={{ color }}>
            {char}
          </motion.span>
        );
      })}
    </span>
  );
};

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const[progressPercentage, setProgressPercentage] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgressPercentage(Math.round(latest * 100));
  })

  return (
    <Element name="about">
      {/* Make this section extra tall to allow scrolling */}
      <section ref={targetRef} className="relative h-[300vh] z-2">
        {/* Sticky container */}
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <h4 className="uppercase tracking-wider font-bold text-sm mb-4 space-mono text-gray-500">
              About Me
            </h4>

            <h1 className="text-4xl md:text-6xl font-bold leading-snug inter">
              <AnimatedText
                text="I'm Arkadip Das"
                scrollYProgress={scrollYProgress}
              />
              <br />
              <AnimatedText
                text="Combining creativity with technology"
                scrollYProgress={scrollYProgress}
              />
              <br />
              <AnimatedText
                text="to build sleek, responsive, impactful"
                scrollYProgress={scrollYProgress}
              />
              <br />
              <AnimatedText
                text="web experiences and intelligent solutions"
                scrollYProgress={scrollYProgress}
              />
            </h1>

            <p className="mt-8 text-lg space-mono opacity-80">
              <AnimatedText
                text="CS major, i like Web Development & AI/ML."
                scrollYProgress={scrollYProgress}
              />
            </p>

            {/* <div className="flex items-center justify-center my-10">
              <Button_2>
                <a
                  href="https://drive.google.com/file/d/1FSqjmsP0kD-_F9cK2OOFUWW_zrn6psN0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button_2>
            </div> */}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 w-full">
            <div className="w-full h-1 rounded-full bg-gradient-to-r from-green-400 to-green-500">
              <motion.div
                className="h-1 rounded-full bg-black"
                style={{ width: progress }}
              />
            </div>
            {/* <div className="text-white/40 mt-2">
              // LOADING: {progressPercentage}%
            </div> */}
          </div>

        </div>
      </section>
    </Element>
  );
};

export default About;
