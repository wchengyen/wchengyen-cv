import { Section } from "../components/Section";
import { Pill } from "../components/Pill";
import { experiences } from "../data/resume";

function formatPeriod(start: string, end: string) {
  const fmt = (m: string) => {
    if (m === "Present") return "Present";
    const [y, mm] = m.split("-");
    const date = new Date(Number(y), Number(mm) - 1, 1);
    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
  };
  return `${fmt(start)} — ${fmt(end)}`;
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      <ol className="relative space-y-10 border-l border-slate-200 dark:border-slate-800 pl-6 sm:pl-8 ml-2 sm:ml-3">
        {experiences.map((job) => (
          <li key={`${job.company}-${job.start}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 size-3 rounded-full bg-brand-500 ring-4 ring-white dark:ring-slate-950"
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                {job.role}
              </h3>
              <span className="text-brand-600 dark:text-brand-400 font-medium">
                @ {job.company}
              </span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {formatPeriod(job.start, job.end)} · {job.location}
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300 list-disc list-outside pl-5 marker:text-slate-400">
              {job.bullets.map((b, i) => (
                <li key={i} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.stack.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
