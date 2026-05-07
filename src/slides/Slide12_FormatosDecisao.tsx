import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell";
import { useCurrentStep } from "../hooks/useSlideNavigation";
import { DIAGNOSTICO_FORMATOS } from "../data/pncp";

type Props = { step: number; slideNumber: number; totalSlides: number };

export default function Slide12_FormatosDecisao({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell
      step={step}
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      caption="04 — A CUNHA DO DIAGNÓSTICO"
    >
      <div className="flex flex-col h-full" style={{ marginTop: 16 }}>
        <h2
          className="font-display text-text"
          style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.1 }}
        >
          Formato — uma decisão para tomarmos juntos
        </h2>
        <p
          className="font-body text-text-muted mt-4"
          style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 1400 }}
        >
          Trazemos os eixos mapeados e nossa inclinação inicial. Decisão final faz mais sentido se feita junto, considerando o que funciona melhor para a operação comercial da Houer.
        </p>

        <FormatosCards />
      </div>
    </SlideShell>
  );
}

function FormatosCards() {
  const cur = useCurrentStep();
  void cur;
  return (
    <div className="grid grid-cols-3 gap-8 mt-10 flex-1" style={{ alignItems: "stretch" }}>
      {DIAGNOSTICO_FORMATOS.map((f, i) => (
        <motion.div
          key={f.formato}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.12 }}
          className="bg-navy-soft rounded-2xl relative flex flex-col"
          style={{
            padding: 32,
            border: f.inclinacao ? "1.5px solid #E8A33D" : "1px solid transparent",
          }}
        >
          {f.inclinacao && (
            <div
              className="absolute font-body uppercase bg-gold text-navy-deep rounded-full"
              style={{
                top: -14,
                left: 24,
                padding: "6px 14px",
                fontSize: 12,
                letterSpacing: "0.12em",
                fontWeight: 600,
              }}
            >
              Nossa inclinação inicial
            </div>
          )}

          <div
            className="font-display text-text"
            style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.2 }}
          >
            {f.formato}
          </div>

          <div className="h-px mt-5" style={{ backgroundColor: "rgba(232,163,61,0.25)" }} />

          <div className="mt-5">
            <div
              className="font-body uppercase text-gold"
              style={{ fontSize: 12, letterSpacing: "0.12em", fontWeight: 600 }}
            >
              Pros
            </div>
            <ul className="mt-3 space-y-2">
              {f.pros.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span
                    className="rounded-full bg-gold shrink-0"
                    style={{ width: 6, height: 6, marginTop: 10 }}
                  />
                  <span className="font-body text-text" style={{ fontSize: 16, lineHeight: 1.5 }}>
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <div
              className="font-body uppercase text-text-subtle"
              style={{ fontSize: 12, letterSpacing: "0.12em", fontWeight: 600 }}
            >
              Contras
            </div>
            <ul className="mt-3 space-y-2">
              {f.contras.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span
                    className="rounded-full bg-text-subtle shrink-0"
                    style={{ width: 6, height: 6, marginTop: 10 }}
                  />
                  <span className="font-body text-text-muted" style={{ fontSize: 16, lineHeight: 1.5 }}>
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
