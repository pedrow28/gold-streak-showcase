import { MapPin, Utensils, Landmark, Clock } from "lucide-react";
import { SlideShell } from "../components/SlideShell";
import { RevealOnTrigger } from "../components/RevealOnTrigger";

type Props = { step: number; slideNumber: number; totalSlides: number };

const paradas = [
  { hora: "09h00", icon: Landmark, titulo: "Centro Histórico", desc: "Igreja Matriz e museu da cidade" },
  { hora: "12h30", icon: Utensils, titulo: "Almoço típico", desc: "Restaurante da Dona Iolanda · cozinha mineira" },
  { hora: "15h00", icon: Landmark, titulo: "Mirante do Cristo", desc: "Vista panorâmica e fotos ao pôr do sol" },
];

export default function Slide06_MockupTurismo({ step, slideNumber, totalSlides }: Props) {
  return (
    <SlideShell step={step} slideNumber={slideNumber} totalSlides={totalSlides} caption="03 — MOCKUP 03">
      <div className="grid h-full" style={{ gridTemplateColumns: "40% 60%", gap: 56, marginTop: 12 }}>
        {/* LEFT */}
        <div className="flex flex-col h-full justify-center">
          <div
            className="font-body uppercase text-gold"
            style={{ fontSize: 12, letterSpacing: "0.18em", fontWeight: 700 }}
          >
            IA de Turismo
          </div>
          <h2
            className="font-display text-text mt-3"
            style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.05 }}
          >
            A cidade que se apresenta sozinha, 24/7.
          </h2>
          <p className="font-body text-text-muted mt-5" style={{ fontSize: 19, lineHeight: 1.5 }}>
            Chatbot embarcado no site da prefeitura. Recebe o turista, entende o tempo disponível
            e os interesses, e devolve um roteiro pronto para o dia.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-navy-soft" style={{ padding: 18 }}>
              <div className="font-display text-gold" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>
                +37%
              </div>
              <div className="font-body text-text-muted mt-1" style={{ fontSize: 13 }}>
                visibilidade nos buscadores (proj.)
              </div>
            </div>
            <div className="rounded-2xl bg-navy-soft" style={{ padding: 18 }}>
              <div className="font-display text-gold" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>
                ISS ↑
              </div>
              <div className="font-body text-text-muted mt-1" style={{ fontSize: 13 }}>
                arrecadação de gastronomia e hospedagem
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Web chat mockup */}
        <div className="flex items-center justify-center h-full">
          <div
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{
              width: "100%",
              maxWidth: 760,
              background: "#FFFFFF",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#E5E7EB" }}>
              <div className="flex gap-1.5">
                <div className="rounded-full" style={{ width: 12, height: 12, background: "#EF4444" }} />
                <div className="rounded-full" style={{ width: 12, height: 12, background: "#F59E0B" }} />
                <div className="rounded-full" style={{ width: 12, height: 12, background: "#10B981" }} />
              </div>
              <div
                className="ml-3 flex-1 rounded-md px-3 py-1 font-body"
                style={{ background: "#FFFFFF", fontSize: 12, color: "#6B7280" }}
              >
                visite.saolourenco.mg.gov.br
              </div>
            </div>

            {/* Header */}
            <div
              className="px-6 py-5 flex items-center gap-3"
              style={{ background: "linear-gradient(135deg, #0B1E3F 0%, #15294D 100%)", color: "#FFFFFF" }}
            >
              <div
                className="rounded-xl flex items-center justify-center"
                style={{ width: 44, height: 44, background: "rgba(232,163,61,0.2)" }}
              >
                <MapPin size={20} color="#E8A33D" />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 600 }}>
                  Visite São Lourenço · Guia.IA
                </div>
                <div className="font-body" style={{ fontSize: 12, color: "#B8C5D9" }}>
                  online agora · responde em segundos
                </div>
              </div>
            </div>

            {/* Chat */}
            <div className="p-6 flex flex-col gap-4" style={{ background: "#F9FAFB", minHeight: 460 }}>
              <div className="self-end max-w-[78%] rounded-2xl rounded-br-md px-4 py-3" style={{ background: "#0B1E3F", color: "#FFFFFF" }}>
                <div className="font-body" style={{ fontSize: 14, lineHeight: 1.4 }}>
                  Tenho 1 dia. Gosto de gastronomia e história.
                </div>
              </div>

              <div className="self-start max-w-[88%] rounded-2xl rounded-bl-md px-4 py-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div className="font-body" style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.4 }}>
                  Perfeito! Montei um roteiro de um dia para você:
                </div>
                <div className="mt-3 flex flex-col gap-3">
                  {paradas.map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <RevealOnTrigger key={p.titulo} step={i + 1}>
                        <div
                          className="flex items-start gap-3 rounded-xl p-3"
                          style={{ background: "#F4F6FA", border: "1px solid #E5E7EB" }}
                        >
                          <div
                            className="rounded-lg flex items-center justify-center shrink-0"
                            style={{ width: 36, height: 36, background: "rgba(232,163,61,0.15)" }}
                          >
                            <Icon size={18} color="#E8A33D" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Clock size={11} color="#6B7280" />
                              <div className="font-body" style={{ fontSize: 11, color: "#6B7280", fontWeight: 600 }}>
                                {p.hora}
                              </div>
                            </div>
                            <div className="font-display mt-0.5" style={{ fontSize: 15, fontWeight: 600, color: "#0B1E3F" }}>
                              {p.titulo}
                            </div>
                            <div className="font-body" style={{ fontSize: 12, color: "#6B7280" }}>
                              {p.desc}
                            </div>
                          </div>
                        </div>
                      </RevealOnTrigger>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
