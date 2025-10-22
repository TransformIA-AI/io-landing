import { useLanguage } from '../hooks/useLanguage';

export function Footer() {
  const { content } = useLanguage();
  const { footer } = content;

  return (
    <footer className="mt-24 border-t border-white/5 pt-10 text-sm text-slate-400">
      <p className="max-w-3xl leading-relaxed">{footer.privacy}</p>
      <p className="mt-4 text-xs text-slate-500">{footer.copyright}</p>
    </footer>
  );
}
