import React from "react";
import AnimatedCard from "../components/AnimatedCard";
import { Element } from "react-scroll";

const Status = () => {
  return (
    <section>
      <Element name="about">
        <AnimatedCard />
      </Element>
    </section>
  );
};

export default Status;
