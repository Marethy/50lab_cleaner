// src/components/PolicyPage.js
import React from "react";

const PolicyPage = () => {
  return (
    <div className="bg-gray-200">
    <div className=" max-w-4xl mx-auto bg-white border text-black px-5 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Chính Sách</h1>

        <section className="mb-6">  
          <h2 className="text-2xl font-semibold mb-4">Chính Sách Hoàn Trả</h2>
          <p>
            Chúng tôi cam kết hoàn trả 100% tiền nếu bạn không hài lòng với dịch
            vụ của chúng tôi trong vòng 7 ngày kể từ ngày nhận dịch vụ. Để yêu
            cầu hoàn trả, vui lòng liên hệ với bộ phận hỗ trợ khách hàng của
            chúng tôi.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chính Sách Bảo Hành</h2>
          <p>
            Chúng tôi bảo hành tất cả các dịch vụ trong vòng 30 ngày. Nếu có bất
            kỳ vấn đề nào liên quan đến dịch vụ đã thực hiện, xin vui lòng liên
            hệ với chúng tôi để được hỗ trợ và bảo trì miễn phí.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Hình Thức Thanh Toán</h2>
          <p>Chúng tôi chấp nhận các hình thức thanh toán sau:</p>
          <ul className="list-disc pl-6">
            <li>Tiền mặt</li>
            <li>Chuyển khoản ngân hàng</li>
            <li>Thẻ tín dụng (Visa, MasterCard)</li>
            <li>Ví điện tử (Momo, ZaloPay)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chính Sách Vận Chuyển</h2>
          <p>
            Chúng tôi cung cấp dịch vụ vận chuyển miễn phí cho tất cả các đơn
            hàng trên 500.000 VNĐ trong khu vực TP.HCM. Đối với các đơn hàng
            dưới 500.000 VNĐ, phí vận chuyển sẽ được tính theo khu vực.
          </p>
          <p>
            Thời gian giao hàng dự kiến từ 2-5 ngày làm việc kể từ khi xác nhận
            đơn hàng. Nếu có bất kỳ sự chậm trễ nào, chúng tôi sẽ thông báo cho
            bạn qua email hoặc điện thoại.
          </p>
        </section>

        <footer className="mt-10 text-center">
          <p>
            Liên hệ với chúng tôi qua hotline: 0822610252 hoặc email:
            50labhochiminhcity@gmail.com nếu bạn có bất kỳ câu hỏi nào về chính
            sách của chúng tôi.
          </p>
        </footer>
        </div>

      </div>
  );
};

export default PolicyPage;
