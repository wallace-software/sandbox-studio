import { FC, HTMLAttributes } from "react";
import { useRouter } from "next/router";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  link?: string;
  disabled?: boolean;
  callback?: () => Promise<void> | void;
  svgClass?: string;
  circleClass?: string;
  pathClass?: string;
}

const Button: FC<Props> = (props: Props) => {
  const {
    title,
    link,
    disabled = false,
    callback,
    svgClass,
    circleClass,
    pathClass,
    ...componentProps
  } = props;

  const router = useRouter();

  const handleClick = () => {
    if (disabled) return;
    if (callback) callback();
    else if (link) router.push(link);
  };

  return (
    <div
      className={`group min-w-[192px] h-[48px] max-w-[220px] whitespace-nowrap cursor-pointer inline-flex items-center justify-between 
      transition-200 text-sand text-xl font-regukar pl-5 pr-1.5 rounded-full border border-white border-opacity-20 ${
        disabled ? " cursor-not-allowed opacity-40" : "hover:border-opacity-40"
      } ${componentProps.className} `}
      onClick={() => handleClick()}
    >
      <span
        className={`pb-0.5 transition-200 ${
          disabled ? "opacity-80" : "group-hover:opacity-100 opacity-80"
        }`}
      >
        {title}
      </span>
      <div className="flex items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${svgClass}`}
        >
          <circle
            cx="18"
            cy="18"
            r="18"
            className={`transition-200 fill-sand ${
              disabled ? "opacity-10" : "group-hover:opacity-20 opacity-10"
            } ${circleClass}`}
          />
          <path
            d="M18.7528 24L17.9148 23.169L22.858 18.233H10.5V17.0398H22.858L17.9148 12.1037L18.7528 11.2727L25.1165 17.6364L18.7528 24Z"
            fill="white"
            className={`fill-sand ${pathClass}`}
          />
        </svg>
      </div>
    </div>
  );
};

export default Button;
