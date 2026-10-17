"use client";

import { useEffect, useRef, useState } from "react";
import {
  categories,
  certifications,
  clients,
  featuredProject,
  impact,
  journey,
  profile,
  projects,
  services,
  stack,
  ui,
  type Category,
  type Lang,
  type Project,
  type T,
} from "@/content/data";
import { GitHubIcon, Icon, InstagramIcon, LinkedInIcon } from "./Icon";
import { Illustration } from "./Illustration";

type Tr = (v: T) => string;

const sections = [
  ["top", ui.nav.home],
  ["about", ui.nav.about],
  ["impact", ui.nav.impact],
  ["services", ui.nav.services],
  ["work", ui.nav.work],
  ["path", ui.nav.path],
  ["contact", ui.nav.contact],
] as const;

const whatsapp = `https://wa.me/${profile.links.whatsapp}`;

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("pt");
  const [filter, setFilter] = useState<Category | "all">("all");
  const [current, setCurrent] = useState("top");
  const t: Tr = (v) => v[lang];

  useEffect(() => {
    try {
      if (localStorage.getItem("lang") === "en") setLang("en");
    } catch {}
  }, []);

  // Revela elementos ao entrar na tela e acompanha a seção atual para a navbar.
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
    return () => {
      reveal.disconnect();
      spy.disconnect();
    };
  }, []);

  const changeLang = (l: Lang) => {
    setLang(l);
    document.documentElement.lang = l === "en" ? "en" : "pt-BR";
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  const count = (c: Category) => projects.filter((p) => p.categories.includes(c)).length;
  const visible = filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter));
  const currentLabel = sections.find(([id]) => id === current)?.[1] ?? ui.nav.home;

  return (
    <>
      <Intro />
      <div className="gridlines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <TopBar lang={lang} onLang={changeLang} t={t} currentLabel={t(currentLabel)} />

      <main>
        {/* Hero */}
        <section className="hero" id="top">
          <div className="noise" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="label">[ AI Engineer ] {t(profile.location)}</p>
              <h1>
                <span className="line">
                  <span>
                    {t(ui.heroLine1)} {t(ui.heroLine2)}
                  </span>
                </span>
                <span className="line">
                  <span>
                    <em>{t(ui.heroAccent)}</em>
                  </span>
                </span>
              </h1>
              <p className="hero-sub">{t(ui.heroSub)}</p>
              <div className="actions">
                <a className="btn invert" href="#work">
                  {t(ui.nav.work)} <Icon name="arrow" size={16} />
                </a>
                <a className="btn ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
                <a className="btn ghost" href={profile.links.github} target="_blank" rel="noreferrer">
                  <GitHubIcon size={16} /> GitHub
                </a>
              </div>
            </div>

            <aside className="id-card">
              <div className="id-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={profile.avatar} alt={profile.name} width={480} height={480} />
              </div>
              <div className="id-body">
                <p className="id-title">{t(ui.card.title)}</p>
                <p className="id-sub">{t(ui.card.subtitle)}</p>
                <dl>
                  <div>
                    <dt>[ {t(ui.card.now)} ]</dt>
                    <dd>{t(ui.card.nowText)}</dd>
                  </div>
                  <div>
                    <dt>[ {t(ui.card.focus)} ]</dt>
                    <dd>{t(ui.card.focusText)}</dd>
                  </div>
                  <div>
                    <dt>[ {t(ui.card.base)} ]</dt>
                    <dd>{t(profile.location)}</dd>
                  </div>
                  <div>
                    <dt>[ {t(ui.card.off)} ]</dt>
                    <dd>{t(ui.card.offText)}</dd>
                  </div>
                </dl>
                <p className="id-note">
                  <span className="pulse" /> {t(ui.card.reply)}
                </p>
              </div>
              <a className="id-cta" href={whatsapp} target="_blank" rel="noreferrer">
                <span className="pulse" /> {t(ui.talk)}
              </a>
            </aside>
          </div>

          <dl className="wrap stats">
            {ui.stats.map((s) => (
              <div key={s.label.pt}>
                <dt>{s.value}</dt>
                <dd>{t(s.label)}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Clientes */}
        <section className="wrap clients" aria-label={t(ui.clientsLabel)}>
          <p className="label">[ {t(ui.clientsLabel)} ]</p>
          <ul className="logo-wall">
            {clients.map((c) => (
              <li key={c.name} data-reveal>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt={c.name} style={{ height: c.height }} loading="lazy" />
                {c.label && <span>{c.name}</span>}
              </li>
            ))}
          </ul>
        </section>

        {/* Abordagem */}
        <section className="wrap section" id="about">
          <p className="label">[ 01 ] {t(ui.nav.about)}</p>
          <ScrollWords text={t(ui.approachText)} key={lang} />
          <ol className="points">
            {ui.approachPoints.map((p, i) => (
              <li key={i} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="idx">0{i + 1}</span>
                <p>{t(p)}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Antes e depois */}
        <section className="wrap section" id="impact">
          <p className="label">[ 02 ] {t(ui.impactTitle)}</p>
          <h2 className="display" data-reveal>
            <em>{t(ui.impactTitle)}</em>
          </h2>
          <p className="impact-lead" data-reveal>
            {t(ui.impactLead)}
          </p>
          <ol className="impact">
            {impact.map((row, i) => (
              <li key={i} data-reveal>
                <div className="impact-before">
                  <span className="label">[ {t(ui.before)} ]</span>
                  <p>{t(row.before)}</p>
                </div>
                <span className="impact-arrow" aria-hidden="true">
                  <Icon name="arrowRight" size={22} />
                </span>
                <div className="impact-after">
                  <span className="label">[ {t(ui.after)} ]</span>
                  <p>{t(row.after)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Serviços */}
        <section className="wrap section" id="services">
          <p className="label">[ 03 ] {t(ui.nav.services)}</p>
          <h2 className="display" data-reveal>
            <em>{t(ui.servicesTitle)}</em>
          </h2>
          <ol className="services">
            {services.map((s, i) => (
              <li key={s.title.pt} data-reveal>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t(s.title)}</h3>
                <p>{t(s.text)}</p>
                <ul className="tags">
                  {s.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* Projetos */}
        <section className="wrap section" id="work">
          <p className="label">[ 04 ] {t(ui.nav.work)}</p>
          <h2 className="display huge" data-reveal>
            {t(ui.workTitle)}
            <sup>({projects.length + 1})</sup>
          </h2>
          <p className="section-sub" data-reveal>
            {t(ui.workSub)}
          </p>

          <Featured p={featuredProject} t={t} />

          <div className="filters" role="tablist" aria-label={t(ui.nav.work)}>
            <button role="tab" aria-selected={filter === "all"} onClick={() => setFilter("all")}>
              {t(ui.filterAll)} <span>({projects.length})</span>
            </button>
            {categories.map((c) => (
              <button key={c.id} role="tab" aria-selected={filter === c.id} onClick={() => setFilter(c.id)}>
                {t(c.label)} <span>({count(c.id)})</span>
              </button>
            ))}
          </div>

          <div className="projects" key={filter}>
            {visible.map((p, i) => (
              <ProjectCard key={p.name} p={p} t={t} index={projects.indexOf(p) + 1} delay={i} />
            ))}
          </div>
        </section>

        {/* Trajetória e certificações */}
        <section className="wrap section" id="path">
          <p className="label">[ 05 ] {t(ui.nav.path)}</p>
          <h2 className="display" data-reveal>
            <em>{t(ui.pathTitle)}</em>
          </h2>
          <div className="path-grid">
            <ol className="timeline">
              {journey.map((j) => (
                <li key={j.title.pt + j.org} data-reveal>
                  <span className="period">{t(j.period)}</span>
                  <div>
                    <h3>{t(j.title)}</h3>
                    <p className="org">{j.org}</p>
                    <p>{t(j.text)}</p>
                  </div>
                </li>
              ))}
            </ol>
            <aside className="certs" data-reveal>
              <h3>[ {t(ui.certTitle)} ]</h3>
              <ul>
                {certifications.map((c) => (
                  <li key={c.name}>
                    <span>{c.name}</span>
                    <span className="muted">
                      {c.issuer} · {c.year}
                    </span>
                  </li>
                ))}
              </ul>
              <h3>[ {t(ui.stackTitle)} ]</h3>
              <div className="stack">
                {stack.map((g) => (
                  <div key={g.group.pt}>
                    <p className="stack-group">{t(g.group)}</p>
                    <ul className="tags">
                      {g.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* Contato */}
        <section className="contact" id="contact">
          <div className="noise" aria-hidden="true" />
          <div className="wrap">
            <p className="label">[ 06 ] {t(ui.contactKicker)}</p>
            <h2 data-reveal>{t(ui.contactTitle)}</h2>
            <p className="contact-sub" data-reveal>
              {t(ui.contactSub)}
            </p>
            <div className="actions" data-reveal>
              <a className="btn invert" href={whatsapp} target="_blank" rel="noreferrer">
                <Icon name="chat" size={16} /> WhatsApp
              </a>
              <a className="btn ghost" href={`mailto:${profile.links.email}`}>
                <Icon name="mail" size={16} /> {profile.links.email}
              </a>
              <a className="btn ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon size={16} /> LinkedIn
              </a>
              <a className="btn ghost" href={profile.links.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon size={16} /> @eros.rva
              </a>
            </div>
          </div>
          <p className="wordmark" aria-hidden="true">
            Eros Rodrigues
          </p>
          <footer className="wrap footer">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>{t(ui.footer)}</span>
          </footer>
        </section>
      </main>
    </>
  );
}

/* Tela de entrada: contador de 0 a 100 que some uma vez por sessão. */
function Intro() {
  const [n, setN] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.intro === "done") {
      setGone(true);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    const dur = reduce ? 0 : 1100;
    let raf = 0;
    const tick = (now: number) => {
      const p = dur ? Math.min(1, (now - start) / dur) : 1;
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          document.documentElement.dataset.intro = "done";
          try {
            sessionStorage.setItem("intro", "1");
          } catch {}
          setTimeout(() => setGone(true), 900);
        }, 150);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (gone) return null;
  return (
    <div className="intro" aria-hidden="true">
      <span className="intro-name">Eros Rodrigues</span>
      <span className="intro-count">{String(n).padStart(3, "0")}</span>
    </div>
  );
}

/* Texto que "acende" palavra por palavra conforme a rolagem. */
function ScrollWords({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const lit = progress * words.length;
  return (
    <p className="scroll-words" ref={ref}>
      {words.map((w, i) => (
        <span key={i} style={{ opacity: i < lit ? 1 : 0.16 }}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

function TopBar({
  lang,
  onLang,
  t,
  currentLabel,
}: {
  lang: Lang;
  onLang: (l: Lang) => void;
  t: Tr;
  currentLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const explicit = document.documentElement.dataset.theme;
    setDark(explicit ? explicit === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    const v = next ? "dark" : "light";
    document.documentElement.dataset.theme = v;
    try {
      localStorage.setItem("theme", v);
    } catch {}
  };

  return (
    <>
      <header className="topbar">
        <div className="pill left">
          <a href="#top" className="pill-brand">
            {profile.name}
          </a>
          <span className="slash">/</span>
          <span className="pill-current">{currentLabel}</span>
          <button className="pill-menu" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            <span className={`burger ${open ? "x" : ""}`} aria-hidden="true">
              <i />
              <i />
            </span>
            {open ? t(ui.nav.close) : t(ui.nav.menu)}
          </button>
        </div>
        <div className="pill right">
          <span className="avail">
            <span className="pulse" /> {t(ui.available)}
          </span>
          <a className="pill-cta" href={whatsapp} target="_blank" rel="noreferrer">
            {t(ui.talkShort)}
          </a>
        </div>
      </header>

      <div className={`menu ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <nav className="menu-panel" onClick={(e) => e.stopPropagation()}>
          <ol>
            {sections.map(([id, label], i) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)}>
                  <span className="idx">0{i}</span>
                  {t(label)}
                </a>
              </li>
            ))}
          </ol>
          <div className="menu-foot">
            <div className="seg" role="group" aria-label="Idioma / Language">
              <button aria-pressed={lang === "pt"} onClick={() => onLang("pt")}>
                PT
              </button>
              <button aria-pressed={lang === "en"} onClick={() => onLang("en")}>
                EN
              </button>
            </div>
            <button className="seg-btn" onClick={toggleTheme}>
              <Icon name={dark ? "sun" : "moon"} size={16} /> {dark ? "Light" : "Dark"}
            </button>
            <a className="seg-btn" href={profile.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon size={15} />
            </a>
            <a className="seg-btn" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={15} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

function Featured({ p, t }: { p: Project; t: Tr }) {
  return (
    <article className="featured" data-reveal>
      <div className="featured-main">
        <p className="label light">
          [ {t(ui.featured)} ] {p.org} · {p.year}
        </p>
        <h3>{p.name}</h3>
        <p className="featured-summary">{t(p.summary)}</p>
        {p.url && (
          <div className="actions">
            <a className="btn invert" href={p.url} target="_blank" rel="noreferrer">
              {t(ui.crmCta)} <Icon name="arrow" size={16} />
            </a>
          </div>
        )}
      </div>
      <ul className="featured-list">
        {p.highlights?.map((h, i) => (
          <li key={h.pt}>
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            <span>{t(h)}</span>
          </li>
        ))}
        <li className="featured-stack">
          <span />
          <span>{p.stack.join("  /  ")}</span>
        </li>
      </ul>
    </article>
  );
}

function ProjectCard({ p, t, index, delay }: { p: Project; t: Tr; index: number; delay: number }) {
  const cat = categories.find((c) => c.id === p.categories[0]);
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <article className={`project cat-${p.categories[0]}`} onMouseMove={onMove} style={{ animationDelay: `${delay * 50}ms` }}>
      <div className="project-visual" aria-hidden="true">
        <span className="project-num">{String(index).padStart(2, "0")}</span>
        <Illustration kind={p.categories[0]} />
        <span className="project-stackline">{p.stack.slice(0, 3).join("  /  ")}</span>
        <span className="project-caption">
          <span className="pulse" /> {p.name}
          <span className="cap-meta">
            {cat && t(cat.label)} [{p.year}]
          </span>
        </span>
      </div>
      <div className="project-body">
        <p className="meta">
          <span>{p.org}</span>
          {p.private && (
            <span className="private">
              <Icon name="lock" size={11} /> {t(ui.privateTag)}
            </span>
          )}
        </p>
        <h3>{p.name}</h3>
        <p>{t(p.summary)}</p>
        {p.highlights && (
          <ul className="mini-list">
            {p.highlights.map((h) => (
              <li key={h.pt}>{t(h)}</li>
            ))}
          </ul>
        )}
        <ul className="tags">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {p.url && (
          <a className="visit" href={p.url} target="_blank" rel="noreferrer">
            {t(ui.visit)} <Icon name="arrow" size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
