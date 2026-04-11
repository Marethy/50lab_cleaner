import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  { path: "/services#shoes",  label: "Vệ sinh giày" },
  { path: "/services#bags",   label: "Vệ sinh túi xách" },
  { path: "/services#shoes",  label: "Vệ sinh giày cao cấp" },
  { path: "/services#bags",   label: "Vệ sinh túi cao cấp" },
  { path: "/lien-he-hop-tac", label: "Dịch vụ doanh nghiệp" },
];

const ServiceMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl xl:text-3xl font-bold pb-8 text-gray-800 relative">
        Dịch vụ
        <span className="block h-1 w-20 bg-red-500 mt-2" />
      </h2>

      <div className="hidden md:block w-full pb-6">
        <ul className="grid grid-cols-3 gap-4 w-full">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                to={item.path}
                className={`block p-4 rounded-xl text-center transition-all duration-300
                  ${location.pathname + location.hash === item.path
                    ? "bg-red-500 text-white shadow-lg scale-105"
                    : "bg-white hover:bg-red-500 hover:text-white hover:shadow-lg hover:scale-105"}
                  ${hoveredItem === index ? "scale-105" : ""}`}
              >
                <span className="font-medium">{item.label}</span>
                {hoveredItem === index && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-red-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile — React Router navigate, no full-page reload */}
      <div className="md:hidden">
        <select
          className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-red-500 outline-none"
          onChange={(e) => navigate(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Chọn dịch vụ…</option>
          {menuItems.map((item, i) => (
            <option key={i} value={item.path}>{item.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ServiceMenu;
