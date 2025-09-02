import React from "react";
import { Element } from "react-scroll";
import { useRef, useState, useEffect } from "react";

const About = () => {
  const textRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const mainText =
    "Hello there, I am Arkadip, a college student pursuing a degree in o wait what the...this was not supposed to happen, currently learning React and expanding my skills in web development.";
  const smallText = "ABOUT ME";
  const buttonText = "// KILL SWITCH";

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const element = textRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on element position
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Start animation when element is in view
      const startPoint = windowHeight;
      const endPoint = -elementHeight;

      if (elementTop <= startPoint && elementTop >= endPoint) {
        const progress = (startPoint - elementTop) / (startPoint - endPoint);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderAnimatedText = (text, isTitle = false) => {
    const letters = text.split("");
    const totalLetters = letters.length;

    return letters.map((letter, index) => {
      const letterProgress = scrollProgress * totalLetters;
      const isActive = letterProgress >= index;
      const opacity = Math.max(0, Math.min(1, letterProgress - index));

      return (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ${
            isTitle ? "text-4xl md:text-5xl lg:text-5xl" : "text-sm"
          }`}
          style={{
            color: isActive ? "#ffffff" : "#ffffff40",
            opacity: opacity,
            transform: `translateY(${isActive ? "0px" : "10px"})`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      );
    });
  };

  // Logo component
  const Logo = () => (
    <div className="w-48 h-48 relative flex-shrink-0">
      <div className="absolute top-0 left-0 w-20 h-20 bg-gray-800 rounded-tr-full"></div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gray-700 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gray-600 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gray-500 rounded-tl-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full"></div>
    </div>
  );

  return (
    <section className="relative min-h-screen hex p-8">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
      <Element name="about">
        

        {/* Main text animation section */}
        <section
          ref={textRef}
          className="min-h-screen flex items-center justify-center px-8 py-16"
        >
          <div className="max-w-6xl mx-auto flex items-start gap-16 sticky">
            {/* Logo */}
            {/* <Logo />z */}

            {/* Text content */}
            <div className="flex-1 space-y-8">
              {/* Small text */}
              <div className="tracking-widest font-light text-white/60 space-mono select-none">
                {renderAnimatedText(smallText)}
              </div>

              {/* Main animated text */}
              <div className="font-light leading-tight select-none">
                {renderAnimatedText(mainText, true)}
              </div>

              {/* Button */}
              <div className="pt-8">
                <button className="px-8 py-3 border border-red-500 text-red-500 tracking-[0.8em] text-sm hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300">
                  {buttonText}
                </button>
              </div>

              {/* Progress indicator */}
              <div className="pt-4">
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div 
                    className="bg-red-500 h-1 rounded-full transition-all duration-100"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
                <div className="text-xs text-white/40 mt-2">
                  LOADING: {Math.round(scrollProgress * 100)}%
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </Element>
    </section>
  );
};

export default About;