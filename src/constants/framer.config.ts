import { Variants, Transition } from "framer-motion";

export const ease: number[] = [0.22, 1, 0.36, 1]; // sleek "expo" style

export const timings = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
};

export const stagger = (
  delayChildren = 0.1,
  staggerChildren = 0.06
): Variants => ({
  hidden: {},
  show: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: timings.base, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: timings.base, ease },
  },
};

export const scaleInSoft: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: timings.base, ease },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: timings.base, ease },
  },
};

// Animation variants
export const widgetContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};
export const widgetItemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

export const widgetButtonVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};


export const introContainerVariants = {
  hidden: {opacity: 0}, // Initial state
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Delay between child animations
      delayChildren: 0.3, // Delay before starting child animations
    },
  },
};

export const introItemVariants = {
  hidden: { opacity: 0, y: 30 }, // Start off-screen (below)
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } }, // Animate into view
};
export const slowIntroItemVariants = {
  hidden: { opacity: 0, y: 30 }, // Start off-screen (below)
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } }, // Animate into view
};


export const mobileMenuParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1, // This will delay the animation of each child by 0.1 seconds
      delayChildren: 0.4,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 0.5,
      staggerChildren: 0.1, // This will reverse the order of the stagger on exit
      staggerDirection: -1,
    },
  },
};


export const dekstopMenuParent: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1, 
    transition: {
      duration: 0.5,
      staggerChildren: 0.1, // This will delay the animation of each child by 0.1 seconds
      delayChildren: 0.5,
      staggerDirection: 1,
    },
  },
  closed: { 
    opacity: 0,
     transition: { 
      delay: 0,
      duration: 1, 
      ease: "easeInOut" ,
      staggerChildren: 0.05, 
      staggerDirection: -1,
    }, 
  },
 
};
export const menuChildVariants = {
  hidden: { opacity: 0, y: -3, x: 10 },
  show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.3 } },
  closed: { opacity: 0, y: -3, x: 10, transition: { duration: 0.15 } },
};

export const menuChild2Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};


export const openMenuVariants = (closedWidth: number, openWidth: number) => ({
  hidden: {  width: closedWidth },
  closed: {
    width: closedWidth,
    transition: { 
      delay: 0.25,
      duration: 0.5 
    },
  },
  show: { 
    width: openWidth, 
    transition: { 
      duration: 0.5 
    } 
  },
});
export const openNewMenuVariants = (width: number) => ({
  hidden: {  width: 0 },
  closed: {
    width: 0,
    transition: { 
      delay: 0,
      duration: 0.5 
    },
  },
  show: { 
    width: width, 
    transition: { 
      duration: 0.5 
    } 
  },
});

//click animations - update
export const largeClickAnimation = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1 },
};
export const midClickAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 1 },
  transition: { duration: 0.25, ease: "easeInOut" },
};
export const smallClickAnimation = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 },
};

export const linkClickAnimation = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 1 },
};

//tap animations
export const tapAnimation = {
  whileTap: { scale: 0.97 },
};

//opacity animations
export const exitAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.7, ease: "easeInOut" },
};
export const midExitAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: "easeInOut" },
};
export const fastExitAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: "easeInOut" },
};
export const vFastExitAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.05, ease: "easeInOut" },
};

export const enterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.4, ease: "easeInOut" },
};

export const midEnterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: "easeInOut" },
};
export const fastEnterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

export const scaleExitAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
  transition: { duration: 0.4, ease: "easeInOut" },
};
//variants
export const arrowVariants: Variants = {
  start: {
    rotate: 0,
    transition: {
      duration: 0.4,
    },
  },
  end: {
    rotate: 180,
    transition: {
      duration: 0.4,
    },
  },
};

//background
export const backgroundAnimations = {
  whileHover: { backgroundColor: "#f87171" },
  whileTap: { backgroundColor: "#f87171" },
  transition: { duration: 0.4, ease: "easeInOut" },
};

//dropdown
export const dropdownAnimations: Variants = {
  hidden: { y: 500, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      // delay: 0.5,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};
export const dropdownItemsAnimations = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
  transition: {
    duration: 0.4,
    ease: "easeInOut",
    type: "spring",
    stiffness: 300,
    damping: 24,
  },
};

export const fadeVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  open: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
};

export const menuAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: "easeInOut" },
  whileHover: { scale: 1.06 },
  whileTap: { scale: 1 },
};

export const slideDown = (animate: boolean) => ({
  initial: { y: -300, opacity: 0 },
  animate: { y: animate ? 0 : -300, opacity: animate ? 1 : 0 },
  transition: { duration: 1.5, ease: "easeInOut" },
});

export const slideUp = (animate: boolean, y?: number, duration?: number, delay?: number) => ({
  initial: { y: y ?? 300, opacity: 0 },
  animate: { y: animate ? 0 : y ?? 300, opacity: animate ? 1 : 0 },
  transition: { duration: duration ?? 1.5, ease: "easeInOut" , delay: delay ?? 0},
});
export const slideLeft = (animate: boolean) => ({
  initial: { x: 300, opacity: 0 },
  animate: { x: animate ? 0 : 300, opacity: animate ? 1 : 0 },
  transition: { duration: 1.5, ease: "easeInOut" },
});
export const slideRight = (animate: boolean) => ({
  initial: { x: -300, opacity: 0 },
  animate: { x: animate ? 0 : -300, opacity: animate ? 1 : 0 },
  transition: { duration: 1.5, ease: "easeInOut" },
});

export const imageLoadAnimation = (animate: boolean) => ({
  initial: { opacity: 0 },
  animate: { opacity: animate ? 1 : 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: "easeInOut" },
})

export const imageSlideAnimation = (
  animate: boolean,
  delay?: number,
  direction?: string
) => ({
  initial: { x: direction === "right" ? -0 : 0, opacity: 0.75 },
  animate: { x: animate ? 0 : 0, opacity: 1 },
  exit: { x: -40 },
  transition: { duration: 0.15, ease: "easeInOut", delay: delay ?? 0 },
});

export const imageDropAnimation = (
  animate: boolean,
  delay?: number,
) => ({
  initial: { y: -40, opacity: 0.25 },
  animate: { y: animate ? -20 : 0, opacity: 1 },
  eyit: { x: -40 },
  transition: { duration: 0.45, ease: "easeInOut", delay: delay ?? 0 },
});