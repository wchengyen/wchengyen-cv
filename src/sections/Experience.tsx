import { Section } from "../components/Section";
import { Pill } from "../components/Pill";
import { useI18n } from "../hooks/useI18n";
import type { Experience as ExperienceT } from "../data/types";

function formatPeriod(start: string, end: string, lang: "en" | "zh") {
  const fmt = (m: string) => {
    if (m === "Present") return lang === "zh" ? "至今" : "Present";
    if (/^\d{4}$/.test(m)) return m;
    const [y, mm] = m.split("-");
    const date = new Date(Number(y), Number(mm) - 1, 1);
    if (lang === "zh") {
      return `${y} 年 ${Number(mm)} 月`;
    }
    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
  };
  return `${fmt(start)} — ${fmt(end)}`;
}

function JobItem({ job }: { job: ExperienceT }) {
  const { lang } = useI18n();
  return (
    <li className="relative">
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
        {formatPeriod(job.start, job.end, lang)} · {job.location}
      </p>
      {job.description && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 italic">
          {job.description}
        </p>
      )}
      <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300 list-disc list-outside pl-5 marker:text-slate-400">
        {job.bullets.map((b, i) => (
          <li key={i} className="leading-relaxed">
            {b}
          </li>
        ))}
      </ul>
      {job.subsections?.map((sub) => (
        <div key={sub.title} className="mt-5">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {sub.title}
          </h4>
          <ul className="mt-2 space-y-2 text-slate-700 dark:text-slate-300 list-disc list-outside pl-5 marker:text-slate-400">
            {sub.bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {job.tags && job.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {job.tags.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      )}
    </li>
  );
}

export function Experience() {
  const { data } = useI18n();
  const t = data.ui.experience;
  return (
    <Section id="experience" eyebrow={t.eyebrow} title={t.title}>
      <ol className="relative space-y-10 border-l border-slate-200 dark:border-slate-800 pl-6 sm:pl-8 ml-2 sm:ml-3">
        {data.experiences.map((job) => (
          <JobItem
            key={`${job.company}-${job.start}-${job.end}`}
            job={job}
          />
        ))}
      </ol>
    </Section>
  );
}
