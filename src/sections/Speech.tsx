import { useLanguage } from '../hooks/useLanguage';

export function Speech() {
  const { content } = useLanguage();
  const { speech } = content;

  return (
    <section className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-transparent to-white/5 p-10">
      <h2 className="text-3xl font-semibold text-white">{speech.title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-200">{speech.description}</p>
    </section>
  );
}
