import React from 'react';
import {AiFillLinkedin} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col pt-[15vh] px-[10vw] bg-gray-100'>

        <div className='text-blue-600 text-xl font-bold mb-[2vh]'>
            CONTACT
        </div>

        <div style={{color: "#2d2e32",}} className='text-2xl font-bold mb-[7vh]'>Don't be shy! Hit me up! 👇</div>

        <div className='flex flex-col md:flex-row gap-x-[10vw] gap-y-[5vh] pb-[15vh]'>

            <div className='flex gap-x-[1vw]'>
                <Link to="https://www.linkedin.com/in/tugcan-kartal" target="_blank" className='text-3xl'>
                    <div className='text-blue-600 text-5xl bg-white p-4 rounded-full shadow-lg'><AiFillLinkedin /></div>
                </Link>
                <div>
                    <div className='font-bold text-lg'>Linkedin</div>
                    <div className='text-gray-500'>tugcan-kartal</div>
                </div>
            </div>

            <div className='flex gap-x-[1vw]'>
                <Link to="mailto: tugcankartal01@gmail.com" target="_blank" className='text-3xl'>
                    <div className='text-blue-600 text-5xl bg-white p-4 rounded-full shadow-lg'><HiOutlineMail /></div>
                </Link>
                <div>
                    <div className='font-bold text-lg'>Mail</div>
                    <div className='text-gray-500'>tugcankartal01@gmail.com</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact