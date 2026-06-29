import { useI18n } from "../hooks/useI18n";

export function Footer() {
  const { data } = useI18n();
  const t = data.ui.footer;
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {data.profile.name}. {t.copyright}
        </p>
        <p className="font-mono text-xs">{t.builtWith}</p>
      </div>
    </footer>
  );
}
