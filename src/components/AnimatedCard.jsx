import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import useHoverTextEffect from "../text-animation";
import Button from "./Button";

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
          className=""
        >
          <div>
            <h2 className="text-4xl font-semibold text-gray-100 mb-5 tracking-[0.05em]">
              Hello there,
            </h2>
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
            <div className="ml-auto flex flex-row-reverse">
              <Button>Check Status</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCard;
