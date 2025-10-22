import { useLanguage } from '../hooks/useLanguage';

export function Features() {
  const { content } = useLanguage();

  return (
    <section className="mt-24">
      <div className="grid gap-8 lg:grid-cols-3">
        {content.features.map((feature) => (
          <div key={feature.id} className="rounded-3xl border border-white/10 bg-[#101621] p-8 shadow-lg shadow-black/20">
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
