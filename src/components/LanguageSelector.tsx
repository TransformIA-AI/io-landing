import type { LanguageCode } from '../lib/content';

interface LanguageSelectorProps {
  readonly value: LanguageCode;
  readonly onChange: (language: LanguageCode) => void;
}

const LABELS: Record<LanguageCode, string> = {
  es: 'ES',
  en: 'EN'
};

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 shadow-highlight">
      {Object.entries(LABELS).map(([code, label]) => {
        const languageCode = code as LanguageCode;
        const isActive = value === languageCode;
        return (
          <button
            key={languageCode}
            type="button"
            onClick={() => onChange(languageCode)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              isActive ? 'bg-io-blue text-white shadow-highlight' : 'text-slate-300 hover:text-white'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
