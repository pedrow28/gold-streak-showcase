import { motion } from "framer-motion";
import {
  Building2,
  Activity,
  MapPin,
  TreePine,
  Users,
  GraduationCap,
  FileText,
  Sparkles,
} from "lucide-react";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

const oportunidades = [
  {
    icon: Building2,
    titulo: "Gestor municipal",
    desc: "Assistente ultra-especializado nos dados internos da prefeitura — escolas, contratos, obras, praças.",
  },
  {
    icon: Activity,
    titulo: "Saúde · DATASUS",
    desc: "Relatórios estratégicos automáticos sobre internações, atendimentos e fluxo entre municípios.",
  },
  {
    icon: MapPin,
    titulo: "Turismo",
    desc: "Chatbot 24/7 no site da prefeitura com roteiros personalizados por tempo e interesse.",
  },
  {
    icon: TreePine,
    titulo: "Urbano e ambiental",
    desc: "Análise preliminar de alvarás, licenças e conformidade documental. Destrava empreendimentos.",
  },
  {
    icon: Users,
    titulo: "RH do servidor",
    desc: "Dúvidas de direitos, fluxos de afastamento, férias e conferência de folha — sem fila no RH.",
  },
  {
    icon: GraduationCap,
    titulo: "Tutoria e capacitação",
    desc: "Planos de estudo e tira-dúvidas em Lei 14.133, FPM, Lei Robin Hood, ambiental, convênios.",
  },
  {
    icon: FileText,
    titulo: "Auxílio textual",
    desc: "Revisão, ofícios, memorando, projeto de lei. Leitura e resumo de PDF, Word, Excel.",
  },
];

export default function Slide03_Oportunidades({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell step={step} slideNumber={slideNumber} totalSlides={totalSlides} caption="02 — A OPORTUNIDADE">
      <div className="flex flex-col h-full" style={{ marginTop: 12 }}>
        <h2 className="font-display text-text" style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.05 }}>
          Onde a IA ainda não chegou
        </h2>
        <p className="font-body text-text-muted mt-3" style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 1200 }}>
          Pequenos e médios municípios. LGPD-ready. Distribuição por dispensa e inexigibilidade.{" "}
          <span className="text-gold font-semibold">Customização é o diferencial.</span>
        </p>

        <div className="grid grid-cols-4 gap-5 mt-8 flex-1" style={{ gridAutoRows: "1fr" }}>
          {oportunidades.map((o, i) => {
            const Icon = o.icon;
            return (
              <RevealOnTrigger key={o.titulo} step={Math.floor(i / 4) + 1}>
                <div className="bg-navy-soft rounded-2xl h-full flex flex-col" style={{ padding: 22 }}>
                  <div
                    className="rounded-lg flex items-center justify-center"
                    style={{ width: 44, height: 44, background: "rgba(232,163,61,0.12)" }}
                  >
                    <Icon size={22} color="#E8A33D" />
                  </div>
                  <div
                    className="font-display text-text mt-4"
                    style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.15 }}
                  >
                    {o.titulo}
                  </div>
                  <p className="font-body text-text-muted mt-2" style={{ fontSize: 14, lineHeight: 1.5 }}>
                    {o.desc}
                  </p>
                </div>
              </RevealOnTrigger>
            );
          })}

          {/* Card destaque — customização */}
          <RevealOnTrigger step={3}>
            <motion.div
              className="rounded-2xl h-full flex flex-col justify-between"
              style={{
                padding: 22,
                background: "linear-gradient(135deg, #E8A33D 0%, #C2851F 100%)",
                color: "#061427",
              }}
              animate={{ boxShadow: ["0 0 0 0 rgba(232,163,61,0.4)", "0 0 0 16px rgba(232,163,61,0)", "0 0 0 0 rgba(232,163,61,0)"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            >
              <div
                className="rounded-lg flex items-center justify-center"
                style={{ width: 44, height: 44, background: "rgba(6,20,39,0.15)" }}
              >
                <Sparkles size={22} color="#061427" />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15 }}>
                  + N customizações
                </div>
                <p className="font-body mt-2" style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>
                  Cada município, sua IA. O catálogo é apenas a partida — construímos sob medida para a dor real do gestor.
                </p>
              </div>
            </motion.div>
          </RevealOnTrigger>
        </div>
      </div>
    </SlideShell>
  );
}
