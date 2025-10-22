import { logEvent } from './logger';

export async function trackLead(email: string): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT ?? '';

  logEvent({ event: 'lead_submitted', data: { email, hasEndpoint: Boolean(endpoint) } });

  if (!endpoint) {
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });

  if (!response.ok) {
    throw new Error('Lead submission failed');
  }
}
