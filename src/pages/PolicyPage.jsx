import React from "react";

const policies = [
  {
    id: "hoan-tra",
    title: "Chính sách hoàn trả",
    icon: "↩",
    content: [
      "50LAB cam kết hoàn tiền nếu bạn không hài lòng với dịch vụ trong vòng 2 ngày kể từ ngày nhận hàng.",
      "Yêu cầu hoàn trả phải được gửi qua hotline 055 996 4424 hoặc email 50labhochiminhcity@gmail.com kèm mô tả vấn đề và hình ảnh minh chứng.",
      "Trường hợp sản phẩm bị hư hỏng do lỗi kỹ thuật của 50LAB, chúng tôi sẽ hoàn tiền 100% hoặc vệ sinh lại miễn phí theo yêu cầu khách hàng.",
    ],
  },
  {
    id: "bao-hanh",
    title: "Chính sách bảo hành",
    icon: "🛡",
    content: [
      "Tất cả dịch vụ tại 50LAB được bảo hành 14 ngày kể từ ngày nhận hàng.",
      "Trong thời gian bảo hành, nếu phát sinh vấn đề liên quan trực tiếp đến chất lượng dịch vụ, 50LAB sẽ xử lý lại hoàn toàn miễn phí.",
      "Bảo hành không áp dụng cho hư hỏng do tác động bên ngoài sau khi đã giao hàng (ướt mưa, va đập, sử dụng không đúng cách).",
    ],
  },
  {
    id: "thanh-toan",
    title: "Hình thức thanh toán",
    icon: "💳",
    content: [
      "Tiền mặt khi nhận hàng (COD).",
      "Chuyển khoản ngân hàng — thông tin tài khoản sẽ được cung cấp khi xác nhận đơn hàng.",
      "Ví điện tử: Momo, ZaloPay — quét QR khi giao/nhận hàng.",
    ],
  },
  {
    id: "van-chuyen",
    title: "Chính sách vận chuyển",
    icon: "🚚",
    content: [
      "50LAB chỉ hoạt động trong khu vực Thành phố Hồ Chí Minh.",
      "Phí ship đồng giá 30.000đ cho 2 chiều (nhận và trả). Miễn phí ship trong khu vực Làng Đại học.",
      "Thời gian hoàn thành tiêu chuẩn: 2–5 ngày làm việc. Dịch vụ ưu tiên 24h: hoàn thành trong vòng 24 giờ (phụ thu thêm).",
      "Thời gian giao nhận: 08:00 – 20:00 các ngày trong tuần. Nếu có chậm trễ, 50LAB sẽ thông báo trước qua Zalo hoặc điện thoại.",
    ],
  },
  {
    id: "trach-nhiem",
    title: "Trách nhiệm và giới hạn",
    icon: "📋",
    content: [
      "50LAB chụp ảnh ghi nhận tình trạng sản phẩm trước và sau khi vệ sinh. Ảnh được lưu trữ và chia sẻ với khách hàng khi yêu cầu.",
      "Đối với sản phẩm cao cấp (trị giá trên 10 triệu đồng), khách hàng vui lòng khai báo để 50LAB áp dụng quy trình Luxury phù hợp.",
      "50LAB không chịu trách nhiệm với hư hỏng có sẵn trước khi gửi mà không được thông báo, hoặc do chất liệu đặc thù không tương thích với quy trình tiêu chuẩn.",
    ],
  },
];

const PolicyPage = () => (
  <div className="min-h-screen bg-white">
    <section className="bg-[#F5F5F7] pt-28 pb-16 border-b border-[#E5E5EA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-4">Chính sách</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-4">
          Chính sách dịch vụ
        </h1>
        <p className="text-[#6E6E73] text-lg max-w-xl mx-auto">
          Cam kết minh bạch về chất lượng, vận chuyển và bảo hành tại 50LAB.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {policies.map((policy) => (
          <div
            key={policy.id}
            id={policy.id}
            className="bg-white border border-[#E5E5EA] rounded-[18px] p-7"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">{policy.icon}</span>
              <h2 className="text-lg font-bold text-[#1D1D1F]">{policy.title}</h2>
            </div>
            <ul className="space-y-3">
              {policy.content.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E63946] flex-shrink-0" />
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{line}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-[18px] p-7 text-center">
          <p className="text-sm text-[#6E6E73] mb-4">Có thắc mắc về chính sách? Liên hệ trực tiếp với 50LAB.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:0559964424" className="px-5 py-2.5 bg-[#E63946] text-white text-sm font-semibold rounded-full hover:bg-[#c8313d] transition-colors">
              Gọi 055 996 4424
            </a>
            <a href="mailto:50labhochiminhcity@gmail.com" className="px-5 py-2.5 bg-white border border-[#E5E5EA] text-[#1D1D1F] text-sm font-semibold rounded-full hover:bg-[#F5F5F7] transition-colors">
              Gửi email
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PolicyPage;
