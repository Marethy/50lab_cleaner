import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ServiceMenu = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl xl:text-3xl font-bold pb-8 text-gray-800 relative">
        Dịch vụ
        <span className="block h-1 w-20 bg-red-500 mt-2"></span>
      </h2>
      <div className="hidden md:block w-full pb-6.5">
        <ul className="nav-service grid grid-cols-3 gap-4 w-full">
          {[
            { path: "/ve-sinh-giay/", label: "Vệ sinh giày" },
            { path: "/ve-sinh-giay-luxury/", label: "Vệ sinh giày cao cấp" },
            { path: "/ve-sinh-tui-vi/", label: "Vệ sinh túi/ ví" },
            { path: "/ve-sinh-tui-vi-luxury/", label: "Vệ sinh túi/ ví cao cấp" },
            { path: "/san-pham-khu-mui/", label: "Sản phẩm khử mùi" },
            { path: "/uu-tien-24h/", label: "Ưu tiên 24h" }
          ].map((item, index) => (
            <li 
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link 
                to={item.path}
                className={`
                  block p-4 rounded-xl text-center transition-all duration-300
                  ${location.pathname === item.path 
                    ? 'bg-red-500 text-white shadow-lg transform scale-105' 
                    : 'bg-white hover:bg-red-500 hover:text-white hover:shadow-lg hover:scale-105'}
                  ${hoveredItem === index ? 'transform scale-105' : ''}
                `}
              >
                <span className="font-medium">{item.label}</span>
                {hoveredItem === index && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-red-500 rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden">
        <select 
          className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-red-500 outline-none"
          onChange={(e) => window.location.href = e.target.value}
          value={location.pathname}
        >
          <option value="/ve-sinh-giay/">Vệ sinh giày</option>
          <option value="/ve-sinh-giay-luxury/">Vệ sinh giày cao cấp</option>
          <option value="/ve-sinh-tui-vi/">Vệ sinh túi/ ví</option>
          <option value="/ve-sinh-tui-vi-luxury/">Vệ sinh túi/ ví cao cấp</option>
          <option value="/san-pham-khu-mui/">Sản phẩm khử mùi</option>
          <option value="/uu-tien-24h/">Ưu tiên 24h</option>
        </select>
      </div>
    </div>
  );
};

export default ServiceMenu;
