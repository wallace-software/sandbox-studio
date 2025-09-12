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
      className="page-min-h-2 container-bottom-border page-px page-pt w-full relative col-centered gap-16 overflow-hidden"
      variants={stagger(0.2, 0.2)}
      initial="hidden"
      animate={showView ? "show" : "hidden"}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="col-centered gap-6 md:gap-8 xl:gap-4 flex-grow">
        <motion.p variants={fadeInUp} className="text-white">
          {project.name}
        </motion.p>

        <motion.div
          className="col-centered gap-6 md:gap-8 xl:gap-4"
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
