import { Section } from "../components/Section";
import { profile } from "../data/resume";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
        <div className="md:col-span-3 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>{profile.summary}</p>
          <p>
            Most recently at <strong>NWCD (AWS China Region)</strong>, I've spent 6+
            years as the trusted advisor for enterprise customers across Internet,
            Gaming, Healthcare, SaaS, and Education — driving 36% YoY customer
            growth on the Enterprise On-Ramp Program, leading large-scale cloud
            migrations that cut cost by 30%+, and standing up an AIOps platform that
            reduces MTTR by 40%+.
          </p>
          <p>
            Before that, I was a TAM at <strong>Thomson Reuters</strong> covering
            ICBC, Minsheng Bank, and PSBC, and a Senior IT Specialist at{" "}
            <strong>IBM</strong> delivering core-banking transformations across
            APAC.
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
                  10+ years
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">Current</dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  NWCD (AWS China)
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">Focus</dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  TAM · AIOps · GenAI
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">AWS certs</dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  7 (6 specialties)
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">Languages</dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  中文 · English
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </Section>
  );
}
