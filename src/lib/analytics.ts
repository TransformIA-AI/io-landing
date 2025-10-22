interface AnalyticsEvent {
  readonly name: string;
  readonly payload?: Record<string, unknown>;
}

export async function track(event: AnalyticsEvent) {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  if (!endpoint) {
    return;
  }

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...event,
        timestamp: new Date().toISOString()
      })
    });
  } catch (error) {
    console.error('Failed to track analytics event', error);
  }
}
