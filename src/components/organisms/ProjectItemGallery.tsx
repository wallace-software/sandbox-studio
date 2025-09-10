import { FC } from "react";
import { Gallery, CloudflareVideoPlayer, Reveal } from "@components";
import {
  fadeInUp,
  galleryData,
  ProjectItemData,
  scaleInSoft,
  stagger,
} from "@constants";
import { useWindowSize } from "@hooks";
import { renderGoldText } from "@utils";
import { motion } from "framer-motion";

interface Props {
  project: ProjectItemData;
}

const ProjectItemGallery: FC<Props> = (props: Props) => {
  const { project } = props;
  const [winWidth] = useWindowSize();

  return (
    <section className="container-bottom-border section-pt page-pl relative self-center w-full h-full  items-center justify-center">
      <div className="flex flex-col gap-12 md:gap-12">
        {/* Section header: simple reveals */}
        <div className="col-start gap-8 max-w-[730px]">
          <Reveal variants={fadeInUp}>
            <h2 className="text-white">
              {renderGoldText(project.gallery.header)}
            </h2>
          </Reveal>
          <Reveal variants={fadeInUp} amount={0.5}>
            <p>{project.gallery.subheader}</p>
          </Reveal>
        </div>

        {/* Items: parent controls the stagger; children only declare variants */}
        <motion.div
          className="w-full"
          variants={stagger(0.15, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Gallery
            galleryItemGap="gap-10 xl:gap-20"
            itemGap={winWidth < 1280 ? 40 : 80}
          >
            {galleryData.map((item: any, i: number) => (
              <motion.div
                key={item?.id ?? i}
                variants={scaleInSoft}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <CloudflareVideoPlayer
                  videoId={item.videoId}
                  quality={480}
                  autoplay
                  muted
                  loop
                  playsInline
                  className="three-part-border relative w-[320px] md:w-[730px] h-[300px] md:h-[538px] !rounded-t-3xl object-scale-down"
                />
              </motion.div>
            ))}
          </Gallery>
        </motion.div>
      </div>
    </section>
  );
};

/*<div className="container-bottom-border page-pt page-pl relative self-center w-full h-full lg:h-screen items-center justify-center">
      <div className="flex flex-col gap-12 md:gap-12">
        <div className="col-start gap-8 max-w-[730px]">
          <h2 className="text-white">
            {renderGoldText(project.gallery.header)}
          </h2>
          <p>{project.gallery.subheader}</p>
        </div>
        <div className="w-full">
          <Gallery
            galleryItemGap={"gap-10 xl:gap-20"}
            itemGap={winWidth < 1280 ? 40 : 80}
          >
            {galleryData.map((item, i) => (
              <CloudflareVideoPlayer
                key={i}
                videoId={item.videoId}
                quality={480}
                autoplay
                muted
                loop
                playsInline
                className="three-part-border relative w-[320px] md:w-[730px] h-[300px] md:h-[538px] !rounded-t-3xl object-scale-down"
              />
            ))}
          </Gallery>
        </div>
      </div>
    </div>*/

export default ProjectItemGallery;
