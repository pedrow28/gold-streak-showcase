import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";
import { PNCP_LACUNAS } from "../data/pncp";

type Props = { step: number; slideNumber: number; totalSlides: number };

export default function Slide09_Lacunas({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell
      step={step}
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      caption="03 — A PAISAGEM COMPETITIVA"
    >
      <div className="flex flex-col h-full" style={{ marginTop: 16 }}>
        <h2
          className="font-display text-text"
          style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.05 }}
        >
          O que falta no mercado atual
        </h2>

        <div className="flex flex-col flex-1 justify-center mt-8">
          {PNCP_LACUNAS.map((l, i) => (
            <div key={l}>
              <RevealOnTrigger step={i + 1}>
                <div className="flex items-center gap-12" style={{ padding: "28px 0" }}>
                  <div
                    className="font-display text-gold shrink-0"
                    style={{ fontSize: 56, fontWeight: 600, lineHeight: 1, width: 110 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className="font-display text-text"
                    style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.3 }}
                  >
                    {l}
                  </div>
                </div>
              </RevealOnTrigger>
              {i < PNCP_LACUNAS.length - 1 && (
                <div className="h-px" style={{ backgroundColor: "rgba(232,163,61,0.18)" }} />
              )}
            </div>
          ))}
        </div>

        <p
          className="font-body italic text-text-muted mt-6"
          style={{ fontSize: 18, lineHeight: 1.5 }}
        >
          Cada uma dessas lacunas é uma oportunidade. As próximas seções mostram como preenchemos.
        </p>
      </div>
    </SlideShell>
  );
}
