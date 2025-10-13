import { ExchangeArtIcon, TensorIcon, TwitterIcon } from "@components";
import { Client } from "@constants";
import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";

interface Props {
  selectedTestimonial: Client;
}

// Parent container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between child animations
    },
  },
};

// Child element animation variants
const childVariants = {
  hidden: { opacity: 0, y: 30 }, // Start off-screen (below)
  show: {
    opacity: 1,
    y: 0, // Animate into position
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TestimonialsItem: FC<Props> = (props: Props) => {
  const { selectedTestimonial } = props;

  return (
    <motion.div
      className="flex flex-col xl:flex-row items-start mt-10 xl:pr-10 gap-10 "
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerVariants} // Apply staggered animation to the parent container
      key={selectedTestimonial.name}
    >
      {/* Left Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row gap-8"
        variants={childVariants} // Animate the left section as a child
      >
        <Image
          src={selectedTestimonial.image}
          alt={selectedTestimonial.name}
          width={256}
          height={256}
          className="rounded-md"
        />

        <div className="flex flex-col items-start font-barlow">
          <motion.div
            className="text-2xl bold"
            variants={childVariants} // Animate the name
          >
            {selectedTestimonial.name}
          </motion.div>
          <motion.div
            className="text-grayscale-200 text-2xl"
            variants={childVariants} // Animate the title
          >
            {selectedTestimonial.title}
          </motion.div>

          <motion.div
            className="flex mt-6"
            variants={childVariants} // Animate the icons
          >
            <span className="mr-2">
              <TwitterIcon href={selectedTestimonial.twitter} />
            </span>
            {selectedTestimonial?.exchangeArt && (
              <ExchangeArtIcon href={selectedTestimonial.exchangeArt} />
            )}
            {selectedTestimonial?.tensor && (
              <TensorIcon href={selectedTestimonial.tensor} />
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="xl:ml-8 xl:w-1/2"
        variants={childVariants} // Animate the right section as a child
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="66"
            viewBox="0 0 69 66"
            fill="none"
            className="absolute left-0 top-0"
          >
            <path
              opacity="0.4"
              d="M26.625 11.75C20.875 12.8333 16.8333 17 14.5 24.25C13.3333 27.8333 12.75 31.375 12.75 34.875C12.75 35.2917 12.75 35.6667 12.75 36C12.8333 36.25 12.9167 36.875 13 37.875H26.625V65.125H0V40C0 27.6667 2.45833 18.1667 7.375 11.5C12.2917 4.83333 18.7083 1 26.625 0V11.75ZM68.75 11.75C64.1667 12.5 60.6667 15.0833 58.25 19.5C55.9167 23.9167 54.75 29 54.75 34.75C54.75 35.25 54.75 35.75 54.75 36.25C54.8333 36.75 54.9583 37.2917 55.125 37.875H68.75V65.125H42V40C42 30.0833 44.0833 21.25 48.25 13.5C52.4167 5.66667 59.25 1.16667 68.75 0V11.75Z"
              fill="#FFF1B4"
            />
          </svg>
          <p className="ml-4 text-xl md:text-2xl xl:text-3xl font-light italic">
            {selectedTestimonial.testimonial}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsItem;
