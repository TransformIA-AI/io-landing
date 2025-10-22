import type { LanguageContent } from '../types/language';

export const enContent: LanguageContent = {
  meta: {
    locale: 'en',
    label: 'EN'
  },
  navigation: {
    ctaPrimary: 'Book live demo',
    ctaSecondary: 'Download brand book'
  },
  hero: {
    badge: 'Resonance AI',
    title: 'Decision intelligence that feels human resonance',
    subtitle: 'IO synchronizes biometric and semantic signals to deliver purpose-aligned decisions.',
    description:
      'Plug IO into generative AI workflows to focus on the actions that really matter. We capture human signals (HRV, EDA, voice, facial cues) and contextual semantics to activate consciousness weights that lift conversion while lowering risk.'
  },
  features: [
    {
      id: 'guardrails',
      title: 'Ethical guardrails in real time',
      description: 'Align every outcome with corporate ethics, compliance boundaries, and wellbeing targets.'
    },
    {
      id: 'optimization',
      title: 'Resonance-optimized prioritization',
      description: 'Maximize ROI by ranking opportunities with verifiable emotional response and financial upside.'
    },
    {
      id: 'integration',
      title: 'Plug-and-play integration',
      description: 'Modular SDK with secure APIs, on-premise modes, and local-first encryption by default.'
    }
  ],
  stack: {
    title: 'IO — Reason & Resonance Stack',
    layers: [
      {
        id: 'sense',
        title: '1 · IO Sense · Capture',
        bullets: [
          'Wearables (HRV/PPG), EDA/GSR, frisson, voice and facial analytics.',
          'Hotkeys and conscious "resonance tap" for key decision checkpoints.',
          'Privacy by design: on-device storage, AES-256 encryption, anonymization.'
        ]
      },
      {
        id: 'core',
        title: '2 · IO Core · Resonance Score',
        bullets: [
          'Multimodal fusion: semantic embeddings + physiological features.',
          'Purpose Vector (IO Map) regularizes every decision path.',
          'Explainability with full traceability and actionable metrics.'
        ]
      },
      {
        id: 'agent',
        title: '3 · IO Agent · Learning',
        bullets: [
          'Smart re-ranking and bandit policies focused on tangible impact.',
          'Consciousness weights adjust rewards by resonance amplitude.',
          'Human override always-on with auditable event streams.'
        ]
      }
    ]
  },
  useCases: {
    title: 'High-impact use cases',
    cards: [
      {
        id: 'persona',
        title: 'Individual',
        bullets: [
          'Prioritize personal choices that convert within 72 hours.',
          'Purpose coaching with real-time somatic feedback.',
          'Optimize focus and wellbeing by reducing decision fatigue.'
        ]
      },
      {
        id: 'enterprise',
        title: 'Enterprise',
        bullets: [
          'Resonance-weighted roadmaps and portfolio management.',
          'Sales narratives adapting live to every stakeholder.',
          'Traceable emotional & ethical compliance dashboards.'
        ]
      },
      {
        id: 'tech',
        title: 'Technology',
        bullets: [
          'Seamless integrations with LLMs, local RAG, and MLOps pipelines.',
          'Hybrid models (XGBoost, transformers) tuned for cost efficiency.',
          'Real-time observability via resonance analytics metrics.'
        ]
      }
    ]
  },
  speech: {
    title: 'Foundational vision',
    description:
      'For decades AI has optimized probability. IO brings in meaning: we combine verifiable human signals with deep semantic understanding so agents do not just respond—they choose coherently. It is the ethical symbiosis that scales human decisions inside every generative workflow.'
  },
  brand: {
    palette: {
      title: 'IO Palette',
      swatches: [
        { name: 'Deep Space', hex: '#0B0F14' },
        { name: 'Ion Blue', hex: '#5C7CFA' },
        { name: 'Solar Gold', hex: '#F5C542' },
        { name: 'Slate', hex: '#94A3B8' }
      ]
    },
    logo: {
      title: 'Logotype · Variants',
      hint: 'Keep a 0.75× safe margin of the inner dot diameter across implementations.'
    },
    typography: {
      title: 'Typography',
      headline: 'Headlines: geometric grotesk with tight tracking.',
      body: 'Body: mono/tech styling optimized for conversational UIs.'
    }
  },
  footer: {
    privacy: 'IO processes biometric signals with explicit consent only. Review our privacy policy for additional details.',
    copyright: 'IO © 2025 — Resonance AI. All rights reserved.'
  },
  leadForm: {
    title: 'Launch your private pilot',
    subtitle: 'Share your business email to receive the integration guide and schedule a live resonance lab.',
    emailLabel: 'Work email',
    submit: 'Schedule session',
    terms: 'By submitting you agree to our privacy policy and secure biometric handling.',
    success: 'Thank you. Our team will reach out within 24h to configure your pilot.',
    error: 'We could not capture your request. Retry or email founders@io.ai.'
  }
};
