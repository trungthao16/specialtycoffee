import Link from 'next/link';
import { Home, Coffee } from 'lucide-react';

export const metadata = {
  title: '404 - Không Tìm Thấy Trang | Specialty Coffee',
  description: 'Trang bạn tìm kiếm không tồn tại. Quay lại trang chủ Specialty Coffee.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4 font-sans text-stone-300">
      <div className="max-w-md w-full text-center space-y-6 bg-stone-900/20 border border-stone-900 p-10 rounded-3xl shadow-2xl backdrop-blur-sm">
        {/* Decorative Coffee Cup Icon */}
        <div className="inline-flex p-4 bg-amber-600/10 text-amber-500 rounded-full border border-amber-600/20 animate-bounce">
          <Coffee className="h-12 w-12" />
        </div>

        {/* 404 Heading */}
        <div className="space-y-2">
          <h1 className="text-6xl font-black text-amber-500 font-sans tracking-tight">404</h1>
          <h2 className="text-2xl font-bold text-stone-100 font-sans">Không Tìm Thấy Trang</h2>
        </div>

        {/* Friendly Message */}
        <p className="text-sm leading-relaxed text-stone-400">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Hãy để chúng tôi dẫn đường bạn quay về không gian cà phê quen thuộc nhé!
        </p>

        {/* Back Home Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md active:scale-97"
          >
            <Home className="h-4 w-4" />
            Quay Lại Trang Chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
