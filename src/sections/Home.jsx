import { Element } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import NeonText from "../components/NeonText";
import AmbientVideo from "../components/AmbientVideo";

const Home = () => {
  return (
    <>
      <Element name="home">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <AmbientVideo />

          {/* WIDTH ANCHOR (this fixes the SVG scaling issue) */}
          <div className="w-full max-w-7xl mx-auto px-4">
            {/* CONTENT COLUMN */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left select-none">
              {/* Neon Text */}
              <div className="w-full flex justify-center md:justify-start">
                <NeonText text="Arkade" />
              </div>

              {/* Subtitle */}
              <h3
                className="
                  mt-4
                  flex items-center
                  tracking-[0.5em]
                  uppercase
                  text-lg sm:text-xl md:text-2xl
                  space-mono
                  text-[#7CFFB2]
                  justify-center md:justify-start
                "
              >
                %
                <TypeAnimation
                  sequence={["Web developer", 3000, "AIML enthusiast", 3000]}
                  cursor={false}
                  repeat={Infinity}
                />
                <span className="blink">_</span>
              </h3>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Home;
