import Link from "next/link";
import { FC, HTMLAttributes, useEffect } from "react";
import { ExpIcon, TwoLinesIcon } from "@components";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {
  menuChild2Variants,
  dekstopMenuParent,
  midExitAnimation,
  openMenuVariants,
  menuChildVariants,
} from "@constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWindowSize } from "src/hooks";

const Navigation: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { ...componentProps } = props;

  const [open, cycleOpen] = useCycle(false, true);
  const [winWidth] = useWindowSize();

  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <div
      className={`z-50 h-[100vh] w-12 md:w-16 flex flex-col text-gray-100 ${
        componentProps.className ?? ""
      }`}
    >
      {winWidth > 0 && (
        <motion.div
          className="z-20 fixed top-0 left-0 bottom-0 bg-black flex flex-col items-start justify-between py-7 px-2 md:px-4"
          variants={openMenuVariants(
            winWidth < 768 ? 48 : 64,
            winWidth < 900 ? winWidth : 800
          )}
          initial="hidden"
          animate={open ? "show" : "closed"}
        >
          <div className="w-[50px] h-[40px]">
            <TwoLinesIcon animate={open} onClick={() => cycleOpen()} />
          </div>

          <AnimatePresence mode="wait">
            {open ? (
              <motion.nav
                variants={dekstopMenuParent}
                initial={"hidden"}
                animate={"show"}
                exit={"closed"}
                className="h-full pl-16 md:pl-32 z-0 flex flex-col gap-8 0"
                key="nav"
              >
                <NavigationItem href="/">Home</NavigationItem>
                <NavigationItem href="/projects">Projects</NavigationItem>
                <NavigationItem href="/services">What we do</NavigationItem>
                <NavigationItem href="/about">About us</NavigationItem>
                <NavigationItem href="/contact">Contact us</NavigationItem>

                {/*  corner image */}
                <motion.div variants={menuChild2Variants} className=" -z-20">
                  <Image
                    src={`${process.env.CLOUDFLARE_STORAGE}/images/exp-corner.svg`}
                    alt="exp"
                    width={673}
                    height={637}
                    className="absolute top-0 right-0 -z-10 w-3/4 lg:w-auto"
                  />
                </motion.div>
                <div className="flex flex-col gap-2 pt-12">
                  <motion.p
                    variants={menuChild2Variants}
                    className="opacity-60"
                  >
                    Follow us
                  </motion.p>
                  <motion.a
                    variants={menuChild2Variants}
                    href="https://www.instagram.com/sandbox_studios_/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </motion.a>
                  <motion.a
                    variants={menuChild2Variants}
                    href="https://www.linkedin.com/company/104833153/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    variants={menuChild2Variants}
                    href="https://twitter.com/sandbox_studio_"
                    rel="noreferrer"
                    target="_blank"
                  >
                    X
                  </motion.a>
                </div>
              </motion.nav>
            ) : (
              <></>
            )}
          </AnimatePresence>

          <ExpIcon
            className="scale-90 md:scale-100 fixed bottom-7"
            animate={open}
          />
        </motion.div>
      )}
      {/* background shadow */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="z-0 fixed inset-0 bg-background-black bg-opacity-80 "
            onClick={() => cycleOpen()}
            {...midExitAnimation}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavigationItemProps {
  children: React.ReactNode;
  href: string;
}
const NavigationItem: FC<NavigationItemProps> = (
  props: NavigationItemProps
) => {
  const { children, href } = props;

  const router = useRouter();
  const active = router.asPath === href;

  return (
    <motion.div variants={menuChildVariants}>
      <Link
        href={href}
        className={`text-4xl lg:text-5xl transition-200 hover:opacity-100 ${
          active ? "opacity-100" : "opacity-60"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Navigation;
