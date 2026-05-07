import { Compass, Globe, ArrowRight } from "lucide-react";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

export default function Slide07_Oferta({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell step={step} slideNumber={slideNumber} totalSlides={totalSlides} caption="04 — COMO ENTRAMOS">
      <div className="flex flex-col h-full" style={{ marginTop: 12 }}>
        <h2 className="font-display text-text" style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.05 }}>
          Abordagem propositiva, com valor antes do contrato.
        </h2>
        <p className="font-body text-text-muted mt-3" style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 1100 }}>
          Não chegamos vendendo software. Chegamos diagnosticando — e o produto certo aparece naturalmente.
        </p>

        <div className="grid grid-cols-2 gap-7 mt-10 flex-1" style={{ gridAutoRows: "1fr" }}>
          <RevealOnTrigger step={1}>
            <div className="bg-navy-soft rounded-2xl h-full flex flex-col" style={{ padding: 36 }}>
              <div className="flex items-center gap-3">
                <div
                  className="rounded-xl flex items-center justify-center"
                  style={{ width: 48, height: 48, background: "rgba(232,163,61,0.15)" }}
                >
                  <Compass size={24} color="#E8A33D" />
                </div>
                <div className="font-body uppercase text-gold" style={{ fontSize: 12, letterSpacing: "0.18em", fontWeight: 700 }}>
                  Serviço · presencial ou remoto
                </div>
              </div>
              <div className="font-display text-text mt-5" style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.15 }}>
                Consultoria de IA
              </div>
              <p className="font-body text-text-muted mt-3" style={{ fontSize: 16, lineHeight: 1.5 }}>
                Entrevista diagnóstica ao vivo com a prefeitura. Mapeamos maturidade, time de TI,
                ferramentas em uso e capacidade de build vs. buy.
              </p>
              <div className="mt-6 flex flex-col gap-2.5">
                {[
                  "Entrevista estruturada com gestor e time",
                  "Diagnóstico de maturidade em IA",
                  "Relatório com usos práticos para a rotina",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <div className="rounded-full bg-gold shrink-0" style={{ width: 6, height: 6, marginTop: 9 }} />
                    <div className="font-body text-text" style={{ fontSize: 15 }}>{b}</div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6 flex items-center gap-2 font-body text-gold" style={{ fontSize: 14, fontWeight: 600 }}>
                Entrega: relatório executivo personalizado <ArrowRight size={14} />
              </div>
            </div>
          </RevealOnTrigger>

          <RevealOnTrigger step={2}>
            <div className="bg-navy-soft rounded-2xl h-full flex flex-col" style={{ padding: 36 }}>
              <div className="flex items-center gap-3">
                <div
                  className="rounded-xl flex items-center justify-center"
                  style={{ width: 48, height: 48, background: "rgba(232,163,61,0.15)" }}
                >
                  <Globe size={24} color="#E8A33D" />
                </div>
                <div className="font-body uppercase text-gold" style={{ fontSize: 12, letterSpacing: "0.18em", fontWeight: 700 }}>
                  Captação · escala digital
                </div>
              </div>
              <div className="font-display text-text mt-5" style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.15 }}>
                Página web de diagnóstico
              </div>
              <p className="font-body text-text-muted mt-3" style={{ fontSize: 16, lineHeight: 1.5 }}>
                O gestor responde perguntas adaptativas — cada resposta personaliza a próxima.
                Recebe um relatório imediato com recomendações de IA para o seu órgão.
              </p>

              {/* mini form mockup */}
              <div className="mt-5 rounded-xl p-4" style={{ background: "#0B1E3F" }}>
                <div className="font-body" style={{ fontSize: 11, color: "#6B7A99", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Pergunta 3 / 8
                </div>
                <div className="font-display text-text mt-2" style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3 }}>
                  Sua prefeitura tem equipe interna de TI?
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  {["Sim, com desenvolvedores", "Sim, apenas suporte", "Não, terceirizamos tudo"].map((opt, i) => (
                    <div
                      key={opt}
                      className="rounded-lg px-3 py-2 font-body"
                      style={{
                        fontSize: 13,
                        color: i === 1 ? "#061427" : "#FFFFFF",
                        background: i === 1 ? "#E8A33D" : "rgba(255,255,255,0.05)",
                        border: i === 1 ? "none" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 flex items-center gap-2 font-body text-gold" style={{ fontSize: 14, fontWeight: 600 }}>
                Entrega: relatório imediato + lead qualificado <ArrowRight size={14} />
              </div>
            </div>
          </RevealOnTrigger>
        </div>

        <RevealOnTrigger step={3}>
          <p className="font-display italic text-gold mt-7 text-center" style={{ fontSize: 28, fontWeight: 500 }}>
            Entramos pelo diagnóstico. Crescemos pelo produto certo.
          </p>
        </RevealOnTrigger>
      </div>
    </SlideShell>
  );
}
