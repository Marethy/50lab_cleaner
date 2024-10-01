import React, { useState } from "react";
import { FaPlus, FaMinus, FaFacebookMessenger } from "react-icons/fa"; // Import icons

import Icon50Lab from "../assets/images/50lab.jpg";
const ChatBox = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChatBoxSize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ${
        isMinimized ? "w-50 h-50" : "w-80 h-80"
      }`}
    >
      <div className="flex justify-between items-center">
        <img
          src={Icon50Lab}
          alt="50LabLogo"
          className={`object-contain ${
            isMinimized ? "w-16 h-16" : "w-16 h-16"
          }`}
        />
        <button
          onClick={toggleChatBoxSize}
          className="text-gray-700 cursor-pointer font-bold"
        >
          {isMinimized ? <FaPlus size={20} /> : <FaMinus size={20} />}{" "}
          {/* Use icons */}
        </button>
      </div>

      {!isMinimized && (
        <>
          <div className="mt-2 text-center">
            <h3 className="text-lg font-bold text-black">
              Chat với 50LAB ngay
            </h3>
            <p className="text-sm text-gray-600">
              DỊCH VỤ VỆ SINH GIÀY VÀ ĐỒ DA CHUYÊN NGHIỆP
            </p>
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://www.messenger.com/t/113966211614285"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                <FaFacebookMessenger size={24} />
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBox;
