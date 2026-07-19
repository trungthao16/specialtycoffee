import ProductList from '@/components/ProductList';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const dynamic = 'force-dynamic';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/api/products`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch products from backend:', error.message);
  }
  return [];
}

export async function generateMetadata() {
  let title = "Sản Phẩm Cà Phê Specialty - Specialty Coffee Space";
  let description = "Danh mục cà phê hạt specialty chất lượng cao, tuyển chọn Arabica, Robusta Honey Gia Lai rang xay mộc nguyên bản.";
  let keywords = "cà phê specialty, hạt arabica, hạt robusta, rang mộc";

  try {
    const res = await fetch(`${API_URL}/api/seo?path=/san-pham`, { cache: 'no-store' });
    if (res.ok) {
      const seo = await res.json();
      title = seo.title;
      description = seo.description;
      keywords = seo.keywords;
    }
  } catch (error) {
    // Keep defaults
  }

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: '/san-pham',
    },
    openGraph: {
      title,
      description,
      url: '/san-pham',
      siteName: 'Specialty Coffee Space',
      type: 'website',
    },
  };
}

export default async function ProductsPage() {
  const products = await getProducts();

  const breadcrumbItems = [
    { name: 'Sản phẩm', href: '/san-pham' },
  ];

  return (
    <div className="bg-stone-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header with Breadcrumbs & Action Button */}
        <div className="border-b border-stone-900 pb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="text-4xl font-sans font-black text-stone-100">Sản Phẩm Cà Phê</h1>
            <p className="text-stone-400 text-sm">Lọc theo hạt cà phê và mức độ rang phù hợp với sở thích của bạn.</p>
          </div>
          {/* 
          <Link
            href="/san-pham/them-moi"
            className="px-5 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md shrink-0 text-center active:scale-97"
          >
            Đăng Sản Phẩm Mới
          </Link>
          */}
        </div>

        {/* Product catalog with filters */}
        <ProductList initialProducts={products} />
      </div>
    </div>
  );
}
