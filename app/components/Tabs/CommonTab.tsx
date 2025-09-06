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
    skills: [
      "Javascript",
      "React",
      "Node.js",
      "Python",
      "Java",
      "Rust",
      "Go",
      "Typescript",
    ],
    socialMedia: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/vegadjay",
      },
      {
        name: "Github",
        url: "https://github.com/vegadjay",
      },
    ],
    hourlyRate: "$15 - $40/hour",
    workPreference: "Both",
    weeklyAvailability: "40 hrs/week",
    mainHourlyRate: "$50/hr",
  },
  workExperience: [
    {
      role: "Senior Software Engineer",
      company: "TechCorp Inc.",
      time: "Jan 2022 – Present",
      description:
        "Led development of core platform features using React and Node.js. Mentored junior developers and improved system performance by 40%.",
    },
    {
      role: "Frontend Developer",
      company: "StartupXYZ",
      time: "Jan 2020 – Dec 2021",
      description:
        "Led development of core platform features using React and Node.js. Mentored junior developers and improved system performance by 40%.",
    },
  ],
  projects: [
    {
      id: 1,
      name: "E-commerce Platform",
      badge: "GitHub",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: [
        "Javascript",
        "React",
        "Node.js",
        "Python",
        "Java",
        "Rust",
        "Go",
        "Typescript",
      ],
      liveDemo: "https://rajwadiposhak.vercel.app",
      github: "https://github.com/rajwadi-poshak",
    },
    {
      id: 2,
      name: "Task Management App",
      badge: "Live Demo",
      description:
        "Real-time collaborative task management application with drag-and-drop functionality and team chat integration.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Typescript"],
      liveDemo: "https://rajwadiposhak.vercel.app",
      github: "https://github.com/rajwadi-poshak",
    },
    {
      id: 3,
      name: "Data Visualization Dashboard",
      badge: "Portfolio",
      description:
        "Interactive dashboard for business analytics with charts, graphs, and real-time data updates.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveDemo: "https://rajwadiposhak.vercel.app",
      github: "https://github.com/rajwadi-poshak",
    },
  ],
};

export function CommonTab() {
  const { profile, workExperience, projects } = mockData;

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
              {/* Name, Role, and Social Media side by side */}
              <div className="flex flex-col gap-1 min-w-[200px]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs opacity-70">Name</div>
                    <div className="font-medium text-sm">{profile.name}</div>
                    <div className="text-xs opacity-70 mt-2">Role</div>
                    <div className="text-sm">{profile.title}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-xs opacity-70">Social Media</div>
                    <div className="flex gap-2 mt-1">
                      {profile.socialMedia.map((media) => (
                        <a
                          key={media.name}
                          href={media.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-900 hover:underline"
                        >
                          {media.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-xs opacity-70 mt-2">Bio</div>
                <div className="text-sm opacity-80">{profile.description}</div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8 mt-4">
                <div className="flex flex-col gap-2 min-w-[220px] flex-1">
                  <div className="flex flex-col">
                    <span className="text-xs opacity-70">Hourly Rate</span>
                    <span className="text-sm">{profile.hourlyRate}</span>
                  </div>
                </div>
                <div className="flex flex-col min-w-[120px]">
                  <span className="text-xs opacity-70">
                    Weekly Availability
                  </span>
                  <span className="text-sm">{profile.weeklyAvailability}</span>
                </div>
                <div className="flex flex-col min-w-[120px]">
                  <span className="text-xs opacity-70">Hourly Rate</span>
                  <span className="text-sm">{profile.mainHourlyRate}</span>
                </div>
                <div className="flex flex-col min-w-[120px]">
                  <span className="text-xs opacity-70">Work Preference</span>
                  <span className="text-sm">{profile.workPreference}</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-xs opacity-70">Technical Skills</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <Pill key={skill}>{skill}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Work Experience">
        <div className="flex flex-col gap-3">
          {workExperience.map((work) => (
            <div
              key={work.role + work.company}
              className="rounded-lg border border-neutral-200 bg-neutral-50 p-4"
            >
              <div className="text-sm font-medium">{work.role}</div>
              <div className="text-sm opacity-70">{work.company}</div>
              <div className="text-xs opacity-60">{work.time}</div>
              <p className="mt-2 text-sm opacity-80">{work.description}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Projects & Achievements" actionLabel="+ Add Project">
        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-neutral-200 bg-neutral-50 p-2"
            >
              <div className=" flex justify-between items-center text-sm font-medium">
                <span>{project.name}</span>
                {(project.liveDemo || project.github) && (
                  <div className="mt-3 flex gap-3 justify-end">
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-700 hover:underline"
                      >
                        <Pill>GitHub</Pill>
                      </a>
                    )}
                  </div>
                )}
              </div>
              <p className="mt-1 text-sm opacity-80">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Pill key={tech + project.id}>{tech}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
