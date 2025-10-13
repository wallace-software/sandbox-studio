import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  animate?: boolean;
}

const RightArrowIcon: FC<Props> = (props: Props) => {
  const { animate = false, ...componentProps } = props;
  return (
    <svg
      width="108"
      height="62"
      viewBox="0 0 108 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-300 ${componentProps.className} ${
        animate ? "opacity-90" : "opacity-30"
      }`}
      onClick={componentProps.onClick}
    >
      <path
        d="M76.7045 62L72.6818 57.9773L96.4091 34.3182H0V28.5909H96.4091L72.6818 4.86363L76.7045 0.909092L107.25 31.4545L76.7045 62Z"
        fill="white"
      />
    </svg>
  );
};

export default RightArrowIcon;
