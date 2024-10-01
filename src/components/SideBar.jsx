import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import Icon50Lab from "../assets/images/50lab.jpg"; // Chỉnh lại phần import hình ảnh

const SideBar = () => {
    return (
        <div className="flex flex-col -ju items-center justify-between p-4 bg-gray-800 h-full fixed left-0">
            <div className="flex flex-col items-center space-y-4">
                {/* Hiển thị hình ảnh Icon50Lab */}
                <img src={Icon50Lab} alt="50Lab Icon" className="w-20 h-20 rounded-full" />
            </div>
            <div className="flex flex-col  space-y-4 justify-end">
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
            </div>
        </div>
    );
};

export default SideBar;
