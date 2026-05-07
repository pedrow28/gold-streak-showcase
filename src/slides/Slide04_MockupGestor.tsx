import { motion } from "framer-motion";
import { Building2, Send, Share2, School } from "lucide-react";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

export default function Slide04_MockupGestor({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell step={step} slideNumber={slideNumber} totalSlides={totalSlides} caption="03 — MOCKUP 01">
      <div className="grid h-full" style={{ gridTemplateColumns: "40% 60%", gap: 56, marginTop: 12 }}>
        {/* LEFT */}
        <div className="flex flex-col h-full justify-center">
          <div
            className="font-body uppercase text-gold"
            style={{ fontSize: 12, letterSpacing: "0.18em", fontWeight: 700 }}
          >
            IA do Gestor Municipal
          </div>
          <h2
            className="font-display text-text mt-3"
            style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.05 }}
          >
            A prefeitura na palma da mão.
          </h2>
          <p className="font-body text-text-muted mt-5" style={{ fontSize: 19, lineHeight: 1.5 }}>
            Assistente conectado às planilhas e sistemas internos da prefeitura. Em segundos, o gestor
            tem o número certo, o histórico, e uma sugestão de comunicação.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            {[
              "Escolas, contratos, obras, frota, praças, árvores",
              "Resposta em tempo real, sem ligar para a secretaria",
              "Pronto para virar discurso, post ou ofício",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3">
                <div className="rounded-full bg-gold shrink-0" style={{ width: 8, height: 8, marginTop: 9 }} />
                <div className="font-body text-text" style={{ fontSize: 17, lineHeight: 1.45 }}>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Phone mockup */}
        <div className="flex items-center justify-center h-full">
          <div
            className="relative rounded-[48px] overflow-hidden"
            style={{
              width: 460,
              height: 820,
              background: "#061427",
              border: "10px solid #1a1f2e",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,163,61,0.15)",
            }}
          >
            {/* Notch */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-b-3xl bg-black z-10"
              style={{ width: 140, height: 28, top: 0 }}
            />
            {/* Header */}
            <div
              className="flex items-center gap-3 px-6"
              style={{ paddingTop: 56, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="rounded-xl flex items-center justify-center"
                style={{ width: 40, height: 40, background: "rgba(232,163,61,0.15)" }}
              >
                <Building2 size={20} color="#E8A33D" />
              </div>
              <div>
                <div className="font-display text-text" style={{ fontSize: 16, fontWeight: 600 }}>
                  Prefeito.IA
                </div>
                <div className="font-body text-success" style={{ fontSize: 11 }}>
                  ● online
                </div>
              </div>
            </div>

            {/* Chat */}
            <div className="p-5 flex flex-col gap-4" style={{ height: "calc(100% - 102px - 70px)" }}>
              <RevealOnTrigger step={1}>
                <div className="self-end max-w-[80%] rounded-2xl rounded-br-md px-4 py-3 bg-gold">
                  <div className="font-body" style={{ fontSize: 14, lineHeight: 1.4, color: "#061427" }}>
                    Quantas escolas têm reforma pendente em 2026?
                  </div>
                </div>
              </RevealOnTrigger>

              <RevealOnTrigger step={2}>
                <div className="self-start max-w-[88%] rounded-2xl rounded-bl-md px-4 py-3 bg-navy-soft">
                  <div className="font-body text-text-muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
                    Encontrei nas planilhas da Sec. de Educação:
                  </div>
                  <div
                    className="font-display text-gold mt-2"
                    style={{ fontSize: 56, fontWeight: 700, lineHeight: 1 }}
                  >
                    14
                  </div>
                  <div className="font-body text-text-muted" style={{ fontSize: 12 }}>
                    escolas com reforma pendente · R$ 4,2 mi previsto
                  </div>
                  <div className="mt-3 flex flex-col gap-1.5">
                    {["EM Cecília Meireles", "EMEI Castro Alves", "EM Tarsila do Amaral"].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <School size={12} color="#6B7A99" />
                        <div className="font-body text-text-muted" style={{ fontSize: 11 }}>
                          {s}
                        </div>
                      </div>
                    ))}
                    <div className="font-body text-text-subtle" style={{ fontSize: 11 }}>
                      + 11 outras
                    </div>
                  </div>
                </div>
              </RevealOnTrigger>

              <RevealOnTrigger step={3}>
                <motion.button
                  className="self-start flex items-center gap-2 rounded-full px-4 py-2.5"
                  style={{ background: "rgba(232,163,61,0.15)", border: "1px solid rgba(232,163,61,0.4)" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Instagram size={14} color="#E8A33D" />
                  <span className="font-body text-gold" style={{ fontSize: 12, fontWeight: 600 }}>
                    Gerar post para o Instagram
                  </span>
                </motion.button>
              </RevealOnTrigger>
            </div>

            {/* Input */}
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center gap-2"
              style={{ background: "#061427", borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="flex-1 rounded-full px-4 py-2.5 font-body text-text-subtle"
                style={{ background: "rgba(255,255,255,0.05)", fontSize: 13 }}
              >
                Pergunte algo…
              </div>
              <div
                className="rounded-full bg-gold flex items-center justify-center"
                style={{ width: 38, height: 38 }}
              >
                <Send size={16} color="#061427" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
