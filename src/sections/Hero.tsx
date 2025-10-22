import { useLanguage } from '../hooks/useLanguage';
import { LeadForm } from '../components/LeadForm';
import { logEvent } from '../lib/logger';

export function Hero() {
  const { content } = useLanguage();
  const { hero, navigation, leadForm } = content;

  const handleSecondary = () => {
    logEvent({ event: 'cta_secondary_clicked' });
    window.open('https://drive.google.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-io-solar-gold">
          {hero.badge}
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="text-xl text-slate-200">{hero.subtitle}</p>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-300">{hero.description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="inline-flex items-center justify-center rounded-full bg-io-ion-blue px-6 py-3 text-base font-semibold text-white shadow-lg shadow-io-ion-blue/30 transition hover:-translate-y-0.5 hover:bg-io-ion-blue/80"
            href="#lead"
            onClick={() => logEvent({ event: 'cta_primary_clicked' })}
          >
            {navigation.ctaPrimary}
          </a>
          <button
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-base font-semibold text-slate-200 transition hover:bg-white/5"
            type="button"
            onClick={handleSecondary}
          >
            {navigation.ctaSecondary}
          </button>
        </div>
      </div>
      <div id="lead" className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8 shadow-xl shadow-io-ion-blue/10">
        <div className="space-y-3 pb-6">
          <h2 className="text-2xl font-semibold text-white">{leadForm.title}</h2>
          <p className="text-sm leading-relaxed text-slate-300">{leadForm.subtitle}</p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
