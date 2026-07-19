'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const breadcrumbItems = [
    { name: 'Liên hệ', href: '/lien-he' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    // Mock contact submission delay
    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: 'success',
        message: 'Cảm ơn bạn đã liên hệ! Yêu cầu của bạn đã được gửi đi thành công. Chúng tôi sẽ phản hồi trong vòng 24 giờ.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="bg-stone-950 min-h-screen py-12 text-stone-300 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-serif font-black text-stone-100">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-stone-400 text-sm max-w-md mx-auto">
            Mọi ý kiến đóng góp, phản hồi hoặc yêu cầu tư vấn hợp tác đại lý, vui lòng liên hệ theo biểu mẫu dưới đây.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          {/* Info Side (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-100 border-b border-stone-900 pb-3">Thông Tin Liên Hệ</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-stone-200">Địa chỉ cửa hàng</h5>
                  <p className="text-stone-400 mt-1">123 Đường Cà Phê, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-stone-200">Hotline tư vấn</h5>
                  <p className="text-stone-400 mt-1">0123 456 789</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-stone-200">Email phản hồi</h5>
                  <p className="text-stone-400 mt-1">contact@specialtycoffee.space</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-stone-200">Giờ làm việc</h5>
                  <p className="text-stone-400 mt-1">Thứ 2 - Thứ 6: 07:00 - 22:00<br />Thứ 7 - CN: 08:00 - 22:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (8 cols) */}
          <div className="md:col-span-8 bg-stone-900/30 border border-stone-900 p-8 rounded-3xl space-y-6 shadow-xl">
            <h3 className="text-xl font-serif font-bold text-stone-100 border-b border-stone-900 pb-3">Gửi Lời Nhắn Trực Tuyến</h3>

            {status.message && (
              <div
                className={`p-4 rounded-xl text-sm font-medium ${
                  status.type === 'success' ? 'bg-amber-600/10 text-amber-500 border border-amber-600/20' : 'bg-red-600/10 text-red-500 border border-red-650/20'
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase text-stone-400">Họ và Tên</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-stone-950 border border-stone-850 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600"
                    placeholder="Họ và Tên của bạn"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase text-stone-400">Địa chỉ Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-stone-950 border border-stone-850 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase text-stone-400">Chủ đề</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-stone-950 border border-stone-850 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600"
                  placeholder="Góp ý sản phẩm, liên hệ đối tác..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase text-stone-400">Lời nhắn / Nội dung</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-stone-950 border border-stone-850 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 resize-none"
                  placeholder="Nội dung lời nhắn của bạn..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-stone-950 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-99"
              >
                {loading ? 'Đang gửi...' : (
                  <>
                    <Send className="h-4 w-4" />
                    Gửi Lời Nhắn
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
