import { FC } from "react";
import { ProjectItemFrame } from "@components";
import { fadeInUp, ProjectItemData, scaleInSoft, stagger } from "@constants";
import { renderGoldText } from "@utils";
import { motion } from "framer-motion";

interface Props {
  project: ProjectItemData;
}

const ProjectItemDetails: FC<Props> = (props: Props) => {
  const { project } = props;

  return (
    <motion.section
      className="container-bottom-border section-pt page-px lg:h-screen w-full relative flex flex-col justify-end items-center gap-8"
      variants={stagger(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Text block: internal micro-stagger for h2 -> p */}
      <motion.div
        className="col-centered gap-8 mb-12"
        variants={stagger(0.2, 0.2)}
      >
        <motion.h2
          className="max-w-[700px] xl:max-w-[830px] text-center text-white"
          variants={fadeInUp}
        >
          {renderGoldText(project.details.header)}
        </motion.h2>

        <motion.p className="max-w-[680px] text-center" variants={fadeInUp}>
          {project.details.subheader}
        </motion.p>
      </motion.div>

      {/* Frame: soft scale/fade entrance */}
      <motion.div variants={scaleInSoft} className="relative">
        <p className="text-white absolute left-[20%] top-7 z-10 px-4 py-1 bg-custom-black rounded-lg">
          Before
        </p>
        <p className="text-white absolute right-[20%] top-7 z-10 px-6 py-1 bg-custom-black rounded-lg">
          After
        </p>
        <ProjectItemFrame
          videoId={project.details.videoId}
          className="!aspect-[2696/1240] xl:!w-[900px] 2xl:!w-[1200px] p-0"
        />
      </motion.div>
    </motion.section>
  );
};

export default ProjectItemDetails;
