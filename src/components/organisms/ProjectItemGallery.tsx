import { FC } from "react";
import {
  Gallery,
  CloudflareVideoPlayer,
  Reveal,
  ProjectItemFrame,
} from "@components";
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
    <motion.section
      className="container-bottom-border section-pt page-pl relative self-center w-full h-full  items-center justify-center"
      variants={stagger(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="flex flex-col gap-12 md:gap-12">
        {/* Section header: simple reveals */}
        <div className="col-start gap-8 max-w-[730px]">
          <motion.h2 className="text-white" variants={fadeInUp}>
            {renderGoldText(project.gallery.header)}
          </motion.h2>
          <motion.p variants={fadeInUp}>{project.gallery.subheader}</motion.p>
        </div>

        {/* Items: parent controls the stagger; children only declare variants */}
        <motion.div className="w-full" variants={fadeInUp}>
          <Gallery
            galleryItemGap="gap-10 xl:gap-20"
            itemGap={winWidth < 1280 ? 40 : 80}
          >
            {galleryData.map((item: any, i: number) => (
              <Reveal key={item?.id ?? i} variants={scaleInSoft}>
                <ProjectItemFrame videoId={project.intro.videoId} />
              </Reveal>
            ))}
            {/* {galleryData.map((item: any, i: number) => (
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
                  className="overflow-hidden three-part-border relative w-[320px] md:w-[730px] h-[300px] md:h-[538px] !rounded-t-3xl object-scale-down"
                />   
              </motion.div>
            ))} */}
          </Gallery>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectItemGallery;
