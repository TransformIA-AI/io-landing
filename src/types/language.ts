export type LanguageCode = 'es' | 'en';

export interface LanguageContent {
  meta: {
    locale: LanguageCode;
    label: string;
  };
  navigation: {
    ctaPrimary: string;
    ctaSecondary: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  features: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  stack: {
    title: string;
    layers: Array<{
      id: string;
      title: string;
      bullets: string[];
    }>;
  };
  useCases: {
    title: string;
    cards: Array<{
      id: string;
      title: string;
      bullets: string[];
    }>;
  };
  speech: {
    title: string;
    description: string;
  };
  brand: {
    palette: {
      title: string;
      swatches: Array<{ name: string; hex: string }>;
    };
    logo: {
      title: string;
      hint: string;
    };
    typography: {
      title: string;
      headline: string;
      body: string;
    };
  };
  footer: {
    privacy: string;
    copyright: string;
  };
  leadForm: {
    title: string;
    subtitle: string;
    emailLabel: string;
    submit: string;
    terms: string;
    success: string;
    error: string;
  };
}
