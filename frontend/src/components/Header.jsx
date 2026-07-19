'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Coffee } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Trang Chủ', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sản Phẩm', href: '/san-pham' },
    { name: 'Giới Thiệu', href: '/gioi-thieu' },
    { name: 'Liên Hệ', href: '/lien-he' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-900/10 bg-stone-900/90 backdrop-blur-md text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2.5 bg-amber-700/20 text-amber-500 rounded-xl group-hover:bg-amber-600 group-hover:text-stone-900 transition-all duration-300">
                <Coffee className="h-6 w-6" />
              </div>
              <span className="font-sans text-2xl font-bold tracking-wider text-amber-500 group-hover:text-amber-400 transition-colors">
                SPECIALTY COFFEE
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-700/20 text-amber-500'
                      : 'text-stone-300 hover:bg-stone-800 hover:text-stone-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-stone-400 hover:text-stone-100 hover:bg-stone-800 focus:outline-none transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-950 border-b border-amber-900/10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-700/20 text-amber-500'
                      : 'text-stone-300 hover:bg-stone-900 hover:text-stone-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
