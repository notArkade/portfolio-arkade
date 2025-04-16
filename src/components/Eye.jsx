import React, { useEffect, useRef } from "react";

const Eye = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (
        !leftEyeRef.current ||
        !rightEyeRef.current ||
        !leftPupilRef.current ||
        !rightPupilRef.current
      )
        return;

      // Handle left eye movement
      const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
      const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
      const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

      // Handle right eye movement
      const rightEyeRect = rightEyeRef.current.getBoundingClientRect();
      const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
      const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate for left eye
      const leftDx = mouseX - leftEyeCenterX;
      const leftDy = mouseY - leftEyeCenterY;
      const leftDistance = Math.min(
        10,
        Math.sqrt(leftDx * leftDx + leftDy * leftDy)
      );
      const leftAngle = Math.atan2(leftDy, leftDx);
      const leftPupilX = Math.cos(leftAngle) * leftDistance;
      const leftPupilY = Math.sin(leftAngle) * leftDistance;

      // Calculate for right eye
      const rightDx = mouseX - rightEyeCenterX;
      const rightDy = mouseY - rightEyeCenterY;
      const rightDistance = Math.min(
        10,
        Math.sqrt(rightDx * rightDx + rightDy * rightDy)
      );
      const rightAngle = Math.atan2(rightDy, rightDx);
      const rightPupilX = Math.cos(rightAngle) * rightDistance;
      const rightPupilY = Math.sin(rightAngle) * rightDistance;

      leftPupilRef.current.style.transform = `translate(${leftPupilX}px, ${leftPupilY}px)`;
      rightPupilRef.current.style.transform = `translate(${rightPupilX}px, ${rightPupilY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed left-6 bottom-0 z-50">
      <div className="relative w-32 h-[6.5rem]">
        {/* Robot body (metallic) */}
        <div className="absolute w-32 h-32 bg-gradient-to-r from-gray-500 via-black to-black rounded-t-full  border border-gray-500">
          {/* Robot head (upper part) */}
          <div
            className="absolute w-full h-2 mt-[4.5rem] bg-black  border border-gray-500"></div>

          {/* Eyes container */}
          <div className="absolute top-2 w-full flex justify-center space-x-4">
            {/* Left eye */}
            <div
              className="relative w-12 h-12 bg-gradient-to-l from-white via-white to-gray-500 rounded-full overflow-hidden border border-gray-500"
              ref={leftEyeRef}
            >
              {/* Left pupil */}
              <div
                ref={leftPupilRef}
                className="absolute bg-black w-4 h-4 rounded-full top-3 left-3"
              ></div>
            </div>

            {/* Right eye */}
            <div
              className="relative w-12 h-12 bg-gradient-to-l from-white via-white to-gray-500 rounded-full overflow-hidden border border-gray-500"
              ref={rightEyeRef}
            >
              {/* Right pupil */}
              <div
                ref={rightPupilRef}
                className="absolute bg-black w-4 h-4 rounded-full top-3 left-3"
              ></div>
            </div>
          </div>
        </div>

        {/* Robot legs */}
        {/* <div className="absolute bottom-0 left-4 w-6 h-12 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b-lg"></div>
        <div className="absolute bottom-0 right-4 w-6 h-12 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b-lg"></div> */}

        {/* Body seam line */}
        {/* <div className="absolute top-20 w-full h-1 bg-gray-600"></div> */}

        {/* Robot arms */}
        {/* <div className="absolute left-[-1rem] top-16 w-6 h-10 bg-gradient-to-b from-gray-400 to-gray-600 rounded-l-lg border-2 border-black"></div> */}
        {/* <div className="absolute right-[-1rem] top-16 w-6 h-10 bg-gradient-to-b from-gray-400 to-gray-600 rounded-r-lg border-2 border-black"></div> */}
      </div>
    </div>
  );
};

export default Eye;
