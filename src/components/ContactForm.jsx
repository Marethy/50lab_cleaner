import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaQuestionCircle } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber:"",
    orderService: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // For displaying status messages
  const [loading, setLoading] = useState(false); // Loading state to prevent multiple submissions

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Hiển thị trạng thái loading (nếu có)

    emailjs
      .send("service_xzvm2db", "template_i25gn75", formData, "uX5HE9XX3c98LTqzw")
      .then((result) => {
        // Thông báo đặt lịch thành công
        setStatusMessage(
          "Đặt lịch thành công! Chúng tôi sẽ liên lạc với bạn sớm nhất có thể thông qua gmail và số điện thoại bạn cung cấp."
        );
        setFormData({
          name: "",
          email: "",
          phoneNumber:"",
          orderService: "",
          message: "",
        });
      })
      .catch((error) => {
        // Thông báo lỗi khi gửi không thành công
        setStatusMessage("Không thể gửi tin nhắn, vui lòng thử lại sau.");
      })
      .finally(() => {
        setLoading(false); // Tắt trạng thái loading
      });
  };

  return (
    <section id="contact" className="py-12 bg-gray-800 text-white">
      <div className="text-center text-2xl font-bold mb-6">ĐẶT LỊCH NGAY</div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg bg-white mx-auto rounded-3xl p-6 shadow-lg text-black"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Name"
            aria-label="Name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded"
            placeholder="Email"
            aria-label="Email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded"
            placeholder="Số điện thoại"
            aria-label="Số điện thoại"
            required
          />
        </div>
        <div className="mb-4">
          <select
            name="orderService"
            value={formData.orderService}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            aria-label="Order Service"
            required
          >
            <option value="" disabled>
              Chọn dịch vụ
            </option>
            <option value="vệ sinh giày">Vệ sinh giày</option>
            <option value="vệ sinh giày luxury">Vệ sinh giày luxury</option>
            <option value="vệ sinh túi/ví">Vệ sinh túi/ví</option>
            <option value="vệ sinh túi/ví luxury">Vệ sinh túi/ví luxury</option>
          </select>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="mr-2"
            aria-label="Ưu tiên 24h"
          />
          <label htmlFor="priority" className="text-black">Ưu tiên 24h</label>
          <button
            type="button"
            className="ml-auto text-blue-500 underline right-0 "
            onClick={() => alert("Siêu tốc 24h là dịch vụ ưu tiên xử lý đơn hàng của bạn trong vòng 24 giờ.")}
          >
            <FaQuestionCircle />
          </button>
          </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-1/2 p-2 border border-gray-300 rounded"
            rows="5"
            placeholder="Yêu cầu thêm"
            aria-label="Message"
            required
          ></textarea>
        </div>
       
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-2 rounded-full hover:bg-yellow-500 transition duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
        {statusMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          <p>{statusMessage}</p>
        </div>
      )}
      </form>
    </section>
  );
};

export default ContactForm;
