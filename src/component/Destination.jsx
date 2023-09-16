import React, { useState } from "react";
import { destination_desktop, moon, mars, europa, titan } from "../assets";
import destinations from "../data/destination.jsx";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  const handleDestinationClick = (destinationName) => {
    const selected = destinations.find(
      (destination) => destination.name === destinationName
    );
    if (selected) {
      setSelectedDestination(selected);
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${destination_desktop})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-20">
          <div className="text-white font-barlow text-[28px] md:text-xl lg:text-[28px] leading-normal tracking-widest ml-10">
            <span className="opacity-40">01 </span>
            PICK YOUR DESTINATION
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md: ">
          <div className="flex items-center justify-center hover:animate-spin ">
            {selectedDestination.name === "MOON" && (
              <img src={moon} alt="Moon" className="max-w-full h-auto" />
            )}
            {selectedDestination.name === "MARS" && (
              <img src={mars} alt="Mars" className="max-w-full h-auto" />
            )}
            {selectedDestination.name === "EUROPAS" && (
              <img src={europa} alt="Europa" className="max-w-full h-auto" />
            )}
            {selectedDestination.name === "TITAN" && (
              <img src={titan} alt="Titan" className="max-w-full h-auto" />
            )}
          </div>
          <div className="w-full md:w-3/5 h-auto flex flex-col justify-center items-center md:items-start">
            <div>
              <ul className="flex space-x-4 text-[#D0D6F9] font-barlow text-[16px] sm:text-[16px] lg:text-[16px] ">
                {destinations.map((destination) => (
                  <li
                    key={destination.id}
                    className={`cursor-pointer ${
                      selectedDestination.name === destination.name
                        ? "text-white font-bold underline underline-offset-[12px]"
                        : "hover:text-white"
                    }`}
                    onClick={() => handleDestinationClick(destination.name)}
                  >
                    {destination.name}
                  </li>
                ))}
              </ul>
            </div>

            <h1 className="text-white font-belle text-5xl md:text-[100px] lg:text-[100px] pt-9 pb-4">
              {selectedDestination.name}
            </h1>
            <p className=" w-[450px] text-[#D0D6F9] font-barlow text-[18px] leading-[32px] text-center md:text-left ">
              {selectedDestination.description}
            </p>
            <hr className="my-5 border-[#383B4B] border-t-2" />
            <div className="grid grid-cols-2 gap-[79px] text-[#D0D6F9] font-barlow">
              <div>
                <h1 className="uppercase text-sm md:text-[14px] lg:text-[14px] pb-3 ">AVG. DISTANCE</h1>
                <p className=" uppercase md:w-[800px] text-white font-belle text-sm md:text-[28px] lg:text-[28px]">
                  {selectedDestination.distance}
                </p>
              </div>
              <div>
                <h1 className="uppercase text-sm md:text-[14px] lg:text-[14px] pb-3 ">Est. travel time</h1>
                <p className=" uppercase text-white font-belle text-sm md:text-[22px] lg:text-[28px]">
                  {selectedDestination.travel}
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
