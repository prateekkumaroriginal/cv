import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Prateek Kumar",
  initials: "PK",
  location: "Lucknow, India",
  locationLink: "https://maps.app.goo.gl/VKTqWkH17uPH2ew9A",
  about:
    "Full Stack Developer dedicated to building high-quality products.",
  summary:
    "Passionate Software Developer with a strong foundation in full-stack development. Adept at leveraging modern technologies to solve complex problems and deliver impactful solutions. I work mostly with TypeScript, Next.js, React, Node.js and PostgreSQL.",
  avatarUrl: "https://avatars.githubusercontent.com/u/89418989?v=4",
  personalWebsiteUrl: "https://portfolio.prateekdev.in",
  contact: {
    email: "prateek.kumar.original@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/prateekkumaroriginal",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prateek-kumar-original/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/prateek_kumar_x",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Amity University",
      degree: "Bachelor of Technology in Computer Science",
      start: "2021",
      end: "2025",
      score: "8.13 CGPA"
    },
    {
      school: "Bethel Academy, Prayagraj",
      degree: "Senior Secondary (PCM)",
      start: "2018",
      end: "2020",
      score: "91.6 %"
    },
    {
      school: "H.A.L. School Korwa",
      degree: "High School",
      start: "2017",
      end: "2018",
      score: "89.2 %"
    },
  ],
  work: [
    {
      company: "Hindustan Aeronautics Limited",
      badges: ["Internship"],
      title: "Full Stack Developer",
      start: "May 2024",
      end: "July 2024",
      description:
        "• Developed a website from scratch for internal use using PostgreSQL, Express.js, React and Node.js.\n• Implemented features for users, instructors, admins and superadmin.\n• Secured it using JWT authentication.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Zustand",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Socket.io",
    "Python",
    "Docker",
    "Git",
  ],
  projects: [
    {
      title: "Unclash",
      techStack: [
        "Next.js",
        "TypeScript",
        "Zustand",
        "Socket.io",
        "Prisma",
        "Clerk",
      ],
      description: "A clean AF Discord clone with voice and video calls.",
      links: {
        gitHub: "https://github.com/prateekkumaroriginal/unclash",
        live: "https://unclash.prateekdev.in",
      }
    },
  ],
};
