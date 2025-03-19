import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaQuestionCircle, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const ContactForm = () => {
  const { isDarkMode } = useTheme();
  const phoneRegex = "^(84|0[3|5|7|8|9])+([0-9]{8})\\b";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    orderService: "",
    message: "",
    priority: false,
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xzvm2db",
        "template_i25gn75",
        formData,
        "uX5HE9XX3c98LTqzw"
      )
      .then(() => {
        setStatusMessage(
          "✨ Đặt lịch thành công! Chúng tôi sẽ liên lạc với bạn sớm nhất có thể."
        );
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          orderService: "",
          message: "",
          priority: false,
        });
      })
      .catch(() => {
        setStatusMessage("❌ Không thể gửi tin nhắn, vui lòng thử lại sau.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const inputClasses = (fieldName) =>
    `w-full p-3 border-2 rounded-lg transition-all duration-300 outline-none ${
      isDarkMode 
        ? `bg-slate-800/50 border-slate-700 text-white placeholder-gray-400
           ${focusedField === fieldName ? "border-blue-500 shadow-lg shadow-blue-500/20" : "hover:border-slate-600"}` 
        : `bg-white border-gray-200 text-gray-900 placeholder-gray-500
           ${focusedField === fieldName ? "border-blue-400 shadow-lg shadow-blue-100" : "hover:border-gray-300"}`
    }`;

  return (
    <section className={`py-16 ${
      isDarkMode 
        ? "bg-gradient-to-b from-slate-900 to-slate-800" 
        : "bg-gradient-to-b from-gray-50 to-white"
    }`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            ĐẶT LỊCH NGAY
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`mx-auto max-w-[600px] rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 ${
            isDarkMode 
              ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700" 
              : "bg-white"
          }`}
        >
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("name")}
                placeholder="Tên"
                required
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("email")}
                placeholder="Email"
                required
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("phone")}
                placeholder="Số điện thoại"
                pattern={phoneRegex}
                required
              />
            </div>

            <div className="relative">
              <select
                name="orderService"
                value={formData.orderService}
                onChange={handleChange}
                onFocus={() => setFocusedField("service")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("service")}
                required
              >
                <option value="" disabled>
                  Chọn dịch vụ
                </option>
                <option value="vệ sinh giày">Vệ sinh giày</option>
                <option value="vệ sinh giày luxury">Vệ sinh giày cao cấp</option>
                <option value="vệ sinh túi/ví">Vệ sinh túi/ví</option>
                <option value="vệ sinh túi/ví luxury">
                  Vệ sinh túi/ví cao cấp
                </option>
              </select>
            </div>

            <div className={`flex items-center space-x-4 p-4 rounded-lg ${
              isDarkMode ? "bg-slate-700/50" : "bg-gray-50"
            }`}>
              <input
                type="checkbox"
                name="priority"
                checked={formData.priority}
                onChange={handleChange}
                className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label className={`${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } flex-1`}>
                Ưu tiên 24h
              </label>
              <button
                type="button"
                className="text-blue-500 hover:text-blue-600 transition-colors"
                onClick={() => setIsInfoVisible(!isInfoVisible)}
              >
                <FaQuestionCircle size={20} />
              </button>
            </div>

            {isInfoVisible && (
              <div className={`p-4 rounded-lg animate-fade-in ${
                isDarkMode 
                  ? "bg-blue-900/50 text-blue-200" 
                  : "bg-blue-50 text-blue-800"
              }`}>
                Siêu tốc 24h là dịch vụ ưu tiên xử lý đơn hàng của bạn trong vòng
                24 giờ.
              </div>
            )}

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("message")}
                rows="5"
                placeholder="Yêu cầu thêm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-bold py-3 px-6 rounded-full
                flex items-center justify-center space-x-2 
                transition-all duration-300 transform hover:scale-105
                disabled:opacity-50 disabled:cursor-not-allowed
                ${isDarkMode 
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800" 
                  : "bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600"
                }`}
            >
              {loading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Gửi yêu cầu</span>
                </>
              )}
            </button>

            {statusMessage && (
              <div
                className={`mt-4 p-4 rounded-lg text-center font-medium animate-fade-in ${
                  statusMessage.includes("thành công")
                    ? isDarkMode 
                      ? "bg-green-900/50 text-green-200" 
                      : "bg-green-50 text-green-800"
                    : isDarkMode
                      ? "bg-red-900/50 text-red-200"
                      : "bg-red-50 text-red-800"
                }`}
              >
                {statusMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
