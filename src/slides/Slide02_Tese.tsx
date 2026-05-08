import { Area, AreaChart, CartesianGrid, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";
import { PNCP_TIMELINE } from "../data/pncp";

type Props = { step: number; slideNumber: number; totalSlides: number };

const blocos = [
  {
    n: "01",
    headline: "O mercado de IA no setor público é real e está acelerando.",
    subline:
      "R$ 906 milhões já contratados. Curva de crescimento de 3,5x de 2024 para 2025. Não é hipótese — são informações públicas do PNCP.",
  },
  {
    n: "02",
    headline: "Hoje capturado por contratações de licenças, cursos e soluções para atividades jurídicas e licitações.",
    subline: "Representantes de big techs, PRODs e outras empresas empresas já estabelecidas.",
  },
  {
    n: "03",
    headline: "Janela para ocupar o segmento focando em municípios pequenos e médios.",
    subline: "Não possuem equipes de TI estruturadas e utilizam IA precariamente sem respeitar LGPD.",
  },
];

function CustomTooltip({ active, payload }: { active?: boolean; payload?: any[] }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div
      className="bg-navy-deep border border-gold-soft rounded-xl px-3 py-2 font-body"
      style={{ fontSize: 13 }}
      data-no-advance
    >
      <div className="text-text font-semibold">
        {d.ano}
        {d.projecao ? " · projeção" : ""}
      </div>
      <div className="text-gold">R$ {d.valor_milhoes.toFixed(1)} mi</div>
    </div>
  );
}

export default function Slide02_Tese({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell step={step} slideNumber={slideNumber} totalSlides={totalSlides} caption="01 — A TESE">
      <div className="grid h-full" style={{ gridTemplateColumns: "52% 48%", gap: 56, marginTop: 16 }}>
        {/* LEFT — Tese */}
        <div className="flex flex-col h-full">
          <h2
            className="font-display text-text"
            style={{ fontSize: 52, fontWeight: 600, lineHeight: 1.05, marginBottom: 36 }}
          >
            A nossa tese, em três movimentos.
          </h2>

          <div className="flex flex-col gap-7 flex-1">
            {blocos.map((b, i) => (
              <RevealOnTrigger key={b.n} step={i + 1}>
                <div className="flex items-start gap-7">
                  <div
                    className="font-display text-gold shrink-0"
                    style={{ fontSize: 44, fontWeight: 600, lineHeight: 1, width: 70 }}
                  >
                    {b.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-text" style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.2 }}>
                      {b.headline}
                    </h3>
                    <p className="font-body text-text-muted mt-2" style={{ fontSize: 17, lineHeight: 1.5 }}>
                      {b.subline}
                    </p>
                  </div>
                </div>
              </RevealOnTrigger>
            ))}
          </div>

          <RevealOnTrigger step={3}>
            <p className="font-body italic text-gold mt-6" style={{ fontSize: 15 }}>
              IA é a nova infraestrutura cognitiva do setor público brasileiro.
            </p>
          </RevealOnTrigger>
        </div>

        {/* RIGHT — Curva */}
        <div className="flex flex-col h-full">
          <div
            className="font-body uppercase text-gold"
            style={{ fontSize: 12, letterSpacing: "0.15em", fontWeight: 700 }}
          >
            O mercado em números
          </div>
          <h3
            className="font-display text-text mt-2"
            style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, letterSpacing: "-1px" }}
          >
            R$ 906 mi
          </h3>
          <p className="font-body text-text-muted mt-2" style={{ fontSize: 16, lineHeight: 1.4 }}>
            em contratos de IA já firmados com a administração pública brasileira.
            <br />
            <span className="text-text-subtle">790 contratos · 310 municípios · curva 3,5x em 2025</span>
          </p>

          <div className="flex-1 mt-6 relative">
            <RevealOnTrigger step={1} duration={0.4}>
              <div style={{ width: "100%", height: 360 }}>
                <ResponsiveContainer>
                  <AreaChart data={PNCP_TIMELINE as any} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
                    <defs>
                      <linearGradient id="goldGradTese" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E8A33D" stopOpacity={0.7} />
                        <stop offset="100%" stopColor="#E8A33D" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#15294D" strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="ano"
                      stroke="#6B7A99"
                      tick={{ fill: "#B8C5D9", fontSize: 13, fontFamily: "Inter" }}
                      axisLine={{ stroke: "#15294D" }}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#6B7A99"
                      tick={{ fill: "#B8C5D9", fontSize: 12, fontFamily: "Inter" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `${v}`}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#E8A33D", strokeOpacity: 0.3 }} />
                    <Area
                      type="monotone"
                      dataKey={(d: any) => (d.projecao ? null : d.valor_milhoes)}
                      stroke="#E8A33D"
                      strokeWidth={3}
                      fill="url(#goldGradTese)"
                      isAnimationActive
                      animationDuration={1400}
                      connectNulls={false}
                    />
                    <Area
                      type="monotone"
                      dataKey={(d: any) => {
                        const arr = PNCP_TIMELINE as any;
                        const last = arr[arr.length - 2];
                        if (d.projecao) return d.valor_milhoes;
                        if (d.ano === last.ano) return d.valor_milhoes;
                        return null;
                      }}
                      stroke="#E8A33D"
                      strokeWidth={3}
                      strokeDasharray="8 6"
                      fill="url(#goldGradTese)"
                      fillOpacity={0.35}
                      isAnimationActive
                      animationDuration={1400}
                      connectNulls={false}
                    />
                    <ReferenceDot x={2025} y={602.3} r={6} fill="#E8A33D" stroke="#FFFFFF" strokeWidth={2} />
                    <ReferenceDot
                      x={2026}
                      y={920}
                      r={6}
                      fill="#0B1838"
                      stroke="#E8A33D"
                      strokeWidth={2}
                      strokeDasharray="3 2"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </RevealOnTrigger>
          </div>

          <p className="font-body text-text-subtle uppercase mt-2" style={{ fontSize: 11, letterSpacing: "0.1em" }}>
            Fonte: PNCP, extração própria, abril 2026 · 2026 = projeção
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
