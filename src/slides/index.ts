import { type ComponentType } from "react";
import Slide02_Tese from "./Slide02_Tese";
import Slide_ProdutosOverview from "./Slide_ProdutosOverview";
import Slide_Consultoria from "./Slide_Consultoria";
import Slide08_BarreiraBaixa from "./Slide08_BarreiraBaixa";
import Slide09_Lacunas from "./Slide09_Lacunas";
import Slide10_DorProspeccao from "./Slide10_DorProspeccao";
import Slide11_FunilDiagnostico from "./Slide11_FunilDiagnostico";
import Slide12_FormatosDecisao from "./Slide12_FormatosDecisao";
import Slide14_Academy from "./Slide14_Academy";
import Slide15_Cidadao from "./Slide15_Cidadao";
import Slide16_DataAnalystSUS from "./Slide16_DataAnalystSUS";
import Slide17_Roadmap from "./Slide17_Roadmap";

export type SlideProps = { step: number; slideNumber: number; totalSlides: number };

export type SlideEntry = {
  id: string;
  component: ComponentType<SlideProps>;
  steps: number;
  hideCounter?: boolean;
};

export const SLIDES: SlideEntry[] = [
  { id: "01_tese", component: Slide02_Tese, steps: 4 },
  { id: "02_produtos_overview", component: Slide_ProdutosOverview, steps: 5 },
  { id: "03_consultoria", component: Slide_Consultoria, steps: 5 },
  { id: "04_barreira_baixa", component: Slide08_BarreiraBaixa, steps: 4 },
  { id: "05_lacunas", component: Slide09_Lacunas, steps: 5 },
  { id: "06_dor_prospeccao", component: Slide10_DorProspeccao, steps: 5 },
  { id: "07_funil_diagnostico", component: Slide11_FunilDiagnostico, steps: 5 },
  { id: "08_formatos_decisao", component: Slide12_FormatosDecisao, steps: 1 },
  { id: "09_academy", component: Slide14_Academy, steps: 6 },
  { id: "10_cidadao", component: Slide15_Cidadao, steps: 6 },
  { id: "11_data_analyst_sus", component: Slide16_DataAnalystSUS, steps: 6 },
  { id: "12_roadmap", component: Slide17_Roadmap, steps: 6 },
];

export const TOTAL_SLIDES = SLIDES.length;
