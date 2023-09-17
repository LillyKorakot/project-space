import React, { useEffect, useState, useRef } from "react";
import {
  crew_desktop,
  crew_mobile,
  crew_tablet,
  elonmusk,
  donaldtrump,
  douglas_hurley,
  anousheh_ansari,
  mark_shuttleworth,
} from "../assets";

const Crew = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const showSlides = () => {
      setSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };

    const slideInterval = setInterval(showSlides, 8000); // Change image every 8 seconds

    return () => {
      clearInterval(slideInterval); // Clean up the interval on component unmount
    };
  }, []);

  const slides = [
    {
      number: "01",
      name: "ELON MUSK",
      text: "“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”",
      image: elonmusk,
      position: "HEAD OF THE TABLE",
    },
    {
      number: "02",
      name: "DONALD TRUMP",
      text: " this was signed into law by President Donald Trump, establishing the U.S. Space Force as the first new independent military service since the Army Air Forces were reorganized as the U.S. Air Force in 1947.[10] ",
      image: donaldtrump,
      position: "MISSION SPECIALIST",
    },
    {
      number: "03",
      name: "douglas hurley",
      text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: douglas_hurley,
      position: "Flight Engineer",
    },

    {
      number: "04",
      name: "Anousheh Ansari",
      text: " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      image: anousheh_ansari,
      position: "Flight Engineer",
    },
  ];

  return (
    <section
    name= "crew"
     className=" bg-crew_mobile md:bg-crew_tablet xl:bg-crew_desktop flex flex-col justify-center items-center px-6 h-[710px] w-full text-[#ffff] bg-cover bg-center md:w-full md:h-[1024px]  xl:w-full xl:h-[100%] xl:text-left xl:bg-center xl:bg-no-repeat xl:bg-cover xl:px-64 xl:pt-[10%] md:bg-center md:bg-no-repeat md:bg-cover   font-normal">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`  mySlides fade ${
            index === slideIndex ? "block" : "hidden"
          }`}
        >
          <h2 className="flex xl:ml-[165px]   md:text-[24px]  md:leading-[28px] md:ml-[2px] md:w-[204px] md:h-[24px] xl:w-[400px] xl:h-[34px]  md:justify-start justify-center md:mt-[10px]  xl:justify-start font-barlowC font-[16px] uppercase tracking-wide mb-[3.2rem] xl:text-[32px] xl:m-0 xl:self-start  xl:leading-[36.67px]   xl:tracking-[7.52px]   ">
            <span className=" mr-[1.8rem]   opacity-60 ">{slide.number}</span>
            Meet your crew
          </h2>
          <div className=" md:flex  md:flex-col-reverse xl:flex-row-reverse xl:ml-[165px] ">
            <div className="w-[250px] h-[250px] md:w-[433px] md:h-[532px]  border-b border-gray-800 xl:w-[800px] xl:h-[712px] min-w-[32.7rem] md:mt-[40px]  m-12 flex justify-center   xl:items-end items-end xl:m-0 xl:border-none ">
              <img
                className=" w-[250px] h-[250px]   mb-auto md:w-[456px] md:h-[527px] xl:w-[80%] xl:h-[100%]   "
                src={slides[slideIndex].image}
                alt={slides[slideIndex].name}
              />
            </div>
            <div className=" flex flex-col justify-center items-center md:mb-[16px]  xl:self-start ">
              <div className="hidden max-md:block  items-center justify-center md:mt-[40px] ">
                {slides.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    onClick={() => handleDotClick(dotIndex)}
                    className={`${
                      dotIndex === index
                        ? "dot bg-gray-900 cursor-pointer"
                        : "dot bg-gray-500 cursor-pointer"
                    } h-[8px] w-[8px] m-2 rounded-full inline-block`}
                  ></span>
                ))}
              </div>
              <div className="flex  md:w-[600px] md:h-[150px]  flex-col items-center w-[500px] justify-center mt-[32px] md:mt-[10px] xl:justify-start xl:items-start xl:w-[500px] xl:h-[400px] xl:mt-[200px]">
                <div className=" xl:w-[500px] xl:h-[37px] ">
                  <span className=" items-center font-belle text-[16px] uppercase leading-[18.34px] opacity-50 mb-3 xl:w-[87px] xl:h-[37px] xl:text-[32px] xl:leading-[36.67px] ">
                    {slide.position}
                  </span>
                </div>
                <div className="flex justify-center xl:justify-start w-[327px] h-[28px] md:w-[457px] md:h-[46px] xl:w-[614px] xl:mt-[15px]  xl:h-[64px] mb-[16px] ">
                  <h3 className=" font-belle  text-[24px] md:text-[40px] md:mt-[8px] uppercase leading-[2.8rem]   xl:leading-[64.18px] xl:text-[40px]">
                    {slide.name}
                  </h3>
                </div>
                <div className="w-[372px] h-[125px] md:text-[16px]  md:w-[592px] md:h-[160px] xl:w-[600px] xl:h-[160px]  ">
                  <p className="w-[100%] h-[100%] leading-[25px] text-[15px] text-[#D0D6F9] md:text-[16px]  md:leading-[28px] font-barlowC xl:max-w-[70%] xl:text-[18px] xl:leading-[32px] ">
                    {slide.text}
                  </p>
                </div>
              </div>
              <div className="hidden sm:block flex xl:items-start md:mt-[20px] xl:justify-center">
                {slides.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    onClick={() => handleDotClick(dotIndex)}
                    className={`${
                      dotIndex === index
                        ? "dot bg-gray-900 cursor-pointer"
                        : "dot bg-gray-500 cursor-pointer"
                    } h-[17px] md:h-[12px] md:w-[12px] w-[17px] m-2 rounded-full inline-block`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Crew;
