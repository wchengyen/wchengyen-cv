import { profile } from "../data/resume";
import { Pill } from "../components/Pill";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-transparent to-transparent dark:from-brand-900/20"
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-mono text-sm text-brand-600 dark:text-brand-400">
          Hi, my name is
        </p>
        <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {profile.name}.
        </h1>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-500 dark:text-slate-400">
          {profile.title}.
        </h2>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 text-sm font-medium transition-colors"
          >
            Get in touch
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
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors"
          >
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M12 .5C5.7.5.6 5.6.6 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.4 5.6 18.3.5 12 .5z" />
            </svg>
          </a>
        </div>

        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Based in
            </dt>
            <dd className="mt-1 text-slate-800 dark:text-slate-200">
              {profile.location}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Email
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${profile.email}`}
                className="text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Focus
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              <Pill>Backend</Pill>
              <Pill>Distributed Systems</Pill>
              <Pill>LLM Apps</Pill>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
