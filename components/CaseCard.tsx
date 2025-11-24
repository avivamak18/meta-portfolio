import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CaseCard({
  number,
  title,
  industry,
  outcome,
  href,
  tags = [],
}: {
  number: string;
  title: string;
  industry: string;
  outcome: string;
  href: string;
  tags?: string[];
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <div className="flex items-start justify-between">
        <p className="text-xs tracking-widest text-neutral-400">
          CASE STUDY {number}
        </p>
        <ArrowUpRight className="h-4 w-4 text-neutral-500 transition group-hover:text-white" />
      </div>

      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-300">{industry}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-neutral-200"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
        {outcome}
      </p>

      <p className="mt-5 text-sm text-white/90 underline underline-offset-4">
        View case study →
      </p>
    </Link>
  );
}
