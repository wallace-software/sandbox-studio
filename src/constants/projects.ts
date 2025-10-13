import { ProjectItemData } from "@constants";

export const projectsData: ProjectItemData[] = [
  {
    id: "folio",
    name: "Folio",
    intro: {
      header:
        "A modern refresh to brand & website. <gold>Folio takes a step forward.</gold>",
      subheader: "Internship hiring, streamlined and polished.",
      videoId: "dd20e765bdeb6307d8b0c1a1399c8b83",
    },
    gallery: {
      header: "Giving the <gold>brand</gold> a second chance.",
      subheader:
        "Folio requested a brand refresh, taking the original logo and working it into something new. Something that matched their moves. Progressive, sleek and modern.",
      assets: [
        "dd20e765bdeb6307d8b0c1a1399c8b83",
        "dd20e765bdeb6307d8b0c1a1399c8b83",
      ],
    },
    details: {
      header: "Refreshing the <gold>website</gold> to look the part.",
      subheader:
        "The new brand needed a website to match. We made sure to make use of what was working before, and rid of everything that was not.",
      videoId: "719e4554caf38b4e12d208e2e86c1868",
    },
    finale: {
      header: "The grand finale.",
      subheader:
        "The work that goes into the website is great, but delivering the project is the most important. At Sandbox, delivering is our speciality.",
      videoId: "acbfd849b3b478bf27470a50b15ef727",
      cta: { text: "Visit Site", link: "https://folio-ten-coral.vercel.app/" },
    },
  },
];