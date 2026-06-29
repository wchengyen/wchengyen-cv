import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useI18n } from "../hooks/useI18n";
import { availableLangs, langLabels, type Lang } from "../data";

export function Header() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, setLang, data } = useI18n();
  const t = data.ui.themeToggle;
  const tLang = data.ui.languageToggle;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = data.ui.nav;
  const navItems: { href: string; label: string }[] = [
    { href: "#about", label: nav.about },
    { href: "#experience", label: nav.experience },
    { href: "#skills", label: nav.skills },
    { href: "#certificates", label: nav.certificates },
    { href: "#education", label: nav.education },
    { href: "#public-sharing", label: nav.publicSharing },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-40 backdrop-blur transition-colors " +
        (scrolled
          ? "bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800"
          : "bg-transparent")
      }
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-100"
        >
          wchengyen<span className="text-brand-500">.cv</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <div
            role="group"
            aria-label={tLang.label}
            className="inline-flex items-center rounded-md border border-slate-200 dark:border-slate-700 overflow-hidden text-xs font-mono"
          >
            {availableLangs.map((code: Lang) => {
              const active = code === lang;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={active}
                  className={
                    "px-2 py-1 transition-colors " +
                    (active
                      ? "bg-brand-600 text-white"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800")
                  }
                >
                  {langLabels[code]}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.toLight : t.toDark}
            className="rounded-md p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
