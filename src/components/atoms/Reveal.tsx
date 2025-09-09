import { motion, MotionProps } from "framer-motion";
import { forwardRef } from "react";

type RevealProps = MotionProps & {
  amount?: number; // how much of element must be visible (0-1)
  once?: boolean; // animate only once
};

const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ amount = 0.2, once = true, ...rest }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ amount, once }}
      {...rest}
    />
  )
);

export default Reveal;
