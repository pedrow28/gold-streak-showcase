import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";
import attus from "../assets/logos/attus.png";
import startgov from "../assets/logos/startgov.png";
import justiceai from "../assets/logos/justiceai.png";
import sollai from "../assets/logos/sollai.png";
import licitoguru from "../assets/logos/licitoguru.png";
import jusia from "../assets/logos/jusia.png";

type Props = { step: number; slideNumber: number; totalSlides: number };

const players = [
  { logo: attus, nome: "Attus", url: "attus.ai", contratos: 5, valor: "R$ 32,9 mi" },
  { logo: startgov, nome: "StartBid · StartGov", url: "startbid.startgov.com.br", contratos: 82, valor: "R$ 6,8 mi" },
  { logo: justiceai, nome: "Justice AI", url: "justiceai.com.br", contratos: 42, valor: "R$ 3,5 mi", dark: true },
  { logo: sollai, nome: "SollAi", url: "sollai.com.br", contratos: 45, valor: "R$ 1,3 mi", dark: true },
  { logo: licitoguru, nome: "licito.guru", url: "licito.guru", contratos: 12, valor: "R$ 1,2 mi" },
  { logo: jusia, nome: "JusIA · Jusbrasil", url: "ia.jusbrasil.com.br", contratos: 18, valor: "R$ 0,6 mi" },
];

export default function Slide02_Concorrentes({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell step={step} slideNumber={slideNumber} totalSlides={totalSlides} caption="01 — O MERCADO JÁ EXISTE">
      <div className="flex flex-col h-full" style={{ marginTop: 12 }}>
        <h2 className="font-display text-text" style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.05 }}>
          Soluções já consolidadas
        </h2>
        <p className="font-body text-text-muted mt-3" style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 1100 }}>
          SaaS com IA jurídica para auxiliar a fase interna da licitação — elaboração de documentos, análise, conformidade.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-10 flex-1" style={{ gridAutoRows: "1fr" }}>
          {players.map((p, i) => (
            <RevealOnTrigger key={p.nome} step={Math.floor(i / 2) + 1}>
              <div className="bg-navy-soft rounded-2xl flex flex-col h-full" style={{ padding: 28 }}>
                <div
                  className="rounded-xl flex items-center justify-center"
                  style={{ height: 130, background: p.dark ? "#0B1E3F" : "#FFFFFF", padding: 18 }}
                >
                  <img
                    src={p.logo}
                    alt={p.nome}
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                  />
                </div>
                <div className="mt-5 flex-1 flex flex-col">
                  <div className="font-display text-text" style={{ fontSize: 22, fontWeight: 600 }}>
                    {p.nome}
                  </div>
                  <div className="font-body text-text-subtle mt-1" style={{ fontSize: 13 }}>
                    {p.url}
                  </div>
                  <div className="mt-auto pt-4 flex items-baseline gap-3">
                    <div className="font-display text-gold" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>
                      {p.contratos}
                    </div>
                    <div className="font-body text-text-muted" style={{ fontSize: 14 }}>
                      contratos
                    </div>
                    <div
                      className="font-display text-text ml-auto"
                      style={{ fontSize: 20, fontWeight: 600 }}
                    >
                      {p.valor}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnTrigger>
          ))}
        </div>

        <RevealOnTrigger step={4}>
          <p className="font-body italic text-gold mt-6" style={{ fontSize: 18 }}>
            O jurídico-licitatório já foi capturado. <span className="text-text">Sobra todo o resto.</span>
          </p>
        </RevealOnTrigger>
      </div>
    </SlideShell>
  );
}
