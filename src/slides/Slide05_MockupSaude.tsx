import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Cell } from "recharts";
import { Activity, Mail, TrendingDown, TrendingUp } from "lucide-react";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

const motivos = [
  { motivo: "Pneumonia", n: 312 },
  { motivo: "Parto", n: 258 },
  { motivo: "Diabetes", n: 184 },
  { motivo: "AVC", n: 142 },
  { motivo: "IAM", n: 96 },
];

export default function Slide05_MockupSaude({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell step={step} slideNumber={slideNumber} totalSlides={totalSlides} caption="03 — MOCKUP 02">
      <div className="grid h-full" style={{ gridTemplateColumns: "42% 58%", gap: 56, marginTop: 12 }}>
        {/* LEFT */}
        <div className="flex flex-col h-full justify-center">
          <div
            className="font-body uppercase text-gold"
            style={{ fontSize: 12, letterSpacing: "0.18em", fontWeight: 700 }}
          >
            IA de Saúde · DATASUS
          </div>
          <h2
            className="font-display text-text mt-3"
            style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.05 }}
          >
            Saúde pública traduzida em decisão.
          </h2>
          <p className="font-body text-text-muted mt-5" style={{ fontSize: 19, lineHeight: 1.5 }}>
            Assistente especializado em DATASUS. Conversa com o gestor e gera relatórios estratégicos
            automaticamente, todo mês, sobre uma área extremamente sensível.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            {[
              "Pergunte: o principal motivo de internação no município",
              "Identifique procedimentos buscados em outras cidades",
              "Relatório executivo enviado todo dia 5, sem pedir",
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

        {/* RIGHT — Report mockup */}
        <div className="flex items-center justify-center h-full">
          <div
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{
              width: "100%",
              maxWidth: 720,
              background: "#FFFFFF",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              color: "#0B1E3F",
            }}
          >
            {/* Header bar */}
            <div className="flex items-center gap-3 px-6 py-4" style={{ background: "#0B1E3F", color: "#FFFFFF" }}>
              <div
                className="rounded-lg flex items-center justify-center"
                style={{ width: 36, height: 36, background: "rgba(232,163,61,0.2)" }}
              >
                <Activity size={18} color="#E8A33D" />
              </div>
              <div className="flex-1">
                <div className="font-display" style={{ fontSize: 17, fontWeight: 600 }}>
                  Relatório de Saúde — Abril/2026
                </div>
                <div className="font-body" style={{ fontSize: 11, color: "#B8C5D9" }}>
                  Município de São Lourenço · Dados DATASUS · 12 páginas
                </div>
              </div>
              <div className="font-body" style={{ fontSize: 11, color: "#B8C5D9" }}>SUS.IA</div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-5">
              {/* Stat cards */}
              <RevealOnTrigger step={1}>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl p-4" style={{ background: "#F4F6FA" }}>
                    <div className="font-body" style={{ fontSize: 11, color: "#6B7A99", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Internações
                    </div>
                    <div className="font-display mt-1" style={{ fontSize: 32, fontWeight: 700, color: "#0B1E3F" }}>
                      992
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp size={12} color="#16A34A" />
                      <div className="font-body" style={{ fontSize: 11, color: "#16A34A" }}>
                        +8% vs. mar
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: "#F4F6FA" }}>
                    <div className="font-body" style={{ fontSize: 11, color: "#6B7A99", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Top motivo
                    </div>
                    <div className="font-display mt-1" style={{ fontSize: 22, fontWeight: 700, color: "#0B1E3F", lineHeight: 1.1 }}>
                      Pneumonia
                    </div>
                    <div className="font-body mt-1" style={{ fontSize: 11, color: "#6B7A99" }}>
                      312 casos · 31%
                    </div>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: "#F4F6FA" }}>
                    <div className="font-body" style={{ fontSize: 11, color: "#6B7A99", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Fora do município
                    </div>
                    <div className="font-display mt-1" style={{ fontSize: 32, fontWeight: 700, color: "#0B1E3F" }}>
                      147
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingDown size={12} color="#DC2626" />
                      <div className="font-body" style={{ fontSize: 11, color: "#DC2626" }}>
                        oncologia, cardio
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnTrigger>

              {/* Chart */}
              <RevealOnTrigger step={2}>
                <div className="rounded-xl p-4" style={{ background: "#F4F6FA" }}>
                  <div className="font-body mb-2" style={{ fontSize: 12, color: "#6B7A99", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Top 5 motivos de internação
                  </div>
                  <div style={{ width: "100%", height: 180 }}>
                    <ResponsiveContainer>
                      <BarChart data={motivos} layout="vertical" margin={{ top: 4, right: 30, left: 0, bottom: 0 }}>
                        <XAxis type="number" hide />
                        <YAxis
                          type="category"
                          dataKey="motivo"
                          tick={{ fill: "#0B1E3F", fontSize: 12, fontFamily: "Inter" }}
                          axisLine={false}
                          tickLine={false}
                          width={90}
                        />
                        <Bar dataKey="n" radius={[0, 6, 6, 0]} label={{ fill: "#0B1E3F", fontSize: 11, position: "right" }}>
                          {motivos.map((_, i) => (
                            <Cell key={i} fill={i === 0 ? "#E8A33D" : "#0B1E3F"} fillOpacity={i === 0 ? 1 : 0.75 - i * 0.1} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </RevealOnTrigger>

              {/* Auto-send */}
              <RevealOnTrigger step={3}>
                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: "rgba(232,163,61,0.12)", border: "1px solid rgba(232,163,61,0.3)" }}
                >
                  <Mail size={16} color="#E8A33D" />
                  <div className="font-body" style={{ fontSize: 13, color: "#0B1E3F" }}>
                    Enviado automaticamente todo dia <strong>5</strong> para gabinete e secretaria de saúde.
                  </div>
                </div>
              </RevealOnTrigger>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
