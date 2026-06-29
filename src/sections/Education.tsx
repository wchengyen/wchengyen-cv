import { Section } from "../components/Section";
import { useI18n } from "../hooks/useI18n";

export function Education() {
  const { data, lang } = useI18n();
  const t = data.ui.education;
  return (
    <Section id="education" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {data.education.map((ed) => (
          <div
            key={`${ed.schoolEn ?? ed.school}-${ed.period}`}
            className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              {ed.school}
            </h3>
            {ed.schoolEn && lang === "zh" && (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {ed.schoolEn}
              </p>
            )}
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
              {ed.department}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {ed.period}
            </p>
            {ed.detail && (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {ed.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
