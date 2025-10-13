import { FC, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useWindowSize } from "@hooks";
import {
  dekstopMenuParent,
  menuChild2Variants,
  menuChildVariants,
  menuItems,
  midExitAnimation,
  mobileMenuParent,
} from "@constants";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  toggleMenu: (i?: number) => void;
  open: boolean;
  menuVariants?: any;
  childVariants?: any;
}

const socialLinks = [
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

const NavigationMenu: FC<Props> = (props: Props) => {
  const { toggleMenu, open, childVariants = menuChild2Variants } = props;
  const [winWidth, winHeight] = useWindowSize();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const ref = useRef(null);
  const router = useRouter();

  // pending navigation target (after exit completes)
  const pendingHrefRef = useRef<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const isTablet: boolean = winWidth < 900;
  const menuVariants = isTablet ? mobileMenuParent : dekstopMenuParent;

  // lock body scroll while menu open
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (open) {
      timeoutRef.current = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 700);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [open]);

  // called by items
  const handleItemSelect = (href: string) => {
    if (isNavigating) return;
    if (router.asPath === href) {
      // same page: just close
      toggleMenu();
      return;
    }
    // queue navigation
    pendingHrefRef.current = href;
    setIsNavigating(true);
    // triggers exit animation
    toggleMenu();
  };

  return (
    <>
      {/* backsplash */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="z-0 fixed inset-0 bg-background-black bg-opacity-80 cursor-pointer"
            onClick={() => toggleMenu()}
            {...midExitAnimation}
          />
        )}
      </AnimatePresence>
      {/* menu */}
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          // all exit animations done: navigate now
          const href = pendingHrefRef.current;
          if (href) {
            pendingHrefRef.current = null;
            setIsNavigating(false);
            router.push(href);
          }
        }}
      >
        {open && (
          <motion.aside
            key="main-menu"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: isTablet ? winWidth : 669, opacity: 1 }}
            exit={{
              width: 0,
              transition: { duration: 0.3, delay: 0.25 },
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            className="bg-black fixed top-0 right-0 z-50 "
            ref={ref}
          >
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="show"
              exit="closed"
              className="h-screen pl-16 md:pl-24 pt-10 lg:pt-16 z-0 flex flex-col gap-8"
              key="nav"
            >
              {menuItems.map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  href={item.href}
                  onSelect={handleItemSelect}
                >
                  {item.label}
                </NavigationMenuItem>
              ))}

              {/* Corner Image */}
              <motion.div variants={childVariants} className="-z-20">
                <Image
                  src={`${process.env.CLOUDFLARE_STORAGE}/images/exp-corner.svg`}
                  alt="exp"
                  width={673}
                  height={637}
                  className="absolute top-0 right-0 -z-10 w-3/4 lg:w-auto"
                />
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex flex-col gap-2 pt-12"
                variants={childVariants}
              >
                <p className="text-custom-dark-gray">Follow us</p>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                    className="text-white/70 transition-200 hover:text-white/100"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

interface NavigationMenuItemProps {
  children: React.ReactNode;
  href: string;
  onSelect?: (href: string) => void;
}

const NavigationMenuItem: FC<NavigationMenuItemProps> = ({
  children,
  href,
  onSelect,
}) => {
  const router = useRouter();
  const active = router.asPath === href;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!onSelect) return; // default Link behavior
    e.preventDefault(); // stop immediate navigation
    onSelect(href); // close menu -> exit anim -> navigate onExitComplete
  };

  return (
    <motion.div variants={menuChildVariants}>
      <Link
        href={href}
        onClick={handleClick}
        className={`text-4xl lg:text-5xl transition-200 hover:opacity-100 ${
          active ? "opacity-100" : "opacity-60"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default NavigationMenu;
