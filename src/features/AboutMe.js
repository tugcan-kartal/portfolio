import React from 'react';
import AboutPhoto from "../static/about-img.62b47e7f183d4b4e9feb.webp";
// import AboutSmallPhoto from "../static/aboutme.svg";

const AboutMe = () => {
  return (

    <div id='about' className='px-[5vw] bg-gray-100 py-[50vh]  md:pt-0 md:pb-0'>

      <div  className='flex flex-col md:flex-row justify-center items-center text-center md:text-left  gap-x-[5vw] gap-y-[5vh] h-screen'>

        <div className='relative'>
          <img className='rounded-2xl' alt='not found' src={AboutPhoto} />
          {/* <img className='absolute bottom-0 left-[70vw] bg-white p-4 rounded-full w-[15vw] z-10 animate-spin' alt='not found' src={AboutSmallPhoto} /> */}
        </div>

        <div>
          <div className='flex flex-col gap-y-[4vh] md:gap-y-[2vh] w-[90vw] md:w-[40vw]'>

            <div className='mt-[5vh] md:mt-0 text-blue-600 text-xl font-bold flex md:justify-start justify-center items-center gap-x-[1vw]'>
              <div>ABOUT ME</div>
              <div className='text-xl'>
                <i class="fa-solid fa-keyboard fa-spin" style={{color: "#0d63f8"}}></i>  
              </div>
            </div>

            <div style={{color: "#2d2e32"}} className='text-2xl font-bold' >
              A dedicated Software Developer
            </div>

            <div style={{fontFamily: "Poppins, sans-serif"}} className='text-lg text-gray-400'>
              As a Software Developer, I possess a comprehensive range of 
              skills in HTML, CSS, JavaScript, React, Tailwind, SCSS, and Node.js. 
              I excel in designing and developing responsive websites and web applications 
              that provide seamless user experiences. My expertise lies in creating dynamic 
              and engaging interfaces through writing clean and optimized code, utilizing 
              the latest development tools and techniques, and employing Node.js to build 
              efficient and scalable back-end systems.I am a team player who thrives 
              in collaborating with cross-functional teams to deliver high-quality software solutions. 
              With a passion for learning and staying up-to-date with the latest industry trends, 
              I am committed to delivering top-notch software products that meet and exceed customer expectations. 
              Whether it's developing a new application or maintaining an existing one, I am dedicated to 
              delivering results that are both effective and efficient.
            </div>

          </div>
        </div>

      </div>

    </div>

  )
}

export default AboutMe