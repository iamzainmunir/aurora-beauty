"use client";

import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaInstagram,
  FaTelegramPlane,
  FaComments,
} from 'react-icons/fa';

const SocialChatButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3">
      {/* Social Icons */}
      {isOpen && (
        <div className="flex flex-col gap-3 items-end">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://m.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaFacebookMessenger size={24} />
          </a>
          <a
            href="https://ig.me/m/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaTelegramPlane size={24} />
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleButtons}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Toggle Chat Menu"
      >
        <FaComments size={24} />
      </button>
    </div>
  );
};

export default SocialChatButtons;
