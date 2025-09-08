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
    <div className="container-bottom-border page-pt page-pl relative self-center w-full h-full items-center justify-center">
      <div className="flex flex-col gap-12 md:gap-12">
        <div className="col-start gap-8 max-w-[730px]">
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
    <CloudflareVideoPlayer
      videoId={data.videoId}
      quality={480}
      autoplay
      muted
      loop
      playsInline
      className="three-part-border relative w-[320px] md:w-[730px] h-[300px] md:h-[538px] !rounded-t-3xl object-scale-down"
    />
  );
};

export default ProjectItemGallery;
