import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';

export function Header() {
  const { content } = useLanguage();
  const { navigation } = content;

  return (
    <header className="flex flex-col gap-6 border-b border-white/5 pb-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-5">
        <svg width="64" height="64" viewBox="0 0 100 100" aria-label="IO logomark">
          <defs>
            <radialGradient id="ioGold" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#F8E08E" />
              <stop offset="60%" stopColor="#F5C542" />
              <stop offset="100%" stopColor="#C89D2A" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="none" stroke="url(#ioGold)" strokeWidth="8" />
          <circle cx="50" cy="50" r="10" fill="#5C7CFA" />
        </svg>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">IO</h1>
          <p className="text-sm text-slate-300">Resonance AI · Decision Layer</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden items-center gap-3 text-sm text-slate-300 sm:flex">
          <span>{navigation.ctaPrimary}</span>
          <span className="text-white/30">•</span>
          <span>{navigation.ctaSecondary}</span>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
