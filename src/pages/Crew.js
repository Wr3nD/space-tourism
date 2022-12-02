import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import data from "../data.json";
import douglas from "../assets/crew/image-douglas-hurley.png"
import mark from "../assets/crew/image-mark-shuttleworth.png"
import victor from "../assets/crew/image-victor-glover.png"
import anousheh from "../assets/crew/image-anousheh-ansari.png"
const Crew = () => {
    const crew = [douglas, mark, victor, anousheh]
    const [crewSelector, setCrewSelector] = useState(0)
    const [tablet, setTablet] = useState(false);
    console.log("CREW", crewSelector)
    const buttons = data.crew
    const { role, name, bio } = data.crew[crewSelector]
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setTablet(true);
        }
    }, []);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth  >= 768) {
                setTablet(true);
            } else {
                setTablet(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="bg-crew-mb  md:bg-crew-tb   text-white lg:bg-crew-bg bg-cover md:h-[1024px] overflow-hidden md:max-w-[1440px] m-auto lg:h-screen h-screen">
            <div className=' w-full h-full p-6 md:p-0'>
                    <Navbar />  
                    <h3 className="uppercase text-white tracking-[3px] lg:max-w-6xl lg:m-auto font-Barlow md:items-start font-light text-center md:text-[20px] lg:text-[28px] md:text-left pl-0 md:pl-8 pt-6 pb-7 md:pt-10 md:pb-12">
                    <span className="pr-3  text-gray-600 font-bold">02</span> meet your crew
                </h3>
                
                  {tablet ? 
                 <div className="flex flex-col font-Barlow justify-center lg:max-w-6xl lg:m-auto md:justify-start lg:flex-row lg:justify-start items-center">
                 <div
                         className={`w-full bg-cover flex flex-col justify-center  lg:justify-start lg:items-start items-center lg:ml-7`}
                     >
                        <h3 className="uppercase text-[16px] md:text-[24px] pt-3 font-Bellefair text-white/40 tracking-[1px] lg:text-start"> {role}</h3>
                 <h1 className="text-[24px] md:text-[40px] leading-[2rem] pt-[10px] pb-[20px]  font-Bellefair uppercase lg:text-start">{name}</h1>
                 <p className="text-light-white md:max-w-[70%] md:tracking-[2px] text-[15px] md:text-[16px] tracking-[1px] font-extralight font-Barlow leading-6 lg:text-start text-center">{bio}</p>
                         
                       
                     <div className='lg:pt-[6rem]'>
                         {buttons.map((crew, i) => {
                             
                             return <button key={i} className="pt-3 pb-2 text-light-white  m-3 tracking-[3px] uppercase  text-[14px]" onClick={() => setCrewSelector(i)}>
                                 <div className={crewSelector === i ? ' bg-white  w-[10px] h-[10px]  lg:h-[15px] lg:w-[15px] rounded-full' : ' bg-white/10  w-[10px] h-[10px] lg:h-[15px] lg:w-[15px] rounded-full'}></div>
                             </button>
                         })}
                     </div>
                         </div>
                     <img src={crew[crewSelector]} className="  h-[222px]  md:h-[572px] lg:h-[700px]" alt="crewMember" />
                
 
 
             </div>
                
                :
                <div className="flex flex-col font-Barlow justify-center   items-center">
                <div
                        className={`w-full bg-cover flex flex-col justify-center items-center`}
                    >
                      
                        <img src={crew[crewSelector]} className="  h-[222px]  md:h-[572px]" alt="crewMember" />
                        <hr className='w-full ' />
                    </div>
                    <div>
                        {buttons.map((crew, i) => {

                            return <button key={i} className="pt-3 pb-2 text-light-white  m-3 tracking-[3px] uppercase  text-[14px]" onClick={() => setCrewSelector(i)}>
                                <div className={crewSelector === i ? ' bg-white  w-[10px] h-[10px] rounded-full' : ' bg-white/10  w-[10px] h-[10px] rounded-full'}></div>
                            </button>
                        })}
                    </div>
                
                <h3 className="uppercase text-[16px] pt-3 font-Bellefair text-white/40 tracking-[1px]"> {role}</h3>
                <h1 className="text-[24px] leading-[2rem] pt-[10px] pb-[20px]  font-Bellefair uppercase">{name}</h1>
                <p className="text-light-white text-[15px] tracking-[1px] font-extralight leading-6 text-center">{bio}</p>
            </div>
                }
            </div>

        </div>
    )
}

export default Crew