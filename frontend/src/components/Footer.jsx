import Link from 'next/link';
import { Coffee, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 text-amber-500" />
              <span className="font-sans text-xl font-bold tracking-wider text-amber-500">
                SPECIALTY COFFEE
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Trải nghiệm cà phê specialty thượng hạng từ những vùng trồng nổi tiếng thế giới. Rang xay thủ công tỉ mỉ để giữ trọn vẹn hương vị bản nguyên.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-stone-200 uppercase tracking-wider mb-4">Điều Hướng</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors">Trang Chủ / Cửa Hàng</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-500 transition-colors">Blog Tin Tức</Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="hover:text-amber-500 transition-colors">Giới Thiệu</Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-amber-500 transition-colors">Liên Hệ</Link>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="text-sm font-bold text-stone-200 uppercase tracking-wider mb-4">Giờ Mở Cửa</h3>
            <ul className="space-y-2 text-sm">
              <li>Thứ 2 - Thứ 6: 07:00 - 22:00</li>
              <li>Thứ 7 - Chủ Nhật: 08:00 - 22:30</li>
              <li className="pt-2 text-amber-500 font-semibold">Giao hàng miễn phí bán kính 3km.</li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-sm font-bold text-stone-200 uppercase tracking-wider mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0" />
                <span>123 Đường Cà Phê, Quận 1, TP. HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <span>contact@specialtycoffee.space</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-900 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Specialty Coffee Space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
