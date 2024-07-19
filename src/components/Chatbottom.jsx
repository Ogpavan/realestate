import React, { useState, useEffect } from 'react';
import { BsChatLeftText } from 'react-icons/bs';
import ChatMob from './ChatMob'; // Import your ChatMob component

function Chatbottom() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [chatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShow(true);
      } else {
        // Scrolling up
        setShow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleClick = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <>
    <div className='lg:hidden'>
      {show && (
        <button
          onClick={handleClick}
          className='bg-red-600 py-2 fixed bottom-0 w-full flex justify-center items-center'
        >
          <BsChatLeftText className='text-white text-2xl' />
          <span className='text-white hidden'>Let's chat</span>
        </button>
      )}
      {chatVisible && <ChatMob onClose={handleClick} />} {/* Pass handleClick as onClose */}
      </div>
    </>
  );
}

export default Chatbottom;
