import { Element } from "react-scroll";
import useHoverTextEffect from "../text-animation";

const Home = () => {
  const headingRef = useHoverTextEffect();

  return (
    <section>
      <Element name="home">
        <div className="container">
          <div className="my-18 flex items-center justify-center">
            <div className="container-home">

            {/* <h2 className="text-[36px] space-mono">Hello there,</h2> */}
            <div className="flex items-center justify-center">
              {/* <span className="text-xl whitespace-nowrap pt-[14.9rem] mr-4 uppercase">
                i'm
              </span> */}
              <h1
                ref={headingRef}
                className="font-bold uppercase text-center text-[360px] mb-5 tracking-[-0.04em] cursor-pointer"
                >
                ARKADE
              </h1>
            </div>
            <h3 className="flex flex-row-reverse tracking-[0.5em] text-2xl uppercase">
              {"{Web developer}"}
            </h3>
                </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Home;
