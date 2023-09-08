import React from "react";
import { destination_desktop } from "../assets";
import { destination_mobile } from "../assets";
import { moon } from "../assets";

const Destination = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[1000px] bg-black m-0 p-0">
      <div className="text-white font-barlow text-[28px] font-normal font-400 leading-normal tracking-[4.725px] uppercase w-[50%] mb-20">
        <span className="opacity-40">01 </span>
        Pick your destination
      </div>
      {/* box */}
      <div className="flex flex-col md:flex-row justify-center w-[50%] gap-32">
        <div className="flex items-center text-white">
          <div className="flex items-start">
            <img src={moon} alt="moon" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <div>
            <ul className="flex text-[#D0D6F9] font-barlow text-[16px] font-normal tracking-[2.7px] ">
              <li className="mx-2">MOON</li>
              <li className="mx-2">MARS</li>
              <li className="mx-2">EUROPA</li>
              <li className="mx-2">TITAN</li>
            </ul>
          </div>
          <h1 className="text-white font-belle text-[100px]">MOON</h1>
          <p className="text-[#D0D6F9] font-barlow text-[18px] font-normal font-400">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
