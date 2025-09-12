import { FC, useEffect, useState } from "react";
import { CloudflareVideoPlayer } from "@components";

interface Props extends React.HTMLProps<HTMLDivElement> {
  videoId?: string;
  border?: string;
}
const ProjectItemFrame: FC<Props> = ({
  videoId = "dd20e765bdeb6307d8b0c1a1399c8b83",
  border = "three-part-border",
  ...props
}) => {
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, []);

  return (
    <div
      className={`relative   
        w-[300px] md:!w-[700px] xl:!w-[800px] 2xl:!w-[1000px] aspect-video  
        bg-black/70 overflow-hidden ${props.className ?? ""} ${border}`}
      onClick={() => {
        if (!isPlaying) setPlaying(true);
      }}
    >
      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={() => setPlaying(true)}
            className="group absolute flex items-center justify-center rounded-full"
            aria-label="Play Video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
            >
              <path
                d="M57 37.5359C59.6667 39.0755 59.6667 42.9245 57 44.4641L36 56.5885C33.3333 58.1281 30 56.2036 30 53.1244L30 28.8756C30 25.7964 33.3333 23.8719 36 25.4115L57 37.5359Z"
                className="transition-300 fill-[#D9D9D9]/80 group-hover:fill-white"
              />
              <circle
                cx="40.5"
                cy="40.5"
                r="40"
                className="transition-300 stroke-[#474747] group-hover:stroke-white/60"
              />
            </svg>
          </button>
        </div>
      ) : (
        <CloudflareVideoPlayer
          videoId={videoId}
          autoplay
          controls
          quality={1080}
          className="!rounded-t-3xl object-scale-down"
        />
      )}
    </div>
  );
};

export default ProjectItemFrame;
