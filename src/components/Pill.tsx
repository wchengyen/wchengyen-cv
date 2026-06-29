export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-800/60 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:text-slate-300">
      {children}
    </span>
  );
}
