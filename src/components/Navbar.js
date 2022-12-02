import React, { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import Sidebar from "./Sidebar";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState();
    const [mobile, setMobile] = useState(false);
    const [large, setLarge] = useState(false);
    console.log(large)
    let location = useLocation();

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobile(true);
            setLarge(false);
        }
        if (window.innerWidth > 800) {
            setLarge(true)
        }
    }, []);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setMobile(true);
                setLarge(false);
            }else if (window.innerWidth > 800) {
                setMobile(false);
                setLarge(true)
            }else {
                setMobile(false);
                setLarge(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className="text-white  relative w-full items-center justify-between  lg:pt-10 lg:pl-5 flex flex-row">
                <div className="z-20 text-start w-[40px] md:m-8 md:absolute">
                    <Link to={"/"}>
                    <img src={logo} alt="logo img" />
                    </Link>
                </div>
                <div className="lg:w-[473px] absolute lg:h-[1px] lg:ml-[165px] z-50 bg-white/30"/>
                <div className="z-20 flex md:w-full md:justify-end">
                    {mobile ?
                        <img
                        className="cursor-pointer"
                            src={menu}
                            alt="logo img"
                            onClick={() => setIsSidebarActive(true)}
                        />
                        : <ul className="flex flex-row h-[96px] w-[57%]  float-right items-center justify-center md:font-Barlow md:tracking-[2px]  bg-[#979797]/10 backdrop-blur-[30px] md:text-[14px] md:font-thin">
                            <li className={"/" === location.pathname ? "px-2 md:py-[38px] border-b-2" : "px-3 hover:py-[38px] hover:border-b-2 hover:border-white/60"} >
                                {/* <span className="font-bold pr-3">00</span> */}
                                <Link to={"/"} className="flex">
                              {large && <span className="pr-3 font-bold">00</span>} 
                               HOME
                                </Link>
                            </li>
                            <li className={"/destination" === location.pathname ? "px-3  md:py-[38px] border-b-2" : "px-3 hover:py-[38px] hover:border-b-2 hover:border-white/60"} >
                                {/* <span className="font-bold pr-3">01</span>  */}
                                <Link to={"/destination"} className="flex">
                                {large &&<span className="pr-3 font-bold">01</span>}
                                DESTINATION
                                </Link>
                            </li>
                            <li className={"/crew" === location.pathname ? "px-3  md:py-[38px] border-b-2" : "px-3 hover:py-[38px] hover:border-b-2 hover:border-white/60"} >
                                {/* <span className="font-bold pr-3">02</span>  */}
                                <Link to={"/crew"} className="flex">
                                {large &&<span className="pr-3 font-bold">02</span>}
                                CREW
                                </Link>
                                    
                            </li>
                            <li className={"/technology" === location.pathname ? "px-3  md:py-[38px] border-b-2" : "px-3 hover:py-[38px] hover:border-b-2 hover:border-white/60"} >
                                {/* <span className="font-bold pr-3">03</span>  */}
                                <Link to={"/technology"} className="flex">
                                {large &&<span className="pr-3 font-bold">03</span>}
                                TECHNOLOGY
                                </Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
            {isSidebarActive ? (
                <Sidebar
                    isSidebarActive={isSidebarActive}
                    setIsSidebarActive={setIsSidebarActive}
                />
            ) : null}
        </>
    );
};

export default Navbar;
{
    /*  <div className="fixed z-10 w-[35%] left-20 h-1">
           <hr className="text-white" />
      </div>;
     <ul className="flex flex-row p-10 float-right items-center justify-center w-full bg-white/10 backdrop-blur-[30px]">
                    <li className="px-8">
                        <span className="font-bold pr-3">00</span>
                        HOME
                    </li>
                    <li className="px-8">
                        <span className="font-bold pr-3">01</span> DESTINATION
                    </li>
                    <li className="px-8">
                        <span className="font-bold pr-3">02</span> CREW
                    </li>
                    <li className="px-8">
                        <span className="font-bold pr-3">03</span> TECHNOLOGY
                    </li>
                </ul> */
}
