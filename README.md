# IO · Resonance AI Landing

Landing page moderna estilo Salesforce para IO Resonance AI, lista para iterar como semilla SaaS de TransformIA.

## Requisitos

- Node.js >= 20.11
- npm >= 10

## Variables de entorno

Crea un archivo `.env` a partir de `.env.example`.

```bash
cp .env.example .env
```

Variables disponibles:

- `VITE_LEAD_CAPTURE_ENDPOINT`: URL HTTPS para recibir los leads (ej. webhook, CRM o automation SaaS).
- `VITE_ANALYTICS_ENDPOINT` (opcional): endpoint para métricas personalizadas.

## Desarrollo

```bash
npm install
npm run dev
```

La aplicación se expone en `http://localhost:5173`.

## Build y previsualización

```bash
npm run build
npm run preview
```

## Pruebas

```bash
npm run test
```

## Observabilidad y métricas

- Se puede enviar telemetría ligera al endpoint definido en `VITE_ANALYTICS_ENDPOINT`.
- Añadir paneles (Datadog, Grafana) con métricas de conversión: visitas, envíos de formulario, tasa de error.

## Checklist de despliegue

1. Configurar `.env` con endpoints productivos (HTTPS, dominio propio, certificados vigentes).
2. Ejecutar `npm run build` y validar en `npm run preview`.
3. Configurar CDN/edge (Vercel/Netlify) con caché y compresión Brotli.
4. Habilitar monitorización de disponibilidad y alertas de error 4xx/5xx.
5. Conectar formulario a CRM (HubSpot, Salesforce) y probar doble opt-in.

## CI/CD sugerido

Incluimos un workflow de GitHub Actions (`.github/workflows/ci.yml`) que instala dependencias, ejecuta lint y pruebas. Extiéndelo con despliegue automatizado (Vercel/Netlify) tras pasar a rama principal.

## Deploy

- **GitHub Pages (Actions)**: el workflow `.github/workflows/pages.yml` construye el sitio con `GITHUB_PAGES=true npm run build`, sube el artefacto y publica en GitHub Pages sin usar secretos. Basta con activar Pages en `Settings > Pages` apuntando a GitHub Actions.
- **Vercel**: importa el repositorio en Vercel, usa build command `npm run build` y output `dist`. No requiere variables de entorno si el formulario apunta a un endpoint público.

## Aviso de privacidad

El formulario incluye aviso explícito sobre tratamiento de datos biométricos y referencia a la política de privacidad. Asegura que el endpoint cumpla GDPR/SOC2.
