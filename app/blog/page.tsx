"use client";

import React from "react";
import Link from "next/link";
import { POSTS } from "./blog-data";

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

export default function BlogPage() {
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

      {/* 2. Articles Grid */}
      <main className="flex-1 py-14 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-stretch">
            {POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group flex flex-col justify-start h-full border border-zinc-200 transition-all duration-300 p-6 sm:p-7 bg-white hover:shadow-lg cursor-pointer outline-none focus:outline-none select-none"
              >
                <div className="flex-1 flex flex-col">
                  {/* Article Thumbnail with Bevel Corner */}
                  {post.image && (
                    <div
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                      }}
                      className="relative overflow-hidden bg-zinc-100 aspect-[16/10] w-full shrink-0 mb-6"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Article Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 leading-snug tracking-tight mb-3">
                    {post.title}
                  </h3>

                  {/* Subtitle / Excerpt */}
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="w-full bg-zinc-100 border-t border-zinc-200 text-zinc-600 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="space-y-2 text-xs font-mono">
            <div className="font-bold text-zinc-950 text-sm">DAIGO DEPLOY</div>
            <a href="mailto:HELLO@DAIGODEPLOY.COM" className="hover:text-black block font-semibold">
              HELLO@DAIGODEPLOY.COM
            </a>
            <div>DOVER KENTON RD, DOVER, DELAWARE 19904, UNITED STATES</div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-mono">
            <Link href="/" className="hover:text-black">HOME</Link>
            <Link href="/industries" className="hover:text-black">INDUSTRIES</Link>
            <Link href="/blog" className="hover:text-black font-bold text-black">BLOG</Link>
            <Link href="/careers" className="hover:text-black">CAREERS</Link>
            <Link href="/terms" className="hover:text-black">TERMS</Link>
            <Link href="/privacy" className="hover:text-black">PRIVACY</Link>
            <Link href="/cookies" className="hover:text-black">COOKIES</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
