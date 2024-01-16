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
  name: "Ahmet Gulmez",
  initials: "BJ",
  location: "İstanbul, Turkey",
  locationLink: "https://maps.app.goo.gl/Ly2qu3V3zo1ymKc19",
  about: "Frontend Developer",
  summary:
    "I am a developer who has charted my own path in the world of information with my passion for web technologies and open-source projects. Focusing on interface development and user experience, I enjoy continually learning new things and sharing this knowledge with others.",
  avatarUrl: "https://avatars.githubusercontent.com/u/92268751?v=4",
  personalWebsiteUrl: "https://ahmetgulmez.com.tr",
  contact: {
    email: "ahmetttgulmez@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/theahmetgg",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/theahmetgg/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Mersin University",
      degree: "Bachelor's degree in Computer Engineering GPA 3.19/4",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Global Firma",
      link: "https://www.ahmetgulmez.com.tr",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: NSNLogo,
      start: "September 2023",
      end: "November 2023",
      description:
        "Developing, updating, and performing database controls for a full-stack enterprise website that encompasses both the Front-End and Back-End components of PHP-based web software.",
    },
    {
      company: "Kalesoft",
      link: "https://www.ahmetgulmez.com.tr",
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      logo: NSNLogo,
      start: "November 2022",
      end: "July 2023",
      description:
        "Developing the 'Viki' software at Colos Logistics, encompassing all logistics pathways, and implementing desired improvements in the system (including all work conducted by lojisoft, soft, logo, and mikro applications).",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Tailwind CSS",
    "Headless CMS",
    "SCSS/CSS",
  ],
  projects: [
    {
      title: "Portfolio",
      techStack: ["Php", "Mysql", "SCSS", "Pure JS"],
      description:
        "My personal portfolio site where I share my works",
      logo: "",
      link: {
        label: "https://ahmetgulmez.com.tr",
        href: "https://ahmetgulmez.com.tr",
      },
    },
  ],
} as const;
