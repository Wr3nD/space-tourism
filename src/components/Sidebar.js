import React from "react";
import { Link } from "react-router-dom";
import close from "../assets/shared/icon-close.svg";
const Sidebar = ({ isSidebarActive, setIsSidebarActive }) => {
    return (
        <div className="w-[70%] h-screen absolute top-0 p-6 right-0 z-50 bg-[#979797]/10 backdrop-blur-[30px]">
            <div className="items-center flex justify-end h-[40px]">
                <img
                  className="cursor-pointer"
                    src={close}
                    alt="closing btn"
                    onClick={() => setIsSidebarActive(false)}
                />
            </div>
            <ol className="flex flex-col text-white font-Barlow font-light tracking-[2.5px]  pt-[2rem] justify-left w-full">
                <li className="mb-7 ">
                    <Link to={"/"} className="flex ">
                        <span className="font-bold mr-3 w-5 min-w-[20px] ">
                            00
                        </span>
                        <div>HOME</div>
                    </Link>
                </li>
                <li className="mb-7">
                    <Link to={"/destination"} className="flex">
                        <span className="font-bold mr-3 w-5 min-w-[20px]">
                            01
                        </span>
                        <div>DESTINATION</div>
                    </Link>
                </li>
                <li className="mb-7  ">
                    <Link to={"/crew"} className="flex">
                        <span className="font-bold mr-3 w-5 min-w-[20px]">
                            02
                        </span>
                        <div>CREW</div>
                    </Link>
                </li>
                <li className="mb-7 ">
                    <Link to={"/technology"} className="flex">
                        <span className="font-bold mr-3 w-5 min-w-[20px]">
                            03
                        </span>
                        <div>TECHNOLOGY</div>
                    </Link>
                </li>
            </ol>
        </div>
    );
};

export default Sidebar;
