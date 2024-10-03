import React from 'react';
import { Link } from 'react-router-dom';

const ServiceMenu = () => {
  return (
    <div>
      <h2 className="text-xl xl:text-2xl pt-12.5 md:pt-17.5 pb-7.5">Dịch vụ</h2>
      <div className="hidden md:flex w-full gap-4 md:gap-16 pb-6.5 text-sm lg:text-base">
        <ul className="nav-service flex justify-between items-center w-full">
          <li className="rounded-lg md:px-2 md:py-2 lg:px-3 lg:py-1">
            <Link 
              to="/ve-sinh-giay/" 
              className="hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              Vệ sinh giày
            </Link>
          </li>
          <li className="rounded-lg md:px-2 md:py-2 lg:px-3 lg:py-1">
            <Link 
              to="ve-sinh-giay-luxury/" 
              className="hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              Vệ sinh giày luxury
            </Link>
          </li>
          <li className="rounded-lg md:px-2 md:py-2 lg:px-3 lg:py-1">
            <Link 
              to="ve-sinh-tui-vi/" 
              className="hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              Vệ sinh túi/ ví
            </Link>
          </li>
          <li className="rounded-lg md:px-2 md:py-2 lg:px-3 lg:py-1">
            <Link 
              to="ve-sinh-tui-vi-luxury/" 
              className="hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              Phục hồi túi/ ví luxury   
            </Link>
          </li>
          <li className="rounded-lg md:px-2 md:py-2 lg:px-3 lg:py-1">
            <Link 
              to="/san-pham-khu-mui/" 
              className="hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              Sản phẩm khử mùi
            </Link>
          </li>
          <li className="rounded-lg md:px-2 md:py-2 lg:px-3 lg:py-1 active">
            <Link 
              to="/uu-tien-24h/" 
              className="hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              Ưu tiên 24h
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceMenu;
