import React, { useState } from "react";
import { iconmain, icon_close, icon_hamberger } from "../assets";
import { FaBars, FaTimes, FaUnderline } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="flex w-full  h-full overflow-hidden">
      <nav className=" flex justify-between items-center font-barlowC uppercase tracking-[0.16875em] xl:16px  xl:fixed overflow-hidden absolute top-[5%]  bg-opacity-4 backdrop-blur-[40.7742px]  w-[100vw] h-[80px]  ">
        {/* {menu} */}

        <div className=" absolute left-[5.5px] max-xl:left-[5.5] max-xl:top-[2.5px]    ">
          <img src={iconmain} alt="logonav" />
        </div>
        <div className="max-xl:hidden absolute w-[28%] h-[0.25px] left-[5%] z-10 bg-white opacity-25"></div>
        <ul
          className=" hidden  flex-[80%] min-h-[9.6rem] ml-[15%] bg-opacity-4
         backdrop-blur-[40.7742px]
         xl:flex xl:justify-between pl-[15%] pr-[10%]   "
        >
          <li className="flex justify-center items-center mx-[40px] md:mx-[20px]  cursor-pointer  ">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setSelectedItem("home")}
              className={
                selectedItem === "home" ? " border-b-4 py-[25px]   " : {}
              }
            >
              <div className="flex justify-center items-center w-[100px]   h-[20px] ">
                <span className="text-white text-lg mr-2 font-bold">00</span>
                <div className="text-white text-lg">Home</div>
              </div>
            </Link>
            <div className="absolute z-10 left-0 right-0 bottom-0  bg-white opacity-0 w-[50px] h-[50px] group-hover:opacity-100 transition-opacity duration-300"></div>
          </li>
          <li className="flex justify-center items-center mx-[40px] cursor-pointer ">
            <Link
              to="destination"
              smooth={true}
              duration={500}
              onClick={() => setSelectedItem("destination")}
              className={
                selectedItem === "destination"
                  ? " border-b-4 py-[25px] w-full   "
                  : {}
              }
            >
              <div className="flex justify-center items-center w-[100px] h-[20px] bg-">
                <span className="text-white text-lg mr-2 font-bold">01</span>
                <div className="text-white text-lg">Destination</div>
              </div>
            </Link>
          </li>
          <li className="flex justify-center items-center mx-[40px] cursor-pointer">
            <Link
              to="crew"
              smooth={true}
              duration={500}
              onClick={() => setSelectedItem("crew")}
              className={
                selectedItem === "crew" ? " border-b-4 py-[25px] w-full   " : {}
              }
            >
              <div className="flex justify-center items-center w-[100px] h-[20px] ">
                <span className="text-white text-lg mr-2 font-bold">02</span>
                <div className="text-white text-lg">Crew</div>
              </div>
            </Link>
          </li>
          <li className="flex justify-center items-center mx-[40px] cursor-pointer">
            <Link
              to="technology"
              smooth={true}
              duration={500}
              onClick={() => setSelectedItem("technology")}
              className={
                selectedItem === "technology"
                  ? " border-b-4 py-[25px] w-full   "
                  : {}
              }
            >
              <div className="flex justify-center items-center w-[100px] h-[20px]  ">
                <span className="text-white text-lg mr-2 font-bold">03</span>
                <div className="text-white text-lg">Technology</div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* {hamberger} */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 absolute right-0 top-0 m-5 cursor-pointer   text-white"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* {moblie menu} */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute right-0  bg-opacity-4 text-white w-[360px] h-screen  font-barlowC tracking-[0.16875em] backdrop-blur-[40.7742px] flex flex-col justify-start items-start mt-5 "
        }
      >
        <li className="flex justify-center items-start mx-[40px] cursor-pointer py-6 ml-8 ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            <div className="flex justify-start items-center w-[100px]  h-[20px] ">
              <span className="text-white text-lg mr-2 font-bold">00</span>
              <div className="text-white text-lg">Home</div>
            </div>
          </Link>
        </li>
        <li className="flex justify-center items-start  mx-[40px] cursor-pointer py-6 ml-8 ">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            <div className="flex justify-start items-center w-[100px] h-[20px] bg-">
              <span className="text-white text-lg mr-2 font-bold">01</span>
              <div className="text-white text-lg">Destination</div>
            </div>
          </Link>
        </li>
        <li className="flex justify-start items-start  mx-[40px] cursor-pointer py-6 ml-8 ">
          <Link
            onClick={handleClick}
            to="certificate"
            smooth={true}
            duration={500}
          >
            <div className="flex justify-start items-start  w-[100px] h-[20px] ">
              <span className="text-white text-lg mr-2 font-bold">02</span>
              <div className="text-white text-lg">Crew</div>
            </div>
          </Link>
        </li>

        <li className="flex justify-start items-start mx-[40px] cursor-pointer py-6 ml-8 ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            <div className="flex justify-start items-center w-[100px] h-[20px] ">
              <span className="text-white text-lg mr-2 font-bold">03</span>
              <div className="text-white text-lg">Technology</div>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
