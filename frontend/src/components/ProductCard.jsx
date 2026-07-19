import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
  // Format price helper (VND)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <div className="group flex flex-col bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-900/40 transition-all duration-300 shadow-lg hover:shadow-2xl">
      {/* Product Image */}
      <Link href={`/products/${product.slug}`} className="relative aspect-square w-full bg-stone-950 overflow-hidden block">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          <span className="px-3 py-1 bg-amber-600 text-stone-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
            {product.coffeeType}
          </span>
          <span className="px-3 py-1 bg-stone-900/90 text-amber-500 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-900/20 shadow-md">
            {product.roastLevel} Roast
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Category */}
          <span className="text-xs text-amber-600 font-semibold uppercase tracking-wider">
            {product.category?.name || 'Cà Phê'}
          </span>
          {/* Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-2 text-lg font-sans font-bold text-stone-100 group-hover:text-amber-500 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          {/* Description */}
          <p className="mt-2 text-sm text-stone-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs font-bold text-stone-200">{product.rating.toFixed(1)}</span>
            <span className="text-xs text-stone-500">({product.reviewsCount} đánh giá)</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
          <span className="text-lg font-bold text-stone-100 font-mono">
            {formatPrice(product.price)}
          </span>
          <button className="px-4 py-2 bg-amber-700 hover:bg-amber-600 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95">
            Mua Ngay
          </button>
        </div>
      </div>
    </div>
  );
}
