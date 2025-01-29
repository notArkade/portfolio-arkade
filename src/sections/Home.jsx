import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";

const Home = () => {
  const headingRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const h1 = headingRef.current;
    if (!h1) return;

    h1.dataset.value = h1.innerText;

    h1.onmouseover = (event) => {
      let iterations = 0;
      const originalText = event.target.dataset.value;

      const interval = setInterval(() => {
        event.target.innerText = originalText
          .split("")
          .map((letter, index) =>
            index < iterations
              ? originalText[index]
              : letters[Math.floor(Math.random() * letters.length)]
          )
          .join("");

        if (iterations >= originalText.length) clearInterval(interval);

        iterations += 1 / 5;
      }, 50);
    };
  }, []);

  return (
    <section>
      <Element name="home">
        <div className="container">
          <div className="min-h-screen flex items-center justify-center">
            <div className="container-home">

            <h2 className="text-[36px] space-mono">Hello there,</h2>
            <div className="flex items-center justify-center">
              <span className="text-xl whitespace-nowrap pt-15 mr-4 uppercase">
                i'm
              </span>
              <h1
                ref={headingRef}
                className="font-bold uppercase text-center text-[360px] px-0 mb-5 tracking-[-0.04em] cursor-pointer"
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
