interface LogPayload {
  event: string;
  data?: Record<string, unknown>;
}

export function logEvent(payload: LogPayload) {
  if (import.meta.env.DEV) {
    console.info(`[IO][${payload.event}]`, payload.data ?? {});
  }
}
