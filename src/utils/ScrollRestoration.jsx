import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const scrollPositions = {};

const ScrollRestoration = () => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    // save previous scroll
    scrollPositions[prevPath.current] = container.scrollTop;

    // restore AFTER render
    requestAnimationFrame(() => {
      const savedY = scrollPositions[location.pathname] ?? 0;
      container.scrollTo({ top: savedY });
    });

    prevPath.current = location.pathname;
  }, [location.pathname]);

  return null;
};

export default ScrollRestoration;
