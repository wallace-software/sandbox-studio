// components/motion/SeamlessLogosMarquee.tsx
import {
  FC,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useWindowSize } from "@hooks";

type Props = PropsWithChildren<{
  speed?: number;
  className?: string;
}>;

const SeamlessLogosMarquee: FC<Props> = ({
  children,
  speed = 18,
  className,
}) => {
  const controls = useAnimation();
  const prefersReduced = useReducedMotion();

  const firstRowRef = useRef<HTMLDivElement>(null);
  const [rowWidth, setRowWidth] = useState(0);

  const [winWidth] = useWindowSize();
  const gap = winWidth < 640 ? 48 : 96;

  // Measure the width of ONE row (after images load / on resize)
  useLayoutEffect(() => {
    const el = firstRowRef.current;
    if (!el) return;

    const measure = () => setRowWidth(el.scrollWidth);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children]);

  // Drive the marquee: move from 0 -> -rowWidth, then repeat
  useEffect(() => {
    if (prefersReduced || !rowWidth) return;
    controls.start({
      x: [0, -rowWidth],
      transition: { duration: speed, ease: "linear", repeat: Infinity },
    });
  }, [controls, rowWidth, speed, prefersReduced]);

  return (
    <div
      className={`relative w-full overflow-hidden ${className ?? ""}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      {/* IMPORTANT: no gap on this TRACK wrapper */}
      <motion.div
        className="flex flex-nowrap will-change-transform"
        animate={prefersReduced ? undefined : controls}
      >
        {/* First copy (has gaps between logos) */}
        <div
          ref={firstRowRef}
          className="flex flex-nowrap items-center gap-[var(--gap)]
             after:block"
          style={{ ["--gap" as any]: `${gap}px` }}
        >
          {children}
        </div>
        {/* Second copy (identical) */}
        <div
          className="flex flex-nowrap items-center gap-[var(--gap)]
             after:block"
          aria-hidden="true"
          style={{ ["--gap" as any]: `${gap}px` }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default SeamlessLogosMarquee;
