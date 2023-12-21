import React from 'react';
import {AiFillLinkedin} from "react-icons/ai";
import {GoMarkGithub} from "react-icons/go";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-evenly gap-x-[15vw] gap-y-[2vh] bg-gray-800 text-white py-[5vh]'>
        <div className='font-bold text-xl'>Copyright © 2023. All rights are reserved</div>
        <div className='flex items-center gap-x-[1vw]'>

            <Link to="https://www.linkedin.com/in/tugcan-kartal" target="_blank" className='text-3xl'>
              <div className='text-4xl'>
                  <AiFillLinkedin />
              </div>
            </Link>

            <Link to="https://github.com/tugcan-kartal" target="_blank" className='text-3xl'>
              <div className='text-3xl'>
                  <GoMarkGithub />
              </div>
            </Link>

        </div>
    </div>
  )
}

export default Footer