import Section from "@/components/Section";

export default function Case03() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="mx-auto max-w-3xl px-6 pt-16 pb-8">
        <p className="text-xs tracking-widest text-neutral-400">CASE STUDY 03</p>
        <h1 className="mt-2 text-3xl font-semibold">AI-Assisted Creative Scaling System</h1>
        <p className="mt-2 text-neutral-300">Lifestyle Consumer Brand — Apparel</p>
      </header>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-2 text-neutral-300">
          Scale output volume while preserving brand consistency.
        </p>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">Creative Blockers</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• Ideation burnout</li>
          <li>• No unified content language</li>
          <li>• Hard to scale across formats</li>
        </ul>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-10 border-t border-white/10">
        <h2 className="text-xl font-semibold">System Solution</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• AI engine: Idea Generator → Format Translator → Mockup Builder</li>
          <li>• Cross-format consistency at speed</li>
        </ul>
      </Section>
    </main>
  );
}
