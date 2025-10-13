export interface GalleryType {
  name: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  fillColor: string;
  title: string;
  videoId: string;
  href: string;  
}

export interface ProductList {
  icon: string;
  title: string;
}

export type Carousel = {
  name: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  fillColor: string;
  title: string;
  src: string;
  srcMobile?: string;
  href: string; //if href "Visit Website" else "Comin Soon"

}

export type Link = {
  name: string;
  url: string;
};

export type Project = { 
  name: string;
  published: number | null;
  description: string;
  services: string[];
  links: Link[]
  image: string;
}

export type Client = {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  testimonial?: string;
  twitter: string;
  exchangeArt?: string;
  tensor?: string;
  carousel?: Carousel[];
  gallery?: GalleryType[];
};

export interface Links {
  href: string;
  label: string;
}
export interface NavigationLinks extends Links { 
  hide?: boolean; 
}
 
export type FormData = {
  name: string;
  email: string;
  message: string;
  budgetRange: string;
  relevantDocuments: string;
};

export const emptyForm: FormData = {
  name: "",
  email: "",
  message: "",
  budgetRange: "",
  relevantDocuments: "",
};

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}