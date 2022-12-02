import React, { useState } from "react";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import Navbar from "../components/Navbar";
import data from "../data.json";
const Destination = () => {
  const planet = [moon, mars, europa, titan];
  const [planetSelector, setPlanetSelector] = useState(0);
  const buttons = data.destinations;
  const { images, name, description, distance, travel } =
    data.destinations[planetSelector];
  return (
    <div className="bg-destination-mb md:bg-destination-tb text-white lg:bg-destination-bg bg-cover p-6 md:p-0  md:max-w-[1440px] m-auto h-[850px] md:h-[1024px]   lg:h-screen">
      <Navbar />
      <h3 className="uppercase text-white tracking-[3px] lg:max-w-6xl lg:m-auto font-Barlow md:items-start font-light text-center md:text-[20px] lg:text-[28px] md:text-left pl-0 md:pl-8 pt-6 pb-7 md:pt-10 md:pb-12">
        <span className="pr-3  text-gray-600 font-bold">01</span> pick your
        destination
      </h3>
      <div className="flex flex-col font-Barlow justify-center lg:flex-row items-center max-w-screen-lg mx-auto ">
        <div
          className={` w-[170px]  h-[170px] md:w-[300px] md:h-[300px] lg:h-[445px] lg:w-[445px] bg-cover`}
        >
          <img src={planet[planetSelector]} alt="planet" />
        </div>
        <div className="text-center lg:text-start lg:ml-[10rem] lg:w-[472px] w-[550px]">
          <div className="md:py-8">
            {buttons.map((destination, i) => {
              return (
                <button
                  key={i}
                  className={
                    planetSelector === i
                      ? "pt-3 uppercase pb-2  text-light-white m-3 tracking-[3px] border-b-4  text-[14px]"
                      : "pt-3 pb-2 text-light-white m-3 tracking-[3px] uppercase focus:underline text-[14px]"
                  }
                  onClick={() => setPlanetSelector(i)}
                >
                  {destination?.name}
                </button>
              );
            })}
          </div>
          <h1 className="text-[56px] md:text-[80px] lg:text-[100px] leading-[2rem] pt-[24px] pb-[20px] md:pb-[45px] font-Bellefair uppercase">
            {name}
          </h1>
          <p className="text-light-white text-[15px] lg:text-start md:text-[16px] lg:text-[18px] md:pb-6 tracking-widest  leading-6  font-light text-center">
            {description}
          </p>
          <div className="h-[1px] w-[100%] lg:w-[100%] py-8">
            <div className="w-full h-[1px] bg-white/30" />
          </div>
          <div className="md:flex md:flex-row  md:text-center lg:text-start lg:justify-between  lg:w-[80%] md:justify-evenly">
            <div>
              <h3 className="uppercase text-[14px] text-light-white tracking-[3px]">
                {" "}
                avg. distance
              </h3>
              <h2 className="uppercase text-white text-2xl mb:text-[28px] py-3 font-Bellefair tracking-[3px]">
                {distance}
              </h2>
            </div>
            <br />
            <div>
              <h3 className="uppercase text-[14px] text-light-white tracking-[3px]">
                est. travel time
              </h3>
              <h2 className="uppercase  text-white text-2xl mb:text-[28px]  py-3 font-Bellefair tracking-[3px]">
                {travel}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
