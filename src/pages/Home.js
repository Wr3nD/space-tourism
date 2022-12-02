import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="bg-main-mb sm:bg-main-tb lg:bg-main-bg bg-cover p-6 md:p-0   md:max-w-[1440px] m-auto h-screen">
            <Navbar />
            <div className=" md:max-w-md lg:max-w-screen-lg md:pt-10 md:flex md:flex-col justify-center  lg:pt-[120px] md:m-auto w-full lg:h-max ">
                <div className="w-full pt-[45px] lg:flex-row   text-center flex flex-col justify-center  items-center font-light text-white h-full">
                    <div className="max-w-[450px]">
                    <h3 className="uppercase tracking-[2.5px] md:text-[20px] lg:text-[28px] text-light-white font-Barlow">
                        So, you want to travel to
                    </h3>
                    <h1 className="py-2 md:py-0  text-[80px] md:h-[150px] md:text-[150px]  font-Bellefair">SPACE</h1>
                    <p className=" text-center lg:text-start pb-[78px] md:py-12 font-light lg:text-[18px] text-[15px] md:text-[16px] tracking-[1.5px] text-light-white leading-6  font-Barlow">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                    </div>
                    <div className="relative w-full flex justify-center lg:justify-end">
                    
                    <Link to="/destination"  className="shadow-[0_px0_px_0px_30px] cursor-pointer  hover:shadow-black w-[150px] lg:absolute lg:top-[-220px] lg:right-0 lg:mt-[150px] md:mt-[50px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] text-black bg-white  flex items-center md:text-[32px] font-Bellefair justify-center rounded-full">
                        EXPLORE
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
