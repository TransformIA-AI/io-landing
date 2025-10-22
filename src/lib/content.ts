export type LanguageCode = 'es' | 'en';

export interface CallToActionCopy {
  readonly headline: string;
  readonly subheadline: string;
  readonly buttonLabel: string;
  readonly disclaimer: string;
  readonly form: LeadFormCopy;
}

export interface LeadFormCopy {
  readonly fullNameLabel: string;
  readonly fullNamePlaceholder: string;
  readonly emailLabel: string;
  readonly emailPlaceholder: string;
  readonly companyLabel: string;
  readonly companyPlaceholder: string;
  readonly messageLabel: string;
  readonly messagePlaceholder: string;
  readonly submitLabel: string;
  readonly submittingLabel: string;
  readonly successMessage: string;
  readonly errorMessage: string;
}

export interface HeroCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly string[];
}

export interface FeatureCardCopy {
  readonly title: string;
  readonly bullets: readonly string[];
}

export interface PageContent {
  readonly meta: {
    readonly tagline: string;
    readonly draftInfo: string;
    readonly update: string;
  };
  readonly hero: HeroCopy;
  readonly brand: {
    readonly palette: readonly { readonly name: string; readonly hex: string }[];
    readonly logotypeNote: string;
    readonly typography: string;
    readonly typographySecondary: string;
  };
  readonly speech: {
    readonly title: string;
    readonly body: string;
  };
  readonly stack: readonly FeatureCardCopy[];
  readonly useCases: readonly FeatureCardCopy[];
  readonly technologies: FeatureCardCopy;
  readonly footer: string;
  readonly callToAction: CallToActionCopy;
}

export const contentByLanguage: Record<LanguageCode, PageContent> = {
  es: {
    meta: {
      tagline: 'Resonance AI · Capa de decisión',
      draftInfo: 'Acta fundacional · Madrid · 22 Oct 2025',
      update: 'Draft v0.2'
    },
    hero: {
      eyebrow: 'Resonance AI para IA generativa',
      title: 'La capa de decisión que alinea probabilidad y sentido',
      description:
        'IO añade a la IA una brújula ética operativa. Conecta señales humanas verificables con el contexto semántico para decidir con propósito, en vez de solo con probabilidad.',
      highlights: [
        'Integra biometría (HRV, EDA, voz, microexpresiones) con LLMs.',
        'Resguarda la privacidad con arquitectura local-first cifrada.',
        'Entrega trazabilidad y pesos de conciencia para cada decisión.'
      ]
    },
    brand: {
      palette: [
        { name: 'Deep Space', hex: '#0B0F14' },
        { name: 'Ion Blue', hex: '#5C7CFA' },
        { name: 'Solar Gold', hex: '#F5C542' },
        { name: 'Slate', hex: '#94A3B8' }
      ],
      logotypeNote:
        'Mantener un área de seguridad equivalente a 0.75× el diámetro del circumpunto cuando se use el isotipo.',
      typography: 'Titulares: Space Grotesk · Grotesk geométrica',
      typographySecondary: 'Cuerpo: JetBrains Mono · Tecnológica legible'
    },
    speech: {
      title: 'Visión fundacional (90–120s)',
      body:
        'La IA tradicional optimiza probabilidad. IO suma una dimensión: sentido. Resonance AI combina señales humanas verificables con comprensión semántica profunda y un vector de propósito personal. Así emergen agentes que eligen con coherencia, amplificando el valor humano con guardarraíles éticos nativos.'
    },
    stack: [
      {
        title: '1) IO Sense · Captura',
        bullets: [
          'HRV/PPG, EDA/GSR, piloerección, voz y rostro.',
          'Hotkeys y “tap de resonancia” consciente.',
          'Privacidad por diseño: cifrado extremo a extremo.'
        ]
      },
      {
        title: '2) IO Core · Resonance Score',
        bullets: [
          'Embeddings + features fisiológicas con modelos multimodales.',
          'Vector Propósito (IO Map) para regularizar decisiones.',
          'Explicabilidad: importancia de variables y trazabilidad.'
        ]
      },
      {
        title: '3) IO Agent · Aprendizaje',
        bullets: [
          'Re-ranking inteligente con políticas bandit.',
          'Pesos de conciencia ajustan la recompensa.',
          'Control humano y ética by design en cada bucle.'
        ]
      }
    ],
    useCases: [
      {
        title: 'Casos · Persona',
        bullets: [
          'Priorizar decisiones que convierten en ≤72h.',
          'Coaching de propósito en tiempo real.',
          'Gestión del foco y bienestar (CRD ↓).'
        ]
      },
      {
        title: 'Casos · Empresa',
        bullets: [
          'Roadmaps ordenados por ROI·Resonancia.',
          'Presentaciones que se adaptan en vivo al cliente.',
          'Compliance emocional y ético trazable.'
        ]
      }
    ],
    technologies: {
      title: 'Tecnologías clave',
      bullets: [
        'Wearables (PPG/EDA), visión y prosodia de voz.',
        'LLMs + RAG local, embeddings, XGBoost/LightGBM.',
        'Bandits/RL, explicabilidad y privacidad local-first.'
      ]
    },
    footer:
      'IO © 2025 — Resonance AI. Documento fundacional para socios y clientes. Solicita assets SVG/PNG bajo demanda.',
    callToAction: {
      headline: 'Reserva una demo estratégica',
      subheadline: 'Descubre cómo IO convierte resonancia en ROI medible en menos de 30 días.',
      buttonLabel: 'Agendar discovery call',
      disclaimer: 'Al enviar aceptas nuestra política de privacidad y tratamiento de datos biométricos.',
      form: {
        fullNameLabel: 'Nombre completo',
        fullNamePlaceholder: 'María Hernández',
        emailLabel: 'Email profesional',
        emailPlaceholder: 'maria@empresa.com',
        companyLabel: 'Organización',
        companyPlaceholder: 'TransformIA Ventures',
        messageLabel: 'Contexto del reto',
        messagePlaceholder: 'Buscamos reducir el tiempo de cierre de deals enterprise...',
        submitLabel: 'Agendar discovery call',
        submittingLabel: 'Enviando...',
        successMessage: 'Gracias. Nuestro equipo se pondrá en contacto en las próximas 24h.',
        errorMessage:
          'Ocurrió un problema al enviar tu solicitud. Escríbenos a founders@resonance.io mientras lo resolvemos.'
      }
    }
  },
  en: {
    meta: {
      tagline: 'Resonance AI · Decision layer',
      draftInfo: 'Founding memo · Madrid · Oct 22, 2025',
      update: 'Draft v0.2'
    },
    hero: {
      eyebrow: 'Resonance AI for generative AI',
      title: 'The decision layer that unifies probability and meaning',
      description:
        'IO equips AI with an operational moral compass. It fuses verified human signals with semantic context so every agent can decide with purpose—not just probability.',
      highlights: [
        'Multimodal fusion of biometrics (HRV, EDA, voice, micro-expressions) and LLM reasoning.',
        'Private by default with encrypted, local-first orchestration.',
        'Explainable outcomes with resonance-weighted decisions.'
      ]
    },
    brand: {
      palette: [
        { name: 'Deep Space', hex: '#0B0F14' },
        { name: 'Ion Blue', hex: '#5C7CFA' },
        { name: 'Solar Gold', hex: '#F5C542' },
        { name: 'Slate', hex: '#94A3B8' }
      ],
      logotypeNote:
        'Keep a clear space equal to 0.75× the dot diameter when deploying the isotopic mark.',
      typography: 'Headlines: Space Grotesk · Geometric grotesk',
      typographySecondary: 'Body: JetBrains Mono · Technical yet human'
    },
    speech: {
      title: 'Foundational pitch (90–120s)',
      body:
        'AI has long pursued probability. IO brings meaning into the equation. Resonance AI aligns verified human signals with deep semantic understanding and an individual purpose vector. The result: agents that choose coherently, embedding native ethics and measurable business impact.'
    },
    stack: [
      {
        title: '1) IO Sense · Capture',
        bullets: [
          'HRV/PPG, EDA/GSR, frisson, voice & facial cues.',
          'Conscious resonance tap and hotkeys.',
          'Privacy-first with full-stack encryption.'
        ]
      },
      {
        title: '2) IO Core · Resonance Score',
        bullets: [
          'Physiological features blended with multimodal transformers.',
          'Purpose Vector (IO Map) to regularize decisions.',
          'Explainability across variables and traceability.'
        ]
      },
      {
        title: '3) IO Agent · Learning',
        bullets: [
          'Smart re-ranking with adaptive bandit policies.',
          'Consciousness weights reshape rewards.',
          'Human-in-the-loop governance by design.'
        ]
      }
    ],
    useCases: [
      {
        title: 'Use cases · Individual',
        bullets: [
          'Prioritize actions that convert within 72h.',
          'Real-time purpose coaching.',
          'Focus and wellbeing management (decision fatigue ↓).'
        ]
      },
      {
        title: 'Use cases · Enterprise',
        bullets: [
          'Roadmap sequencing by Resonance-adjusted ROI.',
          'Adaptive sales and CX storytelling in the moment.',
          'Traceable emotional & ethical compliance.'
        ]
      }
    ],
    technologies: {
      title: 'Key technologies',
      bullets: [
        'Wearables (PPG/EDA), computer vision & voice prosody.',
        'LLMs + local RAG, embeddings, XGBoost/LightGBM.',
        'Bandits/RL, explainability, privacy-first architecture.'
      ]
    },
    footer:
      'IO © 2025 — Resonance AI. Foundational one-pager for partners and clients. Request SVG/PNG assets anytime.',
    callToAction: {
      headline: 'Book a strategic demo',
      subheadline: 'See how IO converts resonance into measurable ROI in under 30 days.',
      buttonLabel: 'Schedule a discovery call',
      disclaimer: 'By submitting you agree to our privacy policy and biometric data handling notice.',
      form: {
        fullNameLabel: 'Full name',
        fullNamePlaceholder: 'Alex Johnson',
        emailLabel: 'Work email',
        emailPlaceholder: 'alex@company.com',
        companyLabel: 'Organization',
        companyPlaceholder: 'TransformIA Labs',
        messageLabel: 'Challenge context',
        messagePlaceholder: 'We need to shorten enterprise deal cycles...',
        submitLabel: 'Schedule a discovery call',
        submittingLabel: 'Sending...',
        successMessage: 'Thanks! Our team will reach out within the next 24 hours.',
        errorMessage:
          'There was an issue submitting your request. Email founders@resonance.io while we fix it.'
      }
    }
  }
};
