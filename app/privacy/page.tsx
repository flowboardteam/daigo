import React from "react";
import Link from "next/link";
import SubpageHeader from "../components/SubpageHeader";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 transition-colors">
      {/* 1. Header with mobile navigation drawer */}
      <SubpageHeader activePage="legal" />

      {/* 2. Main Content */}
      <main className="flex-1 py-10 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 sm:mb-16 pb-8 border-b border-zinc-200">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-4">
              Legal & Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1] mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm font-mono text-zinc-500">
              Effective Date: November 14, 2026 &bull; Flowboard Team Inc.
            </p>
          </header>

          <div className="space-y-10 sm:space-y-12 text-zinc-800 text-base sm:text-lg leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                1. Executive Overview
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                Flowboard Team Inc. (&quot;Daigo Deploy,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates at the highest echelon of enterprise data security. We design and deliver forward-deployed artificial intelligence infrastructure for mission-critical operations. This Privacy Policy details how we collect, process, and protect information when you visit our website, schedule operational briefings, or submit candidate applications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                2. Information We Collect
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                We collect personal information only when directly and voluntarily provided by you through our official enterprise intake channels:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 text-base">
                <li>
                  <strong className="text-zinc-900 font-semibold">Demo & Briefing Requests:</strong> Full name, verified work email address, company or institutional affiliation, professional title, phone or WhatsApp number, and operational challenge descriptions.
                </li>
                <li>
                  <strong className="text-zinc-900 font-semibold">Career Applications:</strong> Full name, contact details, resume/CV links, GitHub/portfolio links, and self-reported engineering competencies.
                </li>
                <li>
                  <strong className="text-zinc-900 font-semibold">Telemetry & Technical Data:</strong> Standard server logs, IP addresses, browser agent headers, and cryptographic session states required for website security and DDOS mitigation.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                3. Strict Enterprise Data Isolation
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                Customer telemetry, operational ontologies, sensor data, and client enterprise secrets are handled under strict, isolated customer VPCs and dedicated on-premise appliances. We do NOT monetize, broker, or sell any user or corporate data to third parties. Customer data is never ingested into public foundational AI training runs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                4. International Compliance & African Data Sovereignty
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                Our infrastructure and operational practices adhere to prevailing international and regional data privacy frameworks, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 text-base">
                <li>South Africa Protection of Personal Information Act (POPIA)</li>
                <li>Nigeria Data Protection Regulation (NDPR)</li>
                <li>Kenya Data Protection Act (DPA)</li>
                <li>European Union General Data Protection Regulation (GDPR)</li>
                <li>Delaware / United States Consumer Data Privacy Standards</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                5. Security Architecture
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                We implement defense-in-depth security including TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), multi-factor authentication, and continuous automated vulnerability auditing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                6. Data Retention & Your Rights
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                You retain the right to request access to, correction of, or permanent deletion of your personal contact records at any time. Operational requests are processed within 14 business days upon verified identity confirmation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                7. Privacy Officer & Inquiries
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                For questions regarding this policy or to exercise your statutory privacy rights, please reach our Data Protection Officer:
              </p>
              <div className="p-5 bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-800 space-y-1">
                <div className="font-bold text-zinc-950">FLOWBOARD TEAM INC. / DAIGO DEPLOY</div>
                <div>ATTN: DATA PROTECTION OFFICER</div>
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
            <Link href="/privacy" className="hover:text-black font-semibold text-zinc-950">
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
