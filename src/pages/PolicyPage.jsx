import React from "react";

const PolicyPage = () => {
  return (
    <div className="bg-gray-200 py-10 flex flex-col items-center gap-10">
              <h1 className="text-3xl font-bold text-center">Chính Sách</h1>

      <div className="max-w-4xl mx-auto bg-white border text-black px-5 py-10 rounded-xl ">

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chính sách hoàn trả</h2>
          <p>
            Chúng tôi cam kết hoàn tiền nếu bạn không hài lòng với dịch vụ của
            chúng tôi trong vòng 2 ngày kể từ ngày nhận giày hoặc túi xách. Để yêu
            cầu hoàn tiền, vui lòng liên hệ với bộ phận hỗ trợ khách hàng.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chính sách bảo hành</h2>
          <p>
            Chúng tôi bảo hành tất cả các dịch vụ trong vòng 14 ngày. Nếu có bất kỳ
            vấn đề nào liên quan đến dịch vụ đã sử dụng, vui lòng liên hệ với chúng tôi để được hỗ trợ kịp thời.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Hình thức thanh toán</h2>
          <p>Chúng tôi chấp nhận các hình thức thanh toán sau:</p>
          <ul className="list-disc pl-6">
            <li>Tiền mặt</li>
            <li>Chuyển khoản ngân hàng</li>
            <li>Ví điện tử (Momo, ZaloPay)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chính sách vận chuyển</h2>
          <p>
            50-Lab chỉ hoạt động trong khu vực Thành phố Hồ Chí Minh. Hiện tại, chúng tôi cung cấp dịch vụ vận chuyển miễn phí cho tất cả các đơn hàng trong khu vực Làng Đại học. Đối với các đơn hàng khác, phí vận chuyển đồng giá 30.000 VND (2 chiều).
          </p>
          <p>
            Thời gian giao hàng dự kiến từ 2-5 ngày kể từ khi xác nhận đơn hàng. Nếu có bất kỳ sự chậm trễ nào, chúng tôi sẽ thông báo cho bạn qua email hoặc điện thoại.
          </p>
        </section>

        <footer className="mt-10 text-center">
          <p>
            Liên hệ với chúng tôi qua hotline: 055 996 4424 hoặc email:
            50labhochiminhcity@gmail.com nếu bạn có bất kỳ câu hỏi nào liên quan đến chính sách của chúng tôi.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PolicyPage;
