'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { Filter, RotateCcw } from 'lucide-react';

export default function ProductList({ initialProducts }) {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedRoast, setSelectedRoast] = useState('All');

  const filteredProducts = initialProducts.filter((product) => {
    const matchesType = selectedType === 'All' || product.coffeeType === selectedType;
    const matchesRoast = selectedRoast === 'All' || product.roastLevel === selectedRoast;
    return matchesType && matchesRoast;
  });

  const resetFilters = () => {
    setSelectedType('All');
    setSelectedRoast('All');
  };

  return (
    <div className="space-y-8">
      {/* Filters Bar */}
      <div className="bg-stone-900/60 border border-stone-850 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md backdrop-blur-sm">
        <div className="flex flex-wrap items-center gap-6">
          {/* Coffee Type Filter */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider">Hạt Cà Phê</label>
            <div className="flex gap-2">
              {['All', 'Arabica', 'Robusta', 'Blend'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 border ${
                    selectedType === type
                      ? 'bg-amber-600 border-amber-600 text-stone-950 font-bold'
                      : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-amber-900/40 hover:text-stone-100'
                  }`}
                >
                  {type === 'All' ? 'Tất cả' : type}
                </button>
              ))}
            </div>
          </div>

          {/* Roast Level Filter */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider">Mức Độ Rang</label>
            <div className="flex gap-2">
              {['All', 'Light', 'Medium', 'Dark'].map((roast) => (
                <button
                  key={roast}
                  onClick={() => setSelectedRoast(roast)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 border ${
                    selectedRoast === roast
                      ? 'bg-amber-600 border-amber-600 text-stone-950 font-bold'
                      : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-amber-900/40 hover:text-stone-100'
                  }`}
                >
                  {roast === 'All' ? 'Tất cả' : roast}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reset Action */}
        {(selectedType !== 'All' || selectedRoast !== 'All') && (
          <button
            onClick={resetFilters}
            className="flex items-center justify-center gap-2 self-end md:self-auto px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold rounded-xl transition-all"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Đặt lại bộ lọc
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-stone-900/20 border border-dashed border-stone-800 rounded-2xl">
          <Filter className="h-10 w-10 text-stone-600 mx-auto mb-4" />
          <h3 className="text-lg font-sans font-semibold text-stone-300">Không tìm thấy sản phẩm</h3>
          <p className="text-sm text-stone-500 mt-2">Hãy thử thay đổi tiêu chí tìm kiếm của bạn.</p>
        </div>
      )}
    </div>
  );
}
