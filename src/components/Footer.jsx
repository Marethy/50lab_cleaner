import React from "react";
import Icon50Lab from "../assets/images/50lab.jpg";
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-3 md:px-20 lg:px-48">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 ">
      <div>
        <h3 className="text-lg font-bold mb-4">Thông tin liên hệ</h3>
        <p>
          Địa chỉ :{" "}
          <a href="https://www.google.com/maps/place/Bcons+Plaza/@10.8931201,106.7870326,17z/data=!3m1!4b1!4m6!3m5!1s0x31752d81d38ed371:0x571edeedf61a2fbe!8m2!3d10.8931201!4d106.7919035!16s%2Fg%2F11k01n_5vk?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" className="underline">
            Chung cư Bcons Plaza
          </a>
        </p>
        <p>
          Hotline:{" "}
          <a href="tel:0559964424" className="underline">
            055 996 4424
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:info@50labhochiminhcity@gmail.com"
            className="underline"
          >
            50labhochiminhcity@gmail.com
          </a>
        </p>
      </div>

      {/* <div>
        <h3 className="text-lg font-bold mb-4">Dịch vụ 50-Lab</h3>
        <ul>
          <li>Vệ sinh giày </li>
          <li>Vệ sinh giày luxury</li>
          <li>Vệ sinh ví/ túi</li>
          <li>Vệ sinh ví/ túi luxury</li>
          <li>Xịt khử mùi </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Chính sách chung</h3>
        <ul>
          <li>Chính sách hoàn trả</li>
          <li>Chính sách bảo hành</li>
          <li>Hình thức thanh toán</li>
          <li>Chính sách vận chuyển</li>
        </ul>
      </div> */}
    </div>
  </footer>
);

export default Footer;
