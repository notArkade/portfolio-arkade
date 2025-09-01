import { Element } from "react-scroll";
import useHoverTextEffect from "../text-animation";
import Arrow from "../components/Arrow";
import { techstack } from "../constants";
import { useState } from "react";
import Rings from "../components/Rings";
import HoverGrid from "../components/HoverGrid/HoverGrid";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const headingRef = useHoverTextEffect();

  return (
    <section className="relative h-screen overflow-hidden">
      <Element name="home">
        {/* <Rings
          position1="top-[-70px] right-[-100px]"
          position2="bottom-[-70px] left-[-100px]"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black pointer-events-none" />
        <HoverGrid />{" "}
        <div className="my-[4.5rem] flex items-center justify-center">
          <div className="container-home text-center">
            {/* <h2 className="text-[36px] space-mono">Hello there,</h2> */}
            <h3 className="flex flex-row tracking-[0.5em] mt-28 text-2xl uppercase ml-48 space-mono">
              Hello there, I'm
            </h3>
            <div className="flex items-center justify-center">
              {/* <span className="text-xl whitespace-nowrap pt-[14.9rem] mr-4 uppercase">
                i'm
              </span> */}
              <h1 className="font-bold uppercase text-gray-300 text-center text-[150px] mt-10 mb-10 tracking-[0.08em] cursor-default z-2">
                <TypeAnimation
                  sequence={[
                    "Arkadip Das",
                    2000,
                    "",
                    100,
                    "Arkade",
                    5000,
                    "",
                    100,
                  ]}
                  wrapper="span"
                  speed={1}
                  repeat={Infinity}
                  cursor={true}
                  cursorStyle="_"
                />
              </h1>
            </div>
            <h3 className="flex flex-row-reverse tracking-[0.5em] text-2xl uppercase mr-32 space-mono">
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
