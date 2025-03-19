import React, { useState, useEffect } from "react";
import { FaFacebookMessenger, FaInstagram, FaFacebook, FaTimes } from "react-icons/fa";
import Icon50Lab from "../assets/images/50lab.jpg";
import ZaloIcon from "../assets/images/zaloicon.png";

const ChatBox = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: "Messenger",
      icon: <FaFacebookMessenger size={24} />,
      url: "https://www.facebook.com/messages/t/113966211614285",
      bgColor: "bg-blue-500",
      hoverBgColor: "hover:bg-blue-600",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={24} />,
      url: "https://www.facebook.com/profile.php?id=100090212237009",
      bgColor: "bg-blue-600",
      hoverBgColor: "hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/50lab.official",
      bgColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
      hoverBgColor: "hover:from-purple-600 hover:via-pink-600 hover:to-red-600",
    },
    {
      name: "Zalo",
      icon: <img src={ZaloIcon} alt="Zalo" className="w-6 h-6" />,
      url: "https://zalo.me/0559964424",
      bgColor: "bg-blue-400",
      hoverBgColor: "hover:bg-blue-500",
    },
  ];

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out
        ${isMinimized ? "scale-95" : "scale-100"}`}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500
          ${
            isMinimized
              ? "w-16 h-16"
              : "w-80 transform translate-y-0 opacity-100"
          }`}
      >
        <div className="relative">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={Icon50Lab}
              alt="50LabLogo"
              className="w-16 h-16 rounded-full object-cover shadow-md"
            />
          </button>

          {!isMinimized && (
            <div className="animate-fade-in">
              <button
                onClick={() => setIsMinimized(true)}
                className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaTimes className="text-gray-500" />
              </button>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Chat với 50-Lab
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Chất lượng đặt lên hàng đầu, khách nhận hàng không ưng không lấy
                  tiền!!
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        ${link.bgColor} ${link.hoverBgColor}
                        p-3 rounded-lg text-white
                        flex items-center justify-center gap-2
                        transform transition-all duration-300
                        hover:scale-105 hover:shadow-lg
                      `}
                    >
                      {link.icon}
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isMinimized && (
        <div className="absolute -top-2 -right-2">
          <span className="flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
