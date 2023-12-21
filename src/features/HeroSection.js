import React from 'react';
import Me from "../static/profilephoto.png";
import {FaGithub} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div id='home' className='bg-gray-50 md:h-[90vh] pb-[5vh] flex flex-col justify-center items-center px-[20vw]'>

        <div className='flex flex-col gap-x-[10vw] gap-y-[10vh]'>

            <div className='flex flex-col md:flex-row text-center md:text-left gap-x-[5vw] gap-y-[5vh]'>

                <div className='flex flex-col gap-y-[15vh] md:gap-y-[8vh]'>

                    <div className='flex h-[5vh]'>
                        <div style={{color: "#2d2e32",}} className='text-5xl font-bold'>Software Developer</div>
                    </div>

                    <div className='text-lg text-gray-400'>
                        Hello, I'm Tugcan Kartal, a passionate software developer. 
                        <br />
                        With my love for the software world and my experience, 
                        <br />
                        I approach every project with excitement and strive 
                        <br /> 
                        to deliver the best user experience possible.
                    </div>

                    <div className='flex justify-center md:justify-start gap-x-[1vw]'>
                        <Link to="https://www.linkedin.com/in/tugcan-kartal" target="_blank" className='text-3xl'>
                            <BsLinkedin />
                        </Link>

                        <Link to="https://github.com/tugcan-kartal" target="_blank" className='text-3xl'>
                            <FaGithub />
                        </Link>
                    </div>

                </div>

                <div className='flex justify-center md:order-10 -order-1'>
                    <img className='h-[40vh] mt-[5vh] rounded-full border-2 border-black shadow-lg hover:opacity-90' src={Me} alt="not found"/>
                </div>

            </div>

            <div className='flex flex-col md:flex-row justify-center md:justify-start gap-x-[5vw] gap-y-[10vh] md:gap-y-[4vh]'>

                <div style={{color: "#2d2e32",}} className='flex justify-center md:justify-start text-xl font-semibold gap-x-[1vw]'>
                    <div>Tech Stack </div>
                    <div className='invisible md:visible'>|</div>
                </div>

                <div className='md:flex md:flex-row grid grid-cols-3 gap-[7vw] gap-y-[3vh] mx-auto md:gap-x-[5vw] text-4xl mb-[15vh] md:mb-[0vh]'>

                    <div className='bg-white'>
                        <i className="fa-brands fa-html5 fa-beat-fade" beatFade style={{color: "#ff0a2f",}}></i>
                    </div>

                    <div>
                        <i className="fa-brands fa-css3-alt fa-beat-fade" beatFade style={{color: "#1760de",}}></i>
                    </div>

                    <div>
                        <i className="fa-brands fa-js fa-beat-fade" beatFade style={{color: "#fdd50d",}}></i>
                    </div>

                    <div>
                        <i className="fa-brands fa-react fa-beat-fade" beatFade style={{color: "#307bdf",}}></i>
                    </div>

                    <div>
                        <i className="fa-brands fa-node fa-beat-fade" beatFade style={{color: "#42c21e",}}></i>
                    </div>

                    <div>
                        <i className="fa-brands fa-npm fa-beat-fade" beatFade style={{color: "#de3b3b",}}></i>
                    </div>

                </div>
            </div>    

        </div>

    </div>
  )
}

export default HeroSection