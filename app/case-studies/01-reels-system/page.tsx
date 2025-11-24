import Section from "@/components/Section";

export default function Case01() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="mx-auto max-w-3xl px-6 pt-16 pb-8">
        <p className="text-xs tracking-widest text-neutral-400">CASE STUDY 01</p>
        <h1 className="mt-2 text-3xl font-semibold">AI-Powered Reels Performance System</h1>
        <p className="mt-2 text-neutral-300">Retail — Multi-Location Restaurant Brand</p>
      </header>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-2 text-neutral-300">
          Increase discovery, clarify product perception, and standardize creative across locations.
        </p>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">Creative Blockers</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• Inconsistent visuals / messaging across locations</li>
          <li>• Unstructured Reels content</li>
          <li>• No repeatable hook/CTA system</li>
        </ul>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">Signals & Insights</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• POV product sequences held attention longer</li>
          <li>• Ingredient-forward visuals drove replays</li>
          <li>• Comment questions exposed clarity gaps</li>
        </ul>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">System Solution</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• 3-Tier Reels System (Hooks → Value → CTA)</li>
          <li>• LLM loop to generate + filter hook variants</li>
          <li>• CTA modularity by location and offer</li>
        </ul>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">Prototypes</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• “Show Me the Crunch” — texture hook → assembly value → location CTA</li>
          <li>• “Ingredient Reveal” — chef-sprinkle hook → lineup value → pickup CTA</li>
        </ul>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-10 border-t border-white/10">
        <h2 className="text-xl font-semibold">Outcome & Learning</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• Faster creative production</li>
          <li>• Unified visual grammar</li>
          <li>• Improved 0–3s retention</li>
        </ul>
      </Section>
    </main>
  );
}
