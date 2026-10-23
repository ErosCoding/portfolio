import Portfolio from "@/components/Portfolio";
import { getGitHubProjects } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  return <Portfolio githubProjects={await getGitHubProjects()} />;
}
