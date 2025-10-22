import { useLanguage } from '../hooks/useLanguage';

export function Stack() {
  const { content } = useLanguage();
  const { stack } = content;

  return (
    <section className="mt-24 space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-white">{stack.title}</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {stack.layers.map((layer) => (
          <div key={layer.id} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
            <h3 className="text-xl font-semibold text-io-solar-gold">{layer.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {layer.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-io-ion-blue"></span>
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
