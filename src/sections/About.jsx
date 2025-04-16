import React from "react";
import Button from "../components/Button";
import { Element } from "react-scroll";
import AnimatedCard from "../components/AnimatedCard";
import Eye from "../components/Eye";

const About = () => {
  return (
    <section>
      <Element name="about">
        <div className="flex flex-col items-center justify-center text-center">
          <Eye />

          <h1>Learning Web Dev, AI ML enthusiast</h1>
          {/* <AnimatedCard /> */}
        </div>
      </Element>
    </section>
  );
};

export default About;
