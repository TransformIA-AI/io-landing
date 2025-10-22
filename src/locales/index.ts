import { enContent } from './en';
import { esContent } from './es';
import type { LanguageCode, LanguageContent } from '../types/language';

export const locales: Record<LanguageCode, LanguageContent> = {
  en: enContent,
  es: esContent
};

export const defaultLanguage: LanguageCode = 'es';
