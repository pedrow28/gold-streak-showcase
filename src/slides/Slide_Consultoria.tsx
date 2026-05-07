import { motion } from "framer-motion";
import { Mic, Layers, FileText, ArrowRight } from "lucide-react";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

const etapas = [
  {
    icon: Mic,
    tag: "01 · Entrevista ao vivo",
    titulo: "Diagnóstico com a prefeitura",
    descricao:
      "Sessão guiada com gestores e equipe técnica para entender a maturidade real do órgão com Inteligência Artificial.",
    bullets: ["Conversa qualitativa estruturada", "Mapeamento de dores e fluxos", "Leitura de prontidão tecnológica"],
  },
  {
    icon: Layers,
    tag: "02 · Framework",
    titulo: "Modelo próprio de avaliação",
    descricao:
      "Aplicamos nosso framework de maturidade em IA pública para classificar o órgão em eixos comparáveis.",
    bullets: ["Pessoas · Processos · Dados · Governança", "Benchmark com outras prefeituras", "Score por eixo"],
  },
  {
    icon: FileText,
    tag: "03 · Relatório",
    titulo: "Usos práticos de IA na rotina",
    descricao:
      "Entregamos um relatório executivo com recomendações priorizadas — caminhos reais de IA para a operação.",
    bullets: ["Casos de uso priorizados", "Quick wins e roadmap 90/180 dias", "Ponte natural para os produtos"],
  },
];

export default function Slide_Consultoria({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell
      step={step}
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      caption="04 — A CUNHA: CONSULTORIA DIAGNÓSTICA"
    >
      <div className="flex flex-col h-full" style={{ marginTop: 16 }}>
        <RevealOnTrigger step={0}>
          <div
            className="font-body uppercase text-gold"
            style={{ fontSize: 12, letterSpacing: "0.18em", fontWeight: 700 }}
          >
            Serviço de entrada
          </div>
        </RevealOnTrigger>

        <h2
          className="font-display text-text mt-3"
          style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.05 }}
        >
          Consultoria de IA para o setor público
        </h2>
        <p
          className="font-body text-text-muted mt-4"
          style={{ fontSize: 22, lineHeight: 1.5, maxWidth: 1080 }}
        >
          Entramos pela porta certa: ouvimos o gestor, aplicamos um framework próprio e devolvemos um plano
          concreto de IA para a rotina da prefeitura.
        </p>

        <div className="flex items-stretch gap-5 mt-10 flex-1">
          {etapas.map((e, i) => {
            const Icon = e.icon;
            return (
              <div key={e.tag} className="flex items-stretch gap-5 flex-1">
                <RevealOnTrigger step={i + 1} className="flex-1">
                  <motion.div
                    className="bg-navy-soft rounded-2xl flex flex-col h-full"
                    style={{ padding: 28 }}
                  >
                    <div
                      className="rounded-xl flex items-center justify-center"
                      style={{ width: 48, height: 48, background: "rgba(232,163,61,0.15)" }}
                    >
                      <Icon size={24} color="#E8A33D" />
                    </div>
                    <div
                      className="font-body uppercase text-gold mt-4"
                      style={{ fontSize: 11, letterSpacing: "0.18em", fontWeight: 700 }}
                    >
                      {e.tag}
                    </div>
                    <div
                      className="font-display text-text mt-2"
                      style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.2 }}
                    >
                      {e.titulo}
                    </div>
                    <p
                      className="font-body text-text-muted mt-3"
                      style={{ fontSize: 15, lineHeight: 1.5 }}
                    >
                      {e.descricao}
                    </p>
                    <div
                      className="h-px mt-5 mb-4"
                      style={{ background: "rgba(232,163,61,0.25)" }}
                    />
                    <ul className="flex flex-col gap-2">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"
                            style={{ marginTop: 7 }}
                          />
                          <span
                            className="font-body text-text"
                            style={{ fontSize: 13.5, lineHeight: 1.4 }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </RevealOnTrigger>
                {i < etapas.length - 1 && (
                  <div className="flex items-center">
                    <ArrowRight size={28} color="#E8A33D" opacity={0.6} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <RevealOnTrigger step={4}>
          <div
            className="rounded-2xl mt-7 flex items-center gap-5"
            style={{
              background: "linear-gradient(90deg, rgba(232,163,61,0.12), rgba(232,163,61,0))",
              border: "1px solid rgba(232,163,61,0.35)",
              padding: 22,
            }}
          >
            <div
              className="font-display text-gold shrink-0"
              style={{ fontSize: 38, fontWeight: 700, lineHeight: 1 }}
            >
              →
            </div>
            <p
              className="font-body text-text"
              style={{ fontSize: 19, lineHeight: 1.4 }}
            >
              <span className="font-display text-text" style={{ fontWeight: 600 }}>
                A consultoria abre a porta.
              </span>{" "}
              <span className="text-text-muted">
                Saímos com diagnóstico em mãos, confiança construída e ponte natural para os produtos do portfolio.
              </span>
            </p>
          </div>
        </RevealOnTrigger>
      </div>
    </SlideShell>
  );
}
