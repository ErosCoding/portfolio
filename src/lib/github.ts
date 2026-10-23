import type { Category, Project } from "@/content/data";

// Puxa do GitHub os repositórios públicos marcados com o tópico "portfolio".
// Descrição, link (homepage) e tópicos vêm do próprio repo, então basta
// configurar o repositório no GitHub para ele aparecer no site.
// Projetos que já estão em data.ts (mesmo repo) não são duplicados.

const USER = "ErosCoding";
const TOPIC = "portfolio";
const known: Category[] = ["ai", "automation", "saas", "data", "web"];

type Repo = {
  name: string;
  description: string | null;
  homepage: string | null;
  html_url: string;
  topics?: string[];
  language: string | null;
  pushed_at: string;
  private: boolean;
  fork: boolean;
  archived: boolean;
};

const title = (slug: string) =>
  slug
    .replace(/^lp[-_]/i, "")
    .split(/[-_]/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

export async function getGitHubProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();

    return repos
      .filter((r) => !r.private && !r.fork && !r.archived && r.topics?.includes(TOPIC))
      .map((r) => {
        const topics = r.topics ?? [];
        const cats = known.filter((c) => topics.includes(c));
        const text = r.description ?? "";
        return {
          name: title(r.name),
          org: "GitHub",
          year: r.pushed_at.slice(0, 4),
          categories: cats.length ? cats : ["web"],
          summary: { pt: text, en: text },
          stack: [r.language, ...topics.filter((t) => t !== TOPIC && !known.includes(t as Category))].filter(
            (s): s is string => Boolean(s),
          ),
          url: r.homepage || undefined,
          repo: r.html_url,
        };
      });
  } catch {
    return [];
  }
}
