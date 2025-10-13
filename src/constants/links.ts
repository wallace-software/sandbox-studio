import {  NavigationLinks, Links } from "./types";

export const menuItems: NavigationLinks[] = [
  { href: "/", label: "Home", hide: true },
  { href: "/projects", label: "Projects"},
  // { href: "/services", label: "What we do", hide: true },
  { href: "/about", label: "About us"},
  { href: "/contact", label: "Contact us"},
]; 

export const socialLinks: Links[] = [
  {
    href: "https://www.instagram.com/sandbox_studios_/",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/104833153/",
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/sandbox_studio_",
    label: "X",
  },
];