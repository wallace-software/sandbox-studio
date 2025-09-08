import { FC } from "react";
import { ArrowButtonIcon, Gallery, CloudflareVideoPlayer } from "@components";
import { galleryData, GalleryType, ProjectItemData } from "@constants";
import { useWindowSize } from "@hooks";
import { renderGoldText } from "@utils";

interface Props {
  project: ProjectItemData;
}

const ProjectItemGallery: FC<Props> = (props: Props) => {
  const { project } = props;
  const [winWidth] = useWindowSize();

  return (
    <div className="page-py page-pl relative self-center w-full h-full items-center justify-center">
      <div className="flex flex-col gap-0 md:gap-12">
        <div className="col-start gap-6 max-w-[730px]">
          <h1>{renderGoldText(project.gallery.header)}</h1>
          <p>{project.gallery.subheader}</p>
        </div>
        <div className="w-full">
          <Gallery
            galleryItemGap={"gap-10 xl:gap-20"}
            itemGap={winWidth < 1280 ? 40 : 80}
          >
            {galleryData.map((item, i) => (
              <ProjectGalleryItem key={i} data={item} />
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

interface ProjectGalleryItemProps {
  data: GalleryType;
}
const ProjectGalleryItem: FC<ProjectGalleryItemProps> = ({ data }) => {
  const handleClick = (id: string): void => {};

  return (
    <div className="relative w-[320px] md:w-[608px] h-auto md:h-[555px] flex flex-col gap-10 pt-10 pl-5">
      <div className="w-[280px] md:w-[560px] h-[189px] md:h-[378.5px] bg-white/40 rounded-2xl overflow-hidden outline outline-[12px] md:outline-[20px] outline-sand">
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
          className={`flex flex-col gap-1 justify-center max-w-[380px] -ml-2 md:-ml-4 ${data.textColor}`}
        >
          <h3 className="">{data.title}</h3>
          <p className="">
            We need to add a {`data.description`} to each project
          </p>
        </div>
        <div className="mr-6 underline text-sm">
          {/* See more */}
          <ArrowButtonIcon
            direction="right"
            onClick={() =>
              handleClick(data.title.toLocaleLowerCase().replace(" ", "-"))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItemGallery;
