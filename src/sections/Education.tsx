import { Section } from "../components/Section";
import { education } from "../data/resume";

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          {education.schoolEn}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {education.school}
        </p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          {education.department}
        </p>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {education.period}
        </p>
      </div>
    </Section>
  );
}
