import { motion } from "framer-motion";
import { GraduationCap, Building2, Activity, Compass } from "lucide-react";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

const produtos = [
  {
    icon: Compass,
    tag: "Serviço · entrada",
    nome: "Consultoria Diagnóstica de IA",
    descricao:
      "Entrevista ao vivo com a prefeitura, framework próprio e relatório com usos práticos de IA na rotina.",
    accent: "#E8A33D",
    mockup: "diagnostico",
  },
  {
    icon: GraduationCap,
    tag: "Produto 01",
    nome: "Academy Regulatória",
    descricao:
      "Capacitação contínua para equipes públicas, com IA embarcada no fluxo de aprendizado.",
    accent: "#8B5CF6",
    mockup: "academy",
  },
  {
    icon: Building2,
    tag: "Produto 02",
    nome: "Cidadão.IO",
    descricao:
      "Portal municipal com agente de IA que atende o cidadão e reduz fila no balcão.",
    accent: "#10B981",
    mockup: "cidadao",
  },
  {
    icon: Activity,
    tag: "Produto 03",
    nome: "Data Analyst SUS",
    descricao:
      "Analista de dados em IA que conversa com gestores e gera relatórios executivos sobre saúde pública.",
    accent: "#22D3EE",
    mockup: "sus",
  },
];

function MiniMockup({ kind, accent }: { kind: string; accent: string }) {
  if (kind === "diagnostico") {
    return (
      <div className="w-full h-full rounded-lg p-3 flex flex-col gap-2" style={{ background: "#0B1838" }}>
        <div className="h-2 w-2/3 rounded-full" style={{ background: accent }} />
        <div className="h-1.5 w-full rounded-full bg-navy-soft" />
        <div className="h-1.5 w-5/6 rounded-full bg-navy-soft" />
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {[0.4, 0.7, 0.55].map((h, i) => (
            <div key={i} className="rounded" style={{ height: 24 * h + 8, background: accent, opacity: 0.6 + i * 0.1 }} />
          ))}
        </div>
      </div>
    );
  }
  if (kind === "academy") {
    return (
      <div className="w-full h-full rounded-lg p-3 flex flex-col gap-2" style={{ background: "#1E1B4B" }}>
        <div className="h-2 w-1/2 rounded-full" style={{ background: accent }} />
        <div className="flex-1 grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
              <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "cidadao") {
    return (
      <div className="w-full h-full rounded-lg p-3 flex flex-col gap-2" style={{ background: "#064E3B" }}>
        <div className="h-2 w-2/3 rounded-full" style={{ background: accent }} />
        <div className="h-5 rounded" style={{ background: "rgba(16,185,129,0.25)" }} />
        <div className="flex gap-1.5 mt-1">
          <div className="flex-1 h-3 rounded" style={{ background: "rgba(16,185,129,0.4)" }} />
          <div className="flex-1 h-3 rounded" style={{ background: "rgba(16,185,129,0.25)" }} />
          <div className="flex-1 h-3 rounded" style={{ background: "rgba(16,185,129,0.25)" }} />
        </div>
      </div>
    );
  }
  // sus
  return (
    <div className="w-full h-full rounded-lg p-3 flex flex-col gap-2" style={{ background: "#0F172A" }}>
      <div className="h-2 w-2/3 rounded-full" style={{ background: accent }} />
      <div className="flex items-end gap-1 flex-1 pt-1">
        {[0.3, 0.5, 0.4, 0.7, 0.6, 0.85, 0.75].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h * 100}%`, background: accent, opacity: 0.55 + h * 0.4 }} />
        ))}
      </div>
    </div>
  );
}

export default function Slide_ProdutosOverview({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell
      step={step}
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      caption="03 — O QUE OFERECEMOS"
    >
      <div className="flex flex-col h-full" style={{ marginTop: 16 }}>
        <h2 className="font-display text-text" style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.05 }}>
          Produtos e serviços
        </h2>
        <p className="font-body text-text-muted mt-3" style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 920 }}>
          Um serviço de entrada que abre conversa — e três produtos verticalizados que entregam valor recorrente.
        </p>

        <div className="grid grid-cols-4 gap-5 mt-10 flex-1">
          {produtos.map((p, i) => {
            const Icon = p.icon;
            return (
              <RevealOnTrigger key={p.nome} step={i + 1}>
                <motion.div
                  className="bg-navy-soft rounded-2xl flex flex-col h-full overflow-hidden"
                  style={{ padding: 22 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="rounded-lg flex items-center justify-center"
                      style={{ width: 36, height: 36, background: `${p.accent}22` }}
                    >
                      <Icon size={20} color={p.accent} />
                    </div>
                    <div
                      className="font-body uppercase"
                      style={{ fontSize: 11, letterSpacing: "0.15em", fontWeight: 700, color: p.accent }}
                    >
                      {p.tag}
                    </div>
                  </div>

                  <div
                    className="font-display text-text mt-4"
                    style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, minHeight: 56 }}
                  >
                    {p.nome}
                  </div>

                  <div className="mt-3 rounded-lg" style={{ height: 110 }}>
                    <MiniMockup kind={p.mockup} accent={p.accent} />
                  </div>

                  <p className="font-body text-text-muted mt-4" style={{ fontSize: 14, lineHeight: 1.45 }}>
                    {p.descricao}
                  </p>
                </motion.div>
              </RevealOnTrigger>
            );
          })}
        </div>

        <p
          className="font-body italic text-text-subtle mt-6"
          style={{ fontSize: 14 }}
        >
          A consultoria diagnóstica é a cunha. Os produtos são o motor recorrente.
        </p>
      </div>
    </SlideShell>
  );
}
