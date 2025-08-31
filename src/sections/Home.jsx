import { Element } from "react-scroll";
import useHoverTextEffect from "../text-animation";
import Arrow from "../components/Arrow";
import { techstack } from "../constants";
import { useState } from "react";
import Rings from "../components/Rings";

const Home = () => {
  const headingRef = useHoverTextEffect();

  return (
    <section className="relative h-screen hex overflow-hidden">
      <Element name="home">
        {/* <Rings
          position1="top-[-70px] right-[-100px]"
          position2="bottom-[-70px] left-[-100px]"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <div className="my-[4.5rem] flex items-center justify-center">
          <div className="container-home text-center">
            {/* <h2 className="text-[36px] space-mono">Hello there,</h2> */}
            <div className="flex items-center justify-center">
              {/* <span className="text-xl whitespace-nowrap pt-[14.9rem] mr-4 uppercase">
                i'm
              </span> */}
              <h1 className="font-bold uppercase text-gray-300 text-center text-[260px] mt-28 mb-5 tracking-[0.08em] cursor-default space-mono z-2">
                Arkade
              </h1>
            </div>
            <h3 className="flex flex-row-reverse tracking-[0.5em] text-2xl uppercase">
              {"{Web developer}"}
            </h3>
          </div>
        </div>
      </Element>
      {/* <Arrow /> */}
    </section>
  );
};

export default Home;
