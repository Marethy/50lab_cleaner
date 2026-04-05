import React from "react";
import { motion } from "framer-motion";
import ab1 from "../assets/images/ab1.jpg";
import ab2 from "../assets/images/ab2.jpg";
import ab3 from "../assets/images/ab3.jpg";
import ab4 from "../assets/images/ab4.jpg";
import ab5 from "../assets/images/ab5.jpg";

const posts = [
  {
    id: 1,
    title: "[PRE-ORDER] Gây quỹ nuôi em Mộc Châu",
    excerpt: "50LAB tham gia chương trình Đại sứ nhân ái — Nuôi em Mộc Châu, góp phần hỗ trợ trẻ em vùng cao có điều kiện học tập tốt hơn.",
    image: ab1,
    fbUrl: "https://www.facebook.com/share/p/Zw8XeWHFcAZF19iB/",
    tag: "CSR",
  },
  {
    id: 2,
    title: "[GÓC CHIA SẺ] Hướng dẫn vệ sinh giày tại nhà",
    excerpt: "Bạn có thể tự vệ sinh giày tại nhà cho những vết bẩn nhỏ. Nhưng với giày cao cấp hay vết bẩn cứng đầu, hãy để 50LAB xử lý chuyên nghiệp.",
    image: ab2,
    fbUrl: "https://www.facebook.com/share/p/Sa5jZvh5gRy824u1/",
    tag: "Tips",
  },
  {
    id: 3,
    title: "[GÓC CHIA SẺ] Tại sao nên vệ sinh giày tại 50LAB?",
    excerpt: "Quy trình 5 bước chuẩn, dung dịch chuyên dụng nhập khẩu, đội ngũ kỹ thuật viên được đào tạo bài bản — lý do khách hàng tin tưởng 50LAB.",
    image: ab3,
    fbUrl: "https://www.facebook.com/share/p/PenzwQLA1YrGeDyT/",
    tag: "Before/After",
  },
  {
    id: 4,
    title: "[GÓC CHIA SẺ] Giày được làm từ vật liệu gì?",
    excerpt: "Da thật, da tổng hợp, vải canvas, lưới mesh — mỗi chất liệu cần phương pháp vệ sinh khác nhau. 50LAB luôn kiểm tra trước khi xử lý.",
    image: ab4,
    fbUrl: "https://www.facebook.com/share/p/kqtcskwXezBhu7DE/",
    tag: "Tips",
  },
  {
    id: 5,
    title: "[GÓC CHIA SẺ] Vì sao giày bị hở keo khi không dùng lâu?",
    excerpt: "Độ ẩm và nhiệt độ là nguyên nhân chính khiến keo giày bị lão hóa. Bảo quản đúng cách và vệ sinh định kỳ giúp kéo dài tuổi thọ giày.",
    image: ab5,
    fbUrl: "https://www.facebook.com/share/p/jXhjDmg12SvUrLi2/",
    tag: "Kiến thức",
  },
];

const tagColors = {
  CSR: "bg-rose-50 text-rose-600 border-rose-100",
  Tips: "bg-blue-50 text-blue-600 border-blue-100",
  "Before/After": "bg-green-50 text-green-600 border-green-100",
  "Kiến thức": "bg-amber-50 text-amber-600 border-amber-100",
  "Khuyến mãi": "bg-purple-50 text-purple-600 border-purple-100",
};

const GocChiaSe = () => (
  <section className="bg-white py-24">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-3">Cộng đồng</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-3">Góc chia sẻ</h2>
        <p className="text-[#6E6E73] text-base">Câu chuyện từ khách hàng & cộng đồng 50LAB</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, i) => (
          <motion.a
            key={post.id}
            href={post.fbUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, ease: "easeInOut" }}
            whileHover={{ y: -3 }}
            className="block bg-white rounded-[18px] overflow-hidden border border-[#E5E5EA] transition-all duration-200 group"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          >
            <div className="aspect-[16/9] overflow-hidden bg-[#F5F5F7]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <div className="mb-3">
                <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border ${tagColors[post.tag] || "bg-[#F5F5F7] text-[#6E6E73] border-[#E5E5EA]"}`}>
                  {post.tag}
                </span>
              </div>
              <h3 className="font-semibold text-[#1D1D1F] text-sm leading-snug mb-2 group-hover:text-[#E63946] transition-colors">
                {post.title}
              </h3>
              <p className="text-[#6E6E73] text-xs leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs font-semibold text-[#E63946]">Đọc thêm →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default GocChiaSe;
