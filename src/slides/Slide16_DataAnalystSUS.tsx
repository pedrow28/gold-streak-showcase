import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

const CYAN = "#38bdf8";

export default function Slide16_DataAnalystSUS({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell
      step={step}
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      caption="05 — O QUE ESTAMOS CONSTRUINDO"
    >
      <div className="grid h-full" style={{ gridTemplateColumns: "35% 65%", gap: 40, marginTop: 8 }}>
        <div className="flex flex-col" style={{ paddingTop: 12 }}>
          <RevealOnTrigger step={0}>
            <div
              className="font-body uppercase text-gold"
              style={{ fontSize: 12, letterSpacing: "0.18em", fontWeight: 700 }}
            >
              Produto 03 — Teaser
            </div>
          </RevealOnTrigger>
          <RevealOnTrigger step={0}>
            <h2
              className="font-display text-text mt-3"
              style={{ fontSize: 44, fontWeight: 600, lineHeight: 1.1 }}
            >
              Data Analyst SUS
            </h2>
          </RevealOnTrigger>
          <RevealOnTrigger step={1}>
            <p
              className="font-body italic text-gold mt-4"
              style={{ fontSize: 20, lineHeight: 1.4 }}
            >
              O secretário municipal de saúde finalmente tem um analista sênior.
            </p>
          </RevealOnTrigger>

          <RevealOnTrigger step={2}>
            <div className="bg-navy-soft rounded-2xl mt-6" style={{ padding: 20 }}>
              <div
                className="font-body uppercase text-gold"
                style={{ fontSize: 11, letterSpacing: "0.14em", fontWeight: 700 }}
              >
                Persona compradora
              </div>
              <div className="font-body text-text mt-2" style={{ fontSize: 15, lineHeight: 1.45 }}>
                Secretário Municipal de Saúde
              </div>
            </div>
          </RevealOnTrigger>

          <RevealOnTrigger step={3}>
            <div className="mt-5">
              <div
                className="font-body uppercase text-gold"
                style={{ fontSize: 11, letterSpacing: "0.14em", fontWeight: 700 }}
              >
                Dor
              </div>
              <div className="font-body text-text mt-2" style={{ fontSize: 14, lineHeight: 1.5 }}>
                DATASUS é mina de ouro. Ninguém em prefeitura pequena tem capacidade analítica para
                minerar. Decisões de saúde pública são feitas no escuro.
              </div>
            </div>
          </RevealOnTrigger>

          <RevealOnTrigger step={4}>
            <div className="mt-5">
              <div
                className="font-body uppercase text-gold"
                style={{ fontSize: 11, letterSpacing: "0.14em", fontWeight: 700 }}
              >
                Por que nós conseguimos fazer
              </div>
              <div className="font-body text-text mt-2" style={{ fontSize: 14, lineHeight: 1.5 }}>
                Sabemos quais perguntas o secretário precisa fazer mesmo quando ele não sabe que
                precisa fazer.
              </div>
            </div>
          </RevealOnTrigger>

          <RevealOnTrigger step={5}>
            <div
              className="mt-auto rounded-full self-start"
              style={{
                fontSize: 13,
                padding: "8px 16px",
                backgroundColor: "rgba(56,189,248,0.18)",
                border: `1px solid ${CYAN}`,
                color: CYAN,
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              Em produção como bot Telegram
            </div>
          </RevealOnTrigger>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden relative"
          style={{
            backgroundColor: "#0a0e1a",
            borderRadius: 16,
            boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          }}
        >
          <SUSMockup />
        </motion.div>
      </div>
    </SlideShell>
  );
}

function SUSMockup() {
  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ fontFamily: "var(--font-body)", padding: 24, gap: 16 }}
    >
      {/* Chat layer */}
      <div className="flex flex-col gap-3" style={{ flex: "0 0 auto" }}>
        {/* User bubble */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="self-end"
          style={{
            backgroundColor: "#1e293b",
            color: "white",
            padding: "12px 16px",
            borderRadius: 18,
            borderBottomRightRadius: 6,
            maxWidth: "75%",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          Vou assumir a Secretaria Municipal de Saúde de Morada Nova de Minas. Quero que puxe os
          dados do datalake para me dar um relatório completo com tudo que eu preciso saber.
        </motion.div>

        {/* Analyzing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0.5, 1] }}
          transition={{ duration: 1.6, delay: 0.7 }}
          className="self-start flex items-center gap-2"
          style={{ color: CYAN, fontSize: 11, paddingLeft: 4 }}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              border: `2px solid ${CYAN}`,
              borderTopColor: "transparent",
              borderRadius: 999,
            }}
          />
          Analisando...
        </motion.div>

        {/* AI bubble */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="self-start"
          style={{
            backgroundColor: "transparent",
            border: `1px solid rgba(56,189,248,0.3)`,
            color: "white",
            padding: "12px 16px",
            borderRadius: 18,
            borderBottomLeftRadius: 6,
            maxWidth: "75%",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          Analisando dados de SIH/CNES, InfoDengue e CNES — 953 internações, 30 hospitais utilizados.
          Relatório executivo gerado em 4 segundos.
        </motion.div>
      </div>

      {/* Report card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="flex-1"
        style={{
          backgroundColor: "#0f1729",
          border: "1px solid rgba(56,189,248,0.2)",
          borderRadius: 18,
          padding: 28,
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: "rgba(56,189,248,0.15)",
            color: CYAN,
            fontSize: 11,
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: 6,
            letterSpacing: "0.14em",
          }}
        >
          RELATÓRIO EXECUTIVO
        </div>
        <h3
          style={{
            color: "white",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 28,
            marginTop: 10,
            lineHeight: 1.1,
          }}
        >
          Morada Nova de Minas / MG
        </h3>
        <div style={{ color: "#94a3b8", fontSize: 14, marginTop: 4 }}>
          Diagnóstico da Rede Assistencial 2025
        </div>

        <div
          style={{
            height: 1,
            backgroundColor: "rgba(56,189,248,0.2)",
            margin: "16px 0",
          }}
        />

        <div className="grid grid-cols-4 gap-4">
          <KPI value="953" label="Internações 2025" />
          <KPI value="32" label="Óbitos" />
          <KPI value="3,36%" label="Taxa Mortalidade" />
          <KPI value="30" label="Hospitais Usados" />
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          <AlertCard icon="🚨" text="Dependência Absoluta de Referência Externa" />
          <AlertCard icon="🧠" text="Saúde Mental em Alerta" />
          <AlertCard icon="✅" text="Indicadores Obstétricos no Alvo" />
        </div>

        <div style={{ color: "#64748b", fontSize: 11, marginTop: 14 }}>
          Fonte: SIH/CNES DataSUS · InfoDengue · IBGE
        </div>
      </motion.div>
    </div>
  );
}

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div
        style={{
          color: "white",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 32,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          color: "#94a3b8",
          fontSize: 10,
          letterSpacing: "0.1em",
          marginTop: 6,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function AlertCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(15,23,41,0.6)",
        border: "1px solid rgba(148,163,184,0.12)",
        borderRadius: 10,
        padding: "12px 14px",
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      <span style={{ fontSize: 18, lineHeight: 1 }}>{icon}</span>
      <span style={{ color: "white", fontSize: 12, lineHeight: 1.4 }}>{text}</span>
    </div>
  );
}
