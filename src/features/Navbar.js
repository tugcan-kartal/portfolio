import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.hash;
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-between bg-gray-50 p-[2%] shadow-lg">
        <div className="font-bold text-2xl">Tugcan.dev</div>
        <div className="hidden md:flex gap-x-[3vw] font-bold text-lg">
          <a href="#home" onClick={handleLinkClick} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
            Home
          </a>
          <a href="#about" onClick={handleLinkClick} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
            About
          </a>
          <a href="#projects" onClick={handleLinkClick} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
            Projects
          </a>
          <a href="#contact" onClick={handleLinkClick} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer hover:text-blue-500 transition-all duration-300 text-4xl"
          >
            <FiMenu />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg py-8 px-4 w-full md:w-auto">
            <div className="flex justify-end">
              <div
                onClick={() => setShowMenu(false)}
                className="cursor-pointer hover:text-blue-500 transition-all duration-300 text-4xl"
              >
                <FaTimes />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-10 text-xl font-semibold">
              <a href="#home" onClick={handleLinkClick} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
                Home
              </a>
              <a href="#about" onClick={handleLinkClick} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
                About
              </a>
              <a href="#projects" onClick={handleLinkClick} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
                Projects
              </a>
              <a href="#contact" onClick={handleLinkClick} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
