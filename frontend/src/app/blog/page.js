import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

export const dynamic = 'force-dynamic';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function getPosts() {
  try {
    const res = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch posts from backend:', error.message);
  }
  return [];
}

export async function generateMetadata() {
  let title = "Blog Cà Phê Specialty - Kiến Thức & Mẹo Pha Chế";
  let description = "Chia sẻ kiến thức pha chế cà phê V60 Pour Over, Espresso, hạt Arabica, Robusta Honey Gia Lai và quy trình sơ chế cà phê specialty.";
  let keywords = "blog cà phê, kiến thức cà phê, cách pha v60, sơ chế honey";

  try {
    const res = await fetch(`${API_URL}/api/seo?path=/blog`, { cache: 'no-store' });
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
      canonical: '/blog',
    },
    openGraph: {
      title,
      description,
      url: '/blog',
      siteName: 'Specialty Coffee Space',
      type: 'website',
    },
  };
}

export default async function BlogPage() {
  const posts = await getPosts();

  const breadcrumbItems = [
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <div className="bg-stone-950 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header with Breadcrumbs & Action Button */}
        <div className="border-b border-stone-900 pb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="text-4xl font-serif font-black text-stone-100">Blog Cà Phê</h1>
            <p className="text-stone-400 text-sm">Nơi chia sẻ kiến thức, mẹo pha chế và câu chuyện xoay quanh hạt cà phê đặc sản.</p>
          </div>
          <Link
            href="/blog/viet-bai"
            className="px-5 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md shrink-0 text-center active:scale-97"
          >
            Đăng Bài Viết Mới
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="group flex flex-col bg-stone-900 border border-stone-850 rounded-2xl overflow-hidden hover:border-amber-900/40 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {/* Image cover */}
              <div className="relative h-64 w-full bg-stone-950 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              {/* Body */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-xs text-amber-600 font-semibold uppercase tracking-wider">
                    <span>{post.category?.name || 'Kiến thức'}</span>
                    <span className="h-1 w-1 bg-stone-700 rounded-full"></span>
                    <span className="text-stone-500">
                      {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-sans font-bold text-stone-100 group-hover:text-amber-500 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-stone-300 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-850 flex items-center justify-between">
                  <span className="text-xs text-stone-500">Tác giả: <strong className="text-stone-400">{post.author}</strong></span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-amber-500 hover:text-amber-400 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Đọc tiếp &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
