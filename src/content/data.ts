// Todo o conteúdo do portfólio vive aqui. Para adicionar um projeto, cliente ou
// experiência, edite este arquivo e o layout se ajusta sozinho.
// Regra de estilo: nada de travessão nos textos.

export type Lang = "pt" | "en";
export type T = { pt: string; en: string };

export const profile = {
  name: "Eros Rodrigues",
  role: { pt: "AI Engineer", en: "AI Engineer" },
  location: { pt: "Belo Horizonte, MG", en: "Belo Horizonte, Brazil" },
  avatar: "https://github.com/ErosCoding.png?size=480",
  links: {
    linkedin: "https://www.linkedin.com/in/eroscode/",
    github: "https://github.com/ErosCoding",
    email: "rodrigues01204@gmail.com",
    whatsapp: "5531973154536",
    instagram: "https://www.instagram.com/eros.rva/",
  },
};

export const ui = {
  nav: {
    home: { pt: "Início", en: "Home" },
    about: { pt: "Abordagem", en: "Approach" },
    impact: { pt: "Resultados", en: "Results" },
    services: { pt: "O que eu faço", en: "What I do" },
    work: { pt: "Projetos", en: "Work" },
    path: { pt: "Trajetória", en: "Journey" },
    contact: { pt: "Contato", en: "Contact" },
    menu: { pt: "Menu", en: "Menu" },
    close: { pt: "Fechar", en: "Close" },
  },
  available: { pt: "Aberto a novos projetos", en: "Open to new projects" },
  talk: { pt: "Chamar no WhatsApp", en: "Message me" },
  talkShort: { pt: "Conversar", en: "Let's talk" },
  heroLine1: { pt: "Agentes de IA e sistemas", en: "AI agents and systems" },
  heroLine2: { pt: "que fazem empresas", en: "that help companies" },
  heroAccent: { pt: "venderem mais.", en: "sell more." },
  heroSub: {
    pt: "Automação no WhatsApp, fluxos com n8n, integrações entre APIs e produtos SaaS completos. Eu começo pelo problema do negócio e só depois escolho a ferramenta.",
    en: "WhatsApp automation, n8n workflows, API integrations and full SaaS products. I start from the business problem and only then pick the tool.",
  },
  card: {
    title: { pt: "Do problema ao sistema rodando", en: "From problem to running system" },
    subtitle: { pt: "IA, automação e produto", en: "AI, automation and product" },
    now: { pt: "Agora", en: "Now" },
    nowText: { pt: "CRM do Jordão na Emplo.ia", en: "CRM do Jordão at Emplo.ia" },
    focus: { pt: "Foco", en: "Focus" },
    focusText: { pt: "Vendas, atendimento e dados", en: "Sales, support and data" },
    base: { pt: "Base", en: "Based in" },
    off: { pt: "Fora do código", en: "Off the clock" },
    offText: { pt: "Jiu-jitsu, artes marciais e xadrez", en: "Jiu-jitsu, martial arts and chess" },
    reply: { pt: "Fala comigo pelo WhatsApp ou e-mail", en: "Reach me on WhatsApp or email" },
  },
  stats: [
    { value: "10+", label: { pt: "empresas atendidas com automação e IA", en: "companies served with automation and AI" } },
    { value: "8", label: { pt: "contas que conduzi como ponto focal técnico", en: "client accounts I led as technical owner" } },
    { value: "1", label: { pt: "SaaS sob minha responsabilidade", en: "SaaS product I'm responsible for" } },
  ],
  approachText: {
    pt: "Antes de programar eu sentei do outro lado do balcão. Vendi, atendi cliente, conferi planilha e fechei caixa. Por isso eu olho para uma operação procurando onde o dinheiro escapa e onde as pessoas perdem tempo. Depois construo a solução que tira esse peso da equipe e deixa claro qual ação tomar.",
    en: "Before writing code I worked the other side of the counter. I sold, served customers, checked spreadsheets and closed registers. So I look at an operation searching for where money leaks and where people lose time. Then I build the solution that takes that weight off the team and makes the next action obvious.",
  },
  approachPoints: [
    {
      pt: "Na Emplo.ia passei pela Entrega, cuidando de 8 clientes direto com diretores e fundadores.",
      en: "At Emplo.ia I worked in Delivery, handling 8 clients directly with directors and founders.",
    },
    {
      pt: "Na Aquisição, automatizei propostas e atendimentos para o vendedor só entrar na reunião e vender.",
      en: "In Acquisition, I automated proposals and first contact so reps only had to join the call and close.",
    },
    {
      pt: "Hoje sou responsável pelo CRM do Jordão, um SaaS B2B com WhatsApp e IA.",
      en: "Today I'm responsible for CRM do Jordão, a B2B SaaS with WhatsApp and AI.",
    },
  ],
  impactTitle: { pt: "O que muda na operação", en: "What changes in the operation" },
  impactLead: {
    pt: "Muitos clientes chegaram sem processo nenhum: vendiam no boca a boca e faziam tudo na mão. O retorno que eu mais escuto é sobre tempo. Tempo para pensar no negócio em vez de responder um por um, cadastrar a mesma coisa em dois sistemas ou caçar número em planilha.",
    en: "Many clients came in with no process at all: selling by word of mouth and doing everything by hand. The feedback I hear most is about time. Time to think about the business instead of answering one by one, typing the same thing into two systems or hunting numbers in spreadsheets.",
  },
  before: { pt: "Antes", en: "Before" },
  after: { pt: "Depois", en: "After" },
  servicesTitle: { pt: "O que eu faço", en: "What I do" },
  workTitle: { pt: "Projetos", en: "Work" },
  workSub: {
    pt: "Boa parte são sistemas privados de empresas e clientes. O código não é público, mas o problema, a solução e a stack estão aqui.",
    en: "Most of these are private company and client systems. The code isn't public, but the problem, solution and stack are here.",
  },
  featured: { pt: "Produto que eu lidero", en: "Product I lead" },
  problem: { pt: "Problema", en: "Problem" },
  solution: { pt: "Solução", en: "Solution" },
  visit: { pt: "Ver online", en: "Visit" },
  crmCta: { pt: "Conhecer o CRM do Jordão", en: "Visit CRM do Jordão" },
  privateTag: { pt: "Privado", en: "Private" },
  filterAll: { pt: "Tudo", en: "All" },
  clientsLabel: { pt: "Empresas para quem criei soluções", en: "Companies I've built for" },
  pathTitle: { pt: "Trajetória", en: "Journey" },
  certTitle: { pt: "Certificações", en: "Certifications" },
  stackTitle: { pt: "Ferramentas", en: "Toolkit" },
  contactKicker: { pt: "Vamos conversar", en: "Let's talk" },
  contactTitle: { pt: "Tem um processo manual ou um funil vazando?", en: "Got a manual process or a leaky funnel?" },
  contactSub: {
    pt: "Me conta o que está travando. Se der para resolver com automação ou IA, eu te mostro como.",
    en: "Tell me what's stuck. If automation or AI can fix it, I'll show you how.",
  },
  footer: { pt: "Feito por mim com Next.js e publicado na Vercel.", en: "Built by me with Next.js, deployed on Vercel." },
};

export const services: { title: T; text: T; tags: string[] }[] = [
  {
    title: { pt: "Agentes de IA", en: "AI agents" },
    text: {
      pt: "SDRs e atendentes que qualificam leads, tiram dúvidas, agendam reuniões e fazem follow up no WhatsApp, com contexto do negócio e passagem para um humano na hora certa.",
      en: "SDRs and support agents that qualify leads, answer questions, book meetings and follow up on WhatsApp, with business context and handoff to a human at the right time.",
    },
    tags: ["OpenAI", "Claude", "RAG", "Multiagentes"],
  },
  {
    title: { pt: "Automação com n8n", en: "n8n automation" },
    text: {
      pt: "Fluxos que ligam formulário, CRM, WhatsApp, e-mail e planilha. Proposta que sai sozinha, lead distribuído na hora e relatório que chega pronto.",
      en: "Workflows connecting forms, CRM, WhatsApp, email and sheets. Proposals that send themselves, leads routed instantly and reports that arrive ready.",
    },
    tags: ["n8n", "Webhooks", "Lovable", "Cron"],
  },
  {
    title: { pt: "Integrações e APIs", en: "Integrations and APIs" },
    text: {
      pt: "WhatsApp (Z-API, Evolution, Meta Cloud), Google Calendar, Pipedrive, Asaas, Mautic, Apollo e Resend. Faço conversar sistemas que antes não se falavam.",
      en: "WhatsApp (Z-API, Evolution, Meta Cloud), Google Calendar, Pipedrive, Asaas, Mautic, Apollo and Resend. I make systems talk that never did before.",
    },
    tags: ["REST", "OAuth 2.0", "Webhooks", "Edge Functions"],
  },
  {
    title: { pt: "Produtos SaaS", en: "SaaS products" },
    text: {
      pt: "Do banco ao deploy: multi-tenant, login, cobrança recorrente, painéis e IA dentro do produto. Next.js, Supabase, Postgres e Prisma.",
      en: "From database to deploy: multi-tenancy, auth, recurring billing, dashboards and AI inside the product. Next.js, Supabase, Postgres and Prisma.",
    },
    tags: ["Next.js", "Supabase", "Prisma", "Vercel"],
  },
  {
    title: { pt: "Dados e painéis", en: "Data and dashboards" },
    text: {
      pt: "Painéis que juntam anúncio, lead por campanha, funil do CRM e venda numa fonte só. A ideia é saber onde agir, não só olhar o que já passou.",
      en: "Dashboards that join ads, leads per campaign, CRM funnel and sales into one source. The point is knowing where to act, not just looking back.",
    },
    tags: ["Funil", "Atribuição", "KPIs", "SQL"],
  },
  {
    title: { pt: "Processo e treinamento", en: "Process and training" },
    text: {
      pt: "Mapeio a operação, acho o gargalo e defino a métrica antes de automatizar. Depois treino o time comercial para usar o CRM e as automações no máximo.",
      en: "I map the operation, find the bottleneck and set the metric before automating. Then I train sales teams to get the most out of the CRM and automations.",
    },
    tags: ["SalesOps", "CRM", "Onboarding", "Growth"],
  },
];

export type Category = "ai" | "saas" | "automation" | "data" | "web";
export const categories: { id: Category; label: T }[] = [
  { id: "ai", label: { pt: "Agentes de IA", en: "AI agents" } },
  { id: "automation", label: { pt: "Automação", en: "Automation" } },
  { id: "saas", label: { pt: "SaaS", en: "SaaS" } },
  { id: "data", label: { pt: "Dados", en: "Data" } },
  { id: "web", label: { pt: "Sites e LPs", en: "Websites" } },
];

export type Project = {
  name: string;
  org: string;
  year: string;
  categories: Category[];
  summary: T;
  problem?: T;
  solution?: T;
  highlights?: T[];
  stack: string[];
  url?: string;
  private?: boolean;
};

export const featuredProject: Project = {
  name: "CRM do Jordão",
  org: "Emplo.ia · BizRevolution",
  year: "2026",
  categories: ["saas", "ai"],
  summary: {
    pt: "O CRM que vende junto com você. Funil, WhatsApp e um copiloto de IA treinado no método Rainmaker do Jordão, tudo no mesmo lugar. Hoje está no mercado e eu sou o responsável pelo produto.",
    en: "The CRM that sells alongside you. Pipeline, WhatsApp and an AI copilot trained on Jordão's Rainmaker method, all in one place. It's on the market today and I'm responsible for the product.",
  },
  highlights: [
    { pt: "Conversas do WhatsApp dentro do CRM", en: "WhatsApp conversations inside the CRM" },
    { pt: "Copiloto de IA que sugere o próximo passo de cada lead", en: "AI copilot suggesting the next step for every lead" },
    { pt: "Funil visual para o gestor enxergar a operação", en: "A visual pipeline so managers see the whole operation" },
  ],
  stack: ["Next.js", "TypeScript", "Postgres", "OpenAI", "WhatsApp"],
  url: "https://crmdojordao.com.br/",
};

export const projects: Project[] = [
  {
    name: "Agentes de atendimento e vendas",
    org: "Clientes diversos",
    year: "2025",
    categories: ["ai", "automation"],
    summary: {
      pt: "Agentes no WhatsApp para lojas de iPhone e para a Impactour no Chile. Respondem dúvida de produto e de passeio, passam preço, qualificam e entregam o cliente pronto para o vendedor.",
      en: "WhatsApp agents for iPhone retailers and for Impactour in Chile. They answer product and tour questions, quote prices, qualify and hand a ready customer to the sales team.",
    },
    highlights: [
      { pt: "Fluxos em n8n com LLM, RAG em PDFs e planilhas e consulta a banco", en: "n8n flows with LLMs, RAG over PDFs and sheets, and database lookups" },
      { pt: "Carteira de 8 clientes com reunião direta com donos e diretores", en: "A portfolio of 8 clients with direct meetings with owners and directors" },
    ],
    stack: ["n8n", "OpenAI", "WhatsApp", "RAG", "Supabase"],
    private: true,
  },
  {
    name: "Automação comercial da Aquisição",
    org: "Emplo.ia",
    year: "2026",
    categories: ["automation", "data"],
    summary: {
      pt: "Propostas geradas sozinhas, atendimento inicial automático e tudo conversando com o funil do CRM. O vendedor só se preocupa em entrar na reunião e vender.",
      en: "Proposals generated automatically, first contact handled for the team, and everything synced with the CRM funnel. Reps only need to join the meeting and close.",
    },
    stack: ["n8n", "OpenAI", "CRM", "WhatsApp", "Google Docs"],
    private: true,
  },
  {
    name: "Sales Vision",
    org: "Agência Arms",
    year: "2026",
    categories: ["data"],
    summary: {
      pt: "O painel de aquisição da empresa: anúncio, lead por campanha, funil do CRM, reunião e venda numa fonte só, para saber onde agir.",
      en: "The company's acquisition dashboard: ads, leads per campaign, CRM funnel, meetings and sales in one source, to know where to act.",
    },
    highlights: [
      { pt: "Unifiquei métricas que divergiam (uma venda chegava a contar três vezes)", en: "Unified diverging metrics (one sale was counted up to three times)" },
      { pt: "Funil da agência e do SaaS separados, com comparação lado a lado", en: "Agency and SaaS funnels split, compared side by side" },
    ],
    stack: ["React", "TypeScript", "Supabase", "Recharts"],
    private: true,
  },
  {
    name: "Emplo.ia SDR Platform",
    org: "Emplo.ia",
    year: "2026",
    categories: ["ai", "saas"],
    summary: {
      pt: "Plataforma multi-tenant de SDR com IA. Qualifica no WhatsApp, agenda no Google Calendar e faz follow up sozinha, então o closer só fala com lead quente.",
      en: "Multi-tenant AI SDR platform. Qualifies on WhatsApp, books on Google Calendar and follows up on its own, so closers only talk to hot leads.",
    },
    stack: ["Next.js", "Fastify", "Supabase", "OpenAI", "Z-API", "Google Calendar", "Redis"],
    private: true,
  },
  {
    name: "Niche Lab",
    org: "Emplo.ia",
    year: "2026",
    categories: ["ai", "saas"],
    summary: {
      pt: "Fábrica de testes de nicho para tráfego frio. Para cada nicho a IA gera pesquisa de mercado, oferta, landing page, playbook de vendas, deck e criativos com a marca aplicada.",
      en: "A niche testing factory for cold traffic. For each niche, AI generates market research, offer, landing page, sales playbook, deck and on-brand creatives.",
    },
    stack: ["Next.js", "React 19", "Prisma", "OpenAI", "gpt-image", "Claude"],
    private: true,
  },
  {
    name: "Prospector",
    org: "Emplo.ia",
    year: "2026",
    categories: ["automation", "ai"],
    summary: {
      pt: "Prospecção B2B por cold e-mail. Lead vem do Apollo, a IA escreve a copy, o Resend envia, a resposta chega classificada com rascunho pronto e tudo vai para o Pipedrive.",
      en: "B2B cold email prospecting. Leads come from Apollo, AI writes the copy, Resend sends it, replies arrive classified with a draft, and everything syncs to Pipedrive.",
    },
    stack: ["React", "Supabase Edge Functions", "Apollo", "Resend", "OpenAI", "Pipedrive"],
    private: true,
  },
  {
    name: "Prospecção IA no WhatsApp",
    org: "Emplo.ia",
    year: "2026",
    categories: ["ai", "automation"],
    summary: {
      pt: "Sobe a planilha de leads, a IA aborda e conversa, e quando o lead aceita a reunião ela já cai no Google Calendar.",
      en: "Upload a lead sheet, AI reaches out and talks, and once the lead accepts, the meeting lands on Google Calendar.",
    },
    stack: ["FastAPI", "React", "Supabase", "Meta Cloud API", "GPT-4o-mini"],
    private: true,
  },
  {
    name: "Content Engine",
    org: "Emplo.ia",
    year: "2026",
    categories: ["ai", "saas"],
    summary: {
      pt: "SaaS multiagente que transforma vídeo longo em conteúdo para Instagram, X, LinkedIn e Shorts, com agentes de análise, cortes, carrossel e direção de arte.",
      en: "Multi-agent SaaS that turns long videos into content for Instagram, X, LinkedIn and Shorts, with agents for analysis, clips, carousels and art direction.",
    },
    stack: ["Python", "FastAPI", "Whisper", "Claude", "Gemini"],
    private: true,
  },
  {
    name: "Editor de Reels com IA",
    org: "Emplo.ia",
    year: "2026",
    categories: ["ai", "automation"],
    summary: {
      pt: "Esteira interna de Reels: puxa o bruto do Drive, corta silêncio com Whisper, aplica modelo de edição, gera legenda com IA e organiza o calendário de postagem.",
      en: "Internal Reels pipeline: pulls raw footage from Drive, cuts silences with Whisper, applies edit templates, writes captions with AI and schedules posts.",
    },
    stack: ["Python", "Flask", "ffmpeg", "faster-whisper", "OpenAI"],
    private: true,
  },
  {
    name: "Segundo Cérebro",
    org: "Emplo.ia",
    year: "2026",
    categories: ["ai"],
    summary: {
      pt: "Base de conhecimento da empresa que os agentes de IA usam como contexto: processos de Aquisição e Entrega, inventário dos sistemas e design system.",
      en: "Company knowledge base used as context by AI agents: Acquisition and Delivery processes, systems inventory and design system.",
    },
    stack: ["Markdown", "Obsidian", "GitHub Actions"],
    private: true,
  },
  {
    name: "Fanverse",
    org: "Fanverse",
    year: "2026",
    categories: ["saas"],
    summary: {
      pt: "Rede social de fandoms para a América Latina, começando pela comunidade ARMY, com feed, perfis, enquetes, notificações e plano premium.",
      en: "A fandom social network for Latin America, starting with the ARMY community, with feed, profiles, polls, notifications and a premium plan.",
    },
    stack: ["Next.js", "Supabase", "Postgres", "PayPal"],
    url: "https://fanverse-fawn.vercel.app",
  },
  {
    name: "Guia ARMY Santiago",
    org: "Turismo · Chile",
    year: "2026",
    categories: ["web"],
    summary: {
      pt: "Guia web em espanhol para quem ia ao show em Santiago, com prazos, pagamentos, logística e um FAQ de 116 perguntas com busca.",
      en: "Spanish web guide for fans going to the Santiago concert, with deadlines, payments, logistics and a searchable 116 question FAQ.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Supabase"],
    url: "https://lp-faq-armys-chile.vercel.app",
  },
  {
    name: "Spring Day House",
    org: "Hostel · Santiago",
    year: "2026",
    categories: ["web"],
    summary: {
      pt: "Landing page de reserva. O visitante escolhe quarto, datas e pessoas, vê a estimativa e o botão abre o WhatsApp com a mensagem pronta.",
      en: "Booking landing page. Visitors pick room, dates and guests, see an estimate, and the button opens WhatsApp with the message ready.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://lp-enjoy-hostel.vercel.app",
  },
  {
    name: "NK Tattoo",
    org: "Estúdio de tatuagem",
    year: "2026",
    categories: ["web"],
    summary: {
      pt: "Landing page de estúdio de tatuagem, uma das várias que fiz para tatuadores e pequenos negócios.",
      en: "Landing page for a tattoo studio, one of many I've made for tattoo artists and small businesses.",
    },
    stack: ["TypeScript", "vinext"],
    url: "https://nktattoo-lp.vercel.app",
  },
  {
    name: "Sistema CIC",
    org: "Prefeitura de Belo Horizonte",
    year: "2024",
    categories: ["web", "data"],
    summary: {
      pt: "No estágio na Gerência de Custos, refiz o visual e a responsividade do sistema legado e cuidei das cargas de dados de energia, água e suprimentos.",
      en: "During my internship at the Cost Management office, I redesigned the legacy system's UI and handled energy, water and supply data loads.",
    },
    stack: ["PHP", "JavaScript", "PowerCenter", "QlikSense"],
    url: "https://github.com/ErosCoding/cic2",
  },
];

export const clients: { name: string; logo: string; height: number; label?: boolean }[] = [
  { name: "RD Station", logo: "/logos/rd-station.svg", height: 30 },
  { name: "Krug Bier", logo: "/logos/krug-bier.webp", height: 56 },
  { name: "Kin Chopp", logo: "/logos/kin-chopp.png", height: 56 },
  { name: "Bolixe", logo: "/logos/bolixe.png", height: 40 },
  { name: "Impactour Chile", logo: "/logos/impactour.png", height: 40, label: true },
];

export const impact: { before: T; after: T }[] = [
  {
    before: { pt: "Vendia no boca a boca, sem funil", en: "Sold by word of mouth, no funnel" },
    after: { pt: "Lead entra, é qualificado e recebe follow up sozinho", en: "Leads come in, get qualified and followed up automatically" },
  },
  {
    before: { pt: "Dono respondendo cliente um por um o dia todo", en: "Owner answering customers one by one all day" },
    after: { pt: "Agente de IA atende e só passa quem está pronto para comprar", en: "An AI agent answers and only hands over buyers who are ready" },
  },
  {
    before: { pt: "Cadastro repetido de um sistema para o outro", en: "Retyping the same data from one system into another" },
    after: { pt: "Integração que cruza os dados sem ninguém encostar", en: "An integration that syncs the data with no one touching it" },
  },
  {
    before: { pt: "Ninguém sabia quanto a operação dava de lucro", en: "Nobody knew how much the operation actually made" },
    after: { pt: "Dash ou planilha com os números claros, do jeito que o cliente lê melhor", en: "A dashboard or spreadsheet with clear numbers, in the format the client reads best" },
  },
];

export const journey: { period: T; title: T; org: string; text: T }[] = [
  {
    period: { pt: "mar 2026 · hoje", en: "Mar 2026 · now" },
    title: { pt: "Analytics & Acquisition Developer", en: "Analytics & Acquisition Developer" },
    org: "Emplo.ia",
    text: {
      pt: "Automação de prospecção e conversão, painel de aquisição e, hoje, responsável pelo CRM do Jordão.",
      en: "Prospecting and conversion automation, the acquisition dashboard and, today, ownership of CRM do Jordão.",
    },
  },
  {
    period: { pt: "fev 2025 · mar 2026", en: "Feb 2025 · Mar 2026" },
    title: { pt: "Automation Developer", en: "Automation Developer" },
    org: "Emplo.ia",
    text: {
      pt: "Soluções com LLM e n8n para 8 clientes, alinhamento direto com diretores e treinamento de times comerciais em CRM.",
      en: "LLM and n8n solutions for 8 clients, direct alignment with directors, and CRM training for sales teams.",
    },
  },
  {
    period: { pt: "set 2024 · jul 2025", en: "Sep 2024 · Jul 2025" },
    title: { pt: "Web Designer freelancer", en: "Freelance Web Designer" },
    org: "Dr.Ads Company",
    text: {
      pt: "Criativos de anúncio com IA generativa e landing pages em Figma e WordPress para clientes do Brasil e de fora.",
      en: "Ad creatives with generative AI and landing pages in Figma and WordPress for clients in Brazil and abroad.",
    },
  },
  {
    period: { pt: "nov 2023 · fev 2025", en: "Nov 2023 · Feb 2025" },
    title: { pt: "Estagiário de TI", en: "IT Intern" },
    org: "Prefeitura de Belo Horizonte",
    text: {
      pt: "Sistema CIC da Gerência de Custos: layout, PHP legado, cargas no PowerCenter, painéis no QlikSense e Scrum Master em vários ciclos.",
      en: "Cost Management's CIC system: UI, legacy PHP, PowerCenter loads, QlikSense dashboards and Scrum Master for several cycles.",
    },
  },
  {
    period: { pt: "2021 · 2023", en: "2021 · 2023" },
    title: { pt: "Vendas e auditoria", en: "Sales and auditing" },
    org: "Americanas · Hospital Felício Rocho",
    text: {
      pt: "Onde aprendi a vender, atender e conferir número. É daí que vem meu olhar de negócio.",
      en: "Where I learned to sell, serve customers and check numbers. That's where my business sense comes from.",
    },
  },
  {
    period: { pt: "Formado", en: "Graduated" },
    title: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
    org: "PUC Minas",
    text: {
      pt: "Projetos web, mobile e distribuídos feitos em equipe.",
      en: "Team built web, mobile and distributed projects.",
    },
  },
];

export const certifications: { name: string; issuer: string; year: string }[] = [
  { name: "Claude Code in Action", issuer: "Anthropic", year: "2026" },
  { name: "Multiagentes com n8n", issuer: "NoCode StartUp", year: "2025" },
  { name: "RAG: conversando com PDF e planilhas", issuer: "NoCode StartUp", year: "2025" },
  { name: "Tools: banco de dados e APIs no n8n", issuer: "NoCode StartUp", year: "2025" },
  { name: "Agente de IA no WhatsApp", issuer: "NoCode StartUp", year: "2024" },
  { name: "Engenharia de Prompts", issuer: "NoCode StartUp", year: "2024" },
  { name: "Informatica PowerCenter", issuer: "Prodabel", year: "2024" },
];

export const stack: { group: T; items: string[] }[] = [
  { group: { pt: "IA", en: "AI" }, items: ["OpenAI", "Claude", "Gemini", "Whisper", "RAG", "Multiagentes"] },
  { group: { pt: "Automação", en: "Automation" }, items: ["n8n", "Lovable", "Webhooks", "GitHub Actions"] },
  { group: { pt: "Integrações", en: "Integrations" }, items: ["Z-API", "Evolution API", "Meta Cloud API", "Google APIs", "Pipedrive", "Asaas", "Mautic", "Apollo", "Resend"] },
  { group: { pt: "Produto", en: "Product" }, items: ["Next.js", "React", "TypeScript", "Node.js", "Python", "FastAPI"] },
  { group: { pt: "Dados", en: "Data" }, items: ["Postgres", "Supabase", "Prisma", "Redis", "QlikSense", "PowerCenter"] },
];
