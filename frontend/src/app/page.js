import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function getFeaturedProducts() {
  try {
    const res = await fetch(`${API_URL}/api/products`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      return data.slice(0, 3); // Showcase first 3 products
    }
  } catch (error) {
    console.error('Failed to fetch products for home:', error.message);
  }
  return [];
}

async function getSEO() {
  try {
    const res = await fetch(`${API_URL}/api/seo?path=/`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    // Return default SEO
  }
  return {
    title: 'Specialty Coffee Space - Cà Phê Specialty Thượng Hạng',
    description: 'Cửa hàng cà phê specialty tinh khiết. Trải nghiệm hương vị bản nguyên.',
    keywords: 'cà phê, specialty coffee, arabica, robusta',
  };
}

// Generate dynamic metadata
export async function generateMetadata() {
  const seo = await getSEO();

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: '/',
      siteName: 'Specialty Coffee Space',
      type: 'website',
    },
  };
}

export default async function Home() {
  const products = await getFeaturedProducts();

  const cafeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Cafe',
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/#cafe`,
    name: 'Specialty Coffee Space',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    description: 'Trải nghiệm cà phê specialty thượng hạng rang xay thủ công.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Đường Cà Phê, Quận 1',
      addressLocality: 'TP. Hồ Chí Minh',
      addressCountry: 'VN',
    },
    telephone: '0123 456 789',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '22:30',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeSchema) }}
      />

      <div className="bg-stone-950 min-h-screen pb-20 space-y-20">
        {/* Hero Landing */}
        <div className="relative text-center py-32 px-4 rounded-b-[3rem] overflow-hidden border-b border-amber-900/10 shadow-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 bg-amber-700/10 text-amber-500 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-700/20">
              Specialty Coffee Space
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight text-stone-100 leading-tight">
              Hương Vị Cà Phê <br />
              <span className="text-amber-500">Bản Nguyên</span>
            </h1>
            <p className="text-stone-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-sans">
              Khám phá hạt cà phê Specialty được tuyển chọn kỹ lưỡng từ những vùng trồng trứ danh, rang mộc thủ công nhằm giữ trọn đặc trưng thổ nhưỡng.
            </p>
            <div className="pt-6">
              <Link
                href="/san-pham"
                className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-black rounded-xl text-base transition-all shadow-lg active:scale-97"
              >
                Khám Phá Cửa Hàng
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Showcase */}
        {products.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-100">Sản Phẩm Nổi Bật</h2>
              <p className="text-stone-400 text-sm">Trải nghiệm những hương vị cà phê đặc sắc nhất mùa vụ này.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            <div className="text-center pt-8">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 text-sm text-amber-500 font-bold hover:text-amber-400 transition-colors"
              >
                Xem tất cả sản phẩm &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
