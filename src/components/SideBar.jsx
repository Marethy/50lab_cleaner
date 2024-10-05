import React, { useState } from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import Icon50Lab from "../assets/images/50lab.jpg"; // Chỉnh lại phần import hình ảnh
import IconZalo from "../assets/images/zaloicon.png"; // Import hình ảnh Zalo
const SideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State để kiểm soát modal

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle trạng thái modal
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-between p-4 bg-gray-800 h-full fixed left-0 hidden sm:flex">
        <div className="flex flex-col items-center space-y-4">
          {/* Hiển thị hình ảnh Icon50Lab */}
          <img
            src={Icon50Lab}
            alt="50Lab Icon"
            className="w-20 h-20 rounded-full cursor-pointer"
            onClick={toggleModal} // Xử lý sự kiện click vào icon
          />
        </div>
        <div className="flex flex-col space-y-4 justify-center mb-36">
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
            <img
              src={IconZalo}
              alt="Zalo Icon"
              className="w-10 h-10 rounded-full bg-white cursor-pointer"
            />
            </a>
        </div>
      </div>

      {/* Modal hiển thị ảnh phóng to */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            {/* Ảnh phóng to */}
            <img
              src={Icon50Lab}
              alt="50Lab Icon"
              className="w-96 h-96 object-cover rounded-lg"
            />
            {/* Nút đóng */}
            <button
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
              onClick={toggleModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
