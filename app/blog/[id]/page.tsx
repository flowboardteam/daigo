import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPostById } from "../blog-data";
import SubpageHeader, { DaigoIcon } from "../../components/SubpageHeader";

export function generateStaticParams() {
  return POSTS.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 transition-colors">
      {/* 1. Header with mobile navigation drawer */}
      <SubpageHeader activePage="blog" />

      {/* 2. Article Reading View */}
      <main className="flex-1 py-10 sm:py-20 px-4 sm:px-6">
        <article className="max-w-3xl mx-auto">
          {/* Title Header */}
          <header className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.12] mb-4">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed">
                {post.subtitle}
              </p>
            )}
          </header>

          {/* Hero Feature Image (if available) */}
          {post.image && (
            <div
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
              }}
              className="relative overflow-hidden aspect-[16/9] w-full bg-zinc-100 mb-10 sm:mb-14"
            >
            <picture>
              <source srcSet={post.image.replace(/\.jpg$/, ".webp")} type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </picture>
            </div>
          )}

          {/* Article Body */}
          <div className="space-y-6 sm:space-y-8 text-zinc-800 text-base sm:text-lg leading-relaxed font-normal">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom Article Signoff & Navigation */}
          <div className="mt-14 sm:mt-20 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="text-xs font-mono text-zinc-500">
              Published by{" "}
              <strong className="text-zinc-900 font-semibold">
                Daigo Deploy Engineering Team
              </strong>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center px-5 py-3 bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/80 transition-all shadow-xs group cursor-pointer"
            >
              <span className="text-xs font-mono uppercase tracking-[0.15em] font-semibold text-zinc-950">
                &larr; All Blog
              </span>
            </Link>
          </div>
        </article>
      </main>

      {/* 3. Footer */}
      <footer className="w-full bg-zinc-100 border-t border-zinc-200 text-zinc-600 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="space-y-2 text-xs font-mono">
            <div className="font-bold text-zinc-950 text-sm">DAIGO DEPLOY</div>
            <a
              href="mailto:HELLO@DAIGODEPLOY.COM"
              className="hover:text-black block font-semibold"
            >
              HELLO@DAIGODEPLOY.COM
            </a>
            <div>DOVER KENTON RD, DOVER, DELAWARE 19904, UNITED STATES</div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-mono">
            <Link href="/" className="hover:text-black">
              HOME
            </Link>
            <Link href="/industries" className="hover:text-black">
              INDUSTRIES
            </Link>
            <Link
              href="/blog"
              className="hover:text-black font-bold text-black"
            >
              BLOG
            </Link>
            <Link href="/careers" className="hover:text-black">
              CAREERS
            </Link>
            <Link href="/terms" className="hover:text-black">
              TERMS
            </Link>
            <Link href="/privacy" className="hover:text-black">
              PRIVACY
            </Link>
            <Link href="/cookies" className="hover:text-black">
              COOKIES
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
