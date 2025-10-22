import type { LanguageContent } from '../types/language';

export const esContent: LanguageContent = {
  meta: {
    locale: 'es',
    label: 'ES'
  },
  navigation: {
    ctaPrimary: 'Solicitar demo',
    ctaSecondary: 'Descargar brand book'
  },
  hero: {
    badge: 'Resonance AI',
    title: 'La capa de decisión que siente la resonancia humana',
    subtitle: 'IO sincroniza señales biométricas y semánticas para crear decisiones alineadas con propósito.',
    description:
      'Integra IO en tus flujos de IA generativa para priorizar las acciones que importan. Capturamos señales humanas (HRV, EDA, voz, rostro) y significado contextual para activar pesos de conciencia que elevan la conversión y reducen el riesgo.'
  },
  features: [
    {
      id: 'guardrails',
      title: 'Guardarraíles éticos en tiempo real',
      description: 'Alinea cada decisión con parámetros de ética, compliance y bienestar definidos por la organización.'
    },
    {
      id: 'optimization',
      title: 'Optimización por resonancia',
      description: 'Maximiza ROI priorizando oportunidades con alta respuesta emocional verificable y valor financiero.'
    },
    {
      id: 'integration',
      title: 'Integración plug-and-play',
      description: 'SDK modular con APIs seguras, modos on-prem y privacidad local-first con cifrado de extremo a extremo.'
    }
  ],
  stack: {
    title: 'IO — Reason & Resonance Stack',
    layers: [
      {
        id: 'sense',
        title: '1 · IO Sense · Captura',
        bullets: [
          'Wearables (HRV/PPG), EDA/GSR, piloerección, análisis de voz y rostro.',
          'Hotkeys y "tap de resonancia" consciente para decisiones clave.',
          'Privacidad por diseño: datos locales, cifrado AES-256 y anonimización.'
        ]
      },
      {
        id: 'core',
        title: '2 · IO Core · Resonance Score',
        bullets: [
          'Fusión multimodal: embeddings semánticos + features fisiológicas.',
          'Vector Propósito (IO Map) regula la toma de decisión.',
          'Explicabilidad con trazabilidad completa y métricas accionables.'
        ]
      },
      {
        id: 'agent',
        title: '3 · IO Agent · Aprendizaje',
        bullets: [
          'Re-ranking inteligente y políticas bandit orientadas a impacto.',
          'Pesos de conciencia que ajustan recompensas por resonancia.',
          'Control humano permanente con auditoría y overrides.'
        ]
      }
    ]
  },
  useCases: {
    title: 'Casos de uso prioritarios',
    cards: [
      {
        id: 'persona',
        title: 'Persona',
        bullets: [
          'Prioriza decisiones personales con conversión ≤72h.',
          'Coaching de propósito con feedback somático en vivo.',
          'Optimiza foco y bienestar reduciendo CRD y estrés.'
        ]
      },
      {
        id: 'enterprise',
        title: 'Empresa',
        bullets: [
          'Roadmaps y portafolios ponderados por ROI·Resonancia.',
          'Ventas y presentaciones que se adaptan al cliente en vivo.',
          'Compliance emocional y ético trazable por policy.'
        ]
      },
      {
        id: 'tech',
        title: 'Tecnología',
        bullets: [
          'Integraciones con LLMs, RAG local y pipelines MLOps.',
          'Modelos híbridos (XGBoost, transformers) optimizados por coste.',
          'Observabilidad en tiempo real con métricas de resonancia.'
        ]
      }
    ]
  },
  speech: {
    title: 'Visión fundacional',
    description:
      'Durante décadas la IA ha optimizado la probabilidad. IO añade el sentido: combinamos señales humanas verificables con comprensión semántica profunda para que los agentes no solo respondan, sino que elijan con coherencia. Es la simbiosis ética que escala decisiones humanas en cualquier flujo generativo.'
  },
  brand: {
    palette: {
      title: 'Paleta IO',
      swatches: [
        { name: 'Deep Space', hex: '#0B0F14' },
        { name: 'Ion Blue', hex: '#5C7CFA' },
        { name: 'Solar Gold', hex: '#F5C542' },
        { name: 'Slate', hex: '#94A3B8' }
      ]
    },
    logo: {
      title: 'Logotipo · Variantes',
      hint: 'Respeta el área de seguridad de 0.75× el diámetro del punto central en cualquier aplicación.'
    },
    typography: {
      title: 'Tipografía',
      headline: 'Titulares: grotesk geométrica con tracking denso.',
      body: 'Cuerpo: mono/tech optimizado para interfaces conversacionales.'
    }
  },
  footer: {
    privacy: 'IO procesa señales biométricas bajo consentimiento explícito. Consulta la política de privacidad para más detalles.',
    copyright: 'IO © 2025 — Resonance AI. Todos los derechos reservados.'
  },
  leadForm: {
    title: 'Activa tu piloto privado',
    subtitle: 'Comparte tu correo corporativo para recibir la guía de integración y agendar una demo en vivo.',
    emailLabel: 'Correo de trabajo',
    submit: 'Reservar demo',
    terms: 'Al enviar aceptas nuestra política de privacidad y el tratamiento seguro de biometría.',
    success: 'Gracias. Nuestro equipo te contactará en 24h para configurar el piloto.',
    error: 'No pudimos registrar tu solicitud. Intenta nuevamente o escribe a founders@io.ai.'
  }
};
