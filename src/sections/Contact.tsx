import { Section } from "../components/Section";
import { useI18n } from "../hooks/useI18n";

export function Contact() {
  const { data } = useI18n();
  const { profile } = data;
  const t = data.ui.contact;
  return (
    <Section id="contact" eyebrow={t.eyebrow} title={t.title}>
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-6 sm:p-8">
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
          {t.blurb}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-medium text-brand-600 dark:text-brand-400 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M12 .5C5.7.5.6 5.6.6 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.4 5.6 18.3.5 12 .5z" />
            </svg>
            github.com/wchengyen
          </a>
        </div>
      </div>
    </Section>
  );
}
