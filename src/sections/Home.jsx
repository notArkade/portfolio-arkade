import { Element } from "react-scroll";
import useHoverTextEffect from "../text-animation";
import Arrow from "../components/Arrow";
import { techstack } from "../constants";
import { useState } from "react";
import Rings from "../components/Rings";
import HoverGrid from "../components/HoverGrid/HoverGrid";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../components/ParticlesBackground";
import NeonText from "../components/NeonText";

const Home = () => {
  const headingRef = useHoverTextEffect();

  return (
    <>
      {/* <ParticlesBackground /> */}
      <Element name="home">
        <section className="relative overflow-hidden min-h-screen flex flex-col">
          {/* <Rings
          position1="top-[-70px] right-[-100px]"
          position2="bottom-[-70px] left-[-100px]"
        /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black pointer-events-none" /> */}
          {/* <HoverGrid />{" "} */}
          <div className="my-[4.5rem] flex items-center justify-center">
            <div className="container-home text-center">
              {/* <h2 className="text-[36px] space-mono">Hello there,</h2> */}
              {/* <h3 className="flex flex-row tracking-[0.5em] mt-28 text-2xl uppercase ml-48 space-mono">
                Hello there, I'm
              </h3> */}
              <div className="flex">
                {/* <svg viewBox="0 0 600 120">
                  <rect width="100%" height="100%" fill="none" />
                  <text
                    x="50%"
                    y="60%"
                    font-size="96"
                    text-anchor="middle"
                    fill="none"
                    stroke="hsl(154 84% 70%)"
                    stroke-width="0.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    className="uppercase"
                  >
                    Arkade
                  </text>
                </svg> */}
                <NeonText text="Arkade" />
              </div>

              {/* <div className="flex items-center justify-center"> */}
              {/* <span className="text-xl whitespace-nowrap pt-[14.9rem] mr-4 uppercase">
                i'm
              </span> */}
              {/* <h1 className="font-bold uppercase text-[#fff] drop-shadow-[0_0_5px_#fff] text-center text-[150px] mt-10 mb-10 tracking-[0.08em] cursor-default"> */}
              {/* <TypeAnimation
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
                /> */}
              {/* <span> */}
              {/* Arka<span className="animate-flicker">dip</span> */}
              {/* </span> */}
              {/* </h1> */}
              {/* </div> */}
              <h3 className="flex tracking-[0.5em] text-2xl uppercase ml-96 space-mono justify-start text-[#7CFFB2]">
                {/* {"}"} */}
                {"%"}
                <TypeAnimation
                  sequence={["Web developer", 3000, "AIML enthusiast", 3000]}
                  cursor={false}
                  repeat={Infinity}
                />
                {/* {"{"} */}
                <p className="blink">_</p>
              </h3>
            </div>
          </div>
          {/* <Arrow /> */}
        </section>
      </Element>
    </>
  );
};

export default Home;
