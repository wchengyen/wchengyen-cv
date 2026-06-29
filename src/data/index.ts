/**
 * Aggregates all language data and exports a typed map.
 * Add a new language by:
 *   1. creating `resume.<code>.ts` exporting a `ResumeData`
 *   2. importing it below and adding to the `byLang` map
 */

import type { Lang, ResumeData } from "./types";
import { en } from "./resume.en";
import { zh } from "./resume.zh";

export const byLang: Record<Lang, ResumeData> = { en, zh };

export const availableLangs: Lang[] = ["en", "zh"];

/** Human-readable label for each language, used in the switcher. */
export const langLabels: Record<Lang, string> = {
  en: "EN",
  zh: "中",
};

export type { Lang, ResumeData };
export * from "./types";
