import React from "react";
import { useTheme } from "../components/ThemeProvider";

const PolicyPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen w-full pt-20 ${
      isDarkMode ? "bg-gray-900" : "bg-gray-100"
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className={`text-4xl font-bold text-center mb-10 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>
          Chính sách
        </h1>

        <div className={`mx-auto rounded-2xl shadow-lg ${
          isDarkMode 
            ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-gray-200" 
            : "bg-white border border-gray-200 text-gray-900"
        } px-6 py-10 space-y-10`}>
          <section className="space-y-4">
            <h2 className={`text-2xl font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              Chính sách hoàn trả
            </h2>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
              50-Lab cam kết hoàn tiền nếu bạn không hài lòng với dịch vụ trong
              vòng 2 ngày kể từ ngày nhận hàng.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              Chính sách bảo hành
            </h2>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
              50-Lab bảo hành tất cả các dịch vụ trong vòng 14 ngày. Nếu có bất
              kỳ vấn đề nào liên quan đến dịch vụ đã sử dụng, vui lòng liên hệ với
              chúng tôi để được hỗ trợ kịp thời.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              Hình thức thanh toán
            </h2>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
              50-Lab chấp nhận các hình thức thanh toán sau:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              <li>Tiền mặt</li>
              <li>Chuyển khoản ngân hàng</li>
              <li>Ví điện tử (Momo, ZaloPay)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              Chính sách vận chuyển
            </h2>
            <div className={`space-y-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              <p>
                50-Lab chỉ hoạt động trong khu vực Thành phố Hồ Chí Minh. Hiện tại,
                chúng tôi cung cấp dịch vụ vận chuyển miễn phí cho tất cả các đơn
                hàng trong khu vực Làng Đại học. Đối với các đơn hàng khác, phí vận
                chuyển đồng giá 30.000 VND (2 chiều).
              </p>
              <p>
                Thời gian giao hàng dự kiến từ 2-5 ngày kể từ khi xác nhận đơn hàng.
                Nếu có bất kỳ sự chậm trễ nào, chúng tôi sẽ thông báo cho bạn qua
                email hoặc điện thoại.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
