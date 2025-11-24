import Section from "@/components/Section";

export default function Case02() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="mx-auto max-w-3xl px-6 pt-16 pb-8">
        <p className="text-xs tracking-widest text-neutral-400">CASE STUDY 02</p>
        <h1 className="mt-2 text-3xl font-semibold">Messaging Funnel & Content Journey Design</h1>
        <p className="mt-2 text-neutral-300">E-Commerce — DTC Brand</p>
      </header>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-2 text-neutral-300">
          Reduce confusion, map the journey, and fix add-to-cart drop-offs.
        </p>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">Creative Blockers</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• Users unclear on value props</li>
          <li>• Ad/product page misalignment</li>
          <li>• Weak lower-funnel storytelling</li>
        </ul>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-6 border-t border-white/10">
        <h2 className="text-xl font-semibold">Signals & Insights</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• Most common hesitation: “Which one should I pick?”</li>
          <li>• Conversation clarity increased add-to-cart</li>
        </ul>
      </Section>

      <Section className="mx-auto max-w-3xl px-6 py-10 border-t border-white/10">
        <h2 className="text-xl font-semibold">System Solution</h2>
        <ul className="mt-2 space-y-2 text-neutral-300">
          <li>• 4-Stage Funnel: Curiosity → Clarity → Confidence → Conversion</li>
          <li>• Default first-order path to reduce choice friction</li>
        </ul>
      </Section>
    </main>
  );
}
