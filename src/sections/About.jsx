import React, { useRef } from "react";
import { Element } from "react-scroll";
import Button_2 from "../components/Button_2";
import Button_4 from "../components/Button_4";
import { MdAccountCircle } from "react-icons/md";
import GlitchText from "../hooks/GlitchText";

const About = () => {
  const targetRef = useRef(null);

  return (
    <Element name="about">
      <section ref={targetRef} className="container my-40 max-md:px-8">
        <div className="flex gap-4 justify-items-center mb-10 text-gray-500">
          <MdAccountCircle size={28} />
          <h4 className="uppercase text-3xl md:text-xl mb-4 space-mono">
            About Me
          </h4>
        </div>

        <p className="lg:text-5xl md:text-4xl text-2xl text-gray-600 inter font-bold tracking-wide mb-4 leading-snug cursor-default">
          I'm a <span className="text-gray-300">software developer</span> aiming
          to combine creativity with technology to build{" "}
          <GlitchText interval={4000} intensity={5} className="text-[#7CFFB2] italic">
            sleek
          </GlitchText>
          {", "}
          <span className="text-[#7CFFB2] neon-flicker">
            responsive
          </span>
          {", "}
          <GlitchText interval={3500} intensity={4} className="text-[#7CFFB2]">
            impactful
          </GlitchText>{" "}
          web experiences and intelligent solutions.
        </p>

        <p className="lg:text-5xl md:text-4xl text-2xl max-md:mt-10 text-gray-600 inter font-bold tracking-wide leading-relaxed">
          CS major, i am currently learning <br />
          <GlitchText interval={6000} intensity={7} className="text-gray-300">
            web development
          </GlitchText>
          {", "}
          <GlitchText interval={4500} intensity={8} className="text-gray-300 uppercase">
            ai/ml
          </GlitchText>{" "}
          &{" "}
          <GlitchText interval={5000} intensity={6} className="text-gray-300">
            workflow automation
          </GlitchText>
          .
        </p>

        <div className="mt-20">
          <div className="flex gap-4 sm:flex-row flex-col">
            <a href="https://drive.google.com/file/d/1J6u_AG7pYgXiE9EXhVOU4u9z3EXmkAjV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button_2>View CV</Button_2>
            </a>
            <a href="https://www.figma.com/design/OeIAF785SJh33QaY318Yqb/Untitled?node-id=0-1&p=f&t=SFumMEVUNOS0Tnvs-0" target="_blank" rel="noopener noreferrer">
              <Button_4>View DESIGN PORTFOLIO</Button_4>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;