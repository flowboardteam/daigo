import React from "react";
import Link from "next/link";

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

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 transition-colors">
      {/* 1. Header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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
      <main className="flex-1 py-14 sm:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 sm:mb-16 pb-8 border-b border-zinc-200">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-4">
              Legal & Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1] mb-4">
              Cookie Policy
            </h1>
            <p className="text-sm font-mono text-zinc-500">
              Effective Date: November 14, 2026 &bull; Flowboard Team Inc.
            </p>
          </header>

          <div className="space-y-10 sm:space-y-12 text-zinc-800 text-base sm:text-lg leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                1. What Are Cookies?
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                Cookies and local storage are small text files or key-value pairs stored in your web browser when you access digital services. They allow websites to remember user preferences, maintain session state, and deliver optimized, high-performance interactions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                2. How Daigo Deploy Uses Cookies & Storage
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                Daigo Deploy maintains a strict, privacy-first posture. We do NOT use third-party advertising cookies, cross-site behavioral tracking scripts, or invasive data broker pixels.
              </p>
              <p className="text-zinc-600 leading-relaxed text-base">
                Our platform uses cookies and browser local storage strictly for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 text-base">
                <li>
                  <strong className="text-zinc-900 font-semibold">Strictly Necessary Storage:</strong> Managing theme preferences (dark mode / light mode selection via <code className="bg-zinc-100 px-1 py-0.5 rounded text-xs">daigo-theme</code>), session continuity during multi-step intake flows, and anti-abuse verification tokens.
                </li>
                <li>
                  <strong className="text-zinc-900 font-semibold">Security & Performance:</strong> Mitigating automated bot intrusions, load balancing edge traffic, and preserving client rendering performance.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                3. Zero Third-Party Advertising Trackers
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                We never embed commercial ad networks, remarketing pixels, or social tracking beacons that monitor your browsing behavior outside of daigodeploy.com.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                4. Managing & Disabling Cookies
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                You can configure or disable cookies at any time through your browser settings. Because Daigo Deploy only uses essential functional preferences, disabling cookies will not affect your ability to browse our articles, documentation, or submit enterprise briefing inquiries.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                5. Contact Us
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                If you have questions about our cookie standards or privacy practices, please contact us:
              </p>
              <div className="p-5 bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-800 space-y-1">
                <div className="font-bold text-zinc-950">FLOWBOARD TEAM INC. / DAIGO DEPLOY</div>
                <div>ATTN: COMPLIANCE GROUP</div>
                <div>EMAIL: PRIVACY@DAIGODEPLOY.COM</div>
                <div>DOVER KENTON RD, DOVER, DELAWARE 19904, UNITED STATES</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
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
            <Link href="/industries" className="hover:text-black">
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
            <Link href="/cookies" className="hover:text-black font-semibold text-zinc-950">
              COOKIES
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
