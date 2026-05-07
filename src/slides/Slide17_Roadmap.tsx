import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell";
import { useCurrentStep } from "../hooks/useSlideNavigation";

type Props = { step: number; slideNumber: number; totalSlides: number };

const milestones = [
  { range: "M0–M2", desc: "Estruturação jurídica + escolha de entes-piloto", opacity: 1, fill: true },
  { range: "M3–M5", desc: "Piloto do diagnóstico em 2 entes", opacity: 1, fill: true },
  { range: "M6–M8", desc: "Lançamento Cidadão.IO em primeiro município", opacity: 1, fill: true },
  { range: "M9–M11", desc: "Lançamento Academy em órgão estadual ou federal", opacity: 0.6, fill: true },
  { range: "M12–M15", desc: "Empacotamento do diagnóstico em software", opacity: 0.4, fill: true },
  { range: "M16–M18", desc: "Data Analyst SUS em piloto", opacity: 1, fill: false },
];

export default function Slide17_Roadmap({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell
      step={step}
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      caption="05 — O QUE ESTAMOS CONSTRUINDO"
    >
      <div className="flex flex-col h-full" style={{ marginTop: 16 }}>
        <h2
          className="font-display text-text"
          style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.1 }}
        >
          Roadmap de execução — 12 a 18 meses
        </h2>

        <div className="flex-1 flex items-center">
          <Timeline />
        </div>

        <p
          className="font-body italic text-text-muted text-center"
          style={{ fontSize: 18, lineHeight: 1.5 }}
        >
          Cronograma realista. Piloto antes de escala. Cada produto valida o anterior.
        </p>
      </div>
    </SlideShell>
  );
}

function Timeline() {
  const cur = useCurrentStep();
  const total = milestones.length;

  return (
    <div className="relative w-full" style={{ height: 360 }}>
      {/* Continuous line */}
      <div
        className="absolute"
        style={{
          left: "5%",
          right: "5%",
          top: "50%",
          height: 2,
          backgroundColor: "rgba(232,163,61,0.35)",
        }}
      />

      <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <div className="w-full flex justify-between items-center">
          {milestones.map((m, i) => {
            const visible = cur >= i;
            const above = i % 2 === 0;
            return (
              <motion.div
                key={m.range}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative flex flex-col items-center"
                style={{ width: `${100 / total}%` }}
              >
                {/* Label above or below */}
                <div
                  className="absolute"
                  style={{
                    [above ? "bottom" : "top"]: 30,
                    width: 200,
                    textAlign: "center",
                  }}
                >
                  <div
                    className="font-display text-gold"
                    style={{ fontSize: 16, fontWeight: 600, opacity: m.opacity }}
                  >
                    {m.range}
                  </div>
                  <div
                    className="font-body text-text mt-2"
                    style={{ fontSize: 14, lineHeight: 1.4, opacity: m.opacity }}
                  >
                    {m.desc}
                  </div>
                </div>

                {/* Node */}
                <div
                  className="rounded-full"
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: m.fill ? "#E8A33D" : "transparent",
                    border: `2px solid #E8A33D`,
                    opacity: m.opacity,
                    boxShadow: m.fill && m.opacity === 1 ? "0 0 12px rgba(232,163,61,0.6)" : "none",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
