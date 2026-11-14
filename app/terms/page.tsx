import React from "react";
import Link from "next/link";
import SubpageHeader from "../components/SubpageHeader";

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="text-sm font-mono text-zinc-500">
              Effective Date: November 14, 2026 &bull; Flowboard Team Inc.
            </p>
          </header>

          <div className="space-y-10 sm:space-y-12 text-zinc-800 text-base sm:text-lg leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                These Terms of Use (&quot;Terms&quot;) govern your access to and use of the website, software, applications, and forward-deployed engineering services provided by Flowboard Team Inc., operating as Daigo Deploy (&quot;Daigo Deploy,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our website or engaging with our operational briefings, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                2. Enterprise Engagements & Scope of Work
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                All production deployments, forward-deployed engineering embedding, proprietary model evaluations, and enterprise ontology integrations are governed by dedicated Master Services Agreements (MSAs), Statements of Work (SOWs), and Service Level Agreements (SLAs) executed directly between Daigo Deploy and enterprise clients. Nothing on this website constitutes a binding offer of service or warranty of specific operational performance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                3. Intellectual Property & Customer Data Sovereignty
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                Daigo Deploy respects enterprise data sovereignty. Customer proprietary telemetry, SCADA signals, financial ledgers, and operational ontologies remain the exclusive intellectual property of the enterprise. Under no circumstances does Daigo Deploy use customer confidential operational data to train public foundation models or cross-client reasoning agents without explicit written authorization.
              </p>
              <p className="text-zinc-600 leading-relaxed text-base">
                All software frameworks, agent orchestration protocols, algorithms, visual assets, trademarks, and documentation published on this website are the proprietary property of Flowboard Team Inc. and protected by international intellectual property laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                4. Confidentiality & Security
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                Enterprise briefings, technical demos, and architectural roadmaps shared through our intake channels are subject to mutual confidentiality standards. We implement defense-grade data protection, strict tenant isolation, and cryptographic verification across all digital communications and intake infrastructure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                5. Limitation of Liability
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                To the maximum extent permitted by applicable law, Flowboard Team Inc. and its directors, employees, and forward-deployed engineers shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your access to or inability to access this website or reliance on information presented herein.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                6. Governing Law & Jurisdiction
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles. Any legal disputes arising out of these Terms shall be resolved in the state or federal courts located in the State of Delaware.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                7. Contact Information
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base">
                For questions regarding these Terms of Use, please contact our legal and compliance group:
              </p>
              <div className="p-5 bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-800 space-y-1">
                <div className="font-bold text-zinc-950">FLOWBOARD TEAM INC. / DAIGO DEPLOY</div>
                <div>ATTN: LEGAL & COMPLIANCE</div>
                <div>EMAIL: LEGAL@DAIGODEPLOY.COM</div>
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
            <Link href="/terms" className="hover:text-black font-semibold text-zinc-950">
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
