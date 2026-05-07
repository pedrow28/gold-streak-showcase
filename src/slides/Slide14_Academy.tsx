import { motion } from "framer-motion";
import { GraduationCap, Wand2 } from "lucide-react";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

export default function Slide14_Academy({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell
      step={step}
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      caption="05 — O QUE ESTAMOS CONSTRUINDO"
    >
      <div className="grid h-full" style={{ gridTemplateColumns: "35% 65%", gap: 40, marginTop: 8 }}>
        {/* LEFT — text */}
        <div className="flex flex-col" style={{ paddingTop: 12 }}>
          <RevealOnTrigger step={0}>
            <div
              className="font-body uppercase text-gold"
              style={{ fontSize: 12, letterSpacing: "0.18em", fontWeight: 700 }}
            >
              Produto 01
            </div>
          </RevealOnTrigger>
          <RevealOnTrigger step={0}>
            <h2
              className="font-display text-text mt-3"
              style={{ fontSize: 40, fontWeight: 600, lineHeight: 1.1 }}
            >
              Academy Regulatória com IA Embarcada
            </h2>
          </RevealOnTrigger>
          <RevealOnTrigger step={1}>
            <p
              className="font-body italic text-gold mt-4"
              style={{ fontSize: 20, lineHeight: 1.4 }}
            >
              Capacitação contínua para equipes públicas, com a IA dentro do fluxo.
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
                Secretaria de Administração / Procuradoria / Diretor de RH público
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
              <div className="font-body text-text mt-2" style={{ fontSize: 15, lineHeight: 1.5 }}>
                Servidor encara a Lei 14.133 sem prática. Curso tradicional cansa, não simula. IA
                solta confunde.
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
              <div className="font-body text-text mt-2" style={{ fontSize: 15, lineHeight: 1.5 }}>
                Vivemos a dor por dentro. Sabemos qual conteúdo realmente importa para um agente de
                contratação. E temos fluência em IA.
              </div>
            </div>
          </RevealOnTrigger>

          <RevealOnTrigger step={5}>
            <div
              className="mt-auto rounded-lg"
              style={{
                fontSize: 14,
                padding: "10px 14px",
                backgroundColor: "rgba(232,163,61,0.12)",
                color: "#E8A33D",
                fontFamily: "var(--font-body)",
              }}
            >
              Mercado validado: 22+ contratos similares no PNCP
            </div>
          </RevealOnTrigger>
        </div>

        {/* RIGHT — Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden"
          style={{
            backgroundColor: "#F8F7FB",
            borderRadius: 16,
            boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          }}
        >
          <AcademyMockup />
        </motion.div>
      </div>
    </SlideShell>
  );
}

function AcademyMockup() {
  return (
    <div className="w-full h-full flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between"
        style={{
          padding: "20px 28px",
          background: "linear-gradient(180deg, #FFFFFF 0%, #F3F0FF 100%)",
          borderBottom: "1px solid #EDE9FE",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="rounded-xl flex items-center justify-center"
            style={{ width: 48, height: 48, backgroundColor: "#7C3AED" }}
          >
            <GraduationCap size={26} color="#FFFFFF" strokeWidth={2} />
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "#6B7280",
                fontWeight: 600,
              }}
            >
              PORTIFOLIO GOVTECH AI-FIRST
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#1F2937",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Academy Regulatoria com IA Embarcada
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Pill bg="#F3F0FF" color="#7C3AED">Capacitação e maturidade</Pill>
          <Pill bg="#FEF3C7" color="#D97706">Auditável</Pill>
          <Pill bg="#F3F4F6" color="#4B5563">B2G</Pill>
        </div>
      </div>

      {/* Body */}
      <div className="grid flex-1" style={{ gridTemplateColumns: "60% 40%" }}>
        {/* Main column */}
        <div style={{ padding: 28 }}>
          <div className="flex items-center gap-2">
            <span
              className="rounded-full"
              style={{ width: 8, height: 8, backgroundColor: "#7C3AED" }}
            />
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "#7C3AED",
                fontWeight: 700,
              }}
            >
              CAPACITAÇÃO CONTÍNUA PARA EQUIPES PÚBLICAS
            </span>
          </div>
          <h3
            style={{
              color: "#1F2937",
              fontSize: 32,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              marginTop: 12,
              lineHeight: 1.1,
            }}
          >
            Academy Regulatória com IA Embarcada
          </h3>
          <p
            style={{
              color: "#6B7280",
              fontSize: 14,
              lineHeight: 1.55,
              marginTop: 12,
            }}
          >
            Portal de aprendizagem com trilhas por perfil, simulação de casos, quiz e apoio lateral
            por IA para consolidar maturidade institucional.
          </p>

          <div className="flex gap-2 mt-4">
            <OutlinePill color="#7C3AED">CAPACITAÇÃO E MATURIDADE</OutlinePill>
            <OutlinePill color="#7C3AED">EXPERIÊNCIA INSPIRADA EM PORTAL</OutlinePill>
          </div>

          {/* Highlighted card */}
          <div
            style={{
              marginTop: 20,
              backgroundColor: "#FFFBEB",
              padding: 22,
              borderRadius: 14,
              borderTop: "3px solid",
              borderImage: "linear-gradient(90deg, #7C3AED, #A78BFA) 1",
              borderImageSlice: 1,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -1.5,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #7C3AED, #A78BFA)",
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
              }}
            />
            <div className="flex flex-wrap gap-2">
              <SmallTag>ASSISTENTE INSTITUCIONAL</SmallTag>
              <SmallTag>IA COM TRILHA VISÍVEL</SmallTag>
              <SmallTag>RESPOSTA PRONTA PARA PROCESSO</SmallTag>
            </div>

            <div
              className="flex items-center mt-4"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                padding: "10px 12px",
                gap: 10,
                border: "1px solid #F3F4F6",
              }}
            >
              <Wand2 size={16} color="#7C3AED" />
              <div style={{ flex: 1, fontSize: 13, color: "#6B7280" }}>
                Montar trilha para novo agente de contratação com foco em fase preparatória.
              </div>
              <button
                style={{
                  backgroundColor: "#7C3AED",
                  color: "white",
                  borderRadius: 8,
                  padding: "8px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  border: "none",
                }}
              >
                Executar IA
              </button>
            </div>

            <div className="flex gap-2 mt-3">
              <OutlinePill color="#9CA3AF" small>Recomendar trilha</OutlinePill>
              <OutlinePill color="#9CA3AF" small>Simular caso real</OutlinePill>
              <OutlinePill color="#9CA3AF" small>Abrir quiz rápido</OutlinePill>
            </div>
          </div>
        </div>

        {/* Side column */}
        <div style={{ backgroundColor: "#6D28D9", padding: 24, color: "white" }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "#DDD6FE",
              fontWeight: 700,
            }}
          >
            ESTADO DO AGENTE
          </div>
          <div className="flex items-start justify-between mt-3 gap-2">
            <h4
              style={{
                fontSize: 22,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Simulação<br />pronta
            </h4>
            <span
              style={{
                fontSize: 11,
                backgroundColor: "#8B5CF6",
                color: "white",
                padding: "4px 10px",
                borderRadius: 999,
                whiteSpace: "nowrap",
              }}
            >
              Aguardando comando
            </span>
          </div>

          <PurpleCard title="Caminho feliz sugerido">
            Clique em "Recomendar trilha", acompanhe a montagem do plano formativo e apresente a
            trilha personalizada na aba "Saídas".
          </PurpleCard>

          <PurpleCard title="Formato do protótipo">
            Visual inspirado em portal institucional, com tom acolhedor, clareza operacional e
            assistente IA integrado ao fluxo.
          </PurpleCard>

          <div
            style={{
              marginTop: 14,
              backgroundColor: "#FEF3C7",
              borderRadius: 12,
              padding: 16,
              color: "#1F2937",
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "#7C3AED",
                fontWeight: 700,
              }}
            >
              FAMÍLIA
            </div>
            <div
              style={{
                fontSize: 16,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                marginTop: 4,
                color: "#1F2937",
              }}
            >
              Capacitação e maturidade
            </div>
            <div style={{ fontSize: 12, color: "#4B5563", marginTop: 6, lineHeight: 1.5 }}>
              Produtos para aprendizagem contínua, onboarding e evolução da maturidade institucional
              das equipes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({ children, bg, color }: { children: React.ReactNode; bg: string; color: string }) {
  return (
    <span
      style={{
        backgroundColor: bg,
        color,
        fontSize: 11,
        fontWeight: 600,
        padding: "5px 12px",
        borderRadius: 999,
      }}
    >
      {children}
    </span>
  );
}

function OutlinePill({
  children,
  color,
  small,
}: {
  children: React.ReactNode;
  color: string;
  small?: boolean;
}) {
  return (
    <span
      style={{
        border: `1px solid ${color}40`,
        color,
        fontSize: small ? 11 : 10,
        fontWeight: 600,
        padding: small ? "6px 12px" : "5px 10px",
        borderRadius: 999,
        letterSpacing: small ? "0" : "0.1em",
      }}
    >
      {children}
    </span>
  );
}

function SmallTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        backgroundColor: "#F3F0FF",
        color: "#7C3AED",
        fontSize: 10,
        fontWeight: 700,
        padding: "5px 10px",
        borderRadius: 6,
        letterSpacing: "0.08em",
      }}
    >
      {children}
    </span>
  );
}

function PurpleCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: 14,
        backgroundColor: "rgba(255,255,255,0.10)",
        borderRadius: 12,
        padding: 14,
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>{title}</div>
      <div style={{ fontSize: 12, color: "#DDD6FE", marginTop: 6, lineHeight: 1.5 }}>{children}</div>
    </div>
  );
}
