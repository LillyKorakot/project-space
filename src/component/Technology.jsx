import React, { useState } from "react";
import {
  tech_desktop,
  tech_mobile,
  tech_tablet,
  vehicle_landscape,
  vehicle_portrait,
  capsule_landscape,
  capsule_portrait,
  spaceport_landscape,
  spaceport_portrait,
} from "../assets";
import technology from "../data/technology";

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);

  const handleTechnologyClick = (technologyName) => {
    const selected = technology.find((tech) => tech.name === technologyName);
    if (selected) {
      setSelectedTechnology(selected);
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${tech_desktop})` }}
    >
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className=" mt-20 mb-[137px] ">
          <div className="text-white font-barlow text-4xl md:text-[28px] lg:text-[28px] font-normal font-400 leading-normal tracking-widest ml-10">
            <span className="opacity-40">01 </span>
            SPACE LAUNCH 101
          </div>
        </div>
        <div className="flex gap-[80px] h-[450px]">
          <div></div>
          <ul className="flex flex-col justify-center gap-8 text-[#D0D6F9] font-barlow text-sm md:text-lg lg:text-sm ">
            {technology.map((tech, index) => (
              <li
                key={tech.id}
                className={`cursor-pointer font-belle text-3xl border border-white w-[80px] h-[80px] rounded-full text-center flex justify-center items-center text-white ${
                  selectedTechnology.name === tech.name
                    ? "text-[#0B0D17] bg-white"
                    : "hover:font-bold hover:bg-white hover:bg-opacity-20 hover:text-white hover:border-transparent"
                }`}
                onClick={() => handleTechnologyClick(tech.name)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <div className=" flex flex-row w-full h-full items-center">
            <div className=" flex flex-col justify-center ">
              <h1 className="text-[#D0D6F9] font-barlow text-5xl md:text-[16px] lg:text-[16px] pt-9 pb-[11px]">
                THE TERMINOLOGY…
              </h1>
              <h1 className="text-white font-belle text-5xl md:text-[56px] lg:text-[56px]  pb-[17px] uppercase">
                {selectedTechnology.name}
              </h1>
              <p className="text-[#D0D6F9] w-[444px]  font-barlow text-lg md:text-[18px] lg:text-[18px] leading-relaxed">
                {selectedTechnology.description}
              </p>
            </div>
            <div className=" flex justify-end ">
            {selectedTechnology.id === "1" && (
              <img
                src={vehicle_portrait}
                alt="Vehicle"
                className="max-w-full h-auto sm:w-[50%]"
              />
            )}
            {selectedTechnology.id === "2" && (
              <img
                src={capsule_portrait}
                alt="Capsule"
                className="max-w-full h-auto sm:w-[50%]"
              />
            )}
            {selectedTechnology.id === "3" && (
              <img
                src={spaceport_portrait}
                alt="Spaceport"
                className="max-w-full h-auto sm:w-[50%]"
              />
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
