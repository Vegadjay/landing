"use client";
import { useState } from "react";
import { Pill } from "../Pill";
import { SectionCard } from "../SectionCard";
import { commonData } from "@/app/features/dashboard/data/common";

function formatMonthYear(dateString: string | null): string {
  if (!dateString) return "Present";
  const d = new Date(dateString);
  return d.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function computeDuration(start: string, end: string | null): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const yearsPart = Math.floor(months / 12);
  const monthsPart = months % 12;
  const yearsStr =
    yearsPart > 0 ? `${yearsPart} yr${yearsPart > 1 ? "s" : ""}` : "";
  const monthsStr =
    monthsPart > 0 ? `${monthsPart} mo${monthsPart > 1 ? "s" : ""}` : "";
  return [yearsStr, monthsStr].filter(Boolean).join(" ") || "0 mos";
}

export function CommonTab() {
  const { profile, skills, workExperience, education, projects, achievements } =
    commonData;
  const [showAllExperience, setShowAllExperience] = useState(false);
  const displayedExperience = showAllExperience
    ? workExperience
    : workExperience.slice(0, 3);
  const hasMoreThanThree = workExperience.length > 3;
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  const hasMoreThanThreeProjects = projects.length > 3;

  return (
    <div className="space-y-6">
      <SectionCard title="Profile">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={profile.imgSrc}
              alt="Profile Picture"
              className="h-24 w-24 rounded-full object-cover border border-neutral-200"
            />
            <div className="flex-1">
              <div className="flex flex-col gap-1 min-w-[200px]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm opacity-70">Name</div>
                    <div className="font-semibold text-2xl">{profile.name}</div>
                    <div className="text-sm opacity-70 mt-2">Role</div>
                    <div className="text-lg">{profile.title}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-sm opacity-70">Social</div>
                    <div className="flex gap-2 mt-1">
                      {profile.socialMedia.map((media) => (
                        <a
                          key={media.name}
                          href={media.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-900 hover:underline"
                          aria-label={media.name}
                        >
                          {media.icon ? (
                            <img
                              src={media.icon}
                              alt={media.name}
                              className="h-6 w-6"
                            />
                          ) : (
                            <span>{media.name}</span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-sm opacity-70 mt-2">Bio</div>
                <div className="text-base opacity-80">
                  {profile.description}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8 mt-4">
                <div className="flex flex-col gap-2 min-w-[220px] flex-1">
                  <div className="flex flex-col">
                    <span className="text-sm opacity-70">
                      Hourly Rate (min)
                    </span>
                    <span className="text-base">{profile.minHourlyRate}</span>
                  </div>
                </div>
                <div className="flex flex-col min-w-[120px]">
                  <span className="text-sm opacity-70">
                    Weekly Availability
                  </span>
                  <span className="text-base">
                    {profile.weeklyAvailability}
                  </span>
                </div>
                <div className="flex flex-col min-w-[120px]">
                  <span className="text-sm opacity-70">Work Preference</span>
                  <span className="text-base">{profile.workPreference}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="flex flex-col">
              <span className="text-sm opacity-70 capitalize">{group}</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {(items as string[]).map((s) => (
                  <Pill key={group + s}>{s}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Work Experience">
        <div className="flex flex-col gap-3">
          {displayedExperience.map((work) => (
            <div
              key={work.id}
              className="rounded-lg border border-dashed border-neutral-300 bg-white p-3"
            >
              <div className="text-lg font-semibold">{work.role}</div>
              <div className="text-base opacity-70">
                {work.company} • {work.jobType}
              </div>
              <div className="text-sm opacity-60">
                {formatMonthYear(work.startDate)} –{" "}
                {formatMonthYear(work.endDate)} •{" "}
                {computeDuration(work.startDate, work.endDate)}
              </div>
              <p className="mt-2 text-base opacity-80">
                {work.shortDescription}
              </p>
              <details className="mt-2">
                <summary className="text-sm opacity-70 cursor-pointer">
                  View details
                </summary>
                <div className="mt-2 text-base opacity-80">
                  {work.fullDescription}
                </div>
              </details>
            </div>
          ))}
        </div>
        {hasMoreThanThree && (
          <div className="flex justify-center mt-2">
            <button
              type="button"
              onClick={() => setShowAllExperience((v) => !v)}
              className="inline-flex items-center px-4 py-1.5 border border-neutral-300 bg-white text-sm font-medium text-gray-700 hover:bg-neutral-100 transition rounded-2xl cursor-pointer"
            >
              {showAllExperience
                ? "Show less"
                : `Show all (${workExperience.length})`}
            </button>
          </div>
        )}
      </SectionCard>

      <SectionCard title="Education">
        <div className="flex flex-col gap-3">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-lg border border-dashed border-neutral-300 bg-white p-3"
            >
              <div className="text-lg font-semibold">{edu.degree}</div>
              <div className="text-base opacity-70">{edu.university}</div>
              <div className="text-sm opacity-60">
                {edu.startYear} – {edu.endYear}
              </div>
              {edu.description ? (
                <p className="mt-2 text-base opacity-80">{edu.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Projects" actionLabel="+ Add Project">
        <div className="flex flex-col gap-3">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-dashed border-neutral-300 bg-white p-3"
            >
              <div className="flex justify-between items-center text-base font-medium flex-wrap gap-y-2">
                <span className="text-lg font-bold break-words max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg truncate">
                  {project.name}
                </span>
                <div className="flex items-center gap-2">
                  <Pill>★ {project.stars}</Pill>
                  <Pill>Forks {project.forks}</Pill>
                </div>
              </div>
              <div className="text-sm opacity-60 mt-1">{project.date}</div>
              <p className="mt-1 text-base opacity-80">{project.description}</p>
              {project.tags?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((t: string) => (
                    <Pill key={project.id + t}>{t}</Pill>
                  ))}
                </div>
              ) : null}
              <div className="mt-3 flex flex-col sm:flex-row gap-3 justify-end items-end sm:items-center">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-700 hover:underline"
                  >
                    <Pill>Live Demo</Pill>
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-700 hover:underline"
                  >
                    <Pill>Repo</Pill>
                  </a>
                )}
              </div>
            </div>
          ))}
          {hasMoreThanThreeProjects && (
            <div className="flex justify-center mt-2">
              <button
                type="button"
                onClick={() => setShowAllProjects((v) => !v)}
                className="inline-flex items-center px-4 py-1.5 border border-neutral-300 bg-white text-sm font-medium text-gray-700 hover:bg-neutral-100 transition rounded-2xl cursor-pointer"
              >
                {showAllProjects
                  ? "Show less"
                  : `Show all (${projects.length})`}
              </button>
            </div>
          )}
        </div>
      </SectionCard>

      <SectionCard title="Achievements" actionLabel="+ Add Achievement">
        <div className="flex flex-col gap-3">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="rounded-lg border border-dashed border-neutral-300 bg-white p-3"
            >
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">{ach.title}</div>
                {ach.link && (
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:underline"
                  >
                    <Pill>View</Pill>
                  </a>
                )}
              </div>
              <div className="text-sm opacity-70">
                {ach.issuer} • {ach.date}
              </div>
              <p className="mt-1 text-base opacity-80">{ach.description}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
