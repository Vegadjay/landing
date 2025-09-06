interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

interface Profile {
  name: string;
  title: string;
  imgSrc: string;
  description: string;
  socialMedia: SocialMedia[];
  minHourlyRate: string;
  workPreference: string;
  weeklyAvailability: string;
}

interface Skills {
  languages: string[];
  tools: string[];
  libraries: string[];
  frameworks: string[];
  databases: string[];
  devops: string[];
}

interface WorkExperience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string | null;
  jobType: string;
  shortDescription: string;
  fullDescription: string;
}

interface Education {
  id: number;
  degree: string;
  university: string;
  startYear: number;
  endYear: number;
  description: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  date: string;
  tags: string[];
  stars: number;
  forks: number;
  url: string;
  liveDemo: string;
}

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
}

interface DashboardCommonData {
  profile: Profile;
  skills: Skills;
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  achievements: Achievement[];
}

export const commonData: DashboardCommonData = {
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
