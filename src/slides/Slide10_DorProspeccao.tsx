import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

const bullets = [
  "O gestor não sabe o que precisa.",
  "Não sabe o que existe no mercado.",
  "Não confia em quem chega no frio.",
];

export default function Slide10_DorProspeccao({ step, slideNumber, totalSlides }: Props) {
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
          style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}
        >
          Vender IA cold para prefeito não funciona
        </h2>

        <div className="flex flex-col gap-8 mt-12">
          {bullets.map((b, i) => (
            <RevealOnTrigger key={b} step={i + 1}>
              <div className="flex items-center gap-8">
                <div className="bg-gold shrink-0" style={{ width: 24, height: 2 }} />
                <div
                  className="font-display text-text"
                  style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.25 }}
                >
                  {b}
                </div>
              </div>
            </RevealOnTrigger>
          ))}
        </div>

        <div className="flex-1 flex items-end justify-center">
          <RevealOnTrigger step={4}>
            <div
              className="rounded-2xl flex items-start gap-6"
              style={{
                padding: 40,
                width: "60%",
                backgroundColor: "rgba(232,163,61,0.15)",
                border: "1px solid rgba(232,163,61,0.5)",
              }}
            >
              <div
                className="font-display text-gold shrink-0"
                style={{ fontSize: 96, fontWeight: 700, lineHeight: 0.7 }}
              >
                “
              </div>
              <p
                className="font-body text-text"
                style={{ fontSize: 22, lineHeight: 1.5 }}
              >
                E ele tem razão. A maturidade em IA do setor público brasileiro é incipiente. Vender produto direto é tentar ensinar a quem ainda não fez a pergunta certa.
              </p>
            </div>
          </RevealOnTrigger>
        </div>
      </div>
    </SlideShell>
  );
}
