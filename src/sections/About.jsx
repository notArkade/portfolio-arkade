import React from "react";
import Button from "../components/Button";
import { Element } from "react-scroll";
import AnimatedCard from "../components/AnimatedCard";

const About = () => {
  return (
    <section>
      <Element name="about">
        <div className="items-center justify-center">
          <AnimatedCard />
        </div>
      </Element>
    </section>
  );
};

export default About;
