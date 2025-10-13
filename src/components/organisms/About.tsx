import { FC } from "react";
import { Button, HeroVideo } from "@components";
import Image from "next/image";
import { stagger, fadeInUp } from "@constants";
import { motion } from "framer-motion";

const About: FC = () => {
  return (
    <motion.div
      className="landing-container col-centered max-w-screen overflow-hidden py-16 lg:py-10"
      variants={stagger(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col xl:flex-row gap-16 xl:gap-32 max-w-[1256px]">
        <motion.div
          className="flex flex-col gap-10 xl:gap-14 max-w-[608px]"
          variants={fadeInUp}
        >
          <div>
            <h2 className="mb-3">Our team.</h2>
            <h2 className="text-sand">Learn more.</h2>
          </div>
          <div>
            <p className="font-regular text-lg xl:text-xl mb-5">
              Founded in January 2023, Sandbox Studio emerged from the nearly
              decade-long partnership between Miguel Corzo and Wallace Palmer.
              Having spent over ten years in collaboration, our journey has
              spanned diverse industries.
            </p>
            <p className=" font-regular text-lg xl:text-xl">
              We&apos;ve worked with some of the finest artist, builders, and
              graphic designers and take pride in our expansive portfolio.
            </p>
          </div>
          <Button title="About us" link="/about" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col xl:items-center xl:justify-center flex-grow"
        >
          <HeroVideo />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
