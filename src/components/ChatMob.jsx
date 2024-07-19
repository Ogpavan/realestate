import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

const ChatMob = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: uuidv4(), text: input }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col fixed bottom-0 top-16 w-full bg-gray-100 z-50">
      <div className="fixed top-0 left-0 w-full h-16 bg-slate-900 flex items-center p-3">
        <IoArrowBackCircle className="text-white text-4xl" onClick={onClose} />
      </div>
      <div className="flex-1 p-4 mt-16 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="my-2 p-2 bg-red-500 text-white rounded-lg">
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex p-4 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg flex items-center justify-center"
        >
          <FaLocationArrow />
        </button>
      </div>
    </div>
  );
};

export default ChatMob;
