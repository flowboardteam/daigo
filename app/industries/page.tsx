import React from "react";
import Link from "next/link";
import { INDUSTRIES } from "../industries-data";

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

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 transition-colors">
      {/* 1. Header (Clean, minimalist white with logo and navigation matching other subpages) */}
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
              href="/blog"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600 hover:text-black transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600 hover:text-black transition-colors"
            >
              Careers
            </Link>
          </nav>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-14 sm:py-20">
        {/* Page Hero */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
            Beyond Off-the-Shelf.
          </h1>
        </div>

        {/* 12 Industries Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="p-7 sm:p-8 border border-zinc-200 bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-start"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
                {ind.title}
              </h2>

              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* 3. Footer matching all other subpages */}
      <footer className="w-full bg-zinc-100 border-t border-zinc-200 text-zinc-600 py-16 px-6 mt-auto">
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
            <Link href="/industries" className="hover:text-black font-semibold text-zinc-950">
              INDUSTRIES
            </Link>
            <Link href="/blog" className="hover:text-black">
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
