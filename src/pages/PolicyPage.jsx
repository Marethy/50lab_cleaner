import React from "react";

const PolicyPage = () => {
  return (
    <div className="bg-gray-200 py-10 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-center">Chính sách</h1>

      <div className="max-w-4xl mx-auto bg-white border text-black px-5 py-10 rounded-xl ">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chính sách hoàn trả</h2>
          <p>
            50-Lab cam kết hoàn tiền nếu bạn không hài lòng với dịch vụ trong
            vòng 2 ngày kể từ ngày nhận hàng.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chính sách bảo hành</h2>
          <p>
            50-Lab bảo hành tất cả các dịch vụ trong vòng 14 ngày. Nếu có bất
            kỳ vấn đề nào liên quan đến dịch vụ đã sử dụng, vui lòng liên hệ với
            chúng tôi để được hỗ trợ kịp thời.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Hình thức thanh toán</h2>
          <p> 50-Lab chấp nhận các hình thức thanh toán sau:</p>
          <ul className="list-disc pl-6">
            <li>Tiền mặt</li>
            <li>Chuyển khoản ngân hàng</li>
            <li>Ví điện tử (Momo, ZaloPay)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chính sách vận chuyển</h2>
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
        </section>
        </div>
    </div>
  );
};

export default PolicyPage;
