import React, { useState } from "react";
import { FaPlus, FaMinus, FaFacebookMessenger } from "react-icons/fa"; // Import icons
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import Icon50Lab from "../assets/images/50lab.jpg";
import ZaloIcon from "../assets/images/zaloicon.png";

const ChatBox = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChatBoxSize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      className={`fixed bottom-4 right-6 mr-10 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ${
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
        <div>
          <div className="mt-2 text-center">
            <h3 className="text-lg font-bold text-black">
              Chat với 50LAB ngay
            </h3>
            <p className="text-sm text-black">
              DỊCH VỤ VỆ SINH GIÀY VÀ ĐỒ DA CHUYÊN NGHIỆP
              <p className="text-sm text-black">
              Chất lượng đặt lên hàng đầu, khách nhận hàng không ưng không lấy tiền!!
              </p>
            </p>
          </div>

          <div className="mt-4 text-center gap-x-10 flex items-center justify-center">
          {/* Messenger Link with Icon */}
            <a
              href="https://www.messenger.com/t/0559964424"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                <FaFacebookMessenger size={24} />
              </button>
            </a>

            {/* Facebook Link with Icon */}
            <a
              href="https://www.facebook.com/profile.php?id=100090212237009"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                <FaFacebook size={24} />
              </button>
            </a>

            {/* Instagram Link with Icon */}
            <a
              href="https://www.instagram.com/50lab.official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
                <FaInstagram size={24} />
              </button>
            </a>
            <a
              href="https://zalo.me/0822610252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button p-2 bg-white-600 text-white rounded-full hover:bg-gray-200 transition">
                <img src={ZaloIcon} alt="Zalo" />
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
