import { FC, useEffect, useState, useRef } from "react";
import { delay, motion, useScroll } from "framer-motion";
import Link from "next/link";
import {
  TwoLinesIcon,
  NavigationMenu,
  Logo,
  NavigationItem,
} from "@components";
import { menuItems, midEnterAnimation } from "@constants";
import { useWindowSize } from "@hooks";
import { useRouter } from "next/router";

interface Props {
  headerType?: string;
}

const Header: FC<Props> = ({ headerType = "scroll" }) => {
  const [showNav, setShowNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDeepScrolled, setIsDeepScrolled] = useState(false);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setIsScrolled(y > 30);
      setIsDeepScrolled(y > 30);

      const scrollDelta = y - lastScrollY.current;

      if (scrollDelta > 10) {
        setShowNav(false);
      }

      if (scrollDelta < -10) {
        setShowNav(true);
      }

      lastScrollY.current = y;
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <header
      className={`top-0 z-50 w-full ${
        headerType === "scroll" ? "fixed" : headerType
      }`}
    >
      {headerType !== "scroll" ? (
        <HeaderItems />
      ) : (
        <motion.div
          animate={{
            y: showNav ? 0 : -100,
            backgroundColor: isDeepScrolled ? "#000000" : "rgba(0, 0, 0, 0)",
          }}
          transition={{
            y: { duration: 0.4, ease: "easeOut" },
            backgroundColor: { duration: 0.4, ease: "easeOut", delay: 0.2 },
          }}
        >
          <HeaderItems />
        </motion.div>
      )}
    </header>
  );
};

const HeaderItems: FC = () => {
  const [open, setOpen] = useState(false);
  const [winWidth] = useWindowSize();

  const { pathname } = useRouter();
  const isEstimatePage = pathname === menuItems[menuItems.length - 1].href;
  return (
    <div
      className="page-px flex items-center justify-between w-full py-4 md:py-8 z-20 bg-transparent"
      {...midEnterAnimation}
    >
      <Link href="/" className="text-sand-300 text-2xl md:text-3xl font-bold">
        <Logo type="small" />
      </Link>
      {winWidth > 768 ? (
        <nav className="row-centered gap-8 lg:gap-14">
          {menuItems.map((item, index) => (
            <NavigationItem key={index} item={item} />
          ))}
          <Link
            href={menuItems[menuItems.length - 1].href}
            className={`text-base font-barlow font-semibold w-[166px] h-[36px] col-centered rounded-3xl transition-200 border-2 border-sand
              ${
                isEstimatePage
                  ? "text-sand-300 bg-batman cursor-default"
                  : "text-black bg-sand hover:text-sand-300 hover:bg-batman"
              }`}
          >
            Get an Estimate
          </Link>
        </nav>
      ) : (
        <>
          <TwoLinesIcon
            animate={open}
            onClick={() => setOpen((prev) => !prev)}
            className="z-[100]"
          />
          <NavigationMenu
            open={open}
            toggleMenu={() => setOpen((prev) => !prev)}
          />
        </>
      )}
    </div>
  );
};

export default Header;
