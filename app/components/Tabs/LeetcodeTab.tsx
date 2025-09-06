import { SectionCard } from "../SectionCard";
import { StatCard } from "../StateCard";

export function LeetcodeTab() {
  return (
    <div className="space-y-6">
      <SectionCard title="LeetCode Profile">
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-4">
          <div className="sm:col-span-2 h-full rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Global Ranking</span>
              <span className="opacity-70">Total Solved 479</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <StatCard label="Easy" value={254} />
              <StatCard label="Medium" value={112} />
              <StatCard label="Hard" value={22} />
            </div>
          </div>
          <StatCard
            className="h-full"
            label="Activity Streak"
            value={"23 days"}
          />
        </div>
      </SectionCard>
    </div>
  );
}
