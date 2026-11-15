"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { INDUSTRIES } from "./industries-data";

const SECTOR_BACKGROUNDS: Record<string, string> = {
  energy: "/industries/energy.jpg",
  mining: "/industries/mining.jpg",
  finance: "/industries/finance.jpg",
  agriculture: "/industries/agriculture.jpg",
  "supply-chain": "/industries/supply-chain.jpg",
  healthcare: "/industries/healthcare.jpg",
};

// Official Daigo Deploy Vector Logo Icon Component
function DaigoIcon({ className = "w-7 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 142 78"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Lower slanted parallelogram */}
      <path d="M 34 42 L 76 42 L 41 77 L 0 77 Z" />
      {/* Upper chevron arrow */}
      <path d="M 3 0 L 98 0 C 105 0 108 2 112 5 L 141 36 L 102 77 L 67 77 L 109 36 C 102 27 94 22 76 22 L 25 22 Z" />
    </svg>
  );
}

// Seamless Infinite Cyclic Hero Video Player (Dual-Buffer Ping-Pong Smooth Loop)
function SeamlessHeroVideo() {
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const [activeSlot, setActiveSlot] = useState<"A" | "B">("A");
  const isTransitioning = useRef(false);

  useEffect(() => {
    const vA = videoRefA.current;
    const vB = videoRefB.current;
    if (!vA || !vB) return;

    vA.defaultMuted = true;
    vB.defaultMuted = true;
    vA.muted = true;
    vB.muted = true;
    vA.setAttribute("playsinline", "");
    vB.setAttribute("playsinline", "");

    // Start video A immediately on load / canplay
    const playA = () => {
      vA.play().catch(() => { });
    };
    playA();
    vA.addEventListener("canplay", playA);

    // Crisp, smooth 0.5s dissolve without ghosting or hesitation
    const CROSSFADE_SEC = 0.5;
    let animFrame: number;

    const checkLoop = () => {
      const activeEl = activeSlot === "A" ? vA : vB;
      const standbyEl = activeSlot === "A" ? vB : vA;
      const nextSlot = activeSlot === "A" ? "B" : "A";

      if (
        !isTransitioning.current &&
        activeEl.duration &&
        !isNaN(activeEl.duration) &&
        activeEl.duration > 0
      ) {
        const timeLeft = activeEl.duration - activeEl.currentTime;

        // Precisely trigger crossfade at 0.5s before end
        if (timeLeft <= CROSSFADE_SEC && timeLeft > 0) {
          isTransitioning.current = true;
          standbyEl.currentTime = 0;
          standbyEl
            .play()
            .then(() => {
              setActiveSlot(nextSlot);
              setTimeout(() => {
                isTransitioning.current = false;
              }, CROSSFADE_SEC * 1000 + 100);
            })
            .catch(() => {
              isTransitioning.current = false;
            });
        }
      }

      animFrame = requestAnimationFrame(checkLoop);
    };

    animFrame = requestAnimationFrame(checkLoop);

    // Watchdog: ensures video NEVER pauses or freezes under any circumstance
    const watchdog = setInterval(() => {
      const current = activeSlot === "A" ? vA : vB;
      if (current.paused) {
        current.play().catch(() => { });
      }
    }, 1000);

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        const current = activeSlot === "A" ? vA : vB;
        current.play().catch(() => { });
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animFrame);
      clearInterval(watchdog);
      document.removeEventListener("visibilitychange", handleVisibility);
      vA.removeEventListener("canplay", playA);
    };
  }, [activeSlot]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none bg-black">
      {/* Video Slot A - Eagerly loaded primary stream with responsive mobile/desktop formats */}
      <video
        ref={videoRefA}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ transition: "opacity 500ms ease-in-out" }}
        className={`absolute inset-0 w-full h-full object-cover ${activeSlot === "A" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
      >
        <source src="/1115-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/1115.mp4" type="video/mp4" />
        <source src="/1115.mov" type="video/quicktime" />
      </video>

      {/* Video Slot B - Standby buffer with metadata preload to prevent bandwidth contention */}
      <video
        ref={videoRefB}
        loop
        muted
        playsInline
        preload="metadata"
        style={{ transition: "opacity 500ms ease-in-out" }}
        className={`absolute inset-0 w-full h-full object-cover ${activeSlot === "B" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
      >
        <source src="/1115-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/1115.mp4" type="video/mp4" />
        <source src="/1115.mov" type="video/quicktime" />
      </video>
    </div>
  );
}

const themeSubscribe = (callback: () => void) => {
  if (typeof window === "undefined") return () => { };
  window.addEventListener("themechange", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("themechange", callback);
    window.removeEventListener("storage", callback);
  };
};

const getThemeSnapshot = (): "light" | "dark" => {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const getThemeServerSnapshot = (): "light" | "dark" => "light";

const PROCESS_STEPS = [
  {
    num: "01",
    phase: "Phase 01 // Weeks 1–2",
    title: "Immersion",
    description: "We study the operation, map the data and decision flows, and define a single high-value problem with measurable success criteria.",
    deliverable: "Problem Definition & Architecture Blueprint",
    impact: "Measurable success criteria & ROI baseline",
  },
  {
    num: "02",
    phase: "Phase 02 // Weeks 3–6",
    title: "Deployment",
    description: "We build and release a working system inside your environment, integrated with the tools your people already use.",
    deliverable: "Live Integrated Production System",
    impact: "Zero-disruption integration with internal tooling",
  },
  {
    num: "03",
    phase: "Phase 03 // Weeks 7–8",
    title: "Validation",
    description: "We test accuracy, reliability and business impact against expert-reviewed benchmarks and agreed targets.",
    deliverable: "Audited ROI & Benchmark Assessment",
    impact: "Target accuracy and SLA compliance verified",
  },
  {
    num: "04",
    phase: "Phase 04 // Ongoing",
    title: "Expansion",
    description: "We harden the system for production, extend it across functions and markets, and transfer capability to your organisation.",
    deliverable: "Scale Architecture & Capability Transfer",
    impact: "Full internal autonomy & cross-market deployment",
  },
];

export default function Home() {
  const theme = useSyncExternalStore(themeSubscribe, getThemeSnapshot, getThemeServerSnapshot);
  const [activeSectorId, setActiveSectorId] = useState<string>("energy");
  const [loadedSectors, setLoadedSectors] = useState<Set<string>>(() => new Set(["energy"]));
  const [isA11yOpen, setIsA11yOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProcessCard, setActiveProcessCard] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const industryCarouselRef = useRef<HTMLDivElement>(null);
  const processCarouselRef = useRef<HTMLDivElement>(null);

  const activeIndustryIndex = Math.max(
    0,
    INDUSTRIES.slice(0, 6).findIndex((i) => i.id === activeSectorId)
  );

  const scrollToIndustry = (index: number) => {
    if (!industryCarouselRef.current) return;
    const track = industryCarouselRef.current;
    const clamped = Math.max(0, Math.min(5, index));
    const targetItem = INDUSTRIES[clamped];
    if (targetItem) {
      setActiveSectorId(targetItem.id);
    }
    const slides = track.querySelectorAll<HTMLElement>("[data-slide-index]");
    const slide = slides[clamped];
    if (slide) {
      const scrollTarget = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
      track.scrollTo({ left: scrollTarget, behavior: "smooth" });
    }
  };

  const handleIndustryScroll = () => {
    if (!industryCarouselRef.current) return;
    const track = industryCarouselRef.current;
    const slides = track.querySelectorAll<HTMLElement>("[data-slide-index]");
    if (!slides.length) return;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, idx) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const dist = Math.abs(trackCenter - slideCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });

    const targetItem = INDUSTRIES[closestIndex];
    if (targetItem && targetItem.id !== activeSectorId) {
      setActiveSectorId(targetItem.id);
    }
  };

  const scrollToProcess = (index: number) => {
    if (!processCarouselRef.current) return;
    const track = processCarouselRef.current;
    const clamped = Math.max(0, Math.min(PROCESS_STEPS.length - 1, index));
    setActiveProcessStep(clamped);
    const slides = track.querySelectorAll<HTMLElement>("[data-process-index]");
    const slide = slides[clamped];
    if (slide) {
      const scrollTarget = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
      track.scrollTo({ left: scrollTarget, behavior: "smooth" });
    }
  };

  const handleProcessScroll = () => {
    if (!processCarouselRef.current) return;
    const track = processCarouselRef.current;
    const slides = track.querySelectorAll<HTMLElement>("[data-process-index]");
    if (!slides.length) return;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, idx) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const dist = Math.abs(trackCenter - slideCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeProcessStep) {
      setActiveProcessStep(closestIndex);
    }
  };

  useEffect(() => {
    const indTrack = industryCarouselRef.current;
    if (!indTrack) return;
    let animId: number | null = null;
    const onScroll = () => {
      if (animId) return;
      animId = requestAnimationFrame(() => {
        handleIndustryScroll();
        animId = null;
      });
    };
    indTrack.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      indTrack.removeEventListener("scroll", onScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [activeSectorId]);

  useEffect(() => {
    const procTrack = processCarouselRef.current;
    if (!procTrack) return;
    let animId: number | null = null;
    const onScroll = () => {
      if (animId) return;
      animId = requestAnimationFrame(() => {
        handleProcessScroll();
        animId = null;
      });
    };
    procTrack.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      procTrack.removeEventListener("scroll", onScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [activeProcessStep]);

  // Lazy-load sector background images upon hover or selection
  useEffect(() => {
    setLoadedSectors((prev) => {
      if (prev.has(activeSectorId)) return prev;
      const next = new Set(prev);
      next.add(activeSectorId);
      return next;
    });
  }, [activeSectorId]);

  // Lock scroll when mobile menu is open
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

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem("daigo-theme", nextTheme);
    } catch { }
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.dispatchEvent(new Event("themechange"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-[#060709] dark:text-[#e6e8eb] flex flex-col font-sans transition-colors duration-200 selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-black dark:selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BAR (Responsive wrap for mobile screens) */}
      <aside
        aria-label="Announcement"
        className="w-full bg-zinc-100/80 dark:bg-[#0b0c0e]/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/[0.07] px-4 py-2 sm:py-2.5 text-center text-[11px] sm:text-xs leading-relaxed tracking-wide text-zinc-600 dark:text-zinc-400 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 transition-colors relative z-40"
      >
        <span>Flowboard Team launches Daigo Deploy to accelerate AI adoption across African enterprises</span>
        <Link
          href="/blog/flowboard-launches-daigo-deploy"
          className="text-zinc-900 dark:text-zinc-200 underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors cursor-pointer font-medium"
        >
          Read announcement
        </Link>
      </aside>

      {/* 2. NAVIGATION HEADER - Frosted Glass overlay over the Hero background */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled
          ? "backdrop-blur-xl backdrop-saturate-150 bg-white/85 dark:bg-[#060709]/85 border-b border-zinc-200/80 dark:border-white/[0.08] shadow-xs dark:shadow-md"
          : "backdrop-blur-md backdrop-saturate-150 bg-black/40 border-b border-white/15 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.08)]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
          {/* Logo with official new emblem */}
          <Link
            href="/"
            className={`flex items-center gap-2.5 sm:gap-3 group cursor-pointer transition-colors ${scrolled ? "text-zinc-950 dark:text-white" : "text-white"
              }`}
            aria-label="Daigo Deploy home"
          >
            <DaigoIcon
              className={`h-4.5 sm:h-5 w-auto transition-colors shrink-0 ${scrolled
                ? "text-zinc-950 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                : "text-white group-hover:text-zinc-300"
                }`}
            />
            <span className="text-lg sm:text-2xl font-bold tracking-tight">
              Daigo Deploy
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 sm:gap-8">
            <Link
              href="/blog"
              className={`text-[11px] font-semibold tracking-[0.2em] uppercase cursor-pointer transition-colors ${scrolled
                ? "text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white"
                : "text-white/85 hover:text-white"
                }`}
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className={`text-[11px] font-semibold tracking-[0.2em] uppercase cursor-pointer transition-colors ${scrolled
                ? "text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white"
                : "text-white/85 hover:text-white"
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
              className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors cursor-pointer ${
                scrolled
                  ? "text-zinc-950 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
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

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 md:hidden bg-white/98 dark:bg-[#060709]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Header inside drawer */}
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

          {/* Navigation Links */}
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

          {/* Drawer Footer */}
          <div className="pt-6 border-t border-zinc-200 dark:border-white/10 space-y-6">
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-mono text-zinc-500">Theme</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="px-3 py-1 rounded bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/10 text-xs font-semibold text-zinc-950 dark:text-white"
              >
                {isDark ? "Dark 🌙" : "Light ☀️"}
              </button>
            </div>

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

      {/* 3. HERO SECTION (With seamless infinite cyclic video 1113.mov extending behind frosted glass header) */}
      <section
        id="hero"
        className="-mt-[64px] sm:-mt-[72px] pt-[64px] sm:pt-[72px] relative w-full min-h-[92vh] sm:min-h-[96vh] flex items-end justify-center overflow-hidden bg-black transition-colors duration-300 pb-8 sm:pb-14 lg:pb-16"
      >
        {/* Seamless Infinite Cyclic Video Player (100% Raw Video Quality, Zero Overlays) */}
        <SeamlessHeroVideo />

        {/* Hero Content (Positioned down in the lower section with perfectly aligned top edges) */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-28 sm:pt-48 lg:pt-72 pb-2 sm:pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-start">
          {/* Left: Giant Typography */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.035em] text-white leading-[1.1] sm:leading-[1.08] drop-shadow-md">
              Intelligence Behind
              <br />
              Every Mission-Critical
              <br />
              Operation.
            </h1>
          </div>

          {/* Right: Mission Statement & CTA Button (Top-aligned with headline) */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-1 sm:pt-2 max-w-xl">
            <div className="space-y-4 sm:space-y-6 text-white text-sm sm:text-base md:text-lg leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              <p>
                We embed engineering teams within your business to solve complex challenges and build AI systems around the way you work.
              </p>
            </div>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-white/60 text-white bg-white/10 hover:bg-white hover:text-black transition-all duration-200 px-8 py-3.5 text-xs tracking-[0.25em] font-medium uppercase cursor-pointer backdrop-blur-sm shadow-lg min-h-[48px]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY BANNER & WHAT WE DO SECTION (Pure White Background) */}
      <section
        style={{ backgroundColor: "#ffffff" }}
        className="relative w-full border-t border-zinc-200 bg-white text-zinc-950 py-14 sm:py-20 px-4 sm:px-6 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          {/* Backed By Credibility Bar */}
          <div className="pb-12 sm:pb-16 border-b border-zinc-200 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
            <p className="text-sm sm:text-base text-zinc-800 max-w-xl font-normal leading-relaxed">
              Credit analysis, fraud detection, customer servicing, regulatory reporting and document processing, deployed within your security and compliance frameworks.
            </p>

            {/* Investor & Partner Logos - Mobile optimized grid/flex */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap items-center justify-start gap-5 sm:gap-8 text-zinc-500 font-medium text-xs tracking-wider uppercase py-1 select-none w-full xl:w-auto">
              {/* Anthropic */}
              <div className="flex items-center gap-2 hover:text-zinc-950 transition-colors shrink-0" title="Anthropic">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 shrink-0" aria-hidden="true">
                  <path d="M17.304 3.541h-3.672l6.696 16.918H24Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.005l1.369 3.553h3.744L10.536 3.541Zm-.371 10.223L8.616 7.82l2.291 5.945Z" />
                </svg>
                <span className="font-semibold tracking-wider">Anthropic</span>
              </div>

              {/* OpenAI */}
              <div className="flex items-center gap-2 hover:text-zinc-950 transition-colors shrink-0" title="OpenAI">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 shrink-0" aria-hidden="true">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                </svg>
                <span className="font-semibold tracking-wider">OpenAI</span>
              </div>

              {/* Palantir */}
              <div className="flex items-center gap-2 hover:text-zinc-950 transition-colors shrink-0" title="Palantir">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 shrink-0" aria-hidden="true">
                  <path d="M20.147 18L12 21.178 3.853 18 2.5 20.343 12 24l9.5-3.657L20.147 18zM12 0a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm0 16.078a6.568 6.568 0 1 1 0-13.136 6.568 6.568 0 0 1 0 13.136z" />
                </svg>
                <span className="font-semibold tracking-wider">Palantir</span>
              </div>

              {/* Databricks */}
              <div className="flex items-center gap-2 hover:text-zinc-950 transition-colors shrink-0" title="Databricks">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 shrink-0" aria-hidden="true">
                  <path d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52z" />
                </svg>
                <span className="font-semibold tracking-wider">Databricks</span>
              </div>

              {/* Pinecone */}
              <div className="flex items-center gap-2 hover:text-zinc-950 transition-colors shrink-0 col-span-2 sm:col-span-1" title="Pinecone">
                <svg viewBox="0 0 256 288" fill="currentColor" className="h-4.5 w-4.5 shrink-0" aria-hidden="true">
                  <path d="M108.634 254.436c9.08 0 16.44 7.361 16.44 16.442s-7.36 16.44-16.44 16.44s-16.442-7.36-16.442-16.44s7.361-16.442 16.442-16.442m91.216-29.998l16.247 4.814L203.2 272.78a8.47 8.47 0 0 1-8.7 6.046l-3.983-.273l-.098.08l-41.39-2.904l1.152-16.906l27.808 1.887l-18.205-26.262l13.926-9.656l18.229 26.295zm-176.837-30.09l16.903 1.197l-1.98 27.804L64.15 205.12l9.677 13.91l-26.248 18.248l26.792 7.895l-4.79 16.255l-43.732-12.885a8.47 8.47 0 0 1-6.058-8.726zM132.15 170.67l30.508 36.832l-13.75 11.389l-18.156-21.92l-5.886 33.702l-17.587-3.074l5.892-33.755l-24.442 14.412l-9.063-15.383l41.079-24.2a8.93 8.93 0 0 1 11.405 1.997m85.354-24.71l15.239-8.292l22.2 40.805a8.675 8.675 0 0 1-1.926 10.69l-3.141 2.714l-32.05 27.893l-11.386-13.09l21.548-18.747l-32.095-5.781l3.078-17.074l32.073 5.779zM37.782 103.298l11.48 13.008l-21.251 18.743l32.156 5.614l-2.98 17.091l-32.192-5.618l13.827 24.998l-15.18 8.398l-22.558-40.776a8.675 8.675 0 0 1 1.85-10.703zm108.694-13.42l30.404 36.734l-13.753 11.384l-18.152-21.93l-5.886 33.712l-17.587-3.074l5.872-33.624l-24.349 14.274l-9.027-15.403l37.4-21.929l.038-.142l.165.021l3.485-2.032a8.93 8.93 0 0 1 11.39 2.01m39.18-18.065l6.65-16.024l43.012 17.85a8.675 8.675 0 0 1 5.218 9.517l-.716 3.982l-7.345 41.78l-17.086-3.01l4.924-27.968l-28.537 15.772l-8.386-15.188l28.591-15.784zm-81.939-31.577l.74 17.334l-28.414 1.214l21.43 24.49l-13.056 11.424L62.95 70.173l-5.001 28l-17.078-3.054l8.184-45.759a8.674 8.674 0 0 1 8.17-7.139l4.02-.18l.09-.065zm58.121-36.965l30.267 36.965l-13.814 11.31l-17.964-21.943l-6.059 33.668l-17.57-3.162l6.068-33.743l-24.526 14.34l-9.007-15.415L150.428 1.22a8.93 8.93 0 0 1 11.41 2.052" />
                </svg>
                <span className="font-semibold tracking-wider">Pinecone</span>
              </div>
            </div>
          </div>

          {/* Section: What We Do */}
          <div className="pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-3 sm:mb-4 font-mono">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-950 leading-tight">
                Forward deployed engineering for African enterprises.
              </h2>
            </div>

            <div className="lg:col-span-5 pt-1 sm:pt-2">
              <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-normal border-l-2 border-zinc-900 pl-4 sm:pl-6">
                Africa&apos;s businesses operate across diverse realities: varied infrastructure, multiple languages, evolving regulatory environments, and fragmented data. Our Forward Deployed Engineers work alongside local teams to understand these complexities and build AI systems designed for their environments. Not adapted as an afterthought, but engineered for the ground realities from day one.
              </p>
            </div>
          </div>

          {/* Forward Deployed Engineers at Work with image background - Mobile optimized height & padding */}
          <div
            className="mt-10 sm:mt-14 relative w-full min-h-[380px] sm:min-h-[360px] lg:h-96 rounded-none overflow-hidden border border-zinc-200 shadow-xl group bg-cover bg-center"
            style={{
              backgroundImage: `image-set(url('/engineers-at-work.webp') type('image/webp'), url('/engineers-at-work.jpg') type('image/jpeg'))`,
            }}
          >
            {/* In-situ field telemetry callout (Styled with transparent glass matching the header) */}
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 rounded-none backdrop-blur-md backdrop-saturate-150 bg-white/15 border border-white/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300">
              <p className="text-sm sm:text-base md:text-lg text-white font-semibold text-left tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pr-2 sm:pr-4 max-w-2xl">
                We take on the complex, high-ambiguity challenges that conventional software cannot solve.
              </p>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 shrink-0">
                <div
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                  className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-none bg-white/20 border border-white/35 backdrop-blur-sm text-[11px] sm:text-sm font-bold uppercase tracking-wider text-white whitespace-nowrap drop-shadow-sm"
                >
                  First principles
                </div>
                <div
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                  className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-none bg-white/20 border border-white/35 backdrop-blur-sm text-[11px] sm:text-sm font-bold uppercase tracking-wider text-white whitespace-nowrap drop-shadow-sm"
                >
                  Context
                </div>
                <div
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                  className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-none bg-white/20 border border-white/35 backdrop-blur-sm text-[11px] sm:text-sm font-bold uppercase tracking-wider text-white whitespace-nowrap drop-shadow-sm"
                >
                  Scale
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "BEYOND OFF-THE-SHELF" INTERACTIVE SECTORS - 100% Original Clear Images & Crisp White Cards */}
      <section
        id="sectors"
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 border-t border-zinc-200 dark:border-white/[0.06] overflow-hidden transition-colors"
      >
        {/* Dynamic Industry Background Images with Progressive Format & On-Demand Sector Loading */}
        <div className="absolute inset-0 overflow-hidden">
          {Object.entries(SECTOR_BACKGROUNDS).map(([sectorKey, imgUrl]) => {
            const isCurrent = sectorKey === activeSectorId;
            const shouldLoad = loadedSectors.has(sectorKey);
            return (
              <div
                key={sectorKey}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-out will-change-[opacity] ${isCurrent ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                style={{
                  backgroundImage: shouldLoad
                    ? `image-set(url('/industries/${sectorKey}.webp') type('image/webp'), url('${imgUrl}') type('image/jpeg'))`
                    : undefined,
                }}
              />
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                Beyond Off-the-Shelf.
              </h2>
              <p className="text-white/90 text-xs sm:text-sm font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Mission-specific AI built for operators in
              </p>
            </div>

            <Link
              href="/industries"
              className="text-xs tracking-wider font-semibold text-white hover:text-zinc-200 transition-colors flex items-center gap-2 cursor-pointer pb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              See All Industries <span>&rarr;</span>
            </Link>
          </div>

          {/* Desktop: 6 Industries Interactive Grid (01 to 06) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {INDUSTRIES.slice(0, 6).map((ind) => {
              const isActive = ind.id === activeSectorId;
              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveSectorId(ind.id)}
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                  }}
                  className={`p-[1.5px] transition-all duration-300 cursor-pointer group ${isActive
                    ? "bg-white shadow-2xl translate-y-[-2px] sm:translate-y-[-4px]"
                    : "bg-white/80 hover:bg-white shadow-xl hover:shadow-2xl"
                    }`}
                >
                  <button
                    type="button"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                    }}
                    className={`w-full h-full text-left p-6 sm:p-8 min-h-[190px] sm:min-h-[250px] transition-colors duration-200 cursor-pointer flex flex-col justify-between backdrop-blur-md ${isActive
                      ? "bg-white text-zinc-950"
                      : "bg-white/90 group-hover:bg-white text-zinc-950"
                      }`}
                  >
                    <div>
                      <h3 className={`text-base sm:text-lg mb-2 tracking-tight text-zinc-950 transition-colors pr-6 ${isActive ? "font-semibold" : "font-medium"
                        }`}>
                        {ind.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-700">
                        {ind.description}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile: Swipeable Industry Carousel with live dynamic background sync */}
          <div
            className="md:hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Industries carousel"
          >
            {/* Top Carousel Status & Arrows */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Sector {INDUSTRIES.slice(0, 6)[activeIndustryIndex]?.num || "01"} of 06
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous industry"
                  onClick={() => scrollToIndustry(activeIndustryIndex - 1)}
                  disabled={activeIndustryIndex === 0}
                  className="w-8 h-8 rounded-full bg-black/50 border border-white/20 backdrop-blur-md flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next industry"
                  onClick={() => scrollToIndustry(activeIndustryIndex + 1)}
                  disabled={activeIndustryIndex === 5}
                  className="w-8 h-8 rounded-full bg-black/50 border border-white/20 backdrop-blur-md flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Horizontal Snap Track */}
            <div
              ref={industryCarouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-3.5 pb-4 pt-1 -mx-4 px-4 touch-pan-x"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {INDUSTRIES.slice(0, 6).map((ind, idx) => {
                const isActive = ind.id === activeSectorId;
                return (
                  <div
                    key={ind.id}
                    data-slide-index={idx}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${idx + 1} of 6: ${ind.title}`}
                    onClick={() => scrollToIndustry(idx)}
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
                    }}
                    className={`w-[85vw] max-w-[325px] flex-shrink-0 snap-center p-[1.5px] transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? "bg-white shadow-[0_16px_36px_rgba(0,0,0,0.7)] scale-[1.01]"
                        : "bg-white/70 shadow-lg opacity-85 hover:opacity-100"
                    }`}
                  >
                    <div
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
                      }}
                      className="w-full h-full text-left p-5 sm:p-6 min-h-[275px] bg-white/95 backdrop-blur-md flex flex-col justify-between"
                    >
                      <div>
                        {/* Header Badge */}
                        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-zinc-100">
                          <span className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-widest">
                            {ind.num} // {ind.id.toUpperCase()}
                          </span>
                          {ind.metrics && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-zinc-100 text-zinc-700 border border-zinc-200 truncate max-w-[160px]">
                              {ind.metrics}
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-medium tracking-tight text-zinc-950 mb-2">
                          {ind.title}
                        </h3>

                        <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                          {ind.description}
                        </p>
                      </div>

                      {/* Capabilities pills + CTA */}
                      <div className="pt-3.5 mt-2 border-t border-zinc-100 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {ind.capabilities?.slice(0, 2).map((cap, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[10px] font-mono text-zinc-500 bg-zinc-50 px-1.5 py-0.5 rounded-xs border border-zinc-200"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-zinc-900 flex items-center gap-1 shrink-0 ml-2">
                          View &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Dots Navigation & Swipe Hint */}
            <div className="flex items-center justify-between mt-2.5 px-1">
              <div className="flex items-center gap-1.5">
                {INDUSTRIES.slice(0, 6).map((ind, idx) => {
                  const isActive = idx === activeIndustryIndex;
                  return (
                    <button
                      key={ind.id}
                      type="button"
                      aria-label={`Go to industry ${idx + 1}: ${ind.title}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => scrollToIndustry(idx)}
                      className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? "w-7 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  );
                })}
              </div>

              <span className="text-[11px] font-mono text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] flex items-center gap-1">
                <span>&larr;</span> Swipe to change sector <span>&rarr;</span>
              </span>
            </div>

            {/* Visually hidden polite status for screen readers */}
            <p className="sr-only" role="status" aria-live="polite">
              Showing industry {activeIndustryIndex + 1} of 6: {INDUSTRIES[activeIndustryIndex]?.title}
            </p>
          </div>
        </div>
      </section>

      {/* 6. "OUR SOFTWARE POWERS..." STATEMENT SECTION (Pure White Background - Daigo Deploy) */}
      <section
        id="software-statement"
        style={{ backgroundColor: "#ffffff" }}
        className="relative w-full py-16 sm:py-28 md:py-40 px-4 sm:px-6 border-t border-zinc-200 bg-white text-zinc-950 transition-colors"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal tracking-[-0.035em] leading-[1.15] text-zinc-950">
            We advance the frontiers of{" "}
            <span className="text-[#8a8f98] font-normal">applied intelligence</span>
            <br className="hidden md:inline" /> through forward deployed engineering,
            <br className="hidden md:inline" /> bringing sophisticated AI capabilities to
            <br className="hidden md:inline" /> underserved markets across Africa.
          </h2>
        </div>
      </section>

      {/* 6B. "THERE IS SO MUCH LEFT TO BUILD" FIELD DEPLOYMENT SECTION */}
      <section
        id="left-to-build"
        style={{ backgroundColor: "#ffffff" }}
        className="relative w-full py-14 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-zinc-200 bg-white text-zinc-950 transition-colors"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Field Operations Photo */}
          <div className="relative overflow-hidden rounded-xs shadow-md">
            <picture>
              <source srcSet="/fde-model.webp" type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fde-model.jpg"
                alt="Forward Deployed Engineering Model"
                className="w-full h-auto object-cover block select-none"
                loading="lazy"
              />
            </picture>
          </div>

          {/* Right Column: Mission Callout (Left aligned for comfortable mobile reading) */}
          <div className="flex flex-col items-start text-left px-0 sm:px-6 lg:px-10">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-3 font-mono">
              The FDE Model
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-950 leading-tight mb-4 sm:mb-5">
              What is forward deployed engineering?
            </h2>

            <p className="text-base sm:text-xl text-zinc-900 font-normal leading-relaxed mb-3 sm:mb-4">
              How AI gets into production inside complex organisations.
            </p>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal max-w-lg">
              Instead of handing you a generic tool, our engineers join your business and work on one specific problem. We prove the value, then turn what we learn into something that scales across your organisation.
            </p>
          </div>
        </div>
      </section>

      {/* 7. "BUILT FOR ENTERPRISE AI" */}
      <section
        id="hardest-problems"
        className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-t border-zinc-200 bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `image-set(url('/built-for-enterprise.webp') type('image/webp'), url('/built-for-enterprise.jpg') type('image/jpeg'))`,
        }}
      >
        {/* Section Content */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 py-28 sm:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Headline */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.035em] text-white leading-[1.06] drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">
              Built for
              <br />
              Enterprise AI
            </h2>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-2 sm:pt-3 max-w-xl">
            <div className="border-l-2 border-white pl-6 pb-16 sm:pb-24">
              <p className="text-sm sm:text-base md:text-lg text-white font-semibold leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Our teams combine deep market and regulatory expertise with forward-deployed engineers placed directly within your operations, ensuring every system remains accurate, reliable, and effective long after deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7B. "ENGINEERING & TECHNOLOGY" BLOG SECTION */}
      <section
        id="engineering-technology"
        style={{ backgroundColor: "#ffffff" }}
        className="relative w-full py-20 sm:py-28 px-6 border-t border-zinc-200 bg-white text-zinc-950 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-4 font-mono">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal text-zinc-950 tracking-tight mb-12">
            Complete Deployment Lifecycle
          </h2>

          {/* Desktop 4 Cards Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.num}
                onMouseEnter={() => setActiveProcessCard(idx)}
                onMouseLeave={() => setActiveProcessCard(null)}
                onClick={() => setActiveProcessCard(activeProcessCard === idx ? null : idx)}
                className="group bg-zinc-100/80 text-zinc-950 border border-zinc-200 p-7 sm:p-8 flex flex-col justify-between min-h-[320px] lg:min-h-[350px] rounded-xs cursor-pointer select-none transition-all duration-300 hover:shadow-lg hover:border-zinc-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-widest">{step.num}</span>
                    <span className="text-[10px] font-mono text-zinc-600 bg-zinc-200/80 px-2 py-0.5 rounded-xs">
                      {step.phase.split("//")[1]?.trim()}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-zinc-950 tracking-tight transition-colors">
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base font-normal leading-relaxed mt-6 transform transition-all duration-300 ease-out ${
                      activeProcessCard === idx
                        ? "-translate-y-1.5 text-zinc-950 font-medium"
                        : "translate-y-0 text-zinc-700 group-hover:-translate-y-1.5 group-hover:text-zinc-950 group-hover:font-medium"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200/80 mt-6">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    Deliverable
                  </span>
                  <span className="text-xs font-semibold text-zinc-900 block truncate">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipeable Step Flow Carousel */}
          <div
            className="md:hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Our Process Deployment Lifecycle"
          >
            {/* Top Interactive Phase Tabs */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-3 mb-3 -mx-1 px-1">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = idx === activeProcessStep;
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => scrollToProcess(idx)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono tracking-wider uppercase whitespace-nowrap rounded-sm transition-all cursor-pointer ${
                      isActive
                        ? "bg-zinc-950 text-white font-semibold shadow-sm"
                        : "bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/80"
                    }`}
                  >
                    <span className="opacity-60">{step.num}</span>
                    <span>{step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Stepper Progress Bar */}
            <div className="relative w-full h-1 bg-zinc-200 rounded-full mb-4 overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-zinc-950 transition-all duration-300 ease-out"
                style={{ width: `${((activeProcessStep + 1) / PROCESS_STEPS.length) * 100}%` }}
              />
            </div>

            {/* Step Cards Horizontal Snap Track */}
            <div
              ref={processCarouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-3.5 pb-4 pt-1 -mx-4 px-4 touch-pan-x"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = idx === activeProcessStep;
                const nextStep = PROCESS_STEPS[idx + 1];
                return (
                  <div
                    key={step.num}
                    data-process-index={idx}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Step ${idx + 1} of 4: ${step.title}`}
                    className={`w-[85vw] max-w-[335px] flex-shrink-0 snap-center bg-zinc-50/95 border p-5 sm:p-6 flex flex-col justify-between min-h-[360px] rounded-xs shadow-sm transition-all duration-300 ${
                      isActive ? "border-zinc-950 shadow-md ring-1 ring-zinc-950/10" : "border-zinc-200"
                    }`}
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-zinc-200/80">
                        <span className="text-[11px] font-mono font-semibold text-zinc-950 uppercase tracking-widest">
                          STEP {step.num} OF 04
                        </span>
                        <span className="text-[10px] font-mono text-zinc-600 bg-zinc-200/80 px-2 py-0.5 rounded-xs">
                          {step.phase.split("//")[1]?.trim() || "Phase"}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-2xl font-normal text-zinc-950 tracking-tight mb-2.5">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                        {step.description}
                      </p>

                      {/* Key Deliverable Box */}
                      <div className="bg-white border border-zinc-200/80 p-3 rounded-xs mt-4 shadow-xs">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-0.5">
                          Key Deliverable
                        </span>
                        <p className="text-xs font-semibold text-zinc-950">
                          {step.deliverable}
                        </p>
                        <p className="text-[11px] text-zinc-600 mt-0.5">
                          {step.impact}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Step Advancement Action */}
                    <div className="pt-4 mt-3 border-t border-zinc-200/70">
                      {nextStep ? (
                        <button
                          type="button"
                          onClick={() => scrollToProcess(idx + 1)}
                          className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider py-2.5 px-3.5 bg-zinc-950 text-white hover:bg-black active:scale-[0.99] transition-all cursor-pointer"
                        >
                          <span>Next: {nextStep.title}</span>
                          <span>&rarr;</span>
                        </button>
                      ) : (
                        <Link
                          href="/demo"
                          className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider py-2.5 px-3.5 bg-zinc-950 text-white hover:bg-black active:scale-[0.99] transition-all cursor-pointer"
                        >
                          <span>Book A Demo</span>
                          <span>&rarr;</span>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Controls with Chevrons and Step Dots */}
            <div className="flex items-center justify-between mt-2.5 px-1">
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {PROCESS_STEPS.map((step, idx) => {
                  const isActive = idx === activeProcessStep;
                  return (
                    <button
                      key={step.num}
                      type="button"
                      aria-label={`Go to step ${idx + 1}: ${step.title}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => scrollToProcess(idx)}
                      className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                        isActive ? "w-7 bg-zinc-950" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Prev/Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous step"
                  onClick={() => scrollToProcess(activeProcessStep - 1)}
                  disabled={activeProcessStep === 0}
                  className="w-8 h-8 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next step"
                  onClick={() => scrollToProcess(activeProcessStep + 1)}
                  disabled={activeProcessStep === PROCESS_STEPS.length - 1}
                  className="w-8 h-8 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Visually hidden polite status for screen readers */}
            <p className="sr-only" role="status" aria-live="polite">
              Showing step {activeProcessStep + 1} of 4: {PROCESS_STEPS[activeProcessStep]?.title}
            </p>
          </div>

          {/* Bottom Right: Book a Demo Button */}
          <div className="flex justify-end mt-12 sm:mt-16">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center bg-transparent border border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-200 px-8 py-3 text-xs tracking-[0.25em] font-medium uppercase cursor-pointer"
            >
              BOOK A DEMO
            </Link>
          </div>
        </div>
      </section>

      {/* 7C. NEWSROOM / THOUGHT LEADERSHIP & INVESTOR RELATIONS (Before Footer) */}
      <section
        id="newsroom"
        style={{ backgroundColor: "#ffffff" }}
        className="relative w-full py-20 sm:py-28 px-6 border-t border-zinc-200 bg-white text-zinc-950 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-10 lg:gap-14 items-stretch">
            {/* Card 1: Thought Leadership */}
            <div className="group flex flex-col justify-between h-full">
              <div className="flex-1 flex flex-col">
                <div
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                  }}
                  className="relative overflow-hidden bg-zinc-100 border border-zinc-200/80 aspect-[480/254] w-full shrink-0"
                >
                  <picture>
                    <source srcSet="/thought-leadership.webp" type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/thought-leadership.jpg"
                      alt="Model Context Protocol (MCP) in Retail"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>
                </div>

                <h3 className="flex-1 text-2xl sm:text-3xl lg:text-[2rem] font-normal text-zinc-950 mt-6 mb-8 tracking-tight leading-snug">
                  Model Context Protocol (MCP) in Retail:
                  <span className="block text-base sm:text-lg text-zinc-700 font-normal mt-2.5 leading-relaxed">
                    How structured APIs and MCP influence commerce.
                  </span>
                </h3>
              </div>

              <Link
                href="/blog"
                className="mt-auto pt-6 flex items-center justify-between pb-3 border-b border-zinc-200 group-hover:border-zinc-950 transition-colors"
              >
                <span className="text-sm font-normal text-zinc-900 group-hover:text-black">
                  See More
                </span>
                <span className="text-sm text-zinc-900 group-hover:text-black group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </Link>
            </div>

            {/* Card 2: Decomposing Enterprise Workflows */}
            <div className="group flex flex-col justify-between h-full">
              <div className="flex-1 flex flex-col">
                <div
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                  }}
                  className="relative overflow-hidden bg-zinc-950 border border-zinc-200/80 aspect-[480/254] w-full shrink-0"
                >
                  <picture>
                    <source srcSet="/investor-relations.webp" type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/investor-relations.jpg"
                      alt="Decomposing Enterprise Workflows for Benchmark Design"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>
                </div>

                <h3 className="flex-1 text-2xl sm:text-3xl lg:text-[2rem] font-normal text-zinc-950 mt-6 mb-8 tracking-tight leading-snug">
                  Decomposing Enterprise Workflows for Benchmark Design.
                  <span className="block text-base sm:text-lg text-zinc-700 font-normal mt-2.5 leading-relaxed">
                    Mapping functional processes into measurable agent sub-tasks across Augmentation (assisting humans), Automation (replacing manual steps), and Innovation (unlocking new workflows).
                  </span>
                </h3>
              </div>

              <Link
                href="/blog"
                className="mt-auto pt-6 flex items-center justify-between pb-3 border-b border-zinc-200 group-hover:border-zinc-950 transition-colors"
              >
                <span className="text-sm font-normal text-zinc-900 group-hover:text-black">
                  See More
                </span>
                <span className="text-sm text-zinc-900 group-hover:text-black group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER SECTION */}
      <footer className="relative w-full bg-zinc-100 dark:bg-[#050608] border-t border-zinc-200 dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-16 border-b border-zinc-200 dark:border-white/[0.06]">
            {/* Contact Information */}
            <div className="md:col-span-5 space-y-2 text-xs font-mono tracking-wider text-zinc-800 dark:text-zinc-300">
              <div>
                <a
                  href="mailto:HELLO@DAIGODEPLOY.COM"
                  className="hover:text-black dark:hover:text-white transition-colors block font-semibold"
                >
                  HELLO@DAIGODEPLOY.COM
                </a>
              </div>
              <div className="text-zinc-600 dark:text-zinc-400">DOVER KENTON RD, DOVER, DELAWARE 19904, UNITED STATES</div>
            </div>

            {/* Navigation & Legal Links */}
            <div className="md:col-span-4 flex flex-col space-y-2 text-xs font-mono tracking-wider">
              <div className="flex flex-wrap gap-4 pb-2 border-b border-zinc-200 dark:border-white/[0.06] mb-2 font-semibold">
                <Link href="/industries" className="text-zinc-900 hover:text-black dark:text-zinc-200 dark:hover:text-white transition-colors">
                  INDUSTRIES
                </Link>
                <Link href="/blog" className="text-zinc-900 hover:text-black dark:text-zinc-200 dark:hover:text-white transition-colors">
                  BLOG
                </Link>
                <Link href="/careers" className="text-zinc-900 hover:text-black dark:text-zinc-200 dark:hover:text-white transition-colors">
                  CAREERS
                </Link>
              </div>
              <Link href="/terms" className="text-zinc-700 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                TERMS OF USE
              </Link>
              <Link href="/privacy" className="text-zinc-700 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                PRIVACY POLICY
              </Link>
              <Link href="/cookies" className="text-zinc-700 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                COOKIE POLICY
              </Link>
            </div>

            {/* Social Links (X, LinkedIn, Instagram in round frames) */}
            <div className="md:col-span-3 flex md:justify-end items-center gap-3">
              <a
                href="https://x.com/daigodeploy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-12 h-12 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:border-zinc-950 dark:hover:border-white/50 hover:text-black dark:hover:text-white transition-all hover:scale-105 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/daigo-deploy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:border-zinc-950 dark:hover:border-white/50 hover:text-black dark:hover:text-white transition-all hover:scale-105 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74V9.94H5.06v8.56z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/daigodeploy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:border-zinc-950 dark:hover:border-white/50 hover:text-black dark:hover:text-white transition-all hover:scale-105 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Giant Full-Width Typography: Official Logo Mark + "Daigo Deploy" */}
          <div className="pt-12 pb-6 flex items-center gap-4 sm:gap-10 text-zinc-950 dark:text-zinc-300">
            <DaigoIcon className="h-8 sm:h-16 md:h-20 lg:h-24 w-auto text-zinc-950 dark:text-zinc-300 shrink-0" />
            <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight select-none truncate sm:overflow-visible">
              Daigo Deploy
            </span>
          </div>

          <div className="pt-4 text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-600">
            2026 FLOWBOARD TEAM INC. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>


      {/* Floating Accessibility Widget Button (Bottom Left) */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setIsA11yOpen(!isA11yOpen)}
          className="w-10 h-10 rounded-full bg-[#185adb] hover:bg-[#1447b0] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
          title="Accessibility Preferences"
          aria-label="Accessibility settings"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
          </svg>
        </button>

        {isA11yOpen && (
          <div className="absolute bottom-12 left-0 mb-2 w-64 max-w-[calc(100vw-2rem)] bg-white dark:bg-[#0d121c] border border-zinc-200 dark:border-white/20 p-4 rounded-lg shadow-2xl text-xs space-y-3 font-mono text-zinc-900 dark:text-zinc-300">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-200 dark:border-white/10">
              <span className="font-bold text-zinc-950 dark:text-white">Accessibility</span>
              <button onClick={() => setIsA11yOpen(false)} className="text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer">&times;</button>
            </div>
            <div className="space-y-2">
              <label className="flex items-center justify-between cursor-pointer">
                <span>Theme Mode</span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/10 text-[10px] font-semibold"
                >
                  {isDark ? "DARK 🌙" : "LIGHT ☀️"}
                </button>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span>High Contrast</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span>Reduce Motion</span>
                <input type="checkbox" className="rounded" />
              </label>
            </div>
          </div>
        )}
      </div>




    </div>
  );
}
