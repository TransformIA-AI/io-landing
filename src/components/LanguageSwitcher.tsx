import { ChangeEvent } from 'react';
import { locales } from '../locales';
import type { LanguageCode } from '../types/language';
import { useLanguage } from '../hooks/useLanguage';

const languageOptions = Object.values(locales).map((locale) => ({
  id: locale.meta.locale,
  label: locale.meta.label
}));

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as LanguageCode);
  };

  return (
    <label className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-slate-300">
      <span className="sr-only">Seleccionar idioma</span>
      <select
        aria-label="Language selector"
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white focus:border-io-ion-blue focus:outline-none focus:ring-2 focus:ring-io-ion-blue/60"
        onChange={handleChange}
        value={language}
      >
        {languageOptions.map((option) => (
          <option className="bg-[#101621] text-slate-900" key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
