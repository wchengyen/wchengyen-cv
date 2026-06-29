import { Section } from "../components/Section";
import { Pill } from "../components/Pill";
import { useI18n } from "../hooks/useI18n";

export function PublicSharing() {
  const { data } = useI18n();
  const t = data.ui.publicSharing;
  return (
    <Section id="public-sharing" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {data.projects.map((p) => (
          <article
            key={p.name}
            className="group relative flex flex-col rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5 sm:p-6 transition-colors hover:border-slate-300 dark:hover:border-slate-700"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                {p.name}
              </h3>
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 shrink-0">
                {p.period}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {p.description}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc list-outside pl-5 marker:text-slate-400">
              {p.bullets.map((b, i) => (
                <li key={i} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline self-start"
              >
                {p.link.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3.5"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
