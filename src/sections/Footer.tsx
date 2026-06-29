export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Weng-Hsiang Cheng. All rights reserved.</p>
        <p className="font-mono text-xs">
          Built with Vite + React + Tailwind. Deployed on GitHub Pages.
        </p>
      </div>
    </footer>
  );
}
