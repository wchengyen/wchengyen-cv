import { Section } from "../components/Section";
import { profile } from "../data/resume";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
        <div className="md:col-span-3 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>{profile.summary}</p>
          <p>
            Most recently at <strong>Advantech</strong>, I focus on production-grade
            LLM applications: agentic RAG over enterprise data, prompt and function
            orchestration, and reliable backend plumbing. Before that I spent three
            years at <strong>ShopBack</strong> refactoring a high-traffic cashback
            platform into modular services.
          </p>
          <p>
            I care about measurable outcomes — latency budgets, error budgets, cost
            ceilings — and I write code that other engineers can read at 2 a.m.
          </p>
        </div>
        <aside className="md:col-span-2">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              At a glance
            </h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">Experience</dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  7+ years
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">Current</dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  Advantech
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">Domain</dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  Backend / Platform
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">Languages</dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  中文 · EN · 日本語
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </Section>
  );
}
