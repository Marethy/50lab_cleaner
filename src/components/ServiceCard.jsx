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
  price,
  toggleImage,
  isBefore,
}) => {
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
            className="relative w-52 h-52 lg:w-96 lg:h-96 object-cover rounded-lg mx-auto "
          />
        </div>
        <div
          className="text-2xl bg-gray-200 rounded-2xl cursor-pointer"
          onClick={() => navigate('/services')}
        >
          {title}
        </div>
        <div
          className="text-2xl bg-gray-200 rounded-2xl cursor-pointer"
          onClick={() => navigate('/services')}
         >{price}
        </div>

       
        
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
      className="py-12 text-black bg-gray-200 min-h-screen"
    >
      <div className="flex justify-center text-center text-2xl font-bold mb-6 text-black">
        DANH SÁCH CÁC SẢN PHẨM
      </div>

      {/* Grid layout for services with 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Service 1: Shoe Cleaning */}
        <Service
          service="service1"
          beforeImage={sb2}
          afterImage={sa2}
          title="Vệ sinh giày"
          price ="50.000đ"
         
          toggleImage={toggleImage}
          isBefore={isBefore.service1}
        />

        {/* Service 2: Luxury Shoe Cleaning */}
        <Service
          service="service2"
          beforeImage={slb1}
          afterImage={sla1}
          title="Vệ sinh giày cao cấp"
          price="120.000đ"
 
      
        />

        {/* Service 3: Regular Bag Cleaning */}
        <Service
          service="service3"
          beforeImage={bb1} // Replace with actual image link
          afterImage={ba1} // Replace with actual image link
          title="Vệ sinh túi/ví"
          price="80.000đ"

        />

        {/* Service 4: Luxury Bag Cleaning */}
        <Service
          service="service4"
          beforeImage={blb1} // Replace with actual image link
          afterImage={bla1} // Replace with actual image link
          title="Vệ sinh túi/ví cao cấp "
          price="250.000đ"

    
        />

        {/* Service 5: Khử Mùi */}
        <Service
          service="service5"
          beforeImage={spkm1}
          afterImage={spkm2} // Same image for before and after, adjust if needed
          title="Sản phẩm khử mùi"
          price="49.000đ"
     
       
        />

        {/* Service 6: Ưu tiên 24h */}
        <Service
          service="service6"
          beforeImage={ut24h1}
          afterImage={ut24h1} // Same image for before and after, adjust if needed
          title="Ưu tiên 24h"
          price ="25.000đ"

         
        />
      </div>
    </section>
  );
};

export default ServiceCard;
