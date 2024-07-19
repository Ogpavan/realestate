import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function MobileNavbModal({ onClose }) {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md bg-[rgba(15,23,42,0.8)] flex flex-col items-center justify-center z-50'>
      <button onClick={onClose} className='absolute top-5 right-5 text-white text-3xl'>
        <FaTimes />
      </button>
      <ul className='text-white text-2xl space-y-4 text-center'>
        <li onClick={onClose}><NavLink to='/'  className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}>Home</NavLink></li>
        <li onClick={onClose}><NavLink to='/properties'  className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}>Properties</NavLink></li>        
        <li onClick={onClose}><NavLink to='/team'  className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}> Team</NavLink></li>
        <li onClick={onClose}><NavLink to='/contact'  className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}> Contact</NavLink>  </li>
        <li onClick={onClose}><NavLink to='/news'  className={ ({isActive}) => isActive ? 'text-red-500' : 'text-white'}>News</NavLink></li>
      </ul>
    </div>
  );
}

export default MobileNavbModal;
