import React, { useState } from "react";
import sa1 from "../assets/images/sa1.jpg"; // Ảnh sau giày thường
import sb1 from "../assets/images/sb1.jpg"; // Ảnh trước giày thường
import slb1 from "../assets/images/slb1.jpg"; // Ảnh trước giày luxury
import sla1 from "../assets/images/sla1.jpg"; // Ảnh sau giày luxury

const ServiceCard = () => {
  const [isBefore, setIsBefore] = useState({
    service1: true,
    service2: true,
  });

  const toggleImage = (service) => {
    setIsBefore((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  return (
    <section id="services" className="py-12 text-black bg-white">
      <div className="flex justify-center text-3xl text-red-600 font-bold text-center mb-8">
        DANH SÁCH CÁC SẢN PHẨM
      </div>

      {/* Sử dụng grid để bố cục các dịch vụ với 2 hàng và 2 cột */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-48">
        {/* Dịch vụ 1: Vệ sinh giày thường */}
        <div className="flex flex-col items-center">
          <div
            className="relative w-96 h-96 mb-4 cursor-pointer"
            onClick={() => toggleImage("service1")}
          >
            <img
              src={isBefore.service1 ? sb1 : sa1}
              alt={isBefore.service1 ? "Trước khi vệ sinh" : "Sau khi vệ sinh"}
              className="w-full h-full object-cover rounded-lg" // Thêm thuộc tính rounded-lg để bo tròn hình ảnh
            />
          </div>
          <h2 className="text-xl font-bold">Vệ sinh giày</h2>
          <p className="text-md text-center">
            Dịch vụ vệ sinh giày chuyên nghiệp giúp giày của bạn trở nên sáng bóng như mới.
          </p>
        </div>

        {/* Dịch vụ 2: Vệ sinh giày luxury */}
        <div className="flex flex-col items-center">
          <div
            className="relative w-96 h-96 mb-4 cursor-pointer"
            onClick={() => toggleImage("service2")}
          >
            <img
              src={isBefore.service2 ? slb1 : sla1}
              alt={isBefore.service2 ? "Trước khi vệ sinh" : "Sau khi vệ sinh"}
              className="w-full h-full object-cover rounded-lg" // Thêm thuộc tính rounded-lg để bo tròn hình ảnh
            />
          </div>
          <h2 className="text-xl font-bold">Vệ sinh giày luxury</h2>
          <p className="text-md text-center">
            Dịch vụ vệ sinh giày luxury sử dụng các công nghệ cao cấp để chăm sóc giày của bạn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
