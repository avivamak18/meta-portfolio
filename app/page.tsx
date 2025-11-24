import StickyNav from "@/components/StickyNav";
import Section from "@/components/Section";
import CaseCard from "@/components/CaseCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <StickyNav />

      {/* HERO */}
      <header className="mx-auto max-w-5xl px-6 pt-16 pb-10">
        <p className="text-sm tracking-widest text-neutral-400">
          META CREATIVE STRATEGIST PORTFOLIO
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight">
          Anas Makouan — Hybrid AI × Reels × Messaging Strategist
        </h1>
        <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">
          Systems-first creative strategist specializing in AI-powered ideation,
          Reels performance frameworks, and messaging funnel architecture across
          retail, e-commerce, and lifestyle consumer brands.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#featured">
            Featured Work
          </a>
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#identity">
            Identity Map
          </a>
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#reels">
            Reels Scripts
          </a>
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#howiwork">
            How I Work
          </a>
        </div>
      </header>

      {/* FEATURED WORK GRID */}
      <Section id="featured" className="mx-auto max-w-5xl px-6 py-10 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Featured Work</h2>
        <p className="mt-2 text-neutral-300 max-w-3xl">
          Case studies built to show systems thinking, creative fluency across Meta surfaces,
          and AI-assisted ideation at scale.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <CaseCard
            number="01"
            title="AI-Powered Reels Performance System"
            industry="Retail — Multi-Location Restaurant Brand"
            outcome="Standardized hook → value → CTA architecture across locations; higher early retention and faster iteration."
            href="/case-studies/01-reels-system"
            tags={["Reels", "AI Ideation", "Retail"]}
          />
          <CaseCard
            number="02"
            title="Messaging Funnel & Content Journey"
            industry="E-Commerce — DTC Brand"
            outcome="Mapped hesitation signals into a 4-stage messaging funnel; reduced decision friction and improved journey completion."
            href="/case-studies/02-messaging-funnel"
            tags={["Messaging", "DTC", "Journey Design"]}
          />
          <CaseCard
            number="03"
            title="AI-Assisted Creative Scaling Engine"
            industry="Lifestyle Consumer Brand — Apparel"
            outcome="Built an idea-to-format translator system for multi-surface scaling with consistent brand grammar."
            href="/case-studies/03-scaling-engine"
            tags={["Scaling", "Apparel", "Cross-format"]}
          />
        </div>
      </Section>

      {/* IDENTITY MAP */}
      <Section id="identity" className="mx-auto max-w-5xl px-6 py-10 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Creative Strategist Identity Map</h2>

        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Archetype</p>
            <p className="mt-2 text-lg">Hybrid (AI + Reels + Messaging)</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Operating Modes</p>
            <p className="mt-2 text-lg">
              Signal Decoder · Systems Architect · Prototype Builder
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Philosophy</p>
            <p className="mt-2 text-lg">
              Systems outperform isolated executions. Ideas should scale, not repeat.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Strength Pillars</h3>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>• AI-Driven Ideation Systems</li>
              <li>• Reels Creative Design (Hook → Value → CTA)</li>
              <li>• Messaging Funnel Architecture</li>
              <li>• Cross-Functional Alignment</li>
              <li>• Behavioral Signal Interpretation</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Signature Outputs</h3>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>• Idea systems across formats</li>
              <li>• Short-form prototypes</li>
              <li>• Content journey maps</li>
              <li>• Creative blocker diagnosis</li>
              <li>• Narrative decks & frameworks</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* REELS SCRIPTS */}
      <Section id="reels" className="mx-auto max-w-5xl px-6 py-10 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Reels Script Pack</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            ["Zero to Craving in 3 Seconds (Retail)", "Tight food reveal hook → assembly value → Find nearest location CTA."],
            ["What’s the Difference? (E-Comm)", "“Confused between two options?” hook → side-by-side value → Start with popular CTA."],
            ["Texture Check (Lifestyle)", "Fabric stretch hook → movement test → Tap for colorways CTA."],
            ["POV: It Fits Better Than You Expected", "POV mirror hook → close-ups → See more fits CTA."],
            ["AI-Generated Idea Loop", "Explain AI ideation system in-Reel → prototype → More in highlights CTA."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-neutral-300">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW I WORK */}
      <Section id="howiwork" className="mx-auto max-w-5xl px-6 py-12 border-t border-white/10">
        <h2 className="text-2xl font-semibold">How I Work</h2>
        <ul className="mt-4 space-y-3 text-neutral-300">
          <li><b>Systems over one-offs:</b> build frameworks that scale across surfaces.</li>
          <li><b>Signal-driven creative:</b> performance data dictates direction.</li>
          <li><b>Cross-functional fluency:</b> collaboration is a core function.</li>
          <li><b>Fast prototyping:</b> low-fidelity drafts unlock iteration.</li>
          <li><b>AI as infrastructure:</b> idea generation + iteration backbone.</li>
        </ul>
      </Section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-500">
        Portfolio by Anas Makouan · Toronto, ON · English/French
      </footer>
    </main>
  );
}
