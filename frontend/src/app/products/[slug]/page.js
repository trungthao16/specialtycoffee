import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function getProductBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}/api/products/${slug}`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch product:', error.message);
  }
  return null;
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Specialty Coffee Space`,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 600,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Format price helper (VND)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  // Structured Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    sku: product._id,
    brand: {
      '@type': 'Brand',
      name: 'Specialty Coffee Space',
    },
    offers: {
      '@type': 'Offer',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/products/${product.slug}`,
      priceCurrency: 'VND',
      price: product.price,
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toFixed(1),
      reviewCount: product.reviewsCount || 1,
    },
  };

  const breadcrumbItems = [
    { name: 'Cửa hàng', href: '/' },
    { name: product.name, href: `/products/${product.slug}` },
  ];

  return (
    <>
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="bg-stone-950 min-h-screen py-8 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Back button & Breadcrumbs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-stone-900 pb-4">
            <Breadcrumbs items={breadcrumbItems} />
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-amber-500 transition-colors py-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại Cửa Hàng
            </Link>
          </div>

          {/* Details Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
            {/* Left: Image Container */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-stone-850 bg-stone-900 shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Right: Info and Form */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Meta / Tag */}
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-amber-600/10 text-amber-500 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-600/20">
                    {product.coffeeType}
                  </span>
                  <span className="px-3 py-1 bg-stone-900 text-stone-300 text-xs font-bold uppercase tracking-wider rounded-full border border-stone-800">
                    {product.roastLevel} Roast
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-sans font-black text-stone-100 leading-tight">
                  {product.name}
                </h1>

                {/* Reviews */}
                <div className="flex items-center gap-2 text-amber-500">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4.5 w-4.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-stone-700'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-stone-200">
                    {product.rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-stone-500">({product.reviewsCount} đánh giá)</span>
                </div>

                {/* Price */}
                <div className="text-3xl font-mono font-bold text-amber-500 pt-2">
                  {formatPrice(product.price)}
                </div>

                {/* Description */}
                <div className="border-t border-stone-900 pt-4">
                  <h3 className="text-sm font-bold text-stone-300 uppercase tracking-wider mb-2">Mô tả sản phẩm</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>

              {/* Purchase Actions Mock */}
              <div className="space-y-6 pt-6 border-t border-stone-900">
                {/* Options selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase text-stone-400">Kiểu Xay</label>
                    <select className="w-full bg-stone-900 border border-stone-800 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600">
                      <option>Hạt Nguyên Bản</option>
                      <option>Phin Truyền Thống</option>
                      <option>Pha Espresso (Mịn)</option>
                      <option>Pha Drip / V60 (Thô Vừa)</option>
                      <option>Pha French Press (Thô)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase text-stone-400">Số Lượng</label>
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="w-full bg-stone-900 border border-stone-800 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                {/* Button Action */}
                <button className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-black rounded-xl transition-all shadow-lg text-base active:scale-99">
                  Thêm Vào Giỏ Hàng
                </button>

                {/* Badges */}
                <div className="grid grid-cols-3 gap-4 text-center pt-2">
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="h-5 w-5 text-amber-600" />
                    <span className="text-xxs text-stone-500">100% Specialty</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="h-5 w-5 text-amber-600" />
                    <span className="text-xxs text-stone-500">Giao nhanh 2H</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <RotateCcw className="h-5 w-5 text-amber-600" />
                    <span className="text-xxs text-stone-500">Đổi trả dễ dàng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
