"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useViewStore } from "@contexts";
import {
  introContainerVariants,
  introItemVariants,
  slowIntroItemVariants,
} from "@constants";
import Image from "next/image";
import { LogosMarquee } from "@components";

// Optional: small motion variant for logos
const logoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const HeroSection: FC = () => {
  const { showView } = useViewStore();

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (showView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [showView, hasAnimated]);

  return (
    <motion.div
      className="min-h-[100svh] col-centered max-w-screen overflow-hidden border-b border-white border-opacity-10 px-5 lg:px-0 pt-[64px] xl:pt-[15vh] 2xl:pt-[10vh] pb-10"
      variants={introContainerVariants}
      initial="hidden"
      animate={hasAnimated ? "show" : "hidden"}
    >
      {/* gap-16 md:gap-24 lg:gap-10 2xl:gap-20 */}
      <motion.div className="flex flex-col items-center justify-center max-w-[90vw] xl:max-w-[1256px] 2xl:max-w-[1512px] h-full flex-grow gap-[8vh] xl:gap-[6vh] 1920:gap-[4vh]">
        {/* Heading */}
        <motion.div
          variants={introItemVariants}
          className="col-centered text-center"
        >
          <motion.h1 className="text-centered max-w-[700px] lg:max-w-[900px]">
            Your website deserves to stand out{" "}
            <span className="text-sand font-medium">
              Sandbox can help with that
            </span>
          </motion.h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={introItemVariants}
          className="lg:w-[65vw] 2xl:max-w-[75vw] 1920:max-w-[60vw] col-centered"
        >
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/landing/temp-hero.png`}
            alt="Hero Image of web designs"
            width={1310}
            height={463}
          />
        </motion.div>

        {/* Logos */}
        <motion.div
          variants={slowIntroItemVariants}
          className="col-centered gap-6 max-w-[900px]"
        >
          <div className="flex items-center gap-1">
            <p>Trusted by</p>
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/icons/verify.svg`}
              alt="Verify Icon"
              width={18}
              height={18}
            />
          </div>

          <LogosMarquee speed={20} className="w-full max-w-screen">
            <div className="relative w-[100px] h-[50px] shrink-0">
              <Image
                src={`/folio-gray.svg`}
                alt="Folio"
                fill
                className="object-contain"
              />
            </div>
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/scum.svg`}
              alt="Scum"
              width={100}
              height={37}
              className="object-contain shrink-0"
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/casago@3x.png`}
              alt="Casago"
              width={124}
              height={41}
              className="object-contain shrink-0"
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/cyber-frogs.svg`}
              alt="Cyber Frogs"
              width={61}
              height={45}
              className="object-contain shrink-0"
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/somos-axolotl.svg`}
              alt="Somos Axolotl"
              width={137}
              height={38}
              className="object-contain shrink-0"
            />
          </LogosMarquee>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
