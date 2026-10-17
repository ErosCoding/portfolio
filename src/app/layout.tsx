import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["italic", "normal"] });

export const metadata: Metadata = {
  title: "Eros Rodrigues · AI Engineer",
  description:
    "Agentes de IA, automações com n8n, integrações de APIs e produtos SaaS que fazem empresas venderem mais.",
  openGraph: {
    title: "Eros Rodrigues · AI Engineer",
    description: "Agentes de IA, automação, integrações e produto com foco em resultado de negócio.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f2ee" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// Aplica tema e idioma salvos antes da pintura, para não piscar.
const boot = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t;var l=localStorage.getItem('lang');if(l)document.documentElement.lang=l==='en'?'en':'pt-BR';if(sessionStorage.getItem('intro'))document.documentElement.dataset.intro='done';}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className={`${sans.variable} ${mono.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
