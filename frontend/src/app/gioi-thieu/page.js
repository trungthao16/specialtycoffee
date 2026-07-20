import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export const metadata = {
  title: 'Giới Thiệu Về Chúng Tôi - Specialty Coffee',
  description: 'Tìm hiểu về hành trình, sứ mệnh và triết lý rang xay mộc thủ công cà phê đặc sản đạt tiêu chuẩn Specialty tại Specialty Coffee.',
  alternates: {
    canonical: '/gioi-thieu',
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Giới thiệu', href: '/gioi-thieu' },
  ];

  return (
    <div className="bg-stone-950 min-h-screen py-12 text-stone-300 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <span className="px-3 py-1 bg-amber-600/10 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-600/20">
            Câu chuyện của chúng tôi
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-black text-stone-100 leading-tight">
            Nơi Khởi Nguồn Đam Mê <br />
            <span className="text-amber-500">Cà Phê Specialty</span>
          </h1>
          <p className="max-w-2xl mx-auto text-stone-400 text-base md:text-lg leading-relaxed">
            Specialty Coffee được thành lập bởi những tâm hồn say đắm hương vị nguyên bản của hạt cà phê mộc bản, với khát khao nâng tầm văn hóa thưởng thức cà phê đặc sản tại Việt Nam.
          </p>
        </div>

        {/* Narrative / History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-6 border-t border-stone-900">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-stone-100">
              Hành Trình Kiến Tạo Hương Vị Bản Nguyên
            </h2>
            <p className="leading-relaxed">
              Chúng tôi tin rằng mỗi tách cà phê là tác phẩm nghệ thuật phản chiếu đặc trưng thổ nhưỡng, khí hậu và đôi bàn tay chăm sóc của người nông dân. Vì thế, chúng tôi không ngừng tìm kiếm và kết nối với các nông hộ uy tín tại các cao nguyên danh tiếng như <strong>Ethiopia Yirgacheffe</strong>, <strong>Kenya Nyeri</strong> và các nông trại chế biến Honey chất lượng cao tại <strong>Gia Lai, Việt Nam</strong>.
            </p>
            <p className="leading-relaxed">
              Từ khâu chọn lọc quả chín đỏ đạt tỉ lệ trên 95%, lên men tự nhiên kiểm soát nghiêm ngặt, cho tới quy trình rang mộc thủ công – tất cả đều được thực hiện bằng sự tận tụy tối đa để mang lại những nốt hương hoa trái bản nguyên thanh khiết nhất.
            </p>
          </div>
          <div className="bg-stone-900/50 border border-stone-850 p-8 rounded-3xl space-y-6 shadow-xl">
            <div className="flex gap-4">
              <div className="p-3 bg-amber-600/10 text-amber-500 rounded-2xl h-fit border border-amber-600/20">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-stone-100 font-bold font-sans mb-1">100% Specialty Grade</h4>
                <p className="text-sm text-stone-400">Được chấm điểm thử nếm (Cup Score) đạt từ 80 điểm trở lên theo tiêu chuẩn khắt khe của Hiệp hội Cà phê Đặc sản Quốc tế (SCA).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-amber-600/10 text-amber-500 rounded-2xl h-fit border border-amber-600/20">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-stone-100 font-bold font-sans mb-1">Rang Mộc Thủ Công</h4>
                <p className="text-sm text-stone-400">Tuyệt đối không pha trộn, không sử dụng phụ gia hóa chất tạo hương hay bơ tạo béo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="pt-12 border-t border-stone-900 space-y-8">
          <h2 className="text-3xl font-sans font-bold text-stone-100 text-center">Giá Trị Cốt Lõi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-stone-900/30 border border-stone-900 rounded-2xl space-y-3">
              <Award className="h-8 w-8 text-amber-500" />
              <h3 className="text-lg font-sans font-bold text-stone-100">Chất Lượng</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Chúng tôi không bao giờ thỏa hiệp với chất lượng sản phẩm. Từng mẻ rang đều được ghi chép hồ sơ và kiểm định hương vị (Cupping) cẩn thận trước khi đóng gói.
              </p>
            </div>
            <div className="p-6 bg-stone-900/30 border border-stone-900 rounded-2xl space-y-3">
              <Sparkles className="h-8 w-8 text-amber-500" />
              <h3 className="text-lg font-sans font-bold text-stone-100">Trải Nghiệm</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Chúng tôi mong muốn đồng hành và hướng dẫn bạn tự pha chế những tách cà phê thơm ngon nhất tại nhà thông qua các bài viết hướng dẫn pha chế chi tiết.
              </p>
            </div>
            <div className="p-6 bg-stone-900/30 border border-stone-900 rounded-2xl space-y-3">
              <Heart className="h-8 w-8 text-amber-500" />
              <h3 className="text-lg font-sans font-bold text-stone-100">Bền Vững</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Hỗ trợ phương thức canh tác hữu cơ, thu mua nông sản trực tiếp từ nông trại (Direct Trade) giúp nâng cao đời sống cho người nông dân trồng cà phê Việt.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950 border border-amber-900/10 rounded-3xl p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-stone-100">Hãy Trải Nghiệm Cà Phê Bản Nguyên Ngay Hôm Nay</h2>
          <p className="max-w-xl mx-auto text-sm text-stone-400">
            Khám phá những dòng hạt Single Origin chất lượng cao hoặc các hỗn hợp rang mộc đằm thắm của chúng tôi.
          </p>
          <div className="pt-2">
            <Link
              href="/san-pham"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md active:scale-97 inline-block"
            >
              Xem Cửa Hàng Sản Phẩm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
