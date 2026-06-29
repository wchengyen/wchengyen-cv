import { Section } from "../components/Section";
import { Pill } from "../components/Pill";
import { skillGroups, languages } from "../data/resume";

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I do" title="Skills & Focus">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-md rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5">
        <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Languages
        </h3>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
          {languages.map((l) => (
            <li key={l.name} className="flex items-baseline justify-between">
              <span>{l.name}</span>
              <span className="text-slate-500 dark:text-slate-400 font-mono text-xs">
                {l.level}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
