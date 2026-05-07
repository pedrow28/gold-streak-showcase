import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell";
import { useCurrentStep } from "../hooks/useSlideNavigation";
import { DIAGNOSTICO_FUNIL } from "../data/pncp";

type Props = { step: number; slideNumber: number; totalSlides: number };

export default function Slide11_FunilDiagnostico({ step, slideNumber, totalSlides }: Props) {
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
          style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.05 }}
        >
          O diagnóstico é a porta de entrada
        </h2>

        <div className="flex-1 flex items-center justify-center mt-6">
          <Funil />
        </div>

        <p
          className="font-body italic text-text-muted text-center"
          style={{ fontSize: 18, lineHeight: 1.5 }}
        >
          O diagnóstico não é o produto. É o cavalo de Troia. Mas tem valor próprio: o gestor sai com um mapa real na mão.
        </p>
      </div>
    </SlideShell>
  );
}

function Funil() {
  const cur = useCurrentStep();
  // Larguras crescentes
  const widths = [240, 320, 400, 480];
  const heights = 280;

  return (
    <div className="flex items-center" style={{ gap: 24 }}>
      {DIAGNOSTICO_FUNIL.map((etapa, i) => {
        const isLast = i === DIAGNOSTICO_FUNIL.length - 1;
        const visible = cur >= i + 1;
        return (
          <div key={etapa.etapa} className="flex items-center" style={{ gap: 24 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl flex flex-col justify-center"
              style={{
                width: widths[i],
                height: heights,
                padding: 24,
                backgroundColor: isLast ? "#E8A33D" : "#15294D",
                border: isLast ? "none" : "1px solid rgba(232,163,61,0.35)",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: isLast ? "#061427" : "#FFFFFF",
                  lineHeight: 1.2,
                }}
              >
                {etapa.etapa}
              </div>
              <div
                className="font-body mt-3"
                style={{
                  fontSize: 14,
                  lineHeight: 1.4,
                  color: isLast ? "#061427" : "#B8C5D9",
                }}
              >
                {etapa.descricao}
              </div>
            </motion.div>
            {!isLast && (
              <motion.svg
                width="32"
                height="20"
                initial={{ opacity: 0 }}
                animate={visible && cur >= i + 2 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M0 10 L24 10 M16 4 L24 10 L16 16"
                  stroke="#E8A33D"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
