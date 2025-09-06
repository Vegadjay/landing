interface GithubProfile {
  followers: number;
  following: number;
  publicRepos: number;
  company: string;
  name: string;
  email: string;
}

interface GithubRepo {
  owner: string;
  name: string;
  stars: number;
  prsLast6Mo: number;
  description: string;
  tags: string[];
  url: string;
}

interface GithubTabData {
  profile: GithubProfile;
  repos: GithubRepo[];
}

export const githubData: GithubTabData = {
  profile: {
    followers: 254,
    following: 91,
    publicRepos: 112,
    company: "TechCorp Inc.",
    name: "Shruti Patel",
    email: "shruti@example.com",
  },
  repos: [
    {
      owner: "shruti",
      name: "awesome-react-components",
      stars: 1234,
      prsLast6Mo: 23,
      description:
        "Collection of production-ready React components with accessibility and tests.",
      tags: ["TypeScript", "React"],
      url: "https://github.com/shruti/awesome-react-components",
    },
    {
      owner: "shruti",
      name: "node-api-boilerplate",
      stars: 847,
      prsLast6Mo: 12,
      description:
        "Node.js API boilerplate with auth, validation, e2e tests, and CI.",
      tags: ["Node.js", "Jest", "Express"],
      url: "https://github.com/shruti/node-api-boilerplate",
    },
    {
      owner: "shruti",
      name: "ml-data-pipeline",
      stars: 166,
      prsLast6Mo: 5,
      description: "Data ingestion and ETL pipeline for ML feature stores.",
      tags: ["Python", "Airflow"],
      url: "https://github.com/shruti/ml-data-pipeline",
    },
  ],
};
