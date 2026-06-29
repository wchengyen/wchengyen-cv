import type { ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="mb-8 sm:mb-12">
          {eyebrow && (
            <p className="text-sm font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
