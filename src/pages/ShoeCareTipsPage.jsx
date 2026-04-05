import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Content grounded in real data scraped from heramo.com/blog
const articles = [
  {
    id: 1,
    title: "Tại sao không nên giặt giày bằng máy giặt?",
    tags: ["Cảnh báo", "Phổ biến"],
    readTime: "4 phút",
    content: [
      {
        heading: null,
        text: "Nhiều người nghĩ máy giặt là giải pháp nhanh gọn để làm sạch giày — thực tế đây là một trong những sai lầm phổ biến nhất. Lực quay mạnh của máy giặt tác động lên giày rất dễ làm giày bị mất phom, đặc biệt với những đôi làm từ vải canvas hoặc vải tổng hợp sẽ rất dễ khiến giày bị phai màu nhanh chóng.",
      },
      {
        heading: "Hư hỏng gì xảy ra cụ thể?",
        text: "Keo dán đế là thứ chịu tổn thất đầu tiên. Nhiệt độ cao trong chu kỳ sấy và lực va đập cơ học làm lỏng mối keo — bạn sẽ thấy đế bắt đầu bong sau 1–2 lần giặt máy. Với giày da, nước ngấm sâu vào lớp da làm da bị nhăn, mất độ bóng và dễ nứt nẻ về sau. Phần đệm lót (insole) thường được ép nhiệt khi sản xuất — tiếp xúc nước nóng sẽ biến dạng không thể phục hồi, ảnh hưởng trực tiếp đến cảm giác khi đi.",
      },
      {
        heading: "Giặt bằng tay đúng cách",
        text: "Dùng bàn chải lông mềm kết hợp dung dịch vệ sinh chuyên dụng (như Jason Markk, Crep Protect hoặc dung dịch pH trung tính). Trình tự: tháo dây giày và lót ra trước → chải khô bụi bẩn → làm ướt bàn chải và chà nhẹ theo chiều vải → xả sạch bằng nước lạnh → vẩy bỏ nước thừa → phơi nơi thoáng mát, không phơi trực tiếp dưới nắng. Giày cao cấp hoặc giày bẩn nặng nên mang đến dịch vụ chuyên nghiệp để đảm bảo an toàn.",
      },
      {
        heading: "Mẹo nhanh",
        text: "Không nên giặt giày quá thường xuyên vì mỗi lần giặt đều làm bạc màu dần. Chỉ giặt kỹ khi thực sự cần thiết — bình thường chỉ cần lau bụi bề mặt sau mỗi lần sử dụng là đủ.",
      },
    ],
  },
  {
    id: 2,
    title: "Hướng dẫn vệ sinh giày da đúng chuẩn 5 bước",
    tags: ["Giày da", "Hướng dẫn"],
    readTime: "5 phút",
    content: [
      {
        heading: null,
        text: "Giày da là sản phẩm đòi hỏi kỹ thuật vệ sinh riêng — sai phương pháp có thể gây phai màu, bong tróc hoặc nứt da không thể phục hồi. Nguyên nhân phổ biến nhất khiến giày da xuống cấp: bụi bẩn tích tụ mà không vệ sinh, nước mưa thấm tạo điều kiện nấm mốc, dầu mỡ để lâu gây ố, và mồ hôi chân làm mủn lớp da bên trong.",
      },
      {
        heading: "Dụng cụ cần chuẩn bị",
        text: "Khăn mềm sạch (không dùng giấy ướt — giấy ướt làm loang vết bẩn và gây ẩm mốc), bàn chải lông mềm để xử lý khe và chi tiết nhỏ, dung dịch vệ sinh chuyên cho giày da (pH trung tính, không chứa cồn), xi đánh bóng hoặc kem dưỡng da, túi hút ẩm silica gel.",
      },
      {
        heading: "5 bước thực hiện",
        text: "Bước 1 — Tháo dây giày, lau khô bụi bẩn bề mặt bằng khăn mềm. Bước 2 — Thoa dung dịch vệ sinh lên khăn hoặc bàn chải, lau nhẹ nhàng theo vòng tròn từng khu vực. Vết bẩn khó thì lặp lại. Bước 3 — Dùng khăn khô thấm sạch dung dịch còn lại, phơi 10–20 phút nơi thoáng mát. Bước 4 — Thoa xi hoặc kem dưỡng da để phục hồi độ bóng và bảo vệ bề mặt. Bước 5 — Bảo quản trong túi dust bag hoặc hộp giày kèm túi hút ẩm, tránh ánh nắng trực tiếp.",
      },
      {
        heading: "Lưu ý quan trọng",
        text: "Tuyệt đối không dùng chất tẩy mạnh — làm phai màu và bong keo. Không dùng giấy ướt. Nếu giày bị ướt mưa, rút miếng lót ra ngay và hong khô tự nhiên — không dùng máy sấy tóc vì nhiệt tập trung sẽ làm co và nứt da. Với vết dầu mỡ trên giày da lộn: rắc bột ngô lên vết bẩn, chờ 2–3 tiếng, rồi chải nhẹ bằng bàn chải lông mềm.",
      },
    ],
  },
  {
    id: 3,
    title: "Vì sao giày trắng bị ố vàng sau khi giặt?",
    tags: ["Giày trắng", "Nguyên nhân"],
    readTime: "4 phút",
    content: [
      {
        heading: null,
        text: "Hiện tượng ố vàng (yellowing) trên giày trắng sau khi giặt là vấn đề cực kỳ phổ biến — và hoàn toàn có thể phòng tránh nếu hiểu đúng nguyên nhân.",
      },
      {
        heading: "Ba nguyên nhân chính",
        text: "Thứ nhất: phản ứng hóa học giữa chất tẩy kiềm cao và cao su đế trắng khi tiếp xúc tia UV — đây là nguyên nhân phổ biến nhất. Thứ hai: tàn dư xà phòng không xả sạch hoàn toàn — khô lại trên bề mặt rồi oxy hóa thành màu vàng. Thứ ba: nước giặt có hàm lượng khoáng cao (nước cứng) để lại cặn khoáng trắng ngả vàng theo thời gian.",
      },
      {
        heading: "Cách phòng tránh khi tự giặt",
        text: "Dùng dung dịch vệ sinh chuyên cho sneaker trắng (pH trung tính, không chứa thuốc tẩy). Xả thật sạch — ít nhất 2–3 lần nước lạnh cho đến khi nước xả trong hoàn toàn. Phơi ở nơi thoáng mát, có bóng râm — không phơi trực tiếp dưới nắng. Mẹo: bọc giày bằng giấy báo ẩm khi phơi để hạn chế tiếp xúc UV và giữ form giày. Không dùng thuốc tẩy (bleach) cho giày vải vì làm giày trắng chuyển vàng.",
      },
      {
        heading: "Đã bị ố vàng thì xử lý thế nào?",
        text: "Pha hỗn hợp baking soda + một chút giấm trắng, dùng bàn chải đánh răng cũ chà nhẹ lên vết vàng theo vòng tròn. Baking soda có tính kiềm nhẹ giúp tẩy trắng và hút mùi hiệu quả. Chanh tươi cũng có tác dụng tương tự nhờ axit citric tự nhiên. Với vết vàng nặng hoặc giày luxury — mang đến 50LAB để xử lý bằng dung dịch đặc trị chuyên dùng, tránh tự làm hỏng bề mặt.",
      },
    ],
  },
  {
    id: 4,
    title: "Bao lâu nên vệ sinh giày một lần?",
    tags: ["Tần suất", "Bảo quản"],
    readTime: "3 phút",
    content: [
      {
        heading: null,
        text: "Không có công thức cố định — tần suất vệ sinh phụ thuộc vào chất liệu, mức độ sử dụng và môi trường. Nhưng có một nguyên tắc chung: đừng đợi đến khi giày trông thật bẩn mới vệ sinh.",
      },
      {
        heading: "Theo loại giày",
        text: "Giày đi hằng ngày (sneaker, giày vải): lau bụi bề mặt sau mỗi lần dùng, vệ sinh kỹ mỗi 2–4 tuần. Giày da đi công sở: lau khô sau mỗi lần đi, vệ sinh và dưỡng ẩm mỗi 1–2 tháng. Giày cao cấp / luxury: kiểm tra sau mỗi lần sử dụng, vệ sinh chuyên nghiệp mỗi 1–3 tháng tùy tình trạng. Giày ít dùng (cất trong tủ): lấy ra phơi gió và lau bụi mỗi 1–2 tháng — bỏ qua bước này dễ bị nấm mốc và hở keo.",
      },
      {
        heading: "Dấu hiệu cần vệ sinh ngay",
        text: "Xuất hiện mùi hôi từ bên trong giày. Bề mặt bắt đầu xỉn màu hoặc có lớp bụi bám mờ. Đế giày bám đất bùn khô. Sau khi đi mưa hoặc vào khu vực ẩm ướt. Lưu ý: bẩn lâu ngày thấm sâu vào chất liệu sẽ rất khó xử lý hoàn toàn — xử lý sớm luôn dễ hơn và ít tốn kém hơn.",
      },
    ],
  },
  {
    id: 5,
    title: "Cách bảo quản giày lâu không sử dụng",
    tags: ["Bảo quản", "Mẹo hay"],
    readTime: "4 phút",
    content: [
      {
        heading: null,
        text: "Giày cất không đúng cách trong 2–3 tháng có thể hỏng hoàn toàn: vàng đế, hở keo, nấm mốc, biến dạng phom. Đây là những điều cần làm trước khi cất giày dài hạn.",
      },
      {
        heading: "Vệ sinh kỹ trước khi cất",
        text: "Đây là bước quan trọng nhất và thường bị bỏ qua. Bụi bẩn và ẩm tồn đọng là môi trường lý tưởng cho vi khuẩn và nấm phát triển trong môi trường kín. Làm sạch hoàn toàn, để khô hẳn (ít nhất 24 giờ) trước khi cất.",
      },
      {
        heading: "Giữ phom và kiểm soát ẩm",
        text: "Nhét giấy báo cuộn chặt hoặc cây giữ form (shoe tree) vào trong giày để giữ nguyên hình dáng. Đặt túi hút ẩm silica gel vào bên trong và trong hộp. Không dùng túi ni lông kín — giữ ẩm bên trong gây mốc. Dùng túi vải không dệt (dust bag) hoặc hộp giày có lỗ thoáng khí. Với giày da, thoa một lớp mỏng kem dưỡng da (shoe conditioner) trước khi cất để tránh da khô và nứt.",
      },
      {
        heading: "Môi trường bảo quản",
        text: "Để giày ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp (tia UV làm bạc màu và giòn vật liệu). Không chồng chất giày lên nhau — gây móp méo, gãy phom. Lấy giày ra kiểm tra và phơi gió mỗi 1–2 tháng dù không dùng đến — chỉ cần 15 phút là đủ.",
      },
    ],
  },
  {
    id: 6,
    title: "Vệ sinh giày cao gót — theo từng chất liệu",
    tags: ["Giày cao gót", "Chất liệu"],
    readTime: "5 phút",
    content: [
      {
        heading: null,
        text: "Giày cao gót có nhiều chất liệu khác nhau: da bóng, da lộn, vải canvas, satin, nhung... Mỗi loại cần cách vệ sinh riêng. Sai phương pháp có thể làm hỏng bề mặt vĩnh viễn.",
      },
      {
        heading: "Giày da bóng",
        text: "Dùng miếng vải cotton mềm lau theo chuyển động tròn bên ngoài. Nhỏ 1–2 giọt chất tẩy da bóng (leather cleaner) lên vải, chà nhẹ bao phủ toàn bề mặt. Vết xước nhỏ: dùng tăm bông thấm cồn tẩy rửa, chà nhẹ theo vòng tròn khoảng 1 phút.",
      },
      {
        heading: "Giày vải / canvas",
        text: "Nhúng bàn chải đánh răng vào nước ấm, chà nhẹ nhàng. Có thể dùng baking soda: nhúng bàn chải vào baking soda rồi chà — tác dụng tẩy trắng và khử mùi tốt. Không dùng thuốc tẩy — làm giày trắng chuyển vàng. Sau khi làm sạch, phơi nơi thoáng mát.",
      },
      {
        heading: "Giày satin và nhung",
        text: "Đây là chất liệu nhạy cảm nhất. Dùng khăn sạch thấm nước lạnh (không dùng nước nóng), nhẹ nhàng thấm — không chà xát. Nếu cần dung dịch, dùng xà phòng rửa tay dịu nhẹ không chứa chất tạo mùi. Dùng vải khô thấm lại, để khô tự nhiên hoàn toàn trước khi cất.",
      },
      {
        heading: "Giày da lộn (suede)",
        text: "Không dùng nước trực tiếp — làm xù lông và loang vết bẩn. Dùng bàn chải suede chuyên dụng, chải theo chiều lông để loại bụi. Vết bẩn khô: dùng cao su tẩy (suede eraser) chà nhẹ. Vết dầu mỡ: rắc bột ngô, để 2–3 tiếng, rồi chải sạch. Khi không dùng, bọc trong túi vải và tránh tuyệt đối môi trường ẩm.",
      },
    ],
  },
  {
    id: 7,
    title: "Khi nào nên mang giày đến dịch vụ chuyên nghiệp?",
    tags: ["Chuyên gia", "Tips"],
    readTime: "3 phút",
    content: [
      {
        heading: null,
        text: "Tự vệ sinh tại nhà phù hợp với bụi bẩn nhẹ thường ngày. Nhưng có những trường hợp làm sai tại nhà sẽ gây hư hỏng không thể sửa chữa — đặc biệt với giày cao cấp.",
      },
      {
        heading: "Nên đến dịch vụ chuyên nghiệp khi",
        text: "Giày bị ố vàng nặng hoặc đổi màu bất thường. Vết bẩn cứng đầu không xử lý được bằng dung dịch thông thường (dầu mỡ, mực, sơn). Giày da bị nứt, bong tróc hoặc mất màu cần phục hồi. Giày luxury hoặc giày hiệu (trị giá trên 5–10 triệu đồng) — rủi ro không đáng. Giày bị ướt mưa nặng hoặc đã bắt đầu có dấu hiệu nấm mốc. Sau mùa mưa hoặc sau kỳ nghỉ dài (cất trong tủ).",
      },
      {
        heading: "Quy trình chuyên nghiệp khác tự làm ở chỗ nào?",
        text: "Dịch vụ như 50LAB sử dụng dung dịch nhập khẩu chuyên dụng (pH kiểm soát cho từng chất liệu), máy hấp UV diệt khuẩn và khử mùi, cùng với đội ngũ KTV được đào tạo nhận biết chất liệu trước khi xử lý. Kết quả sạch sâu hơn, an toàn hơn và đảm bảo 14 ngày bảo hành.",
      },
    ],
  },
];

const tagColors = {
  "Cảnh báo": "bg-rose-50 text-rose-600 border-rose-100",
  "Phổ biến": "bg-blue-50 text-blue-600 border-blue-100",
  "Giày da": "bg-amber-50 text-amber-700 border-amber-100",
  "Hướng dẫn": "bg-green-50 text-green-700 border-green-100",
  "Giày trắng": "bg-slate-50 text-slate-600 border-slate-200",
  "Nguyên nhân": "bg-orange-50 text-orange-600 border-orange-100",
  "Tần suất": "bg-cyan-50 text-cyan-700 border-cyan-100",
  "Bảo quản": "bg-indigo-50 text-indigo-600 border-indigo-100",
  "Mẹo hay": "bg-purple-50 text-purple-600 border-purple-100",
  "Giày cao gót": "bg-pink-50 text-pink-600 border-pink-100",
  "Chất liệu": "bg-teal-50 text-teal-600 border-teal-100",
  "Chuyên gia": "bg-gray-100 text-gray-700 border-gray-200",
  "Tips": "bg-blue-50 text-blue-600 border-blue-100",
};

const Article = ({ article }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-[#E5E5EA] rounded-[18px] overflow-hidden"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-[#F5F5F7] transition-colors"
      >
        <div className="flex-1">
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
                  tagColors[tag] || "bg-[#F5F5F7] text-[#6E6E73] border-[#E5E5EA]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-[#1D1D1F] text-base leading-snug">{article.title}</h3>
          <p className="text-[#6E6E73] text-xs mt-1.5">⏱ {article.readTime} đọc</p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1"
        >
          <svg className="w-5 h-5 text-[#6E6E73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 border-t border-[#F5F5F7] space-y-4">
              {article.content.map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <p className="font-semibold text-[#1D1D1F] text-sm mb-1.5">{block.heading}</p>
                  )}
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ShoeCareTipsPage = () => (
  <div className="min-h-screen bg-white">
    <section className="bg-[#F5F5F7] pt-28 pb-16 border-b border-[#E5E5EA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-4">Blog & Mẹo</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F] tracking-tight leading-tight mb-4">
          Mẹo chăm sóc giày & túi xách
        </h1>
        <p className="text-[#6E6E73] text-lg max-w-xl mx-auto">
          Kiến thức thực tế từ đội ngũ kỹ thuật viên 50LAB — giúp bạn chăm sóc sản phẩm đúng cách, bền lâu hơn.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>

      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-[18px] p-7 text-center">
          <p className="font-semibold text-[#1D1D1F] text-base mb-2">Giày hoặc túi cần xử lý chuyên nghiệp?</p>
          <p className="text-[#6E6E73] text-sm mb-5">50LAB nhận vệ sinh tất cả chất liệu — giao nhận tận nơi tại TP.HCM.</p>
          <a
            href="/contact"
            className="inline-block px-7 py-3 bg-[#E63946] text-white font-semibold rounded-full text-sm hover:bg-[#c8313d] transition-colors"
          >
            Đặt lịch ngay
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default ShoeCareTipsPage;
