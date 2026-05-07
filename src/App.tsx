import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDES, TOTAL_SLIDES } from "./slides";
import { useStageScale, STAGE_W, STAGE_H } from "./hooks/useStageScale";
import { useFullscreen } from "./hooks/useFullscreen";

export default function App() {
  const scale = useStageScale();
  const { toggle: toggleFs } = useFullscreen();
  const [slideIndex, setSlideIndex] = useState(0);
  const [step, setStep] = useState(0);

  const next = useCallback(() => {
    setSlideIndex((si) => {
      const slide = SLIDES[si];
      setStep((s) => {
        if (s < slide.steps - 1) return s + 1;
        return 0;
      });
      // Se já no último step, avança slide
      // (precisamos checar antes do setStep, mas como o setStep retorna 0 no fim,
      // capturamos com base no valor atual de step via leitura síncrona)
      return si;
    });
  }, []);

  // Implementação correta: precisamos do valor atual de step. Usamos handler único.
  const advance = useCallback(() => {
    const slide = SLIDES[slideIndex];
    if (step < slide.steps - 1) {
      setStep(step + 1);
    } else if (slideIndex < SLIDES.length - 1) {
      setSlideIndex(slideIndex + 1);
      setStep(0);
    }
  }, [slideIndex, step]);

  const back = useCallback(() => {
    if (step > 0) {
      setStep(step - 1);
    } else if (slideIndex > 0) {
      const prev = SLIDES[slideIndex - 1];
      setSlideIndex(slideIndex - 1);
      setStep(prev.steps - 1);
    }
  }, [slideIndex, step]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", " ", "PageDown"].includes(e.key)) {
        e.preventDefault();
        advance();
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        back();
      } else if (e.key === "Escape") {
        // TODO v2: overview grid
      } else if (e.key === "f" || e.key === "F") {
        toggleFs();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, back, toggleFs]);

  const onStageClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-no-advance]")) return;
    advance();
  };

  const slide = SLIDES[slideIndex];
  const SlideComp = slide.component;

  // Suprimir uso da variável `next` não chamada
  void next;

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <div
        className="absolute"
        style={{
          width: STAGE_W,
          height: STAGE_H,
          left: "50%",
          top: "50%",
          marginLeft: -STAGE_W / 2,
          marginTop: -STAGE_H / 2,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          cursor: "pointer",
        }}
        onClick={onStageClick}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full"
          >
            <SlideComp
              step={step}
              slideNumber={slideIndex + 1}
              totalSlides={TOTAL_SLIDES}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
