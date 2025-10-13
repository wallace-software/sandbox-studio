import Link from "next/link";
import { FC, HTMLAttributes, RefObject, useEffect } from "react";
import { TwoLinesIcon } from "@components";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import Image from "next/image";
import { useRouter } from "next/router";
import {
  mobileMenuParent,
  menuChild2Variants,
  menuChildVariants,
} from "src/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {
  showHeader?: boolean;
  type?: string;
  scrollRef: RefObject<HTMLDivElement>;
}

const MobileNavigation: FC<Props> = (props: Props) => {
  const {
    type = "scroll",
    showHeader = true,
    scrollRef,
    ...componentProps
  } = props;

  const [open, cycleOpen] = useCycle(false, true);

  // stop page scroll (when modal or menu open)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <>
      <motion.div
        className={`cursor-pointer fixed right-3 top-3 z-50 h-14 w-14 bg-custom-black shadow-xl rounded-full flex items-center justify-center ${componentProps.className}`}
        onClick={() => cycleOpen()}
      >
        <TwoLinesIcon animate={open} />
      </motion.div>
      <AnimatePresence>
        {open === true && (
          <motion.nav
            className="fixed inset-x-0 top-0 bottom-0 bg-custom-black z-10 flex flex-col gap-4 items-start h-full pl-5 lg:pl-10 pt-20"
            variants={mobileMenuParent}
            initial={"hidden"}
            animate={"show"}
            exit={"closed"}
          >
            <MobileNavigationItem href="/">Home</MobileNavigationItem>
            <MobileNavigationItem href="/projects">
              Projects
            </MobileNavigationItem>
            <MobileNavigationItem href="/services">
              What we do
            </MobileNavigationItem>
            <MobileNavigationItem href="/about">About us</MobileNavigationItem>
            <MobileNavigationItem href="/contact">
              Contact us
            </MobileNavigationItem>
            <motion.div variants={menuChild2Variants} className=" -z-20">
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/exp-corner.svg`}
                alt="exp"
                width={673}
                height={637}
                className="absolute rotate-90 bottom-0 right-0"
              />
            </motion.div>
            <motion.div className="flex flex-col gap-0 pt-12 text-lg">
              <motion.p
                className="opacity-60 text-white/60"
                variants={menuChild2Variants}
              >
                Follow us
              </motion.p>
              <motion.a
                href="https://www.instagram.com/sandbox_studios_/"
                rel="noreferrer"
                target="_blank"
                variants={menuChild2Variants}
              >
                Instagram
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/exp-studio-llc"
                rel="noreferrer"
                target="_blank"
                variants={menuChild2Variants}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://twitter.com/sandbox_studio_"
                rel="noreferrer"
                target="_blank"
                variants={menuChild2Variants}
              >
                X
              </motion.a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

interface NIProps {
  children: React.ReactNode;
  href: string;
}
const MobileNavigationItem: FC<NIProps> = (props: NIProps) => {
  const { children, href } = props;

  const router = useRouter();
  const active = router.asPath === href;

  return (
    <motion.div variants={menuChildVariants}>
      <Link
        href={href}
        className={`text-5xl transition-200 hover:opacity-100  ${
          active ? "opacity-100" : "opacity-60"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default MobileNavigation;
