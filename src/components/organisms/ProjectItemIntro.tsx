import { FC } from "react";
import { ProjectItemFrame, Reveal } from "@components";
import {
  fadeInUp,
  introContainerVariants,
  introItemVariants,
  ProjectItemData,
  scaleInSoft,
  stagger,
} from "@constants";
import { renderGoldText } from "@utils";
import { useViewStore } from "@contexts";
import { motion } from "framer-motion";

interface IntroProps {
  project: ProjectItemData;
}
const ProjectItemIntro: FC<IntroProps> = (props: IntroProps) => {
  const { project } = props;
  const { showView } = useViewStore();
  return (
    <motion.section
      className="container-bottom-border pt-24 md:pt-32 xl:pt-[100px] page-px h-screen w-full relative col-centered"
      variants={stagger(0.2, 0.2)}
      initial="hidden"
      animate={showView ? "show" : "hidden"}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="col-centered gap-12 md:gap-8 xl:gap-4 flex-grow">
        <motion.p variants={fadeInUp} className="text-white">
          {project.name}
        </motion.p>

        <motion.div
          className="col-centered gap-12 md:gap-8 xl:gap-4"
          variants={fadeInUp}
        >
          <h1 className="max-w-[700px] xl:max-w-[800px] text-center">
            {renderGoldText(project.intro.header)}
          </h1>

          <p className="text-grayscale-300">{project.intro.subheader}</p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-end justify-end"
      >
        <ProjectItemFrame videoId={project.intro.videoId} />
      </motion.div>
    </motion.section>
  );
};

export default ProjectItemIntro;
