import { Client, Project } from "./types";


/*
  {
    name: "",
    published: null,
    description: "",
    services: ["",""],
    links: [
      {
        name: "",
        url: "",
      },{
        name: "",
        url: "",
      }
    ],
    image: `${process.env.CLOUDFLARE_STORAGE}/images/projects/.jpg`,
  },
*/

export const projects: Project[] = [
  {
    name: "CyberFrogs",
    published: 2024, //if null "Coming Soon"
    description: "Our first 10k community. CyberFrogs puts our experience in Web 3 on display. Equipped with a rarity tool to display NFT's and several other blockchain solutions.",
    services: ["Interface Design", "Development", "Advisory"],
    links: [
      {
        name: "Website",
        url: "https://cyberfrogs.io/",
      },{
        name: "Twitter",
        url: "https://twitter.com/CyberFrogsNFT",
      }
    ],
    image: `${process.env.CLOUDFLARE_STORAGE}/images/projects/frogs-1.png`,
  },
  {
    name: "Somos Axolotl",
    published: 2024,
    description: "In partnership with Solana, Sphere & Somos Axolotl, we've broken ground on a special project to preserve the near extinct Axolotl population in Lake Xochimilco, Mexico City.",
    services: ["Interface Design", "Development", "Blockchain Integration", "Cloud Storage", ],
    links: [
      {
        name: "Website",
        url: "https://somosaxolotl.com/",
      },{
        name: "Instagram",
        url: "https://www.instagram.com/somos_axolotl/",
      }
    ],
    image: `${process.env.CLOUDFLARE_STORAGE}/images/projects/somos.png`,
  },
  {
    name: "Scum",
    published: 2024,
    description: "The My Slimes websites features a sleek & modern re-design to help elevate the user interface and provide a seamless experience for each visitor.",
    services: ["Asset Library", "Cloud Storage", "Hyperlink Directory"],
    links: [
      {
        name: "Website",
        url: "https://scum.art/",
      },{
        name: "Twitter",
        url: "https://twitter.com/SCUMSOL",
      }
    ],
    image: `${process.env.CLOUDFLARE_STORAGE}/images/projects/slimes-project-1.png`,
  },
  {
    name: "Robbie Shilstone",
    published: 2024,
    description: "A visual masterpiece. Robbie combines animation, music, and illustration to turn his site into a film-like experience. ",
    services: ["Asset Compression","Cloud Storage"," Blockchain Integration","Parallax Animations",],
    links: [
      {
        name: "Website",
        url: "https://publique.world/",
      },{
        name: "Twitter",
        url: "https://twitter.com/shilstone_arts",
      },{
        name: "Instagram",
        url: "https://www.instagram.com/shilstone_arts/",
      }
    ],
    image: `${process.env.CLOUDFLARE_STORAGE}/images/projects/publique.png`,
  },
  {
    name: "Calder Moore",
    published: null,
    description: "ISO - In Search Of; a look into the next generation of Sandbox Studio websites. High fidelity design paired with a seamless desktop & mobile experience. Aimed to deliver an assortment of art, audio, and comics in one place.",
    services: ["Interface Design", "Development", "Blockchain Integration", "Cloud Storage", "Asset Library", ],
    links: [
      {
        name: "Website",
        url: "",
      },{
        name: "Twitter",
        url: "https://twitter.com/CalderMoore_",
      }
    ],
    image: `${process.env.CLOUDFLARE_STORAGE}/images/projects/calder.png`,
  }, {
    name: "Zen0",
    published: 2023,
    description: "This build includes tools for Zen0's fans & holders to explore the Glyphscapes collection, and learn more about his additional work on Solana.",
    services: ["Development",],
    links: [
      {
        name: "Website",
        url: "https://zen0.art/rarity",
      },{
        name: "Twitter",
        url: "https://twitter.com/zen0m",
      }
    ],
    image: `${process.env.CLOUDFLARE_STORAGE}/images/projects/zen0.png`,
  }, 
  {
    name: "Hot Heads",
    published: 2023,
    description: "One of Sandbox Studio's first clients, and vetted communities on Solana. The Hot Heads website features blockchain technology, asset libraries, and more. A nod to 90's retro gaming, with custom pixelated components built in all over the site.",
    services: ["Interface Design", "Development", "Blockchain Integration", "Cloud Storage", ],
    links: [
      // {
      //   name: "Website",
      //   url: "https://hotheads.art/",
      // },
      {
        name: "Twitter",
        url: "https://twitter.com/HotHeadsNFT",
      }
    ],
    image: `${process.env.CLOUDFLARE_STORAGE}/images/projects/hotheads.png`,
  },
]

export const clients: Client[] = [
  {
    id: 1,
    name: "Matt Martinez",
    title: "Founder of Somos Axolotl",
    company: "Somos Axolotl",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/testimonials/scum.png`,
    testimonial:
      `It doesn't matter how big the idea is, Sandbox Studio meets every new challenge with excitement. Truly embodying the rare attitude of "WHY NOT." I feel confident that no matter where my journey takes me, every new website and web-based experience I pursue, will go through Sandbox Studio.`,
    twitter: "https://twitter.com/SCUMSOL",
    exchangeArt: "https://exchange.art/scum/series",
    gallery: [
      {
        name: "Scum",
        backgroundColor: "!bg-slimes-bg",
        textColor: "!text-slimes-text",
        borderColor: "!border-slimes-text",
        fillColor: "!fill-slimes-text",
        title: "My Slimes",
        videoId: "ac3d3ee65e0bac9d540e54574e27f8dd",
        // src: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/slimes-carousel.png`,
        // srcMobile: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/slimes-carousel-sm.png`,
        href: "https://scum.art/",
      },
      {
        name: "Matt Martinez",
        backgroundColor: "!bg-somos-bg",
        textColor: "!text-somos-text",
        borderColor: "!border-somos-text",
        fillColor: "!fill-somos-text",
        title: "Somos Axolotl",
        videoId: "ca8781c8547e7559a201ec1d10f29c35",
        // src: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/somos.png`,
        // srcMobile: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/somos-sm.png`,
        href: "https://somosaxolotl.com",
      },
    ]
  },
  {
    id: 2,
    name: "Robbie Shilstone",
    title: "Founder of Publique",
    company: "Publique",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/testimonials/robbie.jpg`,
    testimonial:
      "Sandbox Studio went above and beyond to make Publique a success. No idea ever felt to big to implement. They were perfectly suited to create this experience exactly how I envisioned it.",
    twitter: "https://twitter.com/shilstone_arts",
    exchangeArt: "https://exchange.art/shilstone-arts/series",
    gallery: [{
      name: "Robbie Shilstone",
      backgroundColor: "!bg-robbie-bg",
      textColor: "!text-robbie-text",
      borderColor: "!border-robbie-text",
      fillColor: "!fill-robbie-text",
      title: "Publique World",
      videoId: "",
      // src: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/publique.png`,
      // srcMobile: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/publique-sm.png`,
      href: "https://publique.world/",
    }]
  },
  {
    id: 3,
    name: "Calder Moore",
    title: "In Search Of",
    company: "In Search Of",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/testimonials/calder.gif`,
    testimonial:
      "Commissioning Sandbox Studio was a great decision. They were super upfront about costs and worked with my budget to suit my needs. They provided works in progress along the way which I was always absolutely in love with. Will definitely be returning to expand the website once it is ready to do so.",
    twitter: "https://twitter.com/CalderMoore_",
    exchangeArt: "https://exchange.art/caldermoore/series",
    gallery: [{
      name: "Calder Moore",
      backgroundColor: "!bg-calder-bg",
      textColor: "!text-calder-text",
      borderColor: "!border-calder-text",
      fillColor: "!fill-calder-text",
      title: "In Search Of Substance",
      videoId: "",
      // src: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/calder.png`,
      href: "",
    }]
  },
  {
    id: 4,
    name: "Andy Rew",
    title: "Founder of CyberFrogs",
    company: "CyberFrogs",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/testimonials/39-andres.jpg`,
    testimonial:
      'Working with Sandbox Studio has felt like working with an extension of my core team. Their attentiveness, attention to detail and their understanding of complex systems and web3 intricacies has made our contracted work not only pain free, but enjoyable. The Sandbox Studio team just "gets it" and they have helped amplify our products in ways I previously thought unobtainable with outside contractors. They approached our contract as if they were working on their own project.',
    twitter: "https://twitter.com/CyberFrogsNFT",
    tensor: "https://www.tensor.trade/trade/cyber_frogs",
    gallery: [{
      name: "Andy Rew",
      backgroundColor: "!bg-andy-bg",
      textColor: "!text-andy-text",
      borderColor: "!border-andy-text",
      fillColor: "!fill-andy-text",
      title: "CyberFrogs",
      videoId: "1dea0f15840c832cab1af2b25c9e852b",
      // src: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/frogs-2.png`,
      // srcMobile: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/frogs-2-sm.png`,
      href: "https://cyberfrogs.io/",
    }]
  },
  {
    id: 5,
    name: "Zen0",
    title: "Founder of Monster Friends",
    company: "Monster Friends",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/testimonials/zen0.gif`,
    testimonial:
      "Sandbox Studio did an awesome job at building a showcase for my art releases, as well as a rarity explorer for my Glyphscapes collection. They were efficient and designed everything accurately to my spec, as well as being flexible when changes needed to be made. I look forward to working together again in the future! :)",
    twitter: "https://twitter.com/zen0m",
    exchangeArt: "https://exchange.art/zen0/series",
    gallery: [{
      name: "Zen0",
      backgroundColor: "!bg-zen0-bg",
      textColor: "!text-zen0-text",
      borderColor: "!border-zen0-text",
      fillColor: "!fill-zen0-text",
      title: "Collections & Rarity",
      videoId: "870d96ba674ec8513a1628a804516396",
      // src: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/zen0.png`,
      href: "https://zen0.art/rarity/",
    }]
  },
  {
    id: 6,
    name: "Sikedelic",
    title: "Founder of Monster Hot Heads",
    company: "Hot Headss",
    image: "",
    twitter: "https://twitter.com/HotHeadsNFT",
    exchangeArt: "https://exchange.art/hot-heads/nfts",
    gallery: [{
      name: "Sikedelic",
      backgroundColor: "!bg-sike-bg",
      textColor: "!text-sike-text",
      borderColor: "!border-sike-text",
      fillColor: "!fill-sike-text",
      title: "Hot Heads",
      videoId: "",
      // src: `${process.env.CLOUDFLARE_STORAGE}/images/carousel/sike.png`,
      href: "",//"https://hotheads.art/",
    }]
  },
  {
    id: 7,
    name: "folio.works",
    title: "Folio",
    company: "Hot Headss",
    image: "",
    twitter: "", 
    gallery: [{
      name: "folio.works",
      backgroundColor: "!bg-folio-bg",
      textColor: "!text-folio-text",
      borderColor: "!border-folio-text",
      fillColor: "!fill-folio-text",
      title: "Folio",
      videoId: "775744d1681404a304926b63acab98cd", 
      href: "https://folio-ten-coral.vercel.app/",
    }]
  },
];
 