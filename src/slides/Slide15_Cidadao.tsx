import { motion } from "framer-motion";
import { Search, Sparkles, ShieldCheck } from "lucide-react";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

const GREEN = "#1F5F3F";
const GREEN_DEEP = "#164730";

export default function Slide15_Cidadao({ step, slideNumber, totalSlides }: Props) {
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
              Produto 02
            </div>
          </RevealOnTrigger>
          <RevealOnTrigger step={0}>
            <h2
              className="font-display text-text mt-3"
              style={{ fontSize: 44, fontWeight: 600, lineHeight: 1.1 }}
            >
              Cidadão.IO — Aurora
            </h2>
          </RevealOnTrigger>
          <RevealOnTrigger step={1}>
            <p
              className="font-body italic text-gold mt-4"
              style={{ fontSize: 20, lineHeight: 1.4 }}
            >
              A primeira IA municipal que executa, não só responde.
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
                Prefeito / Secretário de Comunicação / Secretário de Governo
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
                Cidadão liga, vai presencial, perde manhã. Servidor responde repetitivo. Carta de
                serviços é PDF que ninguém lê.
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
                39 contratos de chatbot no PNCP, quase todos genéricos. Nosso diferencial: agente
                que executa ações (agenda, emite, consulta, registra), não só responde. Conhecimento
                de fluxos administrativos por dentro.
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
              Mercado pulverizado, 39 contratos atuais, espaço imenso
            </div>
          </RevealOnTrigger>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden"
          style={{
            backgroundColor: "#FAFAF7",
            borderRadius: 16,
            boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          }}
        >
          <CidadaoMockup />
        </motion.div>
      </div>
    </SlideShell>
  );
}

function CidadaoMockup() {
  return (
    <div className="w-full h-full flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between bg-white"
        style={{ padding: "16px 28px", borderBottom: "1px solid #E5E7EB" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="rounded-lg flex items-center justify-center"
            style={{ width: 42, height: 44, backgroundColor: GREEN }}
          >
            <ShieldCheck size={22} color="#FFFFFF" strokeWidth={2} />
          </div>
          <div>
            <div
              style={{
                fontSize: 18,
                color: "#111827",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Cidadão.IO
            </div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>São Bento da Serra · SP</div>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <NavItem active>Início</NavItem>
          <NavItem>Painel</NavItem>
          <NavItem>Agendamentos</NavItem>
          <NavItem>Lembretes</NavItem>
          <NavItem>Integrações</NavItem>
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2"
            style={{
              backgroundColor: "#F3F4F6",
              borderRadius: 999,
              padding: "4px 10px",
              fontSize: 11,
              color: "#374151",
            }}
          >
            <span style={{ fontWeight: 600 }}>Demo</span>
            <span
              style={{
                width: 28,
                height: 16,
                backgroundColor: "#D1D5DB",
                borderRadius: 999,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  width: 12,
                  height: 12,
                  backgroundColor: "white",
                  borderRadius: 999,
                  top: 2,
                  left: 2,
                }}
              />
            </span>
            <span>IA Real</span>
          </div>
          <button
            style={{
              backgroundColor: GREEN,
              color: "white",
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 12,
              fontWeight: 600,
              border: "none",
            }}
          >
            → Entrar
          </button>
        </div>
      </div>

      {/* Hero */}
      <div
        className="flex flex-col items-center"
        style={{
          background: `linear-gradient(135deg, ${GREEN} 0%, ${GREEN_DEEP} 100%)`,
          padding: "40px 28px",
        }}
      >
        <div
          className="flex items-center gap-2"
          style={{
            backgroundColor: "rgba(0,0,0,0.18)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 999,
            padding: "6px 14px",
            color: "white",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          <Sparkles size={12} color="#FCD34D" fill="#FCD34D" />
          IA Agêntica · 24h por dia
        </div>

        <h1
          className="text-center"
          style={{
            color: "white",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 44,
            marginTop: 20,
            lineHeight: 1.05,
          }}
        >
          Como posso ajudar você hoje?
        </h1>
        <p
          className="text-center"
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 15,
            marginTop: 12,
            maxWidth: 540,
            lineHeight: 1.45,
          }}
        >
          Aurora é a sua assistente do município. Ela{" "}
          <strong style={{ color: "white", fontWeight: 700 }}>executa</strong> ações: agenda, emite,
          consulta, registra.
        </p>

        <div
          className="flex items-center bg-white"
          style={{
            marginTop: 22,
            borderRadius: 14,
            padding: 6,
            width: 600,
            maxWidth: "100%",
            boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
          }}
        >
          <Search size={16} color="#9CA3AF" style={{ marginLeft: 12 }} />
          <div style={{ flex: 1, fontSize: 13, color: "#9CA3AF", padding: "0 12px" }}>
            Ex: minha rua está sem luz, quero agendar consulta, qu...
          </div>
          <button
            className="flex items-center gap-2"
            style={{
              backgroundColor: GREEN,
              color: "white",
              borderRadius: 10,
              padding: "10px 18px",
              fontSize: 13,
              fontWeight: 600,
              border: "none",
            }}
          >
            <Sparkles size={14} />
            Falar com Aurora
          </button>
        </div>

        <div className="flex items-center gap-2 mt-5">
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Tente:</span>
          {[
            "“minha rua está sem luz há 3 dias”",
            "“quanto é meu IPTU?”",
            "“quero agendar consulta”",
          ].map((s) => (
            <span
              key={s}
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                fontSize: 11,
                padding: "5px 12px",
                borderRadius: 999,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Below hero */}
      <div className="flex-1" style={{ backgroundColor: "#FAFAF7", padding: "28px 32px" }}>
        <h3
          style={{
            color: "#111827",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          Serviços mais procurados
        </h3>
        <div style={{ color: "#6B7280", fontSize: 13, marginTop: 4 }}>
          Acesse direto ou peça à Aurora.
        </div>
      </div>
    </div>
  );
}

function NavItem({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div
      style={{
        fontSize: 13,
        fontWeight: active ? 600 : 500,
        color: active ? "#111827" : "#4B5563",
        position: "relative",
        paddingBottom: 4,
        borderBottom: active ? `2px solid ${GREEN}` : "2px solid transparent",
      }}
    >
      {children}
    </div>
  );
}
