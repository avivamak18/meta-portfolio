export default function Portfolio() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="mx-auto max-w-5xl px-6 py-14">
        <p className="text-sm tracking-widest text-neutral-400">META CREATIVE STRATEGIST PORTFOLIO</p>
        <h1 className="mt-3 text-4xl font-semibold">
          Anas Makouan — Hybrid AI × Reels × Messaging Strategist
        </h1>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          Systems-first creative strategist specializing in AI-powered ideation, Reels performance frameworks,
          and messaging funnel architecture across retail, e-commerce, and lifestyle consumer brands.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#identity">
            Identity Map
          </a>
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#case1">
            Case Study 1
          </a>
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#case2">
            Case Study 2
          </a>
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#case3">
            Case Study 3
          </a>
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#scripts">
            Reels Scripts
          </a>
          <a className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" href="#howiwork">
            How I Work
          </a>
        </div>
      </header>

      {/* Identity Map */}
      <section id="identity" className="mx-auto max-w-5xl px-6 py-10 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Creative Strategist Identity Map</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <Card title="Archetype" text="Hybrid (AI + Reels + Messaging)" />
          <Card title="Operating Modes" text="Signal Decoder · Systems Architect · Prototype Builder" />
          <Card title="Philosophy" text="Systems outperform isolated executions. Ideas should scale, not repeat." />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Block
            title="Strength Pillars"
            items={[
              "AI-Driven Ideation Systems",
              "Reels Creative Design (Hook → Value → CTA)",
              "Messaging Funnel Architecture",
              "Cross-Functional Alignment",
              "Behavioral Signal Interpretation",
            ]}
          />
          <Block
            title="Signature Outputs"
            items={[
              "Idea systems across formats",
              "Short-form prototypes",
              "Content journey maps",
              "Creative blocker diagnosis",
              "Narrative decks & frameworks",
            ]}
          />
        </div>
      </section>

      {/* Case Study 1 */}
      <CaseStudy
        id="case1"
        number="01"
        industry="Retail — Multi-Location Restaurant Brand"
        title="AI-Powered Reels Performance System"
        context="Increase discovery, clarify product perception, and standardize creative across locations."
        blockers={[
          "Inconsistent visuals / messaging across locations",
          "Unstructured Reels content",
          "No repeatable hook/CTA system",
        ]}
        insights={[
          "POV product sequences held attention longer",
          "Ingredient-forward visuals drove replays",
          "Comment questions exposed clarity gaps",
        ]}
        solution={[
          "3-Tier Reels System (Hooks → Value → CTA)",
          "LLM loop to generate + filter hook variants",
          "CTA modularity by location and offer",
        ]}
        prototypes={[
          "Reel: “Show Me the Crunch” — texture hook → assembly value → “Find nearest location” CTA",
          "Reel: “Ingredient Reveal” — chef-sprinkle hook → lineup value → “Order pickup” CTA",
        ]}
        learning={[
          "Faster creative production",
          "Unified visual grammar",
          "Improved 0–3s retention",
        ]}
      />

      {/* Case Study 2 */}
      <CaseStudy
        id="case2"
        number="02"
        industry="E-Commerce — DTC Brand"
        title="Messaging Funnel & Content Journey Design"
        context="Reduce confusion, map the journey, and fix add-to-cart drop-offs."
        blockers={[
          "Users unclear on value props",
          "Ad/product page misalignment",
          "Weak lower-funnel storytelling",
        ]}
        insights={[
          "Most common hesitation: “Which one should I pick?”",
          "Conversation clarity increased add-to-cart",
        ]}
        solution={[
          "4-Stage Messaging Funnel: Curiosity → Clarity → Confidence → Conversion",
          "Variant choice simplified into “first-order default path”",
        ]}
        prototypes={[
          "Message: “What’s the difference? 10-sec breakdown.”",
          "Message: “Most new customers start here.”",
        ]}
        learning={[
          "Higher journey completion",
          "Reduced decision friction",
        ]}
      />

      {/* Case Study 3 */}
      <CaseStudy
        id="case3"
        number="03"
        industry="Lifestyle Consumer Brand — Apparel"
        title="AI-Assisted Creative Scaling System"
        context="Scale output volume while preserving brand consistency."
        blockers={[
          "Ideation burnout",
          "No unified content language",
          "Hard to scale across formats",
        ]}
        insights={[
          "Try-on moments beat studio shots",
          "Comments pointed to fit/texture curiosity",
        ]}
        solution={[
          "AI content engine: Idea Generator → Format Translator → Mockup Builder",
          "System produced cross-format consistency at speed",
        ]}
        prototypes={[
          "Reel: “5-Second Fit Test” — fast try-on loop → texture close-up → “Tap for colorways” CTA",
        ]}
        learning={[
          "Removed ideation bottlenecks",
          "Reduced prep time",
        ]}
      />

      {/* Reels Scripts */}
      <section id="scripts" className="mx-auto max-w-5xl px-6 py-10 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Reels Script Pack</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Script title="Zero to Craving in 3 Seconds (Retail)" text="Tight food reveal hook → assembly value → Find nearest location CTA." />
          <Script title="What’s the Difference? (E-Comm)" text="“Confused between two options?” hook → side-by-side value → Start with popular CTA." />
          <Script title="Texture Check (Lifestyle)" text="Fabric stretch hook → movement test → Tap for colorways CTA." />
          <Script title="POV: It Fits Better Than You Expected" text="POV mirror hook → close-ups → See more fits CTA." />
          <Script title="AI-Generated Idea Loop" text="Explain AI ideation system in-Reel → prototype → More in highlights CTA." />
        </div>
      </section>

      {/* How I Work */}
      <section id="howiwork" className="mx-auto max-w-5xl px-6 py-12 border-t border-white/10">
        <h2 className="text-2xl font-semibold">How I Work</h2>
        <ul className="mt-4 space-y-3 text-neutral-300">
          <li><b>Systems over one-offs:</b> build frameworks that scale across surfaces.</li>
          <li><b>Signal-driven creative:</b> performance data dictates direction.</li>
          <li><b>Cross-functional fluency:</b> collaboration is a core function.</li>
          <li><b>Fast prototyping:</b> low-fidelity drafts unlock iteration.</li>
          <li><b>AI as infrastructure:</b> idea generation + iteration backbone.</li>
        </ul>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-500">
        Portfolio by Anas Makouan · Toronto, ON · English/French
      </footer>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-neutral-400">{title}</p>
      <p className="mt-2 text-lg">{text}</p>
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-neutral-300">
        {items.map((i) => <li key={i}>• {i}</li>)}
      </ul>
    </div>
  );
}

function CaseStudy({
  id, number, industry, title, context, blockers, insights, solution, prototypes, learning
}: any) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-10 border-t border-white/10">
      <p className="text-sm text-neutral-400">CASE STUDY {number} — {industry}</p>
      <h2 className="mt-2 text-2xl font-semibold">{title}</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold">Context</h3>
          <p className="mt-2 text-neutral-300">{context}</p>

          <h3 className="mt-5 font-semibold">Creative Blockers</h3>
          <ul className="mt-2 space-y-2 text-neutral-300">
            {blockers.map((b: string) => <li key={b}>• {b}</li>)}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold">Insights & Signals</h3>
          <ul className="mt-2 space-y-2 text-neutral-300">
            {insights.map((i: string) => <li key={i}>• {i}</li>)}
          </ul>

          <h3 className="mt-5 font-semibold">System Solution</h3>
          <ul className="mt-2 space-y-2 text-neutral-300">
            {solution.map((s: string) => <li key={s}>• {s}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold">Prototypes</h3>
        <ul className="mt-2 space-y-2 text-neutral-300">
          {prototypes.map((p: string) => <li key={p}>• {p}</li>)}
        </ul>

        <h3 className="mt-5 font-semibold">Outcome & Learning</h3>
        <ul className="mt-2 space-y-2 text-neutral-300">
          {learning.map((l: string) => <li key={l}>• {l}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Script({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-300">{text}</p>
    </div>
  );
}
