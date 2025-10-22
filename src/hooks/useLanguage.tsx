import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { locales, defaultLanguage } from '../locales';
import type { LanguageCode, LanguageContent } from '../types/language';

interface LanguageContextValue {
  language: LanguageCode;
  content: LanguageContent;
  setLanguage: (code: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage);

  const setLanguage = useCallback((code: LanguageCode) => {
    setLanguageState(code);
    document.documentElement.lang = code;
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, content: locales[language], setLanguage }),
    [language, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
