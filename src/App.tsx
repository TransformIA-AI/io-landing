import { useMemo } from "react";

const valueDrivers = [
  "Puntúa resonancia: coherencia persona–respuesta (más allá del clic).",
  "Rerank + guardrails: reordenación y contención en tiempo real.",
  "Aprende contigo: feedback ligero, privacidad opt-in.",
];

const visionCopy = [
  "La IA moderna se apoya en dos criterios: probabilidad (ML/DL) y consistencia lógica (simbólico). Falta el tercero: la coherencia experiencial.",
  "IO introduce ese criterio en producción, midiendo resonancia (texto, voz y señales ligeras si el usuario lo permite) para elegir la salida que mejor alinea al agente con la persona.",
];

const whyNowPoints = [
  "Producto: priorización y UX que se siente bien.",
  "Soporte/Ventas: mejora CSAT/TTR/CTR real.",
  "Líderes de IA: trazabilidad y contenedores de decisión.",
  "Si ya usas LLMs, dejas valor sin IO.",
];

const howItWorks = [
  "1) Señales (opcionales): texto/voz, tiempo, HRV/GSR.",
  "2) MRP — Modelo de Resonancia Personal: embeddings + features → score.",
  "3) Función de recompensa: el score guía la elección/rerank.",
  "4) Aprendizaje online: bandits + feedback explícito.",
];

const validationSignals = [
  "P1: AUC ≥ 0,70 (alto/bajo) en tu dataset.",
  "P2: ↑ CSAT/CTR/TTR vs. baseline con rerank IO.",
  "P3: Telemetría segura, sin PII forzada.",
];

const faqItems = [
  {
    question: "¿Wearables?",
    answer: "Opcionales.",
  },
  {
    question: "¿Mi LLM?",
    answer: "OpenAI, Anthropic, local (Ollama) y RAG.",
  },
  {
    question: "¿Privacidad?",
    answer: "Opt-in, datos mínimos, opción edge.",
  },
  {
    question: "¿Marketing o valor?",
    answer: "Medimos negocio (CSAT/TTR/CTR).",
  },
  {
    question: "¿Cuándo?",
    answer: "Cohorte temprana en curso.",
  },
];

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <header className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/80">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base text-slate-300 md:text-lg">{subtitle}</p> : null}
    </header>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  const rows = useMemo(
    () =>
      items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-slate-300 md:text-base">
          <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
          <span>{item}</span>
        </li>
      )),
    [items]
  );

  return <ul className="space-y-3">{rows}</ul>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070B] text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#192032,transparent_60%)] opacity-90" aria-hidden />
        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-10 sm:px-10 lg:px-20">
          <header className="flex flex-col gap-8 pb-20">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 transition hover:text-white"
            >
              IO Early Cohort · Ventana de acceso limitada. Cierra en 30 días.
            </a>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/70 bg-black/60">
                  <svg viewBox="0 0 100 100" className="h-10 w-10" aria-hidden>
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#d3a03f" strokeWidth="6" />
                    <circle cx="50" cy="50" r="10" fill="#d3a03f" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">IO</p>
                  <h1 className="text-4xl font-semibold">IO — Resonance AI</h1>
                </div>
              </div>
              <div className="max-w-lg text-sm text-slate-300 lg:text-right">
                Los modelos predicen. IO decide con coherencia: puntúa la resonancia entre cada respuesta y la persona, y guía a tus agentes en tiempo real. Ventana de ventaja: 12–18 meses.
              </div>
            </div>
            <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow=""
                  title="IO — Resonance AI"
                  subtitle="La capa de decisión que faltaba a la IA."
                />
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:hello@transformia.ai?subject=IO%20Waitlist"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
                  >
                    Únete a la waitlist
                  </a>
                  <a
                    href="#vision"
                    className="text-sm font-medium text-amber-200 transition hover:text-white"
                  >
                    Leer la visión de IO
                  </a>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/80">Qué hace IO</p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {valueDrivers.map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200 shadow-[0_0_30px_-12px_rgba(211,160,63,0.45)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id="vision" className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
                <SectionHeading eyebrow="Visión" title="Visión" />
                <div className="mt-6 space-y-4 text-sm text-slate-300 md:text-base">
                  {visionCopy.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </section>
          </header>

          <main className="flex flex-col gap-20">
            <section className="grid gap-12 lg:grid-cols-2" aria-labelledby="why-now">
              <div id="why-now" className="space-y-6">
                <SectionHeading
                  eyebrow="Por qué ahora"
                  title="Para quién"
                  subtitle="Los LLM ya generan. Lo que falta es criterio operable. Equipos que incorporen resonancia fijarán el estándar de UX/CSAT en los próximos 12–18 meses."
                />
                <BulletList items={whyNowPoints} />
              </div>
              <div className="space-y-10">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <SectionHeading title="Cómo funciona" subtitle="" />
                  <div className="mt-6 grid gap-6">
                    <BulletList items={howItWorks} />
                    <p className="text-xs text-slate-400">*Wearables no obligatorios.*</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <SectionHeading title="Validación en 72h" subtitle="" />
                  <div className="mt-6 grid gap-6">
                    <BulletList items={validationSignals} />
                    <p className="text-xs text-slate-400">Si no cumplimos, no avanzas.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-400/40 bg-amber-400/5 p-10" aria-labelledby="dao-teaser">
              <div id="dao-teaser">
                <SectionHeading
                  eyebrow="DAO (teaser)"
                  title="Gobernanza para priorizar integraciones y liberar módulos con licencias justas."
                  subtitle="Token solo tras utilidad y cumplimiento."
                />
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-10" aria-labelledby="faqs">
              <div id="faqs">
                <SectionHeading eyebrow="FAQs" title="Preguntas frecuentes" />
              </div>
              <div className="mt-8 space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <h3 className="text-sm font-semibold text-white md:text-base">{item.question}</h3>
                    <p className="mt-2 text-sm text-slate-300 md:text-base">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="waitlist" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]" aria-labelledby="waitlist-title">
              <div className="space-y-4">
                <div id="waitlist-title">
                  <SectionHeading
                    eyebrow="Waitlist"
                    title="Únete al Early Cohort: acceso prioritario, soporte directo y precio fundador (plazas limitadas)."
                    subtitle=""
                  />
                </div>
                <p className="text-sm text-slate-300">
                  Acceso priorizado, iteraciones semanales y métricas compartidas desde el día uno. Completa el formulario o
                  escríbenos para activar onboarding inmediato.
                </p>
                <a
                  href="mailto:hello@transformia.ai?subject=IO%20Waitlist&body=Nombre%3A%0AEquipo%2FProducto%3A%0AObjetivo%3A"
                  className="inline-flex items-center gap-2 text-sm font-medium text-amber-200 hover:text-white"
                >
                  Quiero acceder
                </a>
              </div>
              <form
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
                method="post"
                action={import.meta.env.VITE_LEAD_ENDPOINT ?? "mailto:hello@transformia.ai"}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-slate-200">
                    Nombre
                    <input
                      type="text"
                      name="name"
                      required
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                      placeholder="Ana Founder"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-slate-200">
                    Email corporativo
                    <input
                      type="email"
                      name="email"
                      required
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                      placeholder="ana@startup.ai"
                    />
                  </label>
                </div>
                <label className="mt-6 flex flex-col gap-2 text-sm text-slate-200">
                  Objetivo clave
                  <textarea
                    name="goal"
                    rows={4}
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                    placeholder="Ej: activar agente de soporte autónomo con trazabilidad"
                  />
                </label>
                <p className="mt-6 text-xs text-slate-400">
                  Al enviar aceptas recibir comunicaciones sobre IO. Respetamos GDPR y ofrecemos opt-out inmediato.
                </p>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
                >
                  Solicitar acceso anticipado
                </button>
              </form>
            </section>
          </main>

          <footer className="mt-24 border-t border-white/10 pt-10 text-xs text-slate-400">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} TransformIA · Resonance AI.</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://transformia.ai" className="hover:text-white" target="_blank" rel="noreferrer">
                  transformia.ai
                </a>
                <a href="https://transformia-ai.github.io" className="hover:text-white" target="_blank" rel="noreferrer">
                  Hub de lanzamientos
                </a>
                <a href="https://transformia-ai.github.io/io-landing/privacy" className="hover:text-white">
                  Privacidad
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
