import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Highlight({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <span ref={ref} className="relative inline-block">
      <motion.div
        className="absolute inset-0 bg-red-800 h-[120%]"
        style={{ originX: 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{
          duration: 5,
          delay: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
      <span className="relative text-gray-300">
        {children}
      </span>
    </span>
  );
}

export default Highlight;