import { useState, type ChangeEvent, type FormEvent } from 'react';
import { track } from '../lib/analytics';
import type { LeadFormCopy } from '../lib/content';

interface LeadCaptureFormProps {
  readonly copy: LeadFormCopy;
  readonly onSuccess?: () => void;
  readonly onError?: () => void;
}

interface LeadFormState {
  readonly fullName: string;
  readonly email: string;
  readonly company: string;
  readonly message: string;
}

const INITIAL_FORM: LeadFormState = {
  fullName: '',
  email: '',
  company: '',
  message: ''
};

export function LeadCaptureForm({ copy, onSuccess, onError }: LeadCaptureFormProps) {
  const [formState, setFormState] = useState<LeadFormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof LeadFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = import.meta.env.VITE_LEAD_CAPTURE_ENDPOINT;
    if (!endpoint) {
      console.warn('Missing VITE_LEAD_CAPTURE_ENDPOINT. The form submission will be skipped.');
      setStatus('error');
      onError?.();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error(`Unexpected status ${response.status}`);
      }

      setFormState(INITIAL_FORM);
      setStatus('success');
      track({
        name: 'lead_submitted',
        payload: { source: 'cta_form', email: formState.email }
      }).catch(() => {
        // la métrica es best-effort, no bloquea la UI
      });
      onSuccess?.();
    } catch (error) {
      console.error('Failed to capture lead', error);
      setStatus('error');
      track({
        name: 'lead_submit_error',
        payload: {
          source: 'cta_form',
          message: error instanceof Error ? error.message : 'unknown-error'
        }
      }).catch(() => {
        // sin efecto
      });
      onError?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm text-slate-200">
            {copy.fullNameLabel}
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            value={formState.fullName}
            onChange={handleChange('fullName')}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-io-blue focus:outline-none focus:ring-2 focus:ring-io-blue/40"
            placeholder={copy.fullNamePlaceholder}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-slate-200">
            {copy.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={handleChange('email')}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-io-blue focus:outline-none focus:ring-2 focus:ring-io-blue/40"
            placeholder={copy.emailPlaceholder}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm text-slate-200">
            {copy.companyLabel}
          </label>
          <input
            id="company"
            name="company"
            required
            value={formState.company}
            onChange={handleChange('company')}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-io-blue focus:outline-none focus:ring-2 focus:ring-io-blue/40"
            placeholder={copy.companyPlaceholder}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm text-slate-200">
            {copy.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formState.message}
            onChange={handleChange('message')}
            className="h-[115px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-io-blue focus:outline-none focus:ring-2 focus:ring-io-blue/40"
            placeholder={copy.messagePlaceholder}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-io-blue px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-io-blue/70"
      >
        {isSubmitting ? copy.submittingLabel : copy.submitLabel}
      </button>

      {status === 'success' && (
        <p className="text-sm text-emerald-400">{copy.successMessage}</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-400">{copy.errorMessage}</p>
      )}
    </form>
  );
}
