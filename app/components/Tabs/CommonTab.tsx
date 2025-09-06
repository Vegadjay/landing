"use client";
import { useState } from "react";
import { Pill } from "../Pill";
import { SectionCard } from "../SectionCard";

const mockData = {
  profile: {
    name: "Shruti Patel",
    title: "Frontend Developer",
    imgSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
    description:
      "I am a Frontend Developer with expertise in JavaScript, React, and modern web technologies. I have experience building scalable, responsive web applications and am passionate about creating clean, efficient code. I am dedicated to delivering high-quality solutions, collaborating with teams, and continuously learning new skills.",
    socialMedia: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vegadjay",
        icon: "/logos/linkedin.svg",
      },
      {
        name: "GitHub",
        url: "https://github.com/vegadjay",
        icon: "/logos/github.svg",
      },
    ],
    minHourlyRate: "$50/hr",
    workPreference: "Both",
    weeklyAvailability: "40 hrs/week",
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"],
    tools: ["Git", "Docker"],
    libraries: ["React", "NumPy"],
    frameworks: ["Next.js", "Node.js", "Django"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    devops: ["AWS", "GCP", "Vercel"],
  },
  workExperience: [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "TechCorp Inc.",
      startDate: "2022-01-01",
      endDate: null,
      jobType: "Full-time",
      shortDescription:
        "Led development of core platform features using React and Node.js.",
      fullDescription:
        "Led development of core platform features using React and Node.js. Mentored junior developers and improved system performance by 40%.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "StartupXYZ",
      startDate: "2020-01-01",
      endDate: "2021-12-31",
      jobType: "Full-time",
      shortDescription:
        "Built UI components and improved page performance by 30%.",
      fullDescription:
        "Built and maintained UI component library, integrated REST APIs, collaborated with backend team, wrote unit tests, and improved performance by 30%.",
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "StartupXYZ",
      startDate: "2019-01-01",
      endDate: "2019-12-31",
      jobType: "Contractor",
      shortDescription: "Implemented responsive layouts and accessibility.",
      fullDescription:
        "Implemented responsive layouts, ensured WCAG accessibility, and collaborated on design system adoption across teams.",
    },
    {
      id: 4,
      role: "Software Engineer Intern",
      company: "Acme Co.",
      startDate: "2018-06-01",
      endDate: "2018-12-01",
      jobType: "Internship",
      shortDescription: "Assisted in building internal tools.",
      fullDescription:
        "Assisted in building internal tools for data processing and reporting; automated manual workflows saving 10 hours/week.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.Sc. Computer Science",
      university: "Gujarat University",
      startYear: 2016,
      endYear: 2020,
      description: "Graduated with honors, specialized in web technologies.",
    },
  ],
  projects: [
    {
      id: 1,
      name: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      date: "2024",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      stars: 342,
      forks: 58,
      url: "https://github.com/rajwadi-poshak/ecommerce",
      liveDemo: "https://rajwadiposhak.vercel.app",
    },
    {
      id: 2,
      name: "Task Management App",
      description:
        "Real-time collaborative task management application with drag-and-drop functionality and team chat integration.",
      date: "2023",
      tags: ["React", "WebSockets", "Redis"],
      stars: 127,
      forks: 19,
      url: "https://github.com/rajwadi-poshak/tasker",
      liveDemo: "https://rajwadiposhak.vercel.app",
    },
    {
      id: 3,
      name: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for business analytics with charts, graphs, and real-time data updates.",
      date: "2022",
      tags: ["TypeScript", "D3.js", "Express"],
      stars: 89,
      forks: 12,
      url: "https://github.com/rajwadi-poshak/dash",
      liveDemo: "https://rajwadiposhak.vercel.app",
    },
    {
      id: 4,
      name: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for business analytics with charts, graphs, and real-time data updates.",
      date: "2022",
      tags: ["TypeScript", "D3.js", "Express"],
      stars: 89,
      forks: 12,
      url: "https://github.com/rajwadi-poshak/dash",
      liveDemo: "https://rajwadiposhak.vercel.app",
    },
    {
      id: 5,
      name: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for business analytics with charts, graphs, and real-time data updates.",
      date: "2022",
      tags: ["TypeScript", "D3.js", "Express"],
      stars: 89,
      forks: 12,
      url: "https://github.com/rajwadi-poshak/dash",
      liveDemo: "https://rajwadiposhak.vercel.app",
    },
  ],
  achievements: [
    {
      id: 1,
      title: "Top 1% on LeetCode",
      issuer: "LeetCode",
      date: "2024",
      description:
        "Achieved top percentile by solving 500+ algorithmic problems across arrays, graphs, and DP.",
      link: "https://leetcode.com/",
    },
    {
      id: 2,
      title: "GitHub Starred Project",
      issuer: "Open Source Community",
      date: "2023",
      description:
        "Maintained an OSS library reaching 1k+ stars; improved DX and documentation.",
      link: "https://github.com/",
    },
    {
      id: 3,
      title: "Speaker – React Meetup",
      issuer: "React Community",
      date: "2022",
      description:
        "Presented talk on performance patterns in React 18 and concurrent features.",
      link: "",
    },
  ],
};

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
    mockData;
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
