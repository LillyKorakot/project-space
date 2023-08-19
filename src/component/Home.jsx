import React from "react";
import spacehome from "../assets/spacehome.png";
import Bitmap from "../assets/Bitmap.png";

const Home = () => {
  return (
    <div
      className="flex relative p-0 m-0 box-border  "
      style={{ backgroundImage: `url(${spacehome})` }}
    >
      <div
        className=" bg-cover bg-center w-[482px] h-[screen] rotate-0 relative  max-md:rotate-180 " //mr-10
      >
        {/* Left side content */}
        <div className="h-full flex items-center justify-center absolute right-[-200px] top-[50px] w-[500px] ">
          <div className="absolute  right-[-100px]  max-w-[1000px] mx-1 px-8  flex flex-col justify-center h-full ">
            <p className="text-yellow-400 mt-5 font-barlow text-[28px]">
              SO YOU WANT TRAVEL TO?
            </p>
            <div className="w-[445px] h-[172px]">
              <h1 className="text-4xl sm:text-[120px] font-thin  text-[#8892b0] font-belle leading-normal ">
                SPACE
              </h1>
            </div>
            <p className="text-[#8892b0] pt-3 max-w-[700px] ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
      </div>

      <div
        className=" h-screen bg-cover bg-center w-[958px] ml-0 pl-0   "
        style={{ backgroundImage: `url(${Bitmap})` }}
      >
        {/* Right side content */}
        <div className="h-full flex items-center justify-center">
          {/* Your content for the right side */}
        </div>
      </div>
    </div>
  );
};

export default Home;
