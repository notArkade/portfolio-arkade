import React from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <section className="container h-screen border-2 rounded-xl border-[#1E3E62] flex items-center justify-center bg-gradient-to-b from-[#1d1d1d] to-[#1E3E62] text-white">
          <Element name="home">


      <div className="text-center max-w-4xl px-4">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          >
          ARKADIP DAS
        </h1>
        {/* <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          >
          A <span className="font-semibold">Web Developer</span> and <span className="font-semibold">AI/ML Enthusiast</span> building interactive digital experiences.
          </motion.p> */}

        {/* <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          >
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3 rounded-xl shadow-lg font-semibold text-lg">
          View My Projects
          </Button>
          <Button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-xl shadow-lg font-semibold text-lg">
          Contact Me
          </Button>
          </motion.div> */}
      </div>
          </Element>
    </section>
  );
};

export default Home;