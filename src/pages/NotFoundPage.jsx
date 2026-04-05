import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="min-h-screen bg-[#F5F5F7] flex flex-col items-center justify-center px-4 pt-16">
    <p className="text-8xl font-bold text-[#1D1D1F] mb-4">404</p>
    <h1 className="text-2xl font-semibold text-[#1D1D1F] mb-2">Không tìm thấy trang</h1>
    <p className="text-[#6E6E73] mb-8 text-center">Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
    <Link to="/">
      <button className="px-6 py-3 bg-[#E63946] text-white font-semibold rounded-full hover:bg-[#c8313d] transition-colors">
        Về trang chủ
      </button>
    </Link>
  </div>
);

export default NotFoundPage;
