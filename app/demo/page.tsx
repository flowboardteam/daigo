"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import SubpageHeader, { DaigoIcon } from "../components/SubpageHeader";

export default function DemoPage() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    sector: "General Enterprise",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // Auto-focus input when sliding to a new step
  useEffect(() => {
    if (!submitted && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [step, submitted]);

  const totalSteps = 5;

  const validateCurrentStep = (): boolean => {
    setErrorMsg("");
    if (step === 0) {
      if (!formData.name.trim()) {
        setErrorMsg("Please enter your name to continue");
        return false;
      }
    } else if (step === 1) {
      if (!formData.email.trim() || !formData.email.includes("@")) {
        setErrorMsg("Please enter a valid work email address");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    setErrorMsg("");
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && step !== 4) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/demo/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit demo request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while scheduling your demo.";
      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      sector: "General Enterprise",
      phone: "",
      message: "",
    });
    setStep(0);
    setSubmitted(false);
    setErrorMsg("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 transition-colors">
      {/* 1. Header with mobile navigation drawer */}
      <SubpageHeader activePage="demo" />

      {/* Minimal Progress Bar */}
      {!submitted && (
        <div className="w-full h-1 bg-zinc-100 overflow-hidden sticky top-16 sm:top-20 z-30">
          <div
            className="h-full bg-zinc-950 transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      )}

      {/* 2. Interactive Sliding Multi-step Demo Form */}
      <main className="flex-1 flex flex-col justify-center py-10 sm:py-20 px-4 sm:px-6">
        <div className="max-w-2xl w-full mx-auto">
          {!submitted ? (
            <div>
              {/* Back button header */}
              <div className="flex items-center justify-start min-h-[28px] mb-8">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
                  >
                    <span>&larr;</span> Back
                  </button>
                )}
              </div>

              {/* Slider Viewport */}
              <div className="overflow-hidden relative w-full min-h-[340px] sm:min-h-[380px]">
                <div
                  className="flex w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: `translateX(-${step * 100}%)` }}
                >
                  {/* Step 0: Full Name */}
                  <div className="min-w-full w-full shrink-0 pr-1">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
                          What is your full name?
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-500 mt-2">
                          Please enter your first and last name.
                        </p>
                      </div>

                      <div className="pt-4">
                        <input
                          ref={step === 0 ? (inputRef as React.RefObject<HTMLInputElement>) : null}
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setErrorMsg("");
                            setFormData({ ...formData, name: e.target.value });
                          }}
                          onKeyDown={handleKeyDown}
                          placeholder="e.g. Alex Morgan"
                          className="w-full text-xl sm:text-2xl md:text-3xl font-medium border-b-2 border-zinc-200 focus:border-zinc-950 pb-3 bg-transparent outline-none transition-colors placeholder:text-zinc-300 text-zinc-950"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 1: Work Email */}
                  <div className="min-w-full w-full shrink-0 pr-1">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
                          What is your work email?
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-500 mt-2">
                          We will reach out to this address to schedule your briefing.
                        </p>
                      </div>

                      <div className="pt-4">
                        <input
                          ref={step === 1 ? (inputRef as React.RefObject<HTMLInputElement>) : null}
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setErrorMsg("");
                            setFormData({ ...formData, email: e.target.value });
                          }}
                          onKeyDown={handleKeyDown}
                          placeholder="alex@enterprise.com"
                          className="w-full text-xl sm:text-2xl md:text-3xl font-medium border-b-2 border-zinc-200 focus:border-zinc-950 pb-3 bg-transparent outline-none transition-colors placeholder:text-zinc-300 text-zinc-950"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Organization / Company */}
                  <div className="min-w-full w-full shrink-0 pr-1">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
                          What organization do you represent?
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-500 mt-2">
                          Your company name and operational title.
                        </p>
                      </div>

                      <div className="pt-4">
                        <input
                          ref={step === 2 ? (inputRef as React.RefObject<HTMLInputElement>) : null}
                          type="text"
                          value={formData.company}
                          onChange={(e) => {
                            setErrorMsg("");
                            setFormData({ ...formData, company: e.target.value });
                          }}
                          onKeyDown={handleKeyDown}
                          placeholder="e.g. Standard Bank — Head of Technology"
                          className="w-full text-xl sm:text-2xl md:text-3xl font-medium border-b-2 border-zinc-200 focus:border-zinc-950 pb-3 bg-transparent outline-none transition-colors placeholder:text-zinc-300 text-zinc-950"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Phone Number */}
                  <div className="min-w-full w-full shrink-0 pr-1">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
                          What is your phone number?
                        </h2>
                      </div>

                      <div className="pt-4">
                        <input
                          ref={step === 3 ? (inputRef as React.RefObject<HTMLInputElement>) : null}
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setErrorMsg("");
                            setFormData({ ...formData, phone: e.target.value });
                          }}
                          onKeyDown={handleKeyDown}
                          placeholder="+1 (555) 012-3456 or +234..."
                          className="w-full text-xl sm:text-2xl md:text-3xl font-medium border-b-2 border-zinc-200 focus:border-zinc-950 pb-3 bg-transparent outline-none transition-colors placeholder:text-zinc-300 text-zinc-950"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Operational Challenges */}
                  <div className="min-w-full w-full shrink-0 pr-1">
                    <div className="space-y-5">
                      <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950">
                          What operational challenges are you looking to solve?
                        </h2>
                        <p className="text-sm text-zinc-500 mt-1">
                          Share your current bottlenecks, target systems, or deployment timeline.
                        </p>
                      </div>

                      <div className="pt-2">
                        <textarea
                          ref={step === 4 ? (inputRef as React.RefObject<HTMLTextAreaElement>) : null}
                          rows={4}
                          value={formData.message}
                          onChange={(e) => {
                            setErrorMsg("");
                            setFormData({ ...formData, message: e.target.value });
                          }}
                          placeholder="Tell us about the workflows, systems, or data environments you want to address..."
                          className="w-full p-4 text-sm sm:text-base bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-950 focus:bg-white outline-none transition-colors text-zinc-950 placeholder:text-zinc-400 resize-y"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Error display */}
              {errorMsg && (
                <div className="mt-3 text-xs font-mono text-red-600">
                  {errorMsg}
                </div>
              )}

              {/* Action bar */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleNext}
                    className="inline-flex items-center gap-2.5 px-7 py-3 bg-zinc-950 text-white text-xs sm:text-sm font-medium rounded-full hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer group"
                  >
                    <span>
                      {step === totalSteps - 1
                        ? isSubmitting
                          ? "Submitting..."
                          : "Request Demo"
                        : "Continue"}
                    </span>
                    {!isSubmitting && (
                      <span className="text-xs group-hover:translate-x-0.5 transition-transform">
                        &rarr;
                      </span>
                    )}
                  </button>

                  <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400">
                    press <strong className="text-zinc-700 font-semibold">Enter ↵</strong>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Successful Submission Confirmation */
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 sm:p-12 text-center shadow-sm">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200/60">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-6">
                Demo Request Received
              </h2>

              <p className="text-sm text-zinc-600 max-w-md mx-auto mb-8">
                Our team will review your requirements and reach out to schedule your briefing.
              </p>

              <button
                onClick={handleReset}
                className="text-xs text-zinc-400 hover:text-zinc-700 underline font-mono tracking-wider transition-colors cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          )}
        </div>
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
