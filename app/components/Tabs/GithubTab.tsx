import { Pill } from "../Pill";
import { SectionCard } from "../SectionCard";
import { StatCard } from "../StateCard";
import { githubData } from "@/app/features/dashboard/data/github";


export function GithubTab() {
  const totalStars = githubData.repos.reduce((sum, r) => sum + r.stars, 0);
  const totalPRs6Mo = githubData.repos.reduce(
    (sum, r) => sum + (r.prsLast6Mo ?? 0),
    0
  );

  return (
    <div className="space-y-6">
      <SectionCard title="GitHub Profile">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <StatCard label="Followers" value={githubData.profile.followers} />
          <StatCard
            label="Public Repos"
            value={githubData.profile.publicRepos}
          />
          <StatCard label="Total Stars" value={totalStars} />
          <StatCard label="PRs (6 months)" value={totalPRs6Mo} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-3">
            <div className="text-sm opacity-70">Following</div>
            <div className="text-base mt-1 font-medium">
              {githubData.profile.following}
            </div>
          </div>
          <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-3">
            <div className="text-sm opacity-70">Company</div>
            <div className="text-base mt-1 font-medium">
              {githubData.profile.company}
            </div>
          </div>
          <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-3">
            <div className="text-sm opacity-70">Name / Email</div>
            <div className="text-base mt-1 font-medium">
              {githubData.profile.name}
            </div>
            <div className="text-sm opacity-70">{githubData.profile.email}</div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {githubData.repos.map((repo) => (
            <div
              key={repo.url}
              className="rounded-lg border border-dashed border-neutral-300 bg-white p-3"
            >
              <div className="flex items-center justify-between text-base font-medium">
                <a
                  className="hover:underline"
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.owner}/{repo.name}
                </a>
                <div className="flex items-center gap-2">
                  <Pill>★ {repo.stars}</Pill>
                  {repo.prsLast6Mo ? <Pill>PRs {repo.prsLast6Mo}</Pill> : null}
                </div>
              </div>
              <p className="mt-1 text-base opacity-80">{repo.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {repo.tags.map((t) => (
                  <Pill key={repo.url + t}>{t}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
