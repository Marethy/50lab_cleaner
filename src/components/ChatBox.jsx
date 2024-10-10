import React, { useState } from "react";
import { FaPlus, FaMinus, FaFacebookMessenger } from "react-icons/fa"; // Import icons
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Icon50Lab from "../assets/images/50lab.jpg";
import ZaloIcon from "../assets/images/zaloicon.png";

const ChatBox = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChatBoxSize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      className={` rounded-full	 fixed bottom-36 right-6 bg-white shadow-lg  p-4 transition-all duration-300 ${
        isMinimized ? "w-30 h-30" : "w-80 h-80"
      }`}
    >
      <div className="flex justify-between items-center">
        <button
          onClick={toggleChatBoxSize}
          className="text-gray-700 cursor-pointer font-bold flex flex-row "
        >
          <img
            src={Icon50Lab}
            alt="50LabLogo"
            className={` rounded-full object-contain ${
              isMinimized ? "w-16 h-16" : "w-16 h-16"
            }`}
          />
          {/* <p className={` ${
            isMinimized ? "hidden" : "w-96 h-48"
          }`} >-</p> */}
        </button>
        <button
          id="close-nav"
          type="button"
          className={`bg-white rounded-md inline-flex items-center justify-center text-primary-700 hover:text-primary 
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 
            ${isMinimized ? "hidden" : "w-16 h-16"}`}
  
  
          onClick={toggleChatBoxSize}
        >
          <span className="sr-only">Close menu</span>
          <img
            src="https://sneakervitamin.net/wp-content/themes/sneaker-vitamin/images/close-menu-mobile.svg"
            alt="Close menu"
          />
        </button>
      </div>

      {!isMinimized && (
        <div>
          <div className="mt-2 text-center">
            <h3 className="text-lg font-bold text-black">
              Chat với 50-Lab ngay
            </h3>

            <p className="text-md text-black ">
              Chất lượng đặt lên hàng đầu, khách nhận hàng không ưng không lấy
              tiền!!
            </p>
          </div>

          <div className="mt-4 text-center gap-x-10 flex items-center justify-center">
            {/* Messenger Link with Icon */}
            <a
              href="https://www.facebook.com/messages/t/113966211614285"
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
              href="https://zalo.me/0559964424"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button p-2 bg-white-600 text-white  hover:bg-gray-200 transition ">
                <img src={ZaloIcon} alt="Zalo" className="rounded-full" />
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
