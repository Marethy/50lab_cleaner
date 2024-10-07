import React, { useState } from "react";
import sa1 from "../assets/images/sa1.jpg"; // After image for regular shoes
import sb1 from "../assets/images/sb1.jpg"; // Before image for regular shoes
import sa2 from "../assets/images/sa2.jpg"; // After image for regular shoes
import sb2 from "../assets/images/sb2.jpg"; // Before image for regular shoes
import bb1 from "../assets/images/bb1.jpg"; // Before image for luxury bags
import ba1 from "../assets/images/ba1.jpg"; // After image for luxury bags
import slb1 from "../assets/images/slb1.jpg"; // Before image for luxury shoes
import sla1 from "../assets/images/sla1.jpg"; // After image for luxury shoes

import blb1 from "../assets/images/blb1.jpg"; // After image for luxury bag
import bla1 from "../assets/images/bla1.jpg"; // Before image for luxury bag  
import spkm1 from "../assets/images/spkm1.jpg"; // Before image for deodorizing product
import spkm2 from "../assets/images/spkm2.jpg"; // After image for deodorizing product
import ut24h1 from "../assets/images/ut24h1.jpg"; // Image for 24h priority service
import { StarIcon } from "@heroicons/react/16/solid";
import services from "./services"; // Import your services
import { useNavigate } from "react-router-dom";

const Service = ({
  service,
  beforeImage,
  afterImage,
  title,
  details,
  expandedService,
  toggleImage,
  isBefore,
  setExpandedService,
}) => {
  const isExpanded = expandedService === service;
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-3xl relative hover:shadow-lg transition-all duration-300 mx-auto">
      <div className="flex flex-col items-center">
        <div
          className="w-full max-w-[400px] mb-4 cursor-pointer"
          onClick={() => toggleImage(service)}
        >
          <img
            src={isBefore ? beforeImage : afterImage}
            alt={isBefore ? "Trước khi vệ sinh" : "Sau khi vệ sinh"}
            className="relative w-48 h-48 lg:w-96 lg:h-96 object-cover rounded-lg mx-auto "
          />
        </div>
        <div
          className="text-2xl bg-gray-200 rounded-2xl cursor-pointer"
          onClick={() => navigate('/services')}
        >
          {title}
        </div>

        {/* Expanded details */}
        {isExpanded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10 p-4 rounded-lg">
            <div className="bg-white p-4 rounded-lg text-left flex flex-col md:flex-row">
              {/* Left side service info */}
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-xl font-bold mb-2">{details.title}</h3>
                <p>{details.description}</p>
                <p>
                  <strong>Thời gian:</strong> {details.time}
                </p>
                <p>
                  <strong>Quy trình:</strong> {details.procedure}
                </p>
                <p>
                  <strong>Đánh giá:</strong>
                </p>
                <div className="flex">
                  {Array.from({ length: details.rating }).map((_, index) => (
                    <StarIcon
                      key={index}
                      className="text-yellow-500 text-base"
                    />
                  ))}
                </div>
              </div>

              {/* Right side service image */}
              <div className="md:w-1/2">
                <img
                  src={isBefore ? beforeImage : afterImage}
                  alt={isBefore ? "Trước khi vệ sinh" : "Sau khi vệ sinh"}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            <button
              className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded"
              onClick={() => setExpandedService(null)}
            >
              Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceCard = () => {
  const [isBefore, setIsBefore] = useState({
    service1: true,
    service2: true,
    service3: true,
    service4: true,
    service5: true,
    service6: true,
  });
  const [expandedService, setExpandedService] = useState(null); // Track the expanded service

  const toggleImage = (service) => {
    setIsBefore((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  return (
    <section
      id="services"
      className="py-12 text-black bg-gray-800 min-h-screen"
    >
      <div className="flex justify-center text-center text-2xl font-bold mb-6 text-white">
        DANH SÁCH CÁC SẢN PHẨM
      </div>

      {/* Grid layout for services with 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Service 1: Shoe Cleaning */}
        <Service
          service="service1"
          beforeImage={sb2}
          afterImage={sa2}
          title="Vệ sinh giày - 50.000đ "
          details={{
            title: "Chi tiết dịch vụ vệ sinh giày",
            description:
              "Dịch vụ vệ sinh giày cơ bản với sản phẩm an toàn và hiệu quả.",
            time: "30 phút",
            procedure:
              "1. Nhận giày, 2. Làm sạch bằng sản phẩm chuyên dụng, 3. Kiểm tra chất lượng.",
            rating: 4,
          }}
          expandedService={expandedService}
          setExpandedService={setExpandedService}
          toggleImage={toggleImage}
          isBefore={isBefore.service1}
        />

        {/* Service 2: Luxury Shoe Cleaning */}
        <Service
          service="service2"
          beforeImage={slb1}
          afterImage={sla1}
          title="Vệ sinh giày cao cấp -120.000đ"
          details={{
            title: "Chi tiết dịch vụ vệ sinh giày luxury ",
            description:
              "Dịch vụ vệ sinh giày luxury, bảo vệ chất liệu và giúp giày như mới.",
            time: "45 phút",
            procedure:
              "1. Nhận giày, 2. Kiểm tra chất liệu, 3. Làm sạch và chăm sóc, 4. Kiểm tra chất lượng.",
            rating: 5,
          }}
          expandedService={expandedService}
          setExpandedService={setExpandedService}
          toggleImage={toggleImage}
          isBefore={isBefore.service2}
        />

        {/* Service 3: Regular Bag Cleaning */}
        <Service
          service="service3"
          beforeImage={bb1} // Replace with actual image link
          afterImage={ba1} // Replace with actual image link
          title="Vệ sinh túi/ví - 80.000đ"
          details={{
            title: "Chi tiết dịch vụ vệ sinh túi/ ví",
            description: "Dịch vụ vệ sinh túi và ví thông thường.",
            time: "30 phút",
            procedure:
              "1. Nhận túi/ví, 2. Làm sạch bên ngoài, 3. Kiểm tra chất lượng.",
            rating: 4,
          }}
          expandedService={expandedService}
          setExpandedService={setExpandedService}
          toggleImage={toggleImage}
          isBefore={isBefore.service3}
        />

        {/* Service 4: Luxury Bag Cleaning */}
        <Service
          service="service4"
          beforeImage={blb1} // Replace with actual image link
          afterImage={bla1} // Replace with actual image link
          title="Vệ sinh túi/ví cao cấp - 250.000đ"
          details={{
            title: "Chi tiết dịch vụ vệ sinh túi/ ví luxury",
            description:
              "Dịch vụ vệ sinh túi và ví luxury, bảo vệ chất liệu cao cấp.",
            time: "60 phút",
            procedure:
              "1. Nhận túi/ví, 2. Kiểm tra chất liệu, 3. Làm sạch và chăm sóc, 4. Kiểm tra chất lượng.",
            rating: 5,
          }}
          expandedService={expandedService}
          setExpandedService={setExpandedService}
          toggleImage={toggleImage}
          isBefore={isBefore.service4}
        />

        {/* Service 5: Khử Mùi */}
        <Service
          service="service5"
          beforeImage={spkm1}
          afterImage={spkm2} // Same image for before and after, adjust if needed
          title="Sản phẩm khử mùi - 49.000đ"
          details={{
            title: "Chi tiết dịch vụ khử mùi",
            description:
              "Sản phẩm khử mùi hiệu quả, giữ cho giày luôn thơm mát.",
            time: "15 phút",
            procedure:
              "1. Nhận giày, 2. Sử dụng sản phẩm khử mùi, 3. Kiểm tra chất lượng.",
            rating: 4,
          }}
          expandedService={expandedService}
          setExpandedService={setExpandedService}
          toggleImage={toggleImage}
          isBefore={isBefore.service5}
        />

        {/* Service 6: Ưu tiên 24h */}
        <Service
          service="service6"
          beforeImage={ut24h1}
          afterImage={ut24h1} // Same image for before and after, adjust if needed
          title="Ưu tiên 24h - 25.000đ"
          details={{
            title: "Chi tiết dịch vụ ưu tiên 24h",
            description:
              "Dịch vụ ưu tiên hoàn tất trong 24h, đảm bảo chất lượng và nhanh chóng.",
            time: "24 giờ",
            procedure:
              "1. Nhận giày, 2. Thực hiện dịch vụ, 3. Giao trả ngay sau 24h.",
            rating: 5,
          }}
          expandedService={expandedService}
          setExpandedService={setExpandedService}
          toggleImage={toggleImage}
          isBefore={isBefore.service6}
        />
      </div>
    </section>
  );
};

export default ServiceCard;
