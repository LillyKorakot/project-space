import { useEffect } from "react";
import { Link } from "react-scroll";
import React from "react";

const Home = () => {
  return (
    <section
      className="w-full h-[1000px] md:h-[1024px] xl:h-[900px]  bg-home_tablet md:bg-home_tablet xl:bg-home_desktop bg-cover bg-center bg-no-repeat flex flex-col xl:flex xl:flex-row justify-center items-center px-12 pb-[13.1rem]   md:bg-cover md:bg-no-repeat md:bg-center  xl:justify-around xl:items-end xl:pt-[20%] 
      "
    >
      <div className="w-[400px] h-[276px] xl:w-[600px] xl:h-[500px] mt-[100px] xl:mt-[450px] text-[#ffff] text-center leading-6 font-normal p-0 m-0  xl:text-left xl:leading-[3.2rem]">
        <span className=" xl:w-[379px] xl:h-[34px] font-barlow font-[1.6rem] xl:text-[28px] text-[#D0D6F9] tracking-[0.25rem] xl:font-[2.8rem] ">
          SO, YOU WANT TO TRAVEL TO
        </span>
        <h1 className="w-[400px] text-[80px] mb-[16px] h-[100px] xl:w-[445px]  md:w-[445px] md:h-[150px] xl:h-[172px] xl:mt-[24px] md:text-[150px]  font-belle  xl:text-[150px] leading-[10rem] xl:leading-normal font-normal my-[16px]  xl:font-[15rem] ">
          <span>SPACE</span>
        </h1>
        <div className="mt-[30px]  xl:mt-[24px] w-[445px] h-[128px] xl:w-[444px] xl:h-[128px] ">
          <p className="  w-[400px]   font-barlowC xl:text-[18px] md:text-[16px]  font-normal leading-[32px]  text-[#D0D6F9] xl:font-barlow  ">
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <Link>
        <div className="w-[150px] h-[150px] md:w-[242px] md:h-[242px] xl:w-[242px] xl:h-[242px] flex flex-row items-center justify-center mt-32 rounded-full bg-white uppercase text-base leading-none text-gray-900 hover:shadow-2xl cursor-pointer ">
          <span className="text-[20px] font-belle md:text-[32px]">explore</span>
        </div>
      </Link>
    </section>
  );
};

export default Home;
