import { TeamMember } from "@constants";


export const teamMembers: TeamMember[] = [
  {
    name: "Miguel Corzo (Blem)",
    title: "Founder & Project Lead",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/about/sketch-miguel.png`,
    twitter: "https://x.com/otablem",
    linkedin: "https://www.linkedin.com/in/miguel-andres-corzo",
  },
  {
    name: "Wallace Palmer (Darth)",
    title: "Founder & Lead Developer",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/about/sketch-wallace.png`,
    twitter: "https://x.com/DarthDegen",
    linkedin: "https://www.linkedin.com/in/wallace-palmer-4b93473a/",
  },
  {
    name: "Raff",
    title: "Lead Designer",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/about/sketch-raff.png`,
    twitter: "",
    linkedin: "",
  },
];