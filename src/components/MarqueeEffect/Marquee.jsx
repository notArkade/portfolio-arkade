import React from "react";
import styles from "./Marquee.module.scss";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const Marquee = ({ children }) => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [multiplier, setMultiplier] = useState(1);

  const calculateMultiplier = useCallback(() => {
    if (!containerRef.current || !marqueeRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const marqueeRect = marqueeRef.current.getBoundingClientRect();

    const containerWidth = containerRect.width;
    const marqueeWidth = marqueeRect.width;

    if (marqueeWidth < containerWidth) {
      setMultiplier(Math.ceil(containerWidth / marqueeWidth));
    } else {
      setMultiplier(1);
    }
  }, []);

  useEffect(() => {
    calculateMultiplier();
  }, [calculateMultiplier]);

  const multiplyChildren = useCallback(
    (multiplier) => {
      const arraySize = multiplier > 0 ? multiplier : 0;

      return [...Array(arraySize)].map((_, i) => (
        <React.Fragment key={i}>{children}</React.Fragment>
      ));
    },
    [children]
  );

  const marqueeAnimation = {
    x: ["0%", "-100%"],
    transition: {
      duration: 80,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <motion.div animate={marqueeAnimation} className={styles.marquee}>
        <div ref={marqueeRef} className={styles.firstMarquee}>
          {children}
        </div>
        {multiplyChildren(multiplier - 1)}
      </motion.div>
      <motion.div animate={marqueeAnimation} className={styles.marquee}>
        {multiplyChildren(multiplier)}
      </motion.div>
    </div>
  );
};

export default Marquee;
