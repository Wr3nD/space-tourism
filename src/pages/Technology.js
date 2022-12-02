import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import data from "../data.json";
import vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg"
import vehicle2 from "../assets/technology/image-launch-vehicle-portrait.jpg"
import spaceport from "../assets/technology/image-spaceport-landscape.jpg"
import spaceport2 from "../assets/technology/image-spaceport-portrait.jpg"
import mark from "../assets/technology/image-space-capsule-landscape.jpg"
import mark2 from "../assets/technology/image-space-capsule-portrait.jpg"


const Technology = () => {
    const technology = [vehicle, spaceport, mark]
    const technologyBig = [vehicle2, spaceport2, mark2]
    const [techSelector, setTechSelector] = useState(0)
    const [large, setLarge] = useState(false);
    useEffect(() => {
        if (window.innerWidth > 768) {
            setLarge(true);
        }
    }, []);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth  > 768) {
                setLarge(true);
            } else {
                setLarge(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const buttons = data.technology
    const { description, name } = data.technology[techSelector]
    return (
        <div className="bg-technology-mb  md:bg-technology-tb   text-white lg:bg-technology-bg bg-cover   md:max-w-[1440px] m-auto h-screen">
            <div className=' w-full h-full p-6 md:p-0'>
            <Navbar />  
                    <h3 className="uppercase text-white tracking-[3px] lg:max-w-6xl lg:m-auto font-Barlow md:items-start font-light text-center md:text-[20px] lg:text-[28px] md:text-left pl-0 md:pl-8 pt-6 pb-7 md:pt-10 md:pb-12">
                    <span className="pr-3  text-gray-600 font-bold">02</span> space launch 101
                </h3>
                {large ? 
                
                <div className="flex flex-row font-Barlow justify-center max-w-7xl float-right items-center">
                 <div className='flex flex-col justify-center items-center pt-7 md:pt-10 pb-3'>
                    {buttons.map((technology, i) => {
                        
                        return <button key={i} className={techSelector === i ? " bg-white text-black    uppercase  text-[14px] text-center m-3 font-Bellefair h-[40px] md:h-[60px] md:w-[60px] rounded-full w-[40px] border-[0.5px] border-white/30" :
                        "text-light-white  uppercase  text-[14px] text-center m-3 font-Bellefair h-[40px] md:h-[60px] md:w-[60px] rounded-full w-[40px] border-[0.5px] border-white/30"} onClick={() => setTechSelector(i)}>
                            {i + 1}
                        </button>
                    })}
                </div>
               <div className=' text-start pl-[5rem]'>

                <h3 className="uppercase text-[14px] pt-3 md:text-[19px] font-light md:py-5  text-light-white tracking-[2px]"> the terminology ...</h3>
                <h1 className="text-[24px] md:text-[50px] leading-[2rem] pt-[5px] pb-[10px] md:pb-8 font-Bellefair uppercase">{name}</h1>
                <p className="text-light-white  text-[1px] md:text-[18px] tracking-[1px] md:max-w-[70%] font-light leading-6 text-start">{description}</p>

               </div>
                <div
                    className={`w-screen bg-cover flex flex-col justify-center items-center`}
                    >
                    <img src={technologyBig[techSelector]} className="w-screen  h-[170px] md:h-[310px] lg:h-[515px] " alt="technologyImage" />

                </div>

            </div>
            :
            
                <div className="flex flex-col font-Barlow justify-center   items-center">
                    <div
                        className={`w-screen bg-cover flex flex-col justify-center items-center`}
                        >
                        <img src={technology[techSelector]} className="w-screen  h-[170px] md:h-[310px]" alt="technologyImage" />

                    </div>
                    <div className='flex justify-center items-center pt-7 md:pt-10 pb-3'>
                        {buttons.map((technology, i) => {
                            
                            return <button key={i} className={techSelector === i ? " bg-white text-black    uppercase  text-[14px] text-center m-3 font-Bellefair h-[40px] md:h-[60px] md:w-[60px] rounded-full w-[40px] border-[0.5px] border-white/30" :
                            "text-light-white  uppercase  text-[14px] text-center m-3 font-Bellefair h-[40px] md:h-[60px] md:w-[60px] rounded-full w-[40px] border-[0.5px] border-white/30"} onClick={() => setTechSelector(i)}>
                                {i + 1}
                            </button>
                        })}
                    </div>
                    <h3 className="uppercase text-[14px] pt-3 md:text-[16px] font-light md:py-5  text-light-white tracking-[2px]"> the terminology ...</h3>
                    <h1 className="text-[24px] md:text-[40px] leading-[2rem] pt-[5px] pb-[10px] md:pb-8 font-Bellefair uppercase">{name}</h1>
                    <p className="text-light-white  text-[15px] md:text-[16px] tracking-[1px] md:max-w-[55%] font-light leading-6 text-center">{description}</p>


                </div>
        }
            </div>

        </div>
    )
}

export default Technology