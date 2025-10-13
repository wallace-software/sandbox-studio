import { Dispatch, SetStateAction, FC } from "react";
import {
  LetsWorkLink,
  BackgroundImage,
  ArrowButtonIcon,
  Gallery,
  CloudflareVideoPlayer,
} from "@components";
import { useViewStore } from "@contexts";
import {
  galleryData,
  GalleryType,
  introContainerVariants,
  introItemVariants,
} from "@constants";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useWindowSize } from "@hooks";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ProjectsView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useViewStore();
  const [winWidth] = useWindowSize();

  return (
    <div className="flex flex-col">
      <div className="page-min-h page-py page-pl relative self-center w-full items-center justify-center">
        <BackgroundImage setAssets={setAssets} />
        <motion.div
          className="flex flex-col gap-0 md:gap-12 2xl:mt-10"
          variants={introContainerVariants}
          initial="hidden"
          animate={showView ? "show" : "hidden"}
        >
          <motion.h1 variants={introItemVariants}>
            Take a look at <span className="text-sand font-medium">some</span>{" "}
            of our projects.
          </motion.h1>
          <motion.div className="w-full" variants={introItemVariants}>
            <Gallery
              galleryItemGap={"gap-10 xl:gap-20"}
              itemGap={winWidth < 1280 ? 40 : 80}
            >
              {galleryData.map((item, i) => (
                <ProjectGalleryItem key={i} data={item} />
              ))}
            </Gallery>
          </motion.div>
        </motion.div>
      </div>
      <hr className="border-white border-opacity-10 top-margin" />
      <LetsWorkLink />
    </div>
  );
};

interface ProjectGalleryItemProps {
  data: GalleryType;
}
const ProjectGalleryItem: FC<ProjectGalleryItemProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = (id: string): void => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className="relative w-[320px] md:w-[608px] h-auto md:h-[555px] flex flex-col gap-6 pt-10 pl-5">
      <div
        className="full-gold-border w-[280px] md:w-[560px] h-[191px] md:h-[389px] bg-white/40 rounded-2xl overflow-hidden cursor-pointer"
        onClick={() =>
          handleClick(data.title.toLocaleLowerCase().replace(" ", "-"))
        }
      >
        <CloudflareVideoPlayer
          videoId={data.videoId}
          quality={480}
          autoplay
          muted
          loop
          playsInline
        />
      </div>

      <div className="flex w-full justify-between items-end gap-4">
        <div
          className={`flex flex-col gap-1 justify-center max-w-[380px] ${data.textColor}`}
        >
          <h3 className="">{data.title}</h3>
          {/* TODO: Add project description */}
          {process.env.NODE_ENV === "development" && (
            <p className="">
              We need to add a {`data.description`} to each project
            </p>
          )}
        </div>
        {/* TODO: Add project content and uncomment */}
        {process.env.NODE_ENV === "development" && (
          <div className="mr-6 underline text-sm">
            {/* See more */}
            <ArrowButtonIcon
              direction="right"
              onClick={() =>
                handleClick(data.title.toLocaleLowerCase().replace(" ", "-"))
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsView;
