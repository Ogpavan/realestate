// src/DeskChatBottom.js
import React, { useEffect, useState } from 'react';
import { BsChatLeftText } from 'react-icons/bs';
import ChatMob from './ChatMob';

function DeskChatBottom() {
  const [show, setShow] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {show && (
        <div className="hidden lg:block">
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="ease-in-out fixed bottom-0 right-0 mb-6 mr-5 pt-sans-narrow-bold text-xl inline-flex h-12 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#ff0000,45%,#ff4d4d,55%,#ff0000)] bg-[length:200%_100%] px-10 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 drop-shadow-lg"
          >
            <BsChatLeftText className="text-white text-2xl" />
            <span className="ml-2">Let's Chat</span>
          </button>
        </div>
      )}
      {chatOpen && <ChatMob onClose={() => setChatOpen(false)} />}
    </>
  );
}

export default DeskChatBottom;
