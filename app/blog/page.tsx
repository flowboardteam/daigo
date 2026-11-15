"use client";

import React from "react";
import Link from "next/link";
import { POSTS } from "./blog-data";
import SubpageHeader, { DaigoIcon } from "../components/SubpageHeader";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 transition-colors">
      {/* 1. Header with mobile navigation drawer */}
      <SubpageHeader activePage="blog" />

      {/* 2. Articles Grid */}
      <main className="flex-1 py-10 sm:py-20 px-4 sm:px-6">
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
                    <picture>
                      <source srcSet={post.image.replace(/\.jpg$/, ".webp")} type="image/webp" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </picture>
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
