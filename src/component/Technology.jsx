import React, { useState } from "react";
import {
  tech_desktop,
  vehicle_portrait,
  capsule_portrait,
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
      className="w-full h-screen bg-cover bg-center overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${tech_desktop})` }}
    >
      <div className=" text-white bg-slate-300 opacity-50 w-screen h-32 flex justify-center items-center"> 
      {/* nav bar */}
      </div>
      <div className=" flex justify-center text-3xl w-full font-barlow opa  text-gray-600 uppercase pb-5 md:pb-10 mt-20 md:pl-[150px] md:justify-normal">
        03
        <span className="ml-5 font-barlow text-white">Space Launch 101</span>
      </div>

      <div className=" container-box w-screen flex flex-col-reverse lg:flex-row md:flex-row my-20 items-center ">
        <div className=" flex w-full items-center flex-col md:flex-row lg:flex-row lg:justify-center md:justify-center">
          <ul className="flex flex-row py-10 lg:flex-col md:flex-col items-end gap-5  text-[#D0D6F9] font-barlow text-sm md:text-lg lg:text-sm ">
            {technology.map((tech, index) => (
              <li
                key={tech.id}
                className={` itemcursor-pointer font-belle text-3xl border border-white md:w-[80px] md:h-[80px] w-10 h-10 rounded-full text-center flex justify-center items-center ${
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

          <div className=" flex flex-col md:ml-20 lg:ml-20 text-center md:text-left lg:text-left  ">
            <h1 className="text-[#D0D6F9] font-barlow  text-[16px]  pb-[11px]">
              THE TERMINOLOGY…
            </h1>
            <h1 className="text-white  font-belle text-4xl md:text-[56px] lg:text-[56px]  pb-[17px] uppercase">
              {selectedTechnology.name}
            </h1>
            <p className="text-[#D0D6F9] w-[444px] leading-10 text-[15px]  font-barlow  md:text-[18px] lg:text-[18px]  ">
              {selectedTechnology.description}
            </p>
          </div>
        </div>

        <div className=" flex h-full w-screen md:pl-12 lg:pl-12 justify-center md:justify-end lg:justify-end">
          {selectedTechnology.id === "1" && (
            <img src={vehicle_portrait} alt="Vehicle" className=" h-auto w-[55%]   " />
          )}
          {selectedTechnology.id === "2" && (
            <img src={capsule_portrait} alt="Capsule" className=" h-auto w-[55%]  " />
          )}
          {selectedTechnology.id === "3" && (
            <img src={spaceport_portrait} alt="Spaceport" className=" h-auto w-[55%]  " />
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
