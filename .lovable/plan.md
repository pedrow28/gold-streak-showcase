# Pitch Houer — Apresentação Executiva (Atos 1 e 2)

Deck institucional 16:9, fullscreen, navegado por clique e teclado, com revelações progressivas e animações Framer Motion. Esta entrega cobre **fundação + Atos 1 e 2 (slides 01 a 06)**. Atos 3 e 4 virão em prompt seguinte, sem retrabalho.

---

## 1. Fundação técnica

**Dependências a instalar**
- `framer-motion` — animações on-trigger e transições entre slides
- `recharts` — AreaChart (slide 03) e Treemap (slide 04)
- `lucide-react` — ícones discretos (fullscreen, navegação)

**Fontes**
- Google Fonts: **Space Grotesk** (400/500/600/700/800) e **Inter** (400/500/600) carregadas via `<link>` no `__root.tsx`.

**Design system (Tailwind v4 / `src/styles.css`)**
- Substituir o tema padrão pelas variáveis do brief, todas em formato `oklch`-friendly mas mantendo os hex exatos via `--navy`, `--navy-deep`, `--navy-soft`, `--gold`, `--gold-soft`, `--text`, `--text-muted`, `--text-subtle`, `--success`, `--alert`, `--chart-1..4`.
- Registrar em `@theme inline` para gerar utilitários `bg-navy`, `text-gold`, `border-gold-soft`, etc.
- Famílias tipográficas: `font-display` (Space Grotesk) e `font-body` (Inter), com `font-body` como default no `body`.
- Container base do deck força `bg-navy`, `text-text`, `font-body`, `antialiased`, `overflow-hidden`.

**Escala 16:9**
- Canvas fixo em **1920×1080** posicionado absolutamente e centralizado, com `transform: scale(min(vw/1920, vh/1080))` calculado por hook `useStageScale` (ResizeObserver no window). Isso garante 16:9 perfeito em qualquer tela, com letterbox automático em proporções diferentes.
- Padding interno do slide: 80px laterais, 64px verticais (constantes no `SlideShell`).

---

## 2. Estrutura de arquivos

Tudo dentro do shell TanStack Start existente. A rota `/` (`src/routes/index.tsx`) renderiza apenas `<App />`.

```text
src/
  App.tsx                          shell: stage 16:9, keyboard handler, fullscreen, slide renderer
  routes/index.tsx                 monta <App />
  slides/
    index.ts                       registry ordenado + metadata (id, component, steps, hideCounter)
    Slide01_Hook.tsx
    Slide02_Tese.tsx
    Slide03_Curva.tsx
    Slide04_Geografia.tsx
    Slide05_Gap.tsx
    Slide06_PorQueAgora.tsx
  components/
    SlideShell.tsx                 fundo, padding, caption topo, slide counter, header opcional
    AnimatedNumber.tsx             count-up com easing, respeita prefers-reduced-motion
    RevealOnTrigger.tsx            wrapper que recebe step index e libera children quando step atual ≥ próprio
    SlideCounter.tsx               "03 / 20" no canto inferior direito
    FullscreenButton.tsx           toggle discreto no canto superior direito
  data/
    pncp.ts                        constantes exatas do brief
  hooks/
    useSlideNavigation.ts          estado: { slideIndex, step }, ações next/prev/goTo
    useStageScale.ts               scale factor para o stage 1920×1080
    useFullscreen.ts               wrapper sobre Fullscreen API + listener de fullscreenchange
    useKeyboardNav.ts              binda setas, espaço, PgUp/PgDn, Esc, F
```

O registry `slides/index.ts` declara para cada slide o número total de **passos de revelação** (`steps`), permitindo que o navegador saiba quando avançar para o próximo slide. Total de passos do slide 01 = 5 (estados 0–4), 02 = 4 (3 blocos + frase final), 03 = 4, 04 = 2, 05 = 3, 06 = 5.

---

## 3. Comportamento de navegação

`useSlideNavigation` mantém `{ slideIndex, step }` em estado.

- **Avançar** (Seta direita, Espaço, Page Down, clique no stage):
  - Se `step < slides[slideIndex].steps - 1` → `step++`
  - Senão se há próximo slide → `slideIndex++`, `step = 0`
- **Voltar** (Seta esquerda, Page Up):
  - Se `step > 0` → `step--`
  - Senão se há slide anterior → `slideIndex--`, `step = slides[slideIndex-1].steps - 1`
- **Esc**: handler vazio com `// TODO v2: overview grid` (conforme pedido).
- **F**: toggle fullscreen via `useFullscreen`.
- O clique do stage chama `next()` exceto se vier de elementos interativos (`data-no-advance`) — usado nos botões de fullscreen e em tooltips do Recharts.

**Transição entre slides**: `AnimatePresence` com `mode="wait"`, `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`, `exit={{ opacity: 0, y: -20 }}`, `duration: 0.35`, `ease: "easeOut"`.

**Revelações dentro do slide**: cada conteúdo "revelável" é envolto em `<RevealOnTrigger step={N}>` que recebe via contexto o `currentStep` do slide e renderiza com `motion.div` (fade + translateY 16px → 0, 400ms ease-out) quando `currentStep >= N`.

`AnimatedNumber` aceita `value`, `duration` (padrão 1200ms), `format` (BRL, inteiro, decimal). Usa `requestAnimationFrame` com easing `easeOutCubic`. Dispara apenas quando montado (ou seja, quando seu `RevealOnTrigger` libera).

---

## 4. SlideShell

Renderiza o frame visual padrão:
- Fundo cor configurável (`navy` default, `navy-deep` no slide 01).
- Padding 80px / 64px.
- Caption no topo (ex.: `01 — A TESE`) opcional, em Inter 13px tracking 0.1em uppercase, cor `text-subtle`.
- Slide counter `SlideCounter` no canto inferior direito (oculto se `hideCounter`).
- `FullscreenButton` no canto superior direito, visível só quando `document.fullscreenElement` ativo (botão "Sair do fullscreen", Inter 13px, cor `text-subtle`, hover `text` — com ícone Lucide `Minimize2`).
- Provê contexto com `currentStep` para os `RevealOnTrigger` filhos.

---

## 5. Slides — Atos 1 e 2

### Slide 01 — Hook (`hideCounter: true`, fundo `navy-deep`, 5 estados)
- Estado 0: linha horizontal 1px gold de 40px ao centro (sempre visível como âncora).
- Estado 1: **R$ 906 milhões** em Space Grotesk 800, 160px, white, animação `scale: 1.1 → 1` + fade 600ms.
- Estado 2: subtítulo Inter 32px text-muted: "em contratos de IA já firmados com a administração pública brasileira."
- Estado 3: linha Space Grotesk 500, 28px, gold: "5.260 prefeituras ainda não compraram. A janela é agora."
- Estado 4: caption Inter 13px text-subtle no rodapé: "Fonte: PNCP, 790 contratos analisados, abril 2026"
- Conteúdo centralizado vertical e horizontal.

### Slide 02 — A Tese (caption `01 — A TESE`, 4 estados)
- H2 centralizado topo: "A nossa tese, em três movimentos."
- Três blocos verticais; cada clique revela um bloco (estados 1, 2, 3).
- Cada bloco: numerador `01/02/03` Space Grotesk 600 64px gold à esquerda; headline Space Grotesk 600 56px white; subline Inter 22px text-muted, max-width 720px.
- Estado 3 (após 3º bloco): linha rodapé Inter 16px italic gold: "IA é a nova infraestrutura cognitiva do setor público brasileiro."

### Slide 03 — A Curva (caption `02 — O MERCADO É REAL`, 4 estados)
- Layout 40/60. Esquerda: H2 "R$ 906 milhões" + subtítulo + lista bullet gold (3 itens).
- Direita: Recharts `AreaChart` com `PNCP_TIMELINE`.
  - Gradiente vertical gold→transparente (`<linearGradient>` definido em `<defs>`).
  - Linha gold sólida sobre área.
  - 2026 com `strokeDasharray` para indicar projeção; `pattern` listrado via SVG `<pattern>` referenciado pelo último segmento.
  - Ponto destacado em 2025 (`<ReferenceDot>`) com label "INFLEXÃO" em caption gold com pulso suave (animação Framer `scale: [1, 1.15, 1]` em loop 2s).
  - Eixos discretos (`stroke: text-subtle`, sem gridlines pesadas), tooltip dark com formato "X contratos · R$ Y milhões".
- Estados: 1) texto + eixos vazios; 2) curva desenha esquerda→direita usando `motion.path` com `pathLength` 0→1 em 1.5s (overlay SVG sobre o AreaChart, ou animação nativa Recharts `isAnimationActive` + `animationDuration`); 3) anotação INFLEXÃO entra com pulso; 4) caption "Fonte: PNCP, extração própria, abril 2026" no rodapé.

### Slide 04 — Geografia (caption `02 — O MERCADO É REAL`, 2 estados)
- Layout 45/55.
- Esquerda: H2 "Quem está comprando hoje" + parágrafo + card destaque navy-soft 24px rounded-2xl com "57%" Space Grotesk 64px gold + texto Inter 16px text-muted.
- Direita: Recharts `Treemap` com `PNCP_UF_TOP`.
  - Cor por intensidade: interpola de `navy-soft` (menor) a `gold` (maior).
  - Label dentro: UF Space Grotesk bold + número Inter regular menor.
  - Stagger por célula 0.05s usando wrapper Framer (overlay) ou `animationBegin`/`animationDuration` controlado por índice.
- Estado 1: tudo entra com stagger.

### Slide 05 — O Gap (caption `02 — O MERCADO É REAL`, 3 estados)
- H2 topo: "O Gap".
- Visível desde estado 0: linha Inter 24px text-muted: "Apenas 5,6% das prefeituras brasileiras tem alguma solução de IA hoje."
- Estado 1: comparação visual:
  - Bloco grande (~75% largura) `bg-navy-soft` rounded-2xl: **5.260** Space Grotesk 800 200px white + subtítulo Inter 22px text-muted "prefeituras brasileiras nunca compraram IA".
  - Bloco pequeno (~10% largura) `bg-gold` rounded-2xl: **310** Space Grotesk 800 64px navy-deep + subtítulo Inter 14px navy-deep "prefeituras já contrataram".
  - A desproporção é o ponto. Gap horizontal de ~24px entre eles.
- Estado 2: card horizontal navy-soft padding 32px rounded-2xl, duas colunas:
  - "50,6%" Space Grotesk 72px gold + "dos contratos são em municípios"
  - "9,7%" Space Grotesk 72px gold + "do valor está em municípios"
  - Caption rodapé Inter 14px text-subtle: "Tradução: muitos compram, com tickets pequenos. SaaS com onboarding leve é o produto certo."

### Slide 06 — Por que agora (caption `02 — O MERCADO É REAL`, 5 estados)
- H2 centralizado topo: "Por que agora".
- Centro: SVG com três vetores convergindo a um círculo central gold.
  - Vetor 1 (esquerda → centro): label "Custo de LLM caindo 10x ao ano".
  - Vetor 2 (topo → centro): label "Marco regulatório se formando (PL 2338, Lei IA)".
  - Vetor 3 (direita → centro): label "Pressão por produtividade pós arcabouço fiscal".
  - Linhas desenhadas com `motion.line` + `pathLength` 0→1, 700ms cada.
  - Círculo central diâmetro ~180px, fill gold, label interno white Space Grotesk 600: "Janela 2024–2027".
- Estados: 1) vetor 1; 2) vetor 2; 3) vetor 3; 4) círculo central com `scale: 0 → 1` spring; 5) frase rodapé Space Grotesk 32px white italic: "Quem ocupa esse espaço nos próximos 18 a 24 meses define a categoria."

---

## 6. Dados (`src/data/pncp.ts`)

Arquivo criado **exatamente** com as constantes `PNCP_TIMELINE`, `PNCP_TOTAIS`, `PNCP_UF_TOP`, `PNCP_CATEGORIAS`, `PNCP_TOP_PLAYERS`, `PNCP_MUNICIPAL` do brief, com tipagem TypeScript `as const` para inferência segura nos charts. As constantes não usadas neste prompt (CATEGORIAS, TOP_PLAYERS) já ficam disponíveis para os Atos 3/4.

---

## 7. Detalhes finais

- **Responsividade**: stage scaled garante funcionamento de 1024px até 4K. Breakpoint mínimo 1024×600. Não há layout mobile.
- **Performance**: nenhum re-render desnecessário — `useSlideNavigation` em contexto separado do conteúdo dos slides; charts memoizados.
- **Acessibilidade**: `prefers-reduced-motion` reduz durações para 0; botões com `:focus-visible` ring gold; navegação por teclado completa.
- **Fullscreen**: botão "Sair do fullscreen" visível no canto superior direito apenas quando ativo, com `data-no-advance` para não disparar `next()`.
- **Slide counter**: formato `01 / 20` (total fixo em 20 desde já, para não "pular" quando os Atos 3/4 chegarem).
- **Build estático**: TanStack Start gera bundle SSR-compatível; abre em qualquer navegador moderno.

Pronto para o segundo prompt cobrir slides 07–20 sem refatorar a base.
