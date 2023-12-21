import React from 'react';
import { Link } from 'react-router-dom';
import CoinPhoto from "../static/coinapp.png";
import ClothPhoto from "../static/clothapp.png";
import CarPhoto from "../static/carrent.png";
import KitchenPhoto from "../static/kitchenapp.png";
import EasyOrderPhoto from "../static/easyorderr.png";

const Portfolio = () => {
  return (
    <div id='projects' className='bg-gray-50 py-[5vh] px-[10vw] '>
        <div className='flex flex-col md:mt-0 mt-10vh gap-y-[10vh]'>

            <div className='flex flex-col gap-y-[2vh]'>
                <div className='text-xl text-blue-600 font-bold'>PORTFOLIO</div>
                <div className='text-2xl font-bold' style={{color: "#2d2e32"}}>Each project is a unique piece of development 🧩</div>
            </div>
            
            <div>
                <div className='flex flex-col gap-y-[10vh]'>     


                    <div className='flex md:flex-row flex-col gap-y-[5vh] items-center bg-white py-[5vh] px-[2vw] gap-x-[10vw] rounded-2xl'>

                        <Link className='md:order-10' to="https://6584152ccaaaa7d355ca9300--easyorderr.netlify.app/" target="_blank">
                                <div className='order-10'> 
                                    <img className='h-[40vh] rounded-3xl shadow-2xl' src={EasyOrderPhoto} alt="not found"/>
                                </div>
                        </Link>

                        

                        <div className='flex flex-col gap-y-[5vh] text-center'>
                            <div className='flex flex-col gap-y-[5vh]'>
                                <div className='font-bold text-xl' style={{color: "#2d2e32"}}>EasyOrder 🚗  </div>
                                <div className='text-gray-500 font-semibold text-lg'>
                                    Ultimate restaurant POS software that helps 
                                    <br />
                                    serve your valued customers in a practical, productive manner and <b>clone of sambapos</b>
                                </div>
                            </div>

                            <div className='flex justify-center gap-x-[2vw] text-xl'>

                                <Link to="https://github.com/tugcan-kartal/NewEasyOrder" target="_blank">
                                
                                    <div>
                                        Code 
                                        <i class="fa-brands fa-github fa-flip mx-[0.5vw]" style={{color: "#0a0a0b;"}}></i>
                                    </div>
                                
                                </Link>

                                <Link to="https://6584152ccaaaa7d355ca9300--easyorderr.netlify.app/" target="_blank">

                                    <div>
                                        Live Demo
                                        <i class="fa-solid fa-arrow-up-right-from-square fa-beat-fade mx-[0.5vw]" style={{color: "#000000;"}}></i>
                                    </div>

                                </Link>

                            </div>
                        </div>

                    </div>

                    <div className='flex md:flex-row flex-col gap-y-[5vh] items-center bg-white py-[5vh] px-[2vw] gap-x-[10vw] rounded-2xl'>

                        <Link to="https://641b222dc64c0d18a38466d5--coinappbytugcankartal.netlify.app/" target="_blank">

                            <div>
                                <img className='h-[40vh] rounded-3xl shadow-2xl' src={CoinPhoto} alt="not found"/>
                            </div>

                        </Link>

                        <div className='flex flex-col gap-y-[5vh] text-center'>
                            <div className='flex flex-col gap-y-[5vh]'>
                                <div className='font-bold text-xl' style={{color: "#2d2e32"}}>COIN 🪙  </div>
                                <div className='text-gray-500 font-semibold text-lg'>
                                    Coin App is a crypto app that allows 
                                    <br /> 
                                    users to search for information about 
                                    <br /> 
                                    various cryptocurrencies in real-time.
                                </div>
                            </div>

                            <div className='flex justify-center gap-x-[2vw] text-xl'>

                                <Link to="https://github.com/tugcan-kartal/COIN-APP" target="_blank">
                                
                                    <div>
                                        Code 
                                        <i class="fa-brands fa-github fa-flip mx-[0.5vw]" style={{color: "#0a0a0b;"}}></i>
                                    </div>
                                
                                </Link>

                                <Link to="https://641b222dc64c0d18a38466d5--coinappbytugcankartal.netlify.app/" target="_blank">

                                    <div>
                                        Live Demo
                                        <i class="fa-solid fa-arrow-up-right-from-square fa-beat-fade mx-[0.5vw]" style={{color: "#000000;"}}></i>
                                    </div>

                                </Link>

                            </div>
                        </div>

                    </div>
                    
                    <div className='flex md:flex-row flex-col gap-y-[5vh] items-center bg-white py-[5vh] px-[2vw] gap-x-[10vw] rounded-2xl'>

                        <Link className='md:order-10' to="https://642020424619fd0f6dd6cc20--carrentingwebsitebytugcankartal.netlify.app/" target="_blank">

                            <div > 
                                <img className='h-[40vh] rounded-3xl shadow-2xl' src={CarPhoto} alt="not found"/>
                            </div>

                        </Link>

                        <div className='flex flex-col gap-y-[5vh] text-center'>
                            <div className='flex flex-col gap-y-[5vh]'>
                                <div className='font-bold text-xl' style={{color: "#2d2e32"}}>CAR RENT 🚗  </div>
                                <div className='text-gray-500 font-semibold text-lg'>
                                    A car rental website is an online platform that 
                                    <br />
                                    allows users to rent cars for personal or business use. 
                                    <br />
                                    The website provides an interface for searching, 
                                    <br />
                                    comparing, and reserving cars.
                                </div>
                            </div>

                            <div className='flex justify-center gap-x-[2vw] text-xl'>

                                <Link to="https://github.com/tugcan-kartal/CAR_RENT" target="_blank">
                                
                                    <div>
                                        Code 
                                        <i class="fa-brands fa-github fa-flip mx-[0.5vw]" style={{color: "#0a0a0b;"}}></i>
                                    </div>
                                
                                </Link>

                                <Link to="https://642020424619fd0f6dd6cc20--carrentingwebsitebytugcankartal.netlify.app/" target="_blank">

                                    <div>
                                        Live Demo
                                        <i class="fa-solid fa-arrow-up-right-from-square fa-beat-fade mx-[0.5vw]" style={{color: "#000000;"}}></i>
                                    </div>

                                </Link>

                            </div>
                        </div>

                    </div>

                    <div className='flex md:flex-row flex-col gap-y-[5vh] items-center bg-white py-[5vh] px-[2vw] gap-x-[10vw] rounded-2xl'>

                        <Link to="https://642028a8960c8a1bb062584f--clothestorebytugcankartal.netlify.app/" target="_blank">
                                <div>
                                    <img className='h-[40vh] rounded-3xl shadow-2xl' src={ClothPhoto} alt="not found"/>
                                </div>
                        </Link>
                        

                        <div className='flex flex-col gap-y-[5vh] text-center'>
                            <div className='flex flex-col gap-y-[5vh]'>
                                <div className='font-bold text-xl' style={{color: "#2d2e32"}}>CLOTH SHOP 👕  </div>
                                <div className='text-gray-500 font-semibold text-lg'>
                                    With a focus on simplicity and clean design, 
                                    <br />
                                    this store prioritize user experience, making 
                                    <br />
                                    it easy for  customers to find and purchase the 
                                    <br />
                                    products they need.
                                </div>
                            </div>

                            <div className='flex justify-center gap-x-[2vw] text-xl'>

                                <Link to="https://github.com/tugcan-kartal/Clothing-Store" target="_blank">
                                
                                    <div>
                                        Code 
                                        <i class="fa-brands fa-github fa-flip mx-[0.5vw]" style={{color: "#0a0a0b;"}}></i>
                                    </div>
                                
                                </Link>

                                <Link to="https://642028a8960c8a1bb062584f--clothestorebytugcankartal.netlify.app/" target="_blank">

                                    <div>
                                        Live Demo
                                        <i class="fa-solid fa-arrow-up-right-from-square fa-beat-fade mx-[0.5vw]" style={{color: "#000000;"}}></i>
                                    </div>

                                </Link>

                            </div>
                        </div>

                    </div>

                    <div className='flex md:flex-row flex-col gap-y-[5vh] items-center bg-white py-[5vh] px-[2vw] gap-x-[10vw] rounded-2xl'>

                        <Link className='md:order-10' to="https://63aab7932f2679582377cfb8--react-tailwind-store-tugcan.netlify.app/" target="_blank">
                                <div className='order-10'> 
                                    <img className='h-[40vh] rounded-3xl shadow-2xl' src={KitchenPhoto} alt="not found"/>
                                </div>
                        </Link>

                        

                        <div className='flex flex-col gap-y-[5vh] text-center'>
                            <div className='flex flex-col gap-y-[5vh]'>
                                <div className='font-bold text-xl' style={{color: "#2d2e32"}}>Kitchen Shop 🍳  </div>
                                <div className='text-gray-500 font-semibold text-lg'>
                                    A kitchen website is a comprehensive resource for 
                                    <br />
                                    kitchen tools information options, and tools
                                    <br />
                                     to help users achieve their meal choice.
                                </div>
                            </div>

                            <div className='flex justify-center gap-x-[2vw] text-xl'>

                                <Link to="https://github.com/tugcan-kartal/Kitchen-Store" target="_blank">
                                
                                    <div>
                                        Code 
                                        <i class="fa-brands fa-github fa-flip mx-[0.5vw]" style={{color: "#0a0a0b;"}}></i>
                                    </div>
                                
                                </Link>

                                <Link to="https://63aab7932f2679582377cfb8--react-tailwind-store-tugcan.netlify.app/" target="_blank">

                                    <div>
                                        Live Demo
                                        <i class="fa-solid fa-arrow-up-right-from-square fa-beat-fade mx-[0.5vw]" style={{color: "#000000;"}}></i>
                                    </div>

                                </Link>

                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    </div>
  )
}

export default Portfolio