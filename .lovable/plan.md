
# Reestruturação completa do deck — versão enxuta

Reduzimos de 12 slides para **7 slides diretos ao ponto**, focados em mostrar mercado, customização e gerar vislumbre com 3 mockups concretos. Tudo no padrão visual existente (canvas 1920×1080, navy/gold, Space Grotesk + Inter, Framer Motion, RevealOnTrigger).

## Nova estrutura

```text
01  Hook                         (mantém Slide02_Tese atual ou substituímos por novo)
02  Soluções já consolidadas     (logos dos 6 concorrentes + contratos/valor)
03  Oportunidades — 8 frentes    (lista das IAs personalizadas, foco em customização)
04  Mockup 1 — IA do Gestor Municipal
05  Mockup 2 — IA de Saúde (DATASUS)
06  Mockup 3 — IA de Turismo (chatbot 24/7)
07  Oferta — Consultoria + Lead Magnet
```

Slides removidos do registry: BarreiraBaixa, Lacunas, DorProspeccao, FunilDiagnostico, FormatosDecisao, Academy, Cidadao (anterior), DataAnalystSUS (anterior), Roadmap, ProdutosOverview, Consultoria atual. Ficam em disco mas saem do `SLIDES`.

## Slide 01 — Hook
Mantém o `Slide02_Tese` atual como abertura (a tese em três movimentos). Se preferir, posso trocar por um hook mais curto — me diga.

## Slide 02 — Soluções já consolidadas
- Caption: `01 — O MERCADO JÁ EXISTE`
- H2: "Soluções já consolidadas"
- Subline: "SaaS com IA jurídica para fase interna da licitação."
- Grid 3×2 de cards `bg-navy-soft rounded-2xl`, cada um com:
  - Logo (importada de `src/assets/logos/`)
  - Nome + URL pequena text-subtle
  - Linha gold: "X contratos · R$ Y mi"
- Dados:
  - Attus — 5 contratos · R$ 32,9 mi
  - StartGov (StartBid) — 82 contratos · R$ 6,8 mi
  - Justice AI — 42 · R$ 3,5 mi
  - SollAi — 45 · R$ 1,3 mi
  - Licito.guru — 12 · R$ 1,2 mi
  - JusIA (Jusbrasil) — 18 · R$ 0,6 mi
- Logos vêm dos 6 uploads — copiamos para `src/assets/logos/{attus,startgov,justiceai,sollai,licitoguru,jusia}.png`.
- Rodapé italic gold: "O jurídico-licitatório já foi capturado. **Sobra todo o resto.**"

## Slide 03 — Oportunidades de IA personalizada
- Caption: `02 — A OPORTUNIDADE`
- H2: "Onde a IA ainda não chegou"
- Subline: "Pequenos e médios municípios. LGPD-ready. Distribuição por dispensa e inexigibilidade. **Customização é o diferencial.**"
- Grid 4×2 de 8 cards compactos, cada um com ícone Lucide + título + 1 linha de descrição:
  1. **Gestor municipal** (Building2) — assistente ultra-especializado nos dados internos da prefeitura
  2. **Saúde / DATASUS** (Activity) — relatórios estratégicos automáticos
  3. **Turismo** (MapPin) — chatbot 24/7 com roteiros personalizados
  4. **Urbano e ambiental** (TreePine) — alvarás, licenças, conformidade
  5. **RH do servidor** (Users) — dúvidas de direitos, férias, folha
  6. **Tutoria e capacitação** (GraduationCap) — planos de estudo (Lei 14.133, FPM, etc.)
  7. **Auxílio textual** (FileText) — revisão, ofícios, resumo de PDF
  8. **+ N customizações** (Sparkles, card destaque gold) — "cada município, sua IA"
- Card 8 pulsa suavemente para reforçar o ponto da customização.

## Slides 04–06 — Mockups (vislumbre)
Três protótipos visuais escolhidos por gerar mais admiração e cobrir áreas distintas (gestão / dado público / cidadão):

### Slide 04 — IA do Gestor Municipal
- Caption: `03 — MOCKUP 01`
- Layout 40/60. Esquerda: nome do produto, headline ("A prefeitura na palma da mão"), 3 bullets de uso (escolas, contratos, rodovias).
- Direita: mockup de chat dentro de moldura tipo iPhone/laptop. Diálogo simulado:
  - Prefeito: "Quantas escolas têm reforma pendente em 2026?"
  - IA: card-resposta com número grande "**14**" + lista de escolas + botão "Gerar post para Instagram".
- Reveal step-by-step: pergunta → digitação → resposta → CTA.

### Slide 05 — IA de Saúde (DATASUS)
- Caption: `03 — MOCKUP 02`
- Layout 50/50. Esquerda: descrição + bullet "relatório mensal automático".
- Direita: mockup de relatório executivo com:
  - Cabeçalho "Relatório de Saúde — Abril/2026"
  - 3 stat cards (internações, top motivo, fora do município)
  - Mini gráfico de barras (Recharts) com top 5 motivos de internação
  - Linha "Enviado automaticamente todo dia 5"
- Reveal: stats → gráfico → linha de envio.

### Slide 06 — IA de Turismo
- Caption: `03 — MOCKUP 03`
- Layout 45/55. Esquerda: descrição + métricas projetadas (visibilidade, arrecadação).
- Direita: mockup de chat web na "Prefeitura de [Cidade]":
  - Turista: "Tenho 1 dia, gosto de gastronomia e história"
  - IA: roteiro em 3 paradas com horários, mini-mapa SVG estilizado
- Reveal: pergunta → roteiro entra ponto a ponto.

## Slide 07 — Oferta
- Caption: `04 — COMO ENTRAMOS`
- H2: "Abordagem propositiva, com valor antes do contrato"
- Dois blocos lado a lado `bg-navy-soft rounded-2xl`:
  - **Consultoria de IA** — entrevista diagnóstica ao vivo + relatório com usos práticos. Bullets: maturidade, time de TI, build vs. buy.
  - **Página web de captação** — gestor responde perguntas adaptativas → relatório personalizado de uso de IA. Mockup mini do formulário ao lado.
- Rodapé Space Grotesk italic gold: "Entramos pelo diagnóstico. Crescemos pelo produto certo."

## Implementação técnica

**Novos arquivos**
- `src/slides/Slide01_Hook.tsx` (manter atual ou ajustar)
- `src/slides/Slide02_Concorrentes.tsx`
- `src/slides/Slide03_Oportunidades.tsx`
- `src/slides/Slide04_MockupGestor.tsx`
- `src/slides/Slide05_MockupSaude.tsx`
- `src/slides/Slide06_MockupTurismo.tsx`
- `src/slides/Slide07_Oferta.tsx`
- `src/assets/logos/{attus,startgov,justiceai,sollai,licitoguru,jusia}.png` (copiados dos uploads)

**Atualizar**
- `src/slides/index.ts` — registry com os 7 slides novos, slides antigos ficam em disco (não importados) ou removidos. Vou remover para manter limpo.

**Reuso**
- `SlideShell`, `RevealOnTrigger`, `AnimatedNumber`, `useNav`, escala 16:9 — tudo igual.
- Recharts para o mini-gráfico do Slide 05.

## Perguntas antes de começar

1. **Slide 01**: mantenho o atual "tese em três movimentos" ou você quer um hook novo? (Você disse "o primeiro slide eu vou te mostrar" mas não enviou — assumo que mantém.)
2. **Escolha dos 3 mockups**: escolhi Gestor / Saúde / Turismo por serem os mais visuais e diversos. Se preferir trocar (ex.: Auxílio textual no lugar de Turismo), me avise antes de eu construir.

Se concordar com tudo, aprove o plano e eu implemento na sequência.
