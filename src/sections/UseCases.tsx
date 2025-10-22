import { useLanguage } from '../hooks/useLanguage';

export function UseCases() {
  const { content } = useLanguage();
  const { useCases } = content;

  return (
    <section className="mt-24 space-y-10">
      <h2 className="text-3xl font-semibold text-white">{useCases.title}</h2>
      <div className="grid gap-8 lg:grid-cols-3">
        {useCases.cards.map((card) => (
          <div key={card.id} className="rounded-3xl border border-white/10 bg-[#101621] p-8">
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-io-solar-gold"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
