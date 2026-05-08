import { type ComponentType } from "react";
import Slide02_Tese from "./Slide02_Tese";
import Slide02_Concorrentes from "./Slide02_Concorrentes";
import Slide03_Oportunidades from "./Slide03_Oportunidades";
import Slide04_MockupGestor from "./Slide04_MockupGestor";
import Slide05_MockupSaude from "./Slide05_MockupSaude";
import Slide06_MockupTurismo from "./Slide06_MockupTurismo";
import Slide07_Oferta from "./Slide07_Oferta";

export type SlideProps = { step: number; slideNumber: number; totalSlides: number };

export type SlideEntry = {
  id: string;
  component: ComponentType<SlideProps>;
  steps: number;
  hideCounter?: boolean;
};

export const SLIDES: SlideEntry[] = [
  { id: "01_tese", component: Slide02_Tese, steps: 4 },
  { id: "02_concorrentes", component: Slide02_Concorrentes, steps: 5 },
  { id: "03_oportunidades", component: Slide03_Oportunidades, steps: 4 },
  { id: "04_mockup_gestor", component: Slide04_MockupGestor, steps: 4 },
  { id: "05_mockup_saude", component: Slide05_MockupSaude, steps: 4 },
  { id: "06_mockup_turismo", component: Slide06_MockupTurismo, steps: 4 },
  { id: "07_oferta", component: Slide07_Oferta, steps: 4 },
];

export const TOTAL_SLIDES = SLIDES.length;
