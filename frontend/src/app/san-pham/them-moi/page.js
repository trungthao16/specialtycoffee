'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, PlusCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    image: '',
    coffeeType: 'Arabica',
    roastLevel: 'Medium',
    categorySlug: 'single-origin',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  // Auto-generate slug from product name
  const handleNameChange = (e) => {
    const nameVal = e.target.value;
    const slugVal = nameVal
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // remove special characters
      .replace(/[\s_]+/g, '-') // replace spaces with hyphens
      .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphens

    setFormData((prev) => ({
      ...prev,
      name: nameVal,
      slug: slugVal,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check size limit (max 2MB to prevent Render Free Tier OOM crash)
    if (file.size > 2 * 1024 * 1024) {
      setStatus({ type: 'error', message: 'Kích thước ảnh quá lớn (Tối đa 2MB). Vui lòng chọn ảnh nhỏ hơn để tránh quá tải máy chủ.' });
      return;
    }

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    setLoading(true);
    setStatus({ type: null, message: '' });

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const res = await fetch(`${API_URL}/api/upload`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            file: reader.result,
            filename: file.name,
          }),
        });

        const data = await res.json();
        if (res.ok) {
          setFormData((prev) => ({ ...prev, image: data.url }));
          setStatus({ type: 'success', message: 'Tải ảnh sản phẩm lên thành công!' });
        } else {
          setStatus({ type: 'error', message: data.message || 'Lỗi khi tải ảnh lên.' });
        }
      } catch (err) {
        console.error(err);
        setStatus({ type: 'error', message: 'Không thể kết nối API tải ảnh.' });
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    try {
      const res = await fetch(`${API_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Tuyệt vời! Sản phẩm của bạn đã được đăng thành công.',
        });
        // Clear form
        setFormData({
          name: '',
          slug: '',
          description: '',
          price: '',
          image: '',
          coffeeType: 'Arabica',
          roastLevel: 'Medium',
          categorySlug: 'single-origin',
        });
        // Redirect to products list page after 1.5s
        setTimeout(() => {
          router.push('/san-pham');
          router.refresh();
        }, 1500);
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Có lỗi xảy ra trong quá trình thêm sản phẩm.',
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'Không thể kết nối đến máy chủ backend.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-stone-950 min-h-screen py-12 text-stone-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Back navigation */}
        <Link
          href="/san-pham"
          className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại Sản Phẩm
        </Link>

        {/* Title */}
        <div>
          <span className="text-xs text-amber-500 font-bold uppercase tracking-widest bg-amber-700/10 px-4 py-1.5 rounded-full border border-amber-700/20">
            Catalog Studio
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-stone-100 mt-2">Đăng Sản Phẩm Mới</h1>
          <p className="text-stone-400 text-sm mt-1">
            Nhập chi tiết cà phê hạt, mức độ rang và giá cả để hiển thị trên cửa hàng.
          </p>
        </div>

        {/* Status Alerts */}
        {status.type === 'success' && (
          <div className="bg-emerald-950/40 border border-emerald-900/60 p-4 rounded-xl flex items-center gap-3 text-emerald-400 text-sm">
            <CheckCircle className="h-5 w-5 shrink-0" />
            <span>{status.message}</span>
          </div>
        )}
        {status.type === 'error' && (
          <div className="bg-rose-950/40 border border-rose-900/60 p-4 rounded-xl flex items-center gap-3 text-rose-400 text-sm">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-stone-900/40 border border-stone-850 p-8 rounded-3xl shadow-xl">
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Tên Sản Phẩm</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleNameChange}
              required
              className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              placeholder="Ví dụ: Ethiopia Kochere Washed Yirgacheffe..."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Đường dẫn tĩnh (Slug)</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                required
                className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                placeholder="ethiopia-kochere-washed"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Giá bán (VND)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                min="0"
                className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                placeholder="250000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Loại hạt</label>
              <select
                name="coffeeType"
                value={formData.coffeeType}
                onChange={handleInputChange}
                className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              >
                <option value="Arabica">Arabica</option>
                <option value="Robusta">Robusta</option>
                <option value="Blend">Blend</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Mức độ rang</label>
              <select
                name="roastLevel"
                value={formData.roastLevel}
                onChange={handleInputChange}
                className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              >
                <option value="Light">Light</option>
                <option value="Medium">Medium</option>
                <option value="Dark">Dark</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Chuyên mục sản phẩm</label>
              <select
                name="categorySlug"
                value={formData.categorySlug}
                onChange={handleInputChange}
                className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              >
                <option value="single-origin">Single Origin</option>
                <option value="espresso-blend">Espresso Blend</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Ảnh Sản Phẩm</label>
              <div className="relative shrink-0">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="product-image-upload"
                />
                <label
                  htmlFor="product-image-upload"
                  className="px-4 py-2 bg-stone-850 hover:bg-stone-800 text-amber-500 hover:text-amber-400 text-xs font-bold rounded-lg border border-amber-900/10 cursor-pointer transition-all inline-block"
                >
                  Tải Ảnh Lên Từ Thiết Bị
                </label>
              </div>
            </div>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
              className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              placeholder="Đường dẫn ảnh (https://...) hoặc tự động điền khi tải ảnh lên"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Mô tả sản phẩm</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows="5"
              className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
              placeholder="Mô tả các nốt hương vị, độ cao, sơ chế hạt..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-amber-600 hover:bg-amber-500 disabled:bg-stone-800 disabled:text-stone-600 text-stone-950 font-black rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-99"
          >
            <PlusCircle className="h-4 w-4" />
            {loading ? 'Đang Đăng...' : 'Đăng Sản Phẩm'}
          </button>
        </form>
      </div>
    </div>
  );
}
