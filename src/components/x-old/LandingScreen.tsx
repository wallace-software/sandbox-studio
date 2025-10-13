import { HeroVideo, Logo } from "@components";
import { FC } from "react";
import { motion } from "framer-motion";
import { useViewStore } from "@contexts";
import { introContainerVariants, introItemVariants } from "@constants";

const LandingScreen: FC = () => {
  const { showView } = useViewStore(); // Access `showView` from the store

  return (
    <motion.div
      className="min-h-[100svh] w-screen flex flex-col items-center justify-end gap-8 md:gap-10 border-b border-white border-opacity-10 px-5 lg:px-0"
      variants={introContainerVariants}
      initial="hidden"
      animate={showView ? "show" : "hidden"}
    >
      {/* Logo */}
      <motion.div variants={introItemVariants}>
        <Logo className="scale-75 lg:scale-100" />
      </motion.div>

      {/* Tagline */}
      <motion.div
        variants={introItemVariants}
        className="col-centered uppercase w-[280px] md:w-[350px] h-[49px] text-sm md:text-lg text-sand-300 bg-sand/10 border border-exp-gray-100 font-bold rounded-3xl"
      >
        Design & Development Studio
      </motion.div>

      {/* Subtitle */}
      <motion.h4
        variants={introItemVariants}
        className="text-2xl lg:text-4xl text-center md:text-start"
      >
        Built Different. See for Yourself.
      </motion.h4>

      {/* Hero Video */}
      <motion.div variants={introItemVariants} className="z-0">
        <HeroVideo />
      </motion.div>
    </motion.div>
  );
};

export default LandingScreen;
