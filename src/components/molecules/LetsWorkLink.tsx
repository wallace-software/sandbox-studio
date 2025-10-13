import { FC, useState } from "react";
import Link from "next/link";
import { RightArrowIcon } from "@components";
import { useWindowSize } from "@hooks";

interface Props {}

const LetsWorkLink: FC<Props> = (props: Props) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link href="/contact">
      <div
        className={`page-px w-full py-10 md:py-20 text-[40px] md:text-5xl lg:text-8xl transition-300 cursor-pointer bg-custom-black  ${
          hover ? " bg-opacity-100" : ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p
          className={`text-sand transition-300 font-primary ${
            hover ? "opacity-90" : "opacity-50"
          }`}
        >
          Let&apos;s work together.
        </p>
        <RightArrowIcon
          className="mt-3 md:mt-10 lg:mt-20 w-[80px] md:w-[110px] lg:w-[129px] h-[70px]"
          animate={hover}
        />
      </div>
    </Link>
  );
};

export default LetsWorkLink;
