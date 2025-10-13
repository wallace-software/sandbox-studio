import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`relative bg-sand`}>
      <div className="page-px flex justify-between gap-2 md:gap-4 py-5 md:py-10 2xl:py-16">
        <div className="flex flex-col text-xl gap-1.5">
          <FooterItem href="/">Home</FooterItem>
          <FooterItem href="/projects">Projects</FooterItem>
          {/* <FooterItem href="/services">What we do</FooterItem> */}
          <FooterItem href="/about">About us</FooterItem>
          <FooterItem href="/contact">Contact us</FooterItem>
          <FooterItem href="/privacy-policy">Privacy Policy</FooterItem>
          <p className="text-xs  text-black mt-14">©{year} SANDBOX STUDIO™</p>
        </div>
        <div className="flex flex-col gap-1 text-sm lg:text-base text-black">
          <p className="text-batman">Follow us</p>
          <a
            href="https://www.instagram.com/sandbox_studios_/"
            rel="noreferrer"
            target="_blank"
            className="transition-300 text-black hover:text-sand-800"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/sandbox-studio-web/"
            rel="noreferrer"
            target="_blank"
            className="transition-300 text-black hover:text-sand-800"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/sandbox_studio_"
            rel="noreferrer"
            target="_blank"
            className="transition-300 text-black hover:text-sand-800"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
};

interface FooterItemProps {
  children: React.ReactNode;
  href: string;
}
const FooterItem: FC<FooterItemProps> = (props: FooterItemProps) => {
  const { children, href } = props;

  return (
    <Link
      href={href}
      className={`text-lg md:text-xl transition-300 text-black hover:text-sand-800`}
    >
      {children}
    </Link>
  );
};
export default Footer;
