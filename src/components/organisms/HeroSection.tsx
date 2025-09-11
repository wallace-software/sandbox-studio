"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useViewStore } from "@contexts";
import { introContainerVariants, introItemVariants } from "@constants";
import Image from "next/image";

// Optional: small motion variant for logos
const logoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const LandingScreen: FC = () => {
  const { showView } = useViewStore();

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (showView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [showView, hasAnimated]);

  return (
    <motion.div
      className="min-h-[100svh] col-centered max-w-screen overflow-hidden border-b border-white border-opacity-10 px-5 lg:px-0 pt-[64px] 2xl:pt-[10vh]"
      variants={introContainerVariants}
      initial="hidden"
      animate={hasAnimated ? "show" : "hidden"}
    >
      <motion.div className="flex flex-col lg:items-center lg:justify-center max-w-[90vw] xl:max-w-[1256px] 2xl:max-w-[1512px] gap-16 md:gap-24 lg:gap-10 2xl:gap-20">
        {/* Heading */}
        <motion.div
          variants={introItemVariants}
          className="col-centered text-center"
        >
          <motion.h1 className="text-centered max-w-[700px] lg:max-w-[1000px]">
            You&apos;re website doesn&apos;t need to be basic.{" "}
            <span className="text-sand font-medium">
              Sandbox, can help with that.
            </span>
          </motion.h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={introItemVariants}
          className="lg:w-[65vw] 2xl:max-w-[80vw] col-centered"
        >
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/landing/temp-hero.png`}
            alt="Hero Image of web designs"
            width={1310}
            height={463}
          />
        </motion.div>

        {/* Logos */}
        <motion.div variants={introItemVariants} className="col-centered gap-6">
          <div className="flex items-center gap-1">
            <p>Trusted by</p>
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/icons/verify.svg`}
              alt="Verify Icon"
              width={18}
              height={18}
            />
          </div>
          <motion.div
            className="row-centered gap-24"
            variants={logoVariants}
            initial="hidden"
            animate="show"
          >
            <div className="relative w-[110px] h-[50px]">
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/folio.svg`}
                alt="Folio"
                fill
                className="object-cover"
              />
            </div>
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/scum.svg`}
              alt="Scum"
              width={81}
              height={37}
              className="object-contain"
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/casago@3x.png`}
              alt="Casago"
              width={124}
              height={41}
              className="object-contain"
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/cyber-frogs.svg`}
              alt="Cyber Frogs"
              width={61}
              height={45}
              className="object-contain"
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/somos-axolotl.svg`}
              alt="Somos Axolotl"
              width={137}
              height={38}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingScreen;
