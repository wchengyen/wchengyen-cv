import { Section } from "../components/Section";
import { useI18n } from "../hooks/useI18n";

export function About() {
  const { data, lang } = useI18n();
  const { profile } = data;
  const t = data.ui.about;

  return (
    <Section id="about" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
        <div className="md:col-span-3 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>{profile.summary}</p>
          {lang === "en" ? (
            <p>
              Most recently at <strong>NWCD (AWS China Region)</strong>, I've
              spent 6+ years as the trusted advisor for enterprise customers
              across Internet, Gaming, Healthcare, SaaS, and Education —
              driving 36% YoY customer growth on the Enterprise On-Ramp Program,
              leading large-scale cloud migrations that cut cost by 30%+, and
              standing up an AIOps platform that reduces MTTR by 40%+.
            </p>
          ) : (
            <p>
              目前任職於 <strong>NWCD (AWS 中國區)</strong>
              ,擔任企業客戶的策略顧問已有 6 年以上,橫跨網路、遊戲、醫療、SaaS
              及教育等產業。領銜 Enterprise On-Ramp Program 達到 36%
              年增客戶成長,主導多個大規模雲端遷移專案 (成本下降 30%+),並建置
              AIOps 平台將 MTTR 降低 40%+。
            </p>
          )}
          {lang === "en" ? (
            <p>
              Before that, I was a TAM at <strong>Thomson Reuters</strong>{" "}
              covering ICBC, Minsheng Bank, and PSBC, and a Senior IT
              Specialist at <strong>IBM</strong> delivering core-banking
              transformations across APAC.
            </p>
          ) : (
            <p>
              之前曾在 <strong>湯森路透 (Thomson Reuters)</strong>{" "}
              擔任 TAM,負責 ICBC、民生銀行及 PSBC 等客戶;更早於{" "}
              <strong>IBM</strong> 擔任資深 IT 專家,在亞太區執行多項核心銀行轉型專案。
            </p>
          )}
        </div>
        <aside className="md:col-span-2">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t.atAGlance}
            </h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">
                  {t.glanceExperience}
                </dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  {lang === "en" ? "10+ years" : "10+ 年"}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">
                  {t.glanceCurrent}
                </dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  {lang === "en" ? "NWCD (AWS China)" : "NWCD (AWS 中國區)"}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">
                  {t.glanceFocus}
                </dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  TAM · AIOps · GenAI
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">
                  {t.glanceCerts}
                </dt>
                <dd className="font-medium text-slate-800 dark:text-slate-200">
                  {lang === "en" ? "7 (6 specialties)" : "7 張 (6 個 Specialty)"}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-600 dark:text-slate-400">
                  {t.glanceLanguages}
                </dt>
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
