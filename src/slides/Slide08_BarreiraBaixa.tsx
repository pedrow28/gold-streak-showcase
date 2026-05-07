import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

const insights = [
  {
    numero: "81,5%",
    headline: "dos contratos são via Inexigibilidade ou Dispensa",
    subline:
      "Não há barreira de licitação. O jogo é relacionamento, reputação e produto certo. Exatamente o que a Houer já faz melhor.",
  },
  {
    numero: "67%",
    headline: "do valor concentrado nos top 10 fornecedores",
    subline:
      "Mas em contagem o mercado é pulverizado. Cerca de 30 players ativos. Há espaço para entrar e crescer.",
  },
  {
    numero: "52%",
    headline: "dos contratos atuais são wrappers de Lei 14.133",
    subline:
      "Quase ninguém vertical para outras dores públicas. O gap real está na verticalização por persona.",
  },
];

export default function Slide08_BarreiraBaixa({ step, slideNumber, totalSlides }: Props) {
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
          A barreira é mais baixa do que parece
        </h2>

        <div className="flex flex-col flex-1 justify-center mt-10">
          {insights.map((ins, i) => (
            <div key={ins.numero}>
              <RevealOnTrigger step={i + 1}>
                <div className="grid items-center" style={{ gridTemplateColumns: "40% 60%", padding: "32px 0" }}>
                  <div
                    className="font-display text-gold"
                    style={{ fontSize: 144, fontWeight: 700, lineHeight: 1, letterSpacing: "-3px" }}
                  >
                    {ins.numero}
                  </div>
                  <div>
                    <h3
                      className="font-display text-text"
                      style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.2 }}
                    >
                      {ins.headline}
                    </h3>
                    <p
                      className="font-body text-text-muted mt-3"
                      style={{ fontSize: 18, lineHeight: 1.5 }}
                    >
                      {ins.subline}
                    </p>
                  </div>
                </div>
              </RevealOnTrigger>
              {i < insights.length - 1 && (
                <div className="h-px" style={{ backgroundColor: "rgba(232,163,61,0.18)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
