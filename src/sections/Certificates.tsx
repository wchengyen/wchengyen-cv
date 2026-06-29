import { Section } from "../components/Section";
import { certificates } from "../data/resume";

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="AWS" title="Certificates">
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certificates.map((c) => (
            <li
              key={c.name}
              className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 mt-1 shrink-0 text-brand-600 dark:text-brand-400"
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-sm">
                {c.name}
                {c.code && (
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    ({c.code})
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
