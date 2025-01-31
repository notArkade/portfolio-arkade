import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import useHoverTextEffect from "../text-animation";

const AnimatedCard = () => {
  const headingRef = useHoverTextEffect();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation happens only once
    threshold: 1, // Trigger when 30% is visible
  });

  const [shouldExpand, setShouldExpand] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShouldExpand(true);
      }, 800); // delay before opening

      return () => clearTimeout(timer); // Cleanup timer on unmount
    } else {
      setShouldExpand(false); // Collapse when out of view
    }
  }, [inView]);

  return (
    <div className="container min-h-screen p-[10vh]">
      <div ref={ref} className="w-full flex justify-center">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            shouldExpand
              ? { height: "350px", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="overflow-hidden flex flex-col border-[#00ffdf] border-b-0 border-t-0 border-r-0 border-3 p-6 shadow-lg"
        >
          <div>
            <h2 className="text-4xl font-semibold text-gray-100 mb-5 tracking-[0.05em]">Hello there,</h2>
            <p className="text-2xl text-gray-600 my-2 mb-5 w-full">
              I am Arkadip, a college student pursuing a degree in Computer
              Engineering, currently learning{" "}
              <strong className="tracking-[0.08em]">React</strong> and expanding
              my skills in web development. I am also interested in Artificial
              Intelligence and Machine Learning and look forward to exploring
              their applications in tech. With experience in{" "}
              <strong className="tracking-[0.08em]">JavaScript</strong> and{" "}
              <strong className="tracking-[0.08em]">Python</strong>, I aim to
              refine my expertise and contribute to impactful projects.
            </p>
            <p className="ml-auto flex flex-row-reverse">
              <a
                className="text-2xl cursor-pointer uppercase hover:text-black hover:font-medium transition-all duration-300 hover:bg-cyan-300 p-2 hover:px-4 [clip-path:polygon(0%_0%,100%_0%,100%_80%,90%_100%,0%_100%)]"
              >
                check stats {">>"}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCard;
