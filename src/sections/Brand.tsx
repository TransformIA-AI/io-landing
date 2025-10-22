import { useLanguage } from '../hooks/useLanguage';

export function Brand() {
  const { content } = useLanguage();
  const { brand } = content;

  return (
    <section className="mt-24 space-y-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-[#101621] p-8">
          <h3 className="text-xl font-semibold text-white">{brand.palette.title}</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {brand.palette.swatches.map((swatch) => (
              <div key={swatch.hex} className="overflow-hidden rounded-2xl border border-white/10">
                <div className="h-20" style={{ backgroundColor: swatch.hex }} />
                <div className="px-4 py-3 text-xs uppercase tracking-wide text-slate-300">
                  <p>{swatch.name}</p>
                  <p className="font-mono">{swatch.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#101621] p-8">
          <h3 className="text-xl font-semibold text-white">{brand.logo.title}</h3>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <svg width="80" height="80" viewBox="0 0 100 100" role="img" aria-hidden="true">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#5C7CFA" strokeWidth="10" />
              <circle cx="50" cy="50" r="10" fill="#F5C542" />
            </svg>
            <svg width="80" height="80" viewBox="0 0 100 100" role="img" aria-hidden="true">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#F5C542" strokeWidth="10" />
              <circle cx="50" cy="50" r="10" fill="#5C7CFA" />
            </svg>
            <svg width="80" height="80" viewBox="0 0 100 100" role="img" aria-hidden="true">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#FFFFFF" strokeWidth="10" />
              <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
            </svg>
          </div>
          <p className="mt-6 text-xs text-slate-400">{brand.logo.hint}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#101621] p-8">
          <h3 className="text-xl font-semibold text-white">{brand.typography.title}</h3>
          <p className="mt-4 text-base text-slate-300">{brand.typography.headline}</p>
          <p className="mt-2 text-sm text-slate-400">{brand.typography.body}</p>
        </div>
      </div>
    </section>
  );
}
