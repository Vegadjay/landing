import { SectionCard } from "../SectionCard";
import { StatCard } from "../StateCard";
import { Pill } from "../Pill";

const mockLeetcode = {
  username: "shruti123",
  url: "https://leetcode.com/shruti123",
  easy: 254,
  medium: 112,
  hard: 22,
  activityStreakDays: 23,
};

export function LeetcodeTab() {
  const totalSolved =
    mockLeetcode.easy + mockLeetcode.medium + mockLeetcode.hard;
  return (
    <div className="space-y-6">
      <SectionCard title="LeetCode Profile">
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-4">
          <StatCard label="Total Solved" value={totalSolved} />
          <StatCard label="Easy" value={mockLeetcode.easy} />
          <StatCard label="Medium" value={mockLeetcode.medium} />
          <StatCard label="Hard" value={mockLeetcode.hard} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2 rounded-lg border border-dashed border-neutral-300 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between text-base">
              <span className="font-medium">Activity Streak</span>
              <span className="opacity-70">
                {mockLeetcode.activityStreakDays} days
              </span>
            </div>
            <div className="mt-2 text-sm opacity-60">
              Streak visualization coming soon
            </div>
          </div>
          <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-3 shadow-sm">
            <div className="text-sm opacity-70">Username</div>
            <a
              href={mockLeetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 text-base hover:underline"
            >
              {mockLeetcode.username}
              <Pill>Profile</Pill>
            </a>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
