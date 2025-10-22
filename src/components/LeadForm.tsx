import { FormEvent, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { trackLead } from '../lib/metrics';
import { clsx } from 'clsx';

export function LeadForm() {
  const { content } = useLanguage();
  const { leadForm } = content;
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      return;
    }

    setState('loading');
    try {
      await trackLead(email);
      setState('success');
    } catch (error) {
      console.error(error);
      setState('error');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-slate-200" htmlFor="lead-email">
          {leadForm.emailLabel}
        </label>
        <input
          id="lead-email"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-io-ion-blue focus:outline-none focus:ring-2 focus:ring-io-ion-blue/60"
          placeholder="you@company.com"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (state !== 'idle') {
              setState('idle');
            }
          }}
          required
        />
      </div>
      <button
        className={clsx(
          'flex w-full items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition',
          state === 'success'
            ? 'bg-emerald-500/20 text-emerald-300'
            : 'bg-io-ion-blue text-white hover:bg-io-ion-blue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0F14] focus:ring-io-solar-gold'
        )}
        type="submit"
        disabled={state === 'loading' || state === 'success'}
      >
        {state === 'loading' ? '...' : leadForm.submit}
      </button>
      <p className="text-xs leading-relaxed text-slate-400">{leadForm.terms}</p>
      {state === 'success' && <p className="rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-200">{leadForm.success}</p>}
      {state === 'error' && <p className="rounded-lg bg-rose-500/10 p-3 text-sm text-rose-200">{leadForm.error}</p>}
    </form>
  );
}
