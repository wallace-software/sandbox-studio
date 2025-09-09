import { motion, MotionProps } from "framer-motion";
import { forwardRef, PropsWithChildren } from "react";

// Inherit all props of <motion.div>, then add our extras.
type MotionDivProps = React.ComponentProps<typeof motion.div>;

type RevealProps = PropsWithChildren<
  MotionDivProps & {
    amount?: number;
    once?: boolean;
    animate?: boolean;
  }
>;

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ amount = 0.2, once = true, animate = true, children, ...rest }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView={animate ? "show" : "hidden"}
      viewport={{ amount, once }}
      {...rest}
    >
      {children}
    </motion.div>
  )
);

Reveal.displayName = "Reveal";
export default Reveal;
