# IO Resonance Landing

Landing page moderna estilo Salesforce para IO · Resonance AI, construida con React, TypeScript y Tailwind CSS sobre Vite.

## Requisitos

- Node.js >= 18
- pnpm, npm o yarn (los ejemplos usan `npm`)

## Configuración rápida

```bash
npm install
cp .env.example .env
npm run dev
```

La aplicación se expone en `http://localhost:5173`.

## Tests

```bash
npm run test
```

## Scripts adicionales

- `npm run build`: genera la versión optimizada para producción.
- `npm run preview`: ejecuta la build estática.
- `npm run lint`: asegura que el proyecto compila con TypeScript estricto.

## Observabilidad y métricas

- El formulario de lead utiliza `trackLead` (`src/lib/metrics.ts`) para registrar eventos y enviar datos a `VITE_LEAD_ENDPOINT`.
- `logEvent` (`src/lib/logger.ts`) centraliza la instrumentación básica y se activa solo en desarrollo por defecto.

## Pipeline sugerido (GitHub Actions)

1. Instalar dependencias (`npm ci`).
2. Ejecutar `npm run lint` y `npm run test`.
3. Construir (`npm run build`) y publicar artefacto estático.
4. Desplegar a la CDN o plataforma elegida (Netlify, Vercel, Cloudflare Pages).

## Checklist de despliegue

- [ ] Configurar dominio y TLS.
- [ ] Proveer endpoint seguro para `VITE_LEAD_ENDPOINT`.
- [ ] Añadir herramientas de analítica (ej. Plausible o Segment) respetando privacidad.
- [ ] Revisar textos legales y política de privacidad.
- [ ] Habilitar monitoreo de Core Web Vitals.

## Aviso de privacidad

IO procesa señales biométricas solo bajo consentimiento explícito. El formulario recoge exclusivamente el correo corporativo para coordinar demos; no se almacenan datos adicionales sin aprobación.

## Decisión técnica y ROI

Se eligió Vite + React + Tailwind para lanzar rápido una landing escalable, con soporte multilenguaje tipado y CTA de captura de leads. Esta combinación permite iterrar campañas de marketing en minutos, reduce costes operativos (hosting estático) y acelera la validación comercial del piloto Resonance AI.
