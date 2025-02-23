import React from "react";
import AnimatedCard from "../components/AnimatedCard";
import { Element } from "react-scroll";
import { techstack } from "../constants";
import { Tooltip } from "react-tooltip";


const Status = () => {
  return (
    <section>
      <Element name="skills">
      <div class="flex justify-center items-center p-30">
        <div class="grid grid-cols-2 justify-between bg-gradient-to-br from-[#000000] to-[#000333] border-2 border-gray-600 p-10 text-2xl rounded-lg shadow-lg text-cyan-300 uppercase space-mono leading-9 
        backdrop-blur-[8px]">
          <div>
            <h2 class="text-2xl font-bold border-b-2 border-gray-600 pb-2">
              Status
            </h2>
            <p class="mt-2">
              <strong>Name:</strong> Arkadip Das{" "}
              <span class="float-right pr-5">LV.20</span>
            </p>
            <p>
              <strong>Class:</strong> Shadow Monarch
            </p>
            <p>
              <strong>Title:</strong> Demon Hunter (2 Others)
            </p>
            <p>
              <strong>HP:</strong> 93,300{" "}
            </p>
            <p>
              <strong>Fatigue:</strong> 0
            </p>
            <div class="grid grid-cols-2 gap-2">
              <p>
                <strong>Strength:</strong> 324
              </p>
              <p>
                <strong>Stamina:</strong> 320
              </p>
              <p>
                <strong>Agility:</strong> 340
              </p>
              <p>
                <strong>Intelligence:</strong> 340
              </p>
              <p>
                <strong>Perception:</strong> 321
              </p>
              <p>
                <strong>AP:</strong> 0
              </p>
            </div>
            <p>
              <strong>Physical Damage Reduction:</strong> 65%
            </p>
            <p>
              <strong>Magical Damage Reduction:</strong> 44%
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-5 gap-3 p-4 bg-gray-800 shadow-lg rounded-lg border-2 border-gray-600">
              {techstack.map(({ id, Icon, tech }) => (
                <div
                  key={id}
                  className="w-24 h-24 flex justify-center items-center bg-gray-700 border-2 border-gray-500 text-white font-bold text-lg rounded-md shadow-inner hover:bg-gray-600 transition-all duration-400 hover:border-cyan-300 cursor-pointer"
                >
                  <Icon size={48} data-tooltip-id={`tooltip-${id}`} />
                  <Tooltip id={`tooltip-${id}`} place="top" effect="solid" style={{ backgroundColor: "rgba(0, 0, 0, 1)", color: "white"}}>
                    {tech}
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Element>
    </section>
  );
};

export default Status;
