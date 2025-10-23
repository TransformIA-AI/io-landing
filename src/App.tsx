import { useMemo } from "react";

const highlights = [
  "Orquesta modelos generativos, agentes y memoria activa",
  "Observabilidad continua sobre decisiones autónomas",
  "Controles de riesgo y cumplimiento integrados",
];

const roadmapItems = [
  {
    phase: "Q2",
    title: "Génesis DAO",
    description:
      "Validación de gobernanza distribuida para priorizar integraciones y casos de uso empresariales.",
  },
  {
    phase: "Q3",
    title: "Tesoría programable",
    description:
      "Asignación automática de liquidez hacia pods de automatización con métricas públicas de ROI.",
  },
  {
    phase: "Q4",
    title: "Lanzamiento público",
    description:
      "Despliegue de la red de resonancia con APIs productivas y toolkit de participación para builders.",
  },
];

const validationSignals = [
  "3 corporativos en pruebas cerradas acelerando sus pipelines de decisión IA.",
  "Reducción del 28% en costes operativos de agentes autónomos.",
  "Alianzas con fondos Web3 para cubrir staking de responsabilidad compartida.",
];

const visionPoints = [
  "Cada decisión autónoma necesita coherencia experiencial para confiar en IA generativa.",
  "La resonancia conecta datos, contexto y ética operacional en tiempo real.",
  "DAO orquesta incentivos para que expertos humanos curen y supervisen señales críticas.",
];

const whyNowPoints = [
  "Las empresas despliegan IA sin métricas de alineación experiencial.",
  "Agentes sin gobernanza elevan riesgo reputacional y regulatorio.",
  "El capital exige trazabilidad sobre cómo se automatiza el conocimiento.",
];

const whatItIs = [
  "Plataforma de orquestación que sincroniza agentes, workflows y datos contextuales.",
  "Motor de resonancia que puntúa coherencia de decisiones en tiempo real.",
  "Infraestructura Web3 opcional para compartir riesgos y recompensas con la comunidad DAO.",
];

const howItWorks = [
  "Ingesta señales (LLMs, APIs, sensores) y las normaliza mediante embeddings propietarios.",
  "Calcula un índice de coherencia experiencial que desencadena acciones o alertas.",
  "Reporta métricas, auditoría y triggers hacia CRM, BI o contratos inteligentes.",
];

const whatItsNot = [
  "No es un asistente generalista sin controles empresariales.",
  "No reemplaza la gobernanza humana; la amplifica con trazabilidad.",
  "No es otra herramienta de dashboards desconectada del stack operativo.",
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
                  <h1 className="text-4xl font-semibold">Resonance AI</h1>
                </div>
              </div>
              <div className="max-w-lg text-sm text-slate-300 lg:text-right">
                Capa de decisión resonante que asegura coherencia experiencial en cada interacción IA ↔ humano.
              </div>
            </div>
            <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Cohesión para agentes inteligentes"
                  title="Orquesta decisiones autónomas con confianza verificable"
                  subtitle="IO sincroniza señales, contexto y gobernanza en tiempo real para que tus agentes generativos actúen con la misma coherencia que un equipo humano experto."
                />
                <div className="grid gap-4 md:grid-cols-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200 shadow-[0_0_30px_-12px_rgba(211,160,63,0.45)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://transformia-ai.github.io/io-landing/whitepaper.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
                  >
                    Descargar whitepaper (beta)
                  </a>
                  <a
                    href="#waitlist"
                    className="text-sm font-medium text-amber-200 transition hover:text-white"
                  >
                    Únete a la waitlist →
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
                <SectionHeading
                  eyebrow="Visión"
                  title="Coherencia experiencial como estándar"
                  subtitle="La IA deja de ser caja negra cuando cada decisión puede resonar con evidencia contextual."
                />
                <div className="mt-6 space-y-4">
                  <BulletList items={visionPoints} />
                </div>
              </div>
            </section>
          </header>

          <main className="flex flex-col gap-20">
            <section className="grid gap-12 lg:grid-cols-2" aria-labelledby="why-now">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Por qué ahora"
                  title="La automatización generativa necesita brújula"
                  subtitle="Mercado exige alineación, trazabilidad y métricas de impacto para sostener despliegues masivos."
                />
                <BulletList items={whyNowPoints} />
              </div>
              <div className="space-y-10">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <SectionHeading title="Qué es IO" subtitle="Framework operativo para decisiones resonantes" />
                  <div className="mt-6 grid gap-6">
                    <BulletList items={whatItIs} />
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <SectionHeading title="Cómo funciona" subtitle="Del input ruidoso a acciones trazables" />
                  <div className="mt-6 grid gap-6">
                    <BulletList items={howItWorks} />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-400/40 bg-amber-400/5 p-10" aria-labelledby="what-not">
              <SectionHeading
                eyebrow="Enfoque"
                title="Lo que IO NO es"
                subtitle="Definimos límites claros para proteger resultados y expectativas."
              />
              <div className="mt-8">
                <BulletList items={whatItsNot} />
              </div>
            </section>

            <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]" aria-labelledby="validation">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10">
                <SectionHeading
                  eyebrow="Tracción 72h"
                  title="Validación acelerada"
                  subtitle="Nos enfocamos en experimentos medibles para justificar inversión y escalado."
                />
                <div className="mt-6 space-y-4">
                  <BulletList items={validationSignals} />
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">
                <SectionHeading
                  eyebrow="DAO Roadmap"
                  title="Gobernanza y valor compartido"
                  subtitle="Evolucionamos hacia una economía de decisiones confiables."
                />
                <div className="mt-8 space-y-6">
                  {roadmapItems.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">{item.phase}</p>
                      <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="waitlist" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]" aria-labelledby="waitlist-title">
              <div className="space-y-4">
                <SectionHeading
                  eyebrow="Waitlist"
                  title="Activa una prueba guiada"
                  subtitle="Garantizamos un sprint estratégico con métricas de ROI en menos de 30 días."
                />
                <p className="text-sm text-slate-300">
                  Compartimos roadmap, métricas de resonancia y modelos financieros con cada aliado. Completa el formulario o
                  escribe a nuestro equipo para recibir el onboarding.
                </p>
                <a
                  href="mailto:hello@transformia.ai?subject=IO%20Waitlist&body=Hola%20TransformIA,%20quiero%20probar%20IO%20Resonance%20AI."
                  className="inline-flex items-center gap-2 text-sm font-medium text-amber-200 hover:text-white"
                >
                  Enviar correo directo →
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
