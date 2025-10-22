 transformia/convert-react-code-to-modern-landing-page/2025-10-22-00-22-49
import { useMemo, useState } from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { contentByLanguage, type LanguageCode } from './lib/content';

const gradientStroke = (
  <svg
    className="h-12 w-12"
    viewBox="0 0 100 100"
    role="img"
    aria-label="IO logomark"
  >
    <title>IO Logomark</title>
    <defs>
      <radialGradient id="ioGold" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#F8E08E" />
        <stop offset="60%" stopColor="#F5C542" />
        <stop offset="100%" stopColor="#C89D2A" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="none" stroke="url(#ioGold)" strokeWidth="8" />
    <circle cx="50" cy="50" r="8" fill="#F8E08E" />
  </svg>
);

function SectionCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {items.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-io-blue" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
=======
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Stack } from './sections/Stack';
import { UseCases } from './sections/UseCases';
import { Speech } from './sections/Speech';
import { Brand } from './sections/Brand';
import { LanguageProvider } from './hooks/useLanguage';

function AppContent() {
  return (
    <div className="min-h-screen bg-io-deep-space px-6 pb-20 pt-10 text-white sm:px-10 lg:px-24">
      <Header />
      <Hero />
      <Features />
      <Stack />
      <Speech />
      <UseCases />
      <Brand />
      <Footer />
 main
    </div>
  );
}

export default function App() {
 transformia/convert-react-code-to-modern-landing-page/2025-10-22-00-22-49
  const [language, setLanguage] = useState<LanguageCode>('es');
  const content = useMemo(() => contentByLanguage[language], [language]);

  return (
    <div className="min-h-screen bg-io-space text-white">
      <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-8 pt-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {gradientStroke}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">IO</p>
              <h1 className="text-3xl font-semibold text-white">Resonance AI</h1>
            </div>
          </div>
          <span className="hidden h-10 w-px bg-gradient-to-b from-white/0 via-white/30 to-white/0 lg:block" aria-hidden />
          <p className="max-w-xs text-sm text-slate-300">{content.meta.tagline}</p>
        </div>
        <div className="flex items-center justify-between gap-4 lg:flex-row">
          <div className="text-right text-xs text-slate-400">
            <p>{content.meta.draftInfo}</p>
            <p className="text-slate-500">{content.meta.update}</p>
          </div>
          <LanguageSelector value={language} onChange={setLanguage} />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-16">
        <section className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-io-blue">{content.hero.eyebrow}</p>
              <h2 className="text-4xl font-semibold md:text-5xl">{content.hero.title}</h2>
              <p className="text-lg text-slate-200 md:text-xl">{content.hero.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#cta-form"
                className="inline-flex items-center gap-2 rounded-full bg-io-blue px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-highlight transition hover:bg-indigo-500"
              >
                {content.callToAction.buttonLabel}
                <span aria-hidden>→</span>
              </a>
              <span className="text-sm text-slate-400">{content.meta.tagline}</span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {content.hero.highlights.map((highlight) => (
                <div key={highlight} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-200">{highlight}</p>
                </div>
              ))}
            </div>
            <div id="cta-form" className="rounded-3xl border border-io-blue/30 bg-io-blue/10 p-8 shadow-highlight">
              <h3 className="text-2xl font-semibold text-white">{content.callToAction.headline}</h3>
              <p className="mt-2 text-sm text-slate-200">{content.callToAction.subheadline}</p>
              <LeadCaptureForm copy={content.callToAction.form} />
              <p className="pt-4 text-xs text-slate-400">{content.callToAction.disclaimer}</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 backdrop-blur">
            <div>
              <h3 className="text-lg font-semibold text-white">Paleta cromática</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {content.brand.palette.map((color) => (
                  <div key={color.hex} className="overflow-hidden rounded-2xl border border-white/10">
                    <div className="h-16" style={{ backgroundColor: color.hex }} />
                    <div className="px-2 py-3 text-center text-xs text-slate-200">
                      <p>{color.name}</p>
                      <p className="font-tech text-[10px] text-slate-400">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Logotipo</h3>
              <p className="mt-2 text-sm text-slate-300">{content.brand.logotypeNote}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Tipografías</h3>
              <p className="mt-2 text-sm text-slate-200">{content.brand.typography}</p>
              <p className="text-sm text-slate-400">{content.brand.typographySecondary}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{content.speech.title}</h2>
            <p className="text-base leading-relaxed text-slate-200">{content.speech.body}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-sm uppercase tracking-[0.3em] text-io-blue">IO stack</h3>
            <div className="mt-4 grid gap-4">
              {content.stack.map((pillar) => (
                <SectionCard key={pillar.title} title={pillar.title} items={pillar.bullets} />
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {content.useCases.map((useCase) => (
            <SectionCard key={useCase.title} title={useCase.title} items={useCase.bullets} />
          ))}
          <SectionCard title={content.technologies.title} items={content.technologies.bullets} />
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{content.footer}</p>
          <div className="text-xs text-slate-500">
            <p>
              Política de privacidad ·{' '}
              <a href="https://example.com/privacy" className="text-io-blue underline-offset-4 hover:underline">
                Privacidad y biometría
              </a>
            </p>
            <p>Infraestructura operada bajo estándares SOC2 y GDPR-ready.</p>
          </div>
        </div>
      </footer>
    </div>
=======
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
 main
  );
}
