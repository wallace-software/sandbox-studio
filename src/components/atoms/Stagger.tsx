import { motion, MotionProps } from "framer-motion";
import { stagger as staggerVariants } from "@constants";
import { FC } from "react";

type StaggerProps = MotionProps & {
  delayChildren?: number;
  staggerChildren?: number;
};

const Stagger: FC = ({
  delayChildren = 0.15,
  staggerChildren = 0.08,
  ...rest
}: StaggerProps) => (
  <motion.div
    variants={staggerVariants(delayChildren, staggerChildren)}
    initial="hidden"
    animate="show"
    {...rest}
  />
);

export default Stagger;
