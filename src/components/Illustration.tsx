import type { Category } from "@/content/data";

// Ilustrações em linha para o topo dos cards de projeto, uma por categoria.
export function Illustration({ kind }: { kind: Category }) {
  return (
    <svg className={`illo illo-${kind}`} viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      {art[kind]}
    </svg>
  );
}

const art: Record<Category, React.ReactNode> = {
  // Robô com balão de conversa
  ai: (
    <>
      <path d="M100 22v12" />
      <circle cx="100" cy="18" r="4" fill="currentColor" />
      <rect x="66" y="34" width="68" height="54" rx="16" />
      <g className="eyes">
        <circle cx="86" cy="58" r="5" fill="currentColor" />
        <circle cx="114" cy="58" r="5" fill="currentColor" />
      </g>
      <path d="M88 74c8 5 16 5 24 0" />
      <path d="M60 54h6M134 54h6" />
      <rect x="76" y="94" width="48" height="30" rx="8" />
      <path d="M90 106h20M90 114h12" opacity=".7" />
      <g className="bubble">
        <path d="M146 20h40a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6h-26l-10 8v-8h-4a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6z" />
        <circle cx="156" cy="35" r="2" fill="currentColor" />
        <circle cx="166" cy="35" r="2" fill="currentColor" />
        <circle cx="176" cy="35" r="2" fill="currentColor" />
      </g>
    </>
  ),
  // Nós de um fluxo conectados
  automation: (
    <>
      <rect x="14" y="24" width="44" height="32" rx="8" />
      <path d="M28 40h16" />
      <rect x="78" y="54" width="44" height="32" rx="8" />
      <circle cx="100" cy="70" r="6" />
      <rect x="142" y="24" width="44" height="32" rx="8" />
      <path d="M156 40l6 6 10-12" />
      <rect x="142" y="94" width="44" height="32" rx="8" />
      <path d="M156 110h16" />
      <path className="flow" d="M58 40c12 0 10 30 20 30M122 70c12 0 8-30 20-30M122 70c12 0 8 40 20 40" strokeDasharray="5 6" />
    </>
  ),
  // Janela de aplicativo com barra lateral e cartões
  saas: (
    <>
      <rect x="22" y="16" width="156" height="108" rx="10" />
      <path d="M22 34h156" />
      <circle cx="34" cy="25" r="2.5" fill="currentColor" />
      <circle cx="43" cy="25" r="2.5" fill="currentColor" />
      <path d="M58 34v90" />
      <path d="M32 48h16M32 60h16M32 72h12" opacity=".7" />
      <g className="cards">
        <rect x="70" y="46" width="30" height="64" rx="5" />
        <rect x="106" y="46" width="30" height="44" rx="5" />
        <rect x="142" y="46" width="26" height="54" rx="5" />
      </g>
    </>
  ),
  // Gráfico de barras com linha de tendência
  data: (
    <>
      <path d="M24 120h156M24 120V20" />
      <g className="bars">
        <rect x="40" y="84" width="18" height="36" rx="3" />
        <rect x="70" y="64" width="18" height="56" rx="3" />
        <rect x="100" y="74" width="18" height="46" rx="3" />
        <rect x="130" y="44" width="18" height="76" rx="3" />
      </g>
      <path className="trend" d="M40 70l30-22 30 10 30-30 30-8" />
      <circle cx="170" cy="20" r="5" fill="currentColor" />
    </>
  ),
  // Navegador com uma landing page
  web: (
    <>
      <rect x="20" y="16" width="160" height="108" rx="10" />
      <path d="M20 34h160" />
      <circle cx="32" cy="25" r="2.5" fill="currentColor" />
      <circle cx="41" cy="25" r="2.5" fill="currentColor" />
      <rect x="62" y="21" width="96" height="8" rx="4" opacity=".6" />
      <path d="M38 54h70M38 66h54" />
      <rect className="cta" x="38" y="80" width="44" height="16" rx="8" />
      <rect x="122" y="48" width="42" height="56" rx="6" />
      <path d="M128 92l10-14 8 9 6-6 8 11" opacity=".7" />
    </>
  ),
};
