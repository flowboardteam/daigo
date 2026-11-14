import React from "react";
import Link from "next/link";
import SubpageHeader, { DaigoIcon } from "../components/SubpageHeader";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 transition-colors">
      {/* 1. Header with mobile navigation drawer */}
      <SubpageHeader activePage="documentation" />

      {/* 2. Documentation Hero & Content */}
      <main className="flex-1 py-10 sm:py-24 px-4 sm:px-6">
        <article className="max-w-3xl mx-auto">
          {/* Title Header */}
          <header className="mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1] mb-5">
              The Forward Deployed Engineer (FDE) Model
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed">
              How embedded engineering bridges frontier artificial intelligence with real-world enterprise operations.
            </p>
          </header>

          {/* Hero Feature Image */}
          <div
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
            }}
            className="relative overflow-hidden aspect-[16/9] w-full border border-zinc-200 bg-zinc-100 mb-12 sm:mb-16"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/documentation.jpg"
              alt="The Forward Deployed Engineer (FDE) Model"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Documentation Body */}
          <div className="space-y-12 sm:space-y-14 text-zinc-800 leading-relaxed font-normal">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                1. Overview: The Reality of Heavy Enterprise
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                Traditional enterprise software assumes clean data, pristine cloud infrastructure, homogeneous APIs, and predictable operating environments. In reality, core economic infrastructure—energy transmission grids, mining corridors, maritime logistics, and industrial supply chains—operates under vastly different ground truths: fragmented telemetry, bespoke legacy SCADA machinery, intermittent connectivity, and mission-critical physical stakes.
              </p>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                Software cannot be engineered in an ivory tower. The Forward Deployed Engineer (FDE) model is Daigo Deploy&apos;s operating blueprint for delivering production intelligence where off-the-shelf SaaS fails.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                2. What Is a Forward Deployed Engineer (FDE)?
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                At Daigo Deploy, an FDE is not a support consultant, an integration vendor, or a pre-sales solutions architect. FDEs are elite full-stack systems builders, ontology architects, and infrastructure engineers who embed directly on customer premises—at mining pits, logistics hubs, trading desks, and national grid dispatch centers.
              </p>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                They work shoulder-to-shoulder with operational directors and line operators to diagnose real friction, design custom agent workflows, and deploy hardened production software in days, not quarters.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                3. Core Operating Principles
              </h2>

              <div className="space-y-4 border-l-2 border-zinc-200 pl-6">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1">
                    Zero Intermediaries (Field Immersion)
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    There are no ticket queues, product management abstraction layers, or third-party implementation consultancies. FDEs observe ground-truth operations firsthand, discovering edge cases that never appear in formal requirements documents.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1">
                    Extreme Agency & Full-Stack Ownership
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    FDEs own the entire delivery continuum—from physical telemetry capture and local sensor calibration to Daigo Deploy ontology integration, model fine-tuning, and executive decision cockpits.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1">
                    Deterministic Guardrails Over Speculative Generation
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Enterprise operations require mathematical certainty. FDEs construct deterministic verification gates, confidence scoring thresholds, and structured rollback routines around probabilistic models.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1">
                    Offline-First Edge Autonomy
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    FDEs deploy ruggedized edge compute appliances directly into operational substations, ensuring local AI decision loops function with zero millisecond latency even when regional satellite or fiber links drop.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                4. The Engagement Lifecycle
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="border border-zinc-200 p-5 rounded-lg bg-zinc-50/50">
                  <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">PHASE 01</span>
                  <h4 className="font-bold text-zinc-950 text-sm mb-2">Decomposition & Telemetry Audit</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Embed on-site (Weeks 1-2) to audit SCADA protocols, legacy ERPs, and operator routines, establishing baseline ground truth.
                  </p>
                </div>

                <div className="border border-zinc-200 p-5 rounded-lg bg-zinc-50/50">
                  <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">PHASE 02</span>
                  <h4 className="font-bold text-zinc-950 text-sm mb-2">Ontology & Sub-tasks</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Unify disparate asset schemas into dynamic operational graphs and deploy targeted agent sub-tasks across Augmentation and Automation (Weeks 3-5).
                  </p>
                </div>

                <div className="border border-zinc-200 p-5 rounded-lg bg-zinc-50/50">
                  <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">PHASE 03</span>
                  <h4 className="font-bold text-zinc-950 text-sm mb-2">Production Hardening</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Transition verified agent recommendations into real-time operational execution, measuring business outcomes against continental benchmarks.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4 pt-4 border-t border-zinc-100">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                5. Continental Impact & Compounding Intelligence
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                By placing the best technical minds directly on the front lines of mission-critical industries, the FDE model compresses the feedback loop between frontier model innovation and physical execution.
              </p>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                The result is production software that solves genuine operational bottlenecks, hardens industrial infrastructure, and compounds in value with every single hour of deployment.
              </p>
            </section>
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
