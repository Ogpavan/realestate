import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { TfiLayoutGrid2 } from 'react-icons/tfi';
import MobileNavbModal from './MobileNavbModal';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMobileNav]);

  return (
    <div className='bg-[rgba(15,23,42)] text-white text-2xl fixed top-0 left-0 right-0 w-full z-50'>
      <div className='flex justify-between items-center px-5 py-1 sm:py-2'>
        <div className='flex space-x-4 items-center'>  
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="7.767 51.693 183.51 85.375"
            height="50"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Homepage"
          >
            <g>
              <path
                className="fill-white"
                d="M178.752 121.175h-8V92.854l-42.739-31.219L99.51 82.877H29.201v38.298h-8V74.877h75.655l31.109-23.184 50.787 37.099v32.383z"
              ></path>
              <path
                className="fill-white"
                d="M191.277 129.068v8H7.767v-8h183.51z"
              ></path>
              <path
                className="fill-white"
                d="M131.794 91.26v15.298h-8V91.26h8z"
              ></path>
              <path
                className="fill-white"
                d="M75.724 91.26v15.298h-8V91.26h8z"
              ></path>
              <path
                className="fill-white"
                d="M51.213 91.26v15.298h-8V91.26h8z"
              ></path>
            </g>
          </svg>
          <span className='md:text-2xl text-lg font-sans font-bold '>RealEstate</span>
          <span className='text-xl hidden lg:block font-thin'>Properties</span>

          <div className='hidden lg:flex items-center space-x-2'>
            <FaFacebookF className='h-5'/>
            <FaTwitter className='h-5'/>
            <FaLinkedin className='h-5'/>
            <FaInstagram className='h-5'/>
            <FaYoutube className='h-5'/>
          </div>
        </div>

        <button onClick={() => setShowMobileNav(true)} className='lg:hidden pr-2'>
          <TfiLayoutGrid2/>
        </button>

        <ul className='hidden lg:flex text-lg font-sans font-normal space-x-8'>
          <li><NavLink to="/" className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}>Home</NavLink></li> 
          <li><NavLink to="/properties"  className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}>Properties</NavLink></li>  
          <li><NavLink to="/news"  className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}>News</NavLink></li>       
          <li><NavLink to="/team"  className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}>Team</NavLink></li>
          <li><NavLink to="/contact"  className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}>Contact</NavLink></li> 
              
        </ul>
      </div>

      {showMobileNav && (
        <MobileNavbModal onClose={() => setShowMobileNav(false)} />
      )}
    </div>
  );
}

export default Navbar;
