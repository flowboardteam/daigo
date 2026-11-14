import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPostById } from "../blog-data";

// Official Daigo Deploy Vector Logo Icon Component
function DaigoIcon({ className = "w-7 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 142 78"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M 34 42 L 76 42 L 41 77 L 0 77 Z" />
      <path d="M 3 0 L 98 0 C 105 0 108 2 112 5 L 141 36 L 102 77 L 67 77 L 109 36 C 102 27 94 22 76 22 L 25 22 Z" />
    </svg>
  );
}

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
      {/* 1. Header (Clean, minimalist white with logo and navigation) */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group cursor-pointer text-zinc-950"
            aria-label="Daigo Deploy home"
          >
            <DaigoIcon className="h-5 w-auto transition-transform group-hover:scale-105 shrink-0 text-zinc-950" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              Daigo Deploy
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/careers"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600 hover:text-black transition-colors"
            >
              Careers
            </Link>
          </nav>
        </div>
      </header>

      {/* 2. Article Reading View */}
      <main className="flex-1 py-12 sm:py-20 px-6">
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
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
