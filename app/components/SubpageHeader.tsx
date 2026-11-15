"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Official Daigo Deploy Vector Logo Icon Component
export function DaigoIcon({ className = "w-7 h-5" }: { className?: string }) {
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

export default function SubpageHeader({
  activePage,
}: {
  activePage?: "industries" | "blog" | "careers" | "demo" | "documentation" | "legal";
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#060709]/95 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/[0.08] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer text-zinc-950 dark:text-white"
            aria-label="Daigo Deploy home"
          >
            <DaigoIcon className="h-4.5 sm:h-5 w-auto transition-transform group-hover:scale-105 shrink-0 text-zinc-950 dark:text-white" />
            <span className="text-lg sm:text-2xl font-bold tracking-tight">
              Daigo Deploy
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/blog"
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                activePage === "blog"
                  ? "text-zinc-950 dark:text-white font-bold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                activePage === "careers"
                  ? "text-zinc-950 dark:text-white font-bold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Careers
            </Link>
          </nav>

          {/* Mobile Right Controls: Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-zinc-950 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 rounded-md transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 md:hidden bg-white/98 dark:bg-[#060709]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Header inside drawer with Logo and Close button */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-zinc-950 dark:text-white"
            >
              <DaigoIcon className="h-5 w-auto" />
              <span className="text-xl font-bold tracking-tight">Daigo Deploy</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-zinc-950 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items (Touch friendly >= 48px height) */}
          <nav className="flex flex-col py-8 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 px-3 text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
              <span>Home</span>
              <span className="text-zinc-400 text-sm">&rarr;</span>
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 px-3 text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
              <span>Blog</span>
              <span className="text-zinc-400 text-sm">&rarr;</span>
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 px-3 text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
              <span>Careers</span>
              <span className="text-zinc-400 text-sm">&rarr;</span>
            </Link>

            <Link
              href="/documentation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 px-3 text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
              <span>The FDE Model</span>
              <span className="text-zinc-400 text-sm">&rarr;</span>
            </Link>
          </nav>

          {/* Drawer Footer: Legal & Copyright */}
          <div className="pt-6 border-t border-zinc-200 dark:border-white/10 space-y-4">
            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500">
              <Link href="/terms" onClick={() => setMobileMenuOpen(false)} className="hover:text-black dark:hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" onClick={() => setMobileMenuOpen(false)} className="hover:text-black dark:hover:text-white">
                Privacy
              </Link>
              <Link href="/cookies" onClick={() => setMobileMenuOpen(false)} className="hover:text-black dark:hover:text-white">
                Cookies
              </Link>
            </div>

            <div className="text-[11px] font-mono text-zinc-400">
              HELLO@DAIGODEPLOY.COM
            </div>
          </div>
        </div>
      )}
    </>
  );
}
