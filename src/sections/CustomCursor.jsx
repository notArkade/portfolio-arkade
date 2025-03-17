import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });

      if (!hovering) {
        setTimeout(() => {
          setTrailPosition({ x: event.clientX, y: event.clientY });
        }, 30);
      }
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    // Attach event listeners to all buttons and links
    const interactiveElements = document.querySelectorAll("button, a");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [hovering]);

  return (
    <>
      {/* Small cursor that expands on hover */}
      <div
        className={`custom-cursor ${hovering ? "cursor-hover" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Trailing circle (hidden when hovering) */}
      {!hovering && (
        <div
          className="cursor-trail"
          style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }}
        />
      )}
    </>
  );
};

export default CustomCursor;
