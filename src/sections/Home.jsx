import React from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <section>
      <Element name="home">
        <div className="container">

        <div className="max-w-[1250px] bg-linear-to-b from-[#111] to-[#222] p-[20px] border-2 rounded-[10px] border-amber-400 text-white text-3xl">
          <h2>Status</h2>
        <p><strong>Name:</strong> Sung Jin-Woo <span className="float-right">LV.146</span></p>
        <p><strong>Class:</strong> Shadow Monarch</p>
        <p><strong>Title:</strong> Demon Hunter (2 Others)</p>
        <hr />
        <p><strong>HP:</strong> 93,300 <span className="float-right"><strong>MP:</strong> 155,720</span></p>
        <p><strong>Fatigue:</strong> 0</p>
        <hr />
        <div className="flex flex-wrap justify-between">
            <p><strong>Strength:</strong> 324</p>
            <p><strong>Stamina:</strong> 320</p>
            <p><strong>Agility:</strong> 340</p>
            <p><strong>Intelligence:</strong> 340</p>
            <p><strong>Perception:</strong> 321</p>
            <p><strong>AP:</strong> 0</p>
        </div>
        </div>

        </div>
      </Element>
    </section>
  );
};

export default Home;