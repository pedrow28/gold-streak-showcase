export const PNCP_TIMELINE = [
  { ano: 2022, contratos: 1, valor_milhoes: 0.1 },
  { ano: 2023, contratos: 4, valor_milhoes: 17 },
  { ano: 2024, contratos: 122, valor_milhoes: 173.1 },
  { ano: 2025, contratos: 478, valor_milhoes: 602.3 },
  { ano: 2026, contratos: 820, valor_milhoes: 920, projecao: true },
] as const;

export const PNCP_TOTAIS = {
  total_contratos: 790,
  total_valor_milhoes: 906,
  municipios_compradores: 310,
  municipios_brasileiros: 5570,
  municipios_sem_compra: 5260,
  pct_municipios_atendidos: 5.6,
  ticket_mediano_brl: 31801,
  contratos_inexigibilidade_dispensa: 644,
  pct_inexig_dispensa: 81.5,
  contratos_pregao: 145,
  data_extracao: "abril 2026",
} as const;

export const PNCP_UF_TOP = [
  { uf: "SP", contratos: 111 },
  { uf: "MG", contratos: 77 },
  { uf: "PR", contratos: 76 },
  { uf: "SC", contratos: 60 },
  { uf: "DF", contratos: 53 },
  { uf: "RS", contratos: 48 },
  { uf: "CE", contratos: 45 },
  { uf: "GO", contratos: 41 },
  { uf: "RJ", contratos: 39 },
  { uf: "MT", contratos: 33 },
  { uf: "ES", contratos: 29 },
  { uf: "RN", contratos: 27 },
] as const;

export const PNCP_CATEGORIAS = [
  { categoria: "Software de licitações e contratos com IA", contratos: 415, valor_milhoes: 376.5, pct: 52.5 },
  { categoria: "IA generativa / LLM", contratos: 210, valor_milhoes: 289.2, pct: 26.6 },
  { categoria: "Software / SaaS com IA", contratos: 85, valor_milhoes: 107.2, pct: 10.8 },
  { categoria: "Chatbot / assistente virtual", contratos: 39, valor_milhoes: 43.8, pct: 4.9 },
  { categoria: "Software / plataforma com IA", contratos: 30, valor_milhoes: 80.0, pct: 3.8 },
  { categoria: "OCR / GED / transcrição", contratos: 11, valor_milhoes: 9.4, pct: 1.4 },
] as const;

export const PNCP_TOP_PLAYERS = [
  { nome: "Sollicita Negócios Públicos", contratos: 45, valor_milhoes: 1.31, foco: "Licitações e contratos" },
  { nome: "Justice AI", contratos: 42, valor_milhoes: 3.57, foco: "Jurídico / contratos" },
  { nome: "Adapta Educação", contratos: 22, valor_milhoes: 0.43, foco: "Capacitação" },
  { nome: "Goshme", contratos: 18, valor_milhoes: 0.66, foco: "Busca / IA" },
  { nome: "AC2B Tecnologia", contratos: 17, valor_milhoes: 0.44, foco: "Software / contratos" },
  { nome: "IOC Capacitação", contratos: 16, valor_milhoes: 0.26, foco: "Capacitação" },
  { nome: "Licito Guru", contratos: 12, valor_milhoes: 1.20, foco: "Licitações com IA" },
  { nome: "Mapzer IA", contratos: 11, valor_milhoes: 9.96, foco: "Plataforma IA" },
] as const;

export const PNCP_MUNICIPAL = {
  contratos_municipais: 400,
  pct_contratos: 50.6,
  valor_municipal_milhoes: 88.29,
  pct_valor: 9.7,
} as const;

export const PNCP_LACUNAS = [
  "Ausência de fluxo de implantação para órgãos sem TI estruturada",
  "Produtos genéricos sem aderência ao jurídico-administrativo brasileiro",
  "Falta de jornada de educação e maturidade do gestor",
  "Inexistência de portfolio integrado por persona pública",
] as const;

export const DIAGNOSTICO_FUNIL = [
  { etapa: "Diagnóstico", descricao: "Entendemos a maturidade do órgão, da equipe e do gestor com IA" },
  { etapa: "Mapa", descricao: "Entregamos relatório de IA personalizado com dor mapeada" },
  { etapa: "Recomendação", descricao: "Caminhos possíveis com IA, priorizados por impacto e viabilidade" },
  { etapa: "Produto", descricao: "Quando faz sentido, oferta de solução do portfolio GovTech" },
] as const;

export const DIAGNOSTICO_FORMATOS = [
  {
    formato: "Presencial",
    pros: ["Relacionamento profundo", "Entrevista qualitativa rica", "Confiança rápida"],
    contras: ["Não escala", "Custo alto", "Limita raio geográfico"],
    inclinacao: false,
  },
  {
    formato: "Software dedicado",
    pros: ["Escalável", "Padronizado", "Captura estruturada de dados"],
    contras: ["Frio para gestor não-tech", "Conversão menor sem follow-up humano"],
    inclinacao: false,
  },
  {
    formato: "Híbrido",
    pros: ["Escala via software", "Profundidade humana nos casos qualificados", "Funil claro"],
    contras: ["Operação mais complexa", "Exige time híbrido"],
    inclinacao: true,
  },
] as const;
