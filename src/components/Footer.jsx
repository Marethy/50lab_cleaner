import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#0A1628] text-white">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img src="/logo.svg" alt="50-Lab" className="h-14 w-auto mb-4" />
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Dịch vụ vệ sinh và chăm sóc giày, túi xách cao cấp tại TP.HCM.
            Chuyên nghiệp · Tận tâm · Đúng hạn.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Dịch vụ</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/services#shoes" className="hover:text-white transition-colors">Vệ sinh giày</Link></li>
            <li><Link to="/services#bags" className="hover:text-white transition-colors">Vệ sinh túi xách</Link></li>
            <li><Link to="/lien-he-hop-tac" className="hover:text-white transition-colors">Dịch vụ doanh nghiệp</Link></li>
            <li><Link to="/policy" className="hover:text-white transition-colors">Chính sách</Link></li>
            <li><Link to="/meo-cham-soc-giay" className="hover:text-white transition-colors">Mẹo chăm sóc giày</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Thông tin liên hệ</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <a
                href="https://www.google.com/maps/place/Bcons+Plaza"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Chung cư Bcons Plaza, TP.HCM
              </a>
            </li>
            <li>
              <a href="tel:0559964424" className="hover:text-white transition-colors">
                📞 055 996 4424
              </a>
            </li>
            <li>
              <a href="mailto:50labhochiminhcity@gmail.com" className="hover:text-white transition-colors">
                ✉️ 50labhochiminhcity@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>© 2024 50-Lab. All rights reserved.</p>
        <Link to="/contact">
          <button className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-semibold transition-colors">
            Đặt lịch ngay →
          </button>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
