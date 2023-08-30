import React from "react";
import { destination_desktop } from "../assets";
import { destination_mobile } from "../assets";
import { moon } from "../assets";

const Destination = () => {


  const backgroundImage = {
    backgroundImage: `url(${destination_desktop})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    
  };

  return (
    <div className=" w-full h-full flex items-center " style={backgroundImage}>
      <div className=" max-w-[1500px] mx-auto px-8 flex flex-col justify-center">
        <div className=" px-4 flex-col gap-8 my-20">
          <div className="text-white font-barlow text-[28px]font-normal font-400 leading-normal tracking-[4.725px] uppercase ml-10 ">
            <span className=" opacity-40">01 </span>
            Pick your destination
          </div>
          <div></div>
        </div>
        <div className="  w-full grid sm:grid-cols-2 gap-28">
          <div className="flex items-center justify-center">
            <img src={moon} alt="Moon" className="max-w-full h-auto" />
          </div>
          <div className=" w-[445px] h-[472px] flex flex-col justify-center">
            <div>
              <ul className=" flex  w-[285.5px] h-[34px] text-[#D0D6F9] font-barlow text-[16px] font-normal tracking-[2.7px] ">
                <li className=" mx-2">MOON</li>
                <li className=" mx-2">MARS</li>
                <li className=" mx-2">EUROPA</li>
                <li className=" mx-2">TITAN</li>
              </ul>
            </div>

            <h1 className=" text-white font-belle text-[100px] font-normal ">
              MOON
            </h1>
            <p className=" text-[#D0D6F9] font-barlow text-[18px] font-normal font-400 leading-[32px]">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come <br />
              back refreshed. While you’re there, take in some history <br />
              by visiting the Luna 2 and Apollo 11 landing sites.
            </p>
            <hr className=" pt-10 mt-[54px] mb-[10px] border-[#383B4B] " />
            <div className=" grid grid-cols-2">
              <div>
                <h1 className=" text-[#D0D6F9] font-barlow text-[14px] font-normal tracking-[2.362px] uppercase">
                  AVG. DISTANCE
                </h1>
                <p className=" text-white font-belle text-[28px] font-normal uppercase">
                  384,400 km
                </p>
              </div>
              <div>
                <h1 className=" text-[#D0D6F9] font-barlow text-[14px] font-normal tracking-[2.362px] uppercase">
                  Est. travel time
                </h1>
                <p className=" text-white font-belle text-[28px] font-normal uppercase">
                  3 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
