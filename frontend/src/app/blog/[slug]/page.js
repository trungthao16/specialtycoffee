import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function getPostBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}/api/posts/${slug}`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch single post:', error.message);
  }
  return null;
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Specialty Coffee Space`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.coverImage,
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Specialty Coffee Space',
      logo: {
        '@type': 'ImageObject',
        url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
      },
    },
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/${post.slug}`,
    },
  };

  const breadcrumbItems = [
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-stone-950 min-h-screen py-12">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          {/* Breadcrumbs & Back Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-stone-900 pb-4">
            <Breadcrumbs items={breadcrumbItems} />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-amber-500 transition-colors py-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại Blog
            </Link>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs text-amber-600 font-semibold uppercase tracking-wider">
              <span>{post.category?.name || 'Kiến Thức'}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-black text-stone-100 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-stone-400 pt-2">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-stone-500" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-stone-500" />
                {new Date(post.createdAt).toLocaleDateString('vi-VN')}
              </span>
            </div>
          </div>

          {/* Cover image */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-stone-850 shadow-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="pt-6 border-t border-stone-900 text-stone-200 [&_h2]:text-2xl [&_h2]:font-sans [&_h2]:font-bold [&_h2]:text-amber-500 [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:text-stone-200 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-stone-200 [&_strong]:text-amber-500 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </>
  );
}
