import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const AnimatedCard = () => {
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
      <div ref={ref} className="">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={shouldExpand ? { height: "200px", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col overflow-hidden border-amber-300 border-3 border-t-0 border-b-0 border-r-0 p-6 shadow-lg"
        >
        
          <h2 className="text-xl font-semibold">Hello there,</h2>
          <p className="text-gray-600 my-2">
          I am Arkadip, a college student pursuing a degree in Computer Engineering, currently learning React and expanding my skills in web development.
          I am also interested in Artificial Intelligence and Machine Learning and look forward to exploring their applications in tech.
          With experience in JavaScript and Python, I aim to refine my expertise and contribute to impactful projects.
          </p>
          <p className="ml-auto"><a className="cursor-pointer">Stats {">>"}</a></p>
        
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCard;
