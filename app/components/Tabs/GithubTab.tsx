import { Pill } from "../Pill";
import { SectionCard } from "../SectionCard";
import { StatCard } from "../StateCard";

export function GithubTab() {
  return (
    <div className="space-y-6">
      <SectionCard title="GitHub Profile">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <StatCard label="Followers" value={254} />
          <StatCard label="Repo" value={112} />
          <StatCard label="Total Stars" value={2247} />
          <StatCard label="PRs (6 months)" value={145} />
        </div>

        <div className="mt-6 space-y-3">
          {[
            "awesome-react-components",
            "node-api-boilerplate",
            "ml-data-pipeline",
          ].map((r) => (
            <div
              key={r}
              className="rounded-lg border border-neutral-200 bg-neutral-50 p-4"
            >
              <div className="flex items-center justify-between text-sm font-medium">
                <span>{r}</span>
                <Pill>★ 1234</Pill>
              </div>
              <p className="mt-1 text-sm opacity-80">
                Production-ready Node.js API boilerplate with authentication,
                validation, and testing setup.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {"Javascript React Node.js Typescript".split(" ").map((s) => (
                  <Pill key={s + r}>{s}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
