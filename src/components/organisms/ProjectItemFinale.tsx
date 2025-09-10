import { FC } from "react";
import { Button, ProjectItemFrame } from "@components";
import { fadeInUp, ProjectItemData, slideInRight, stagger } from "@constants";
import { renderGoldText } from "@utils";
import { motion } from "framer-motion";

interface Props {
  project: ProjectItemData;
}

const ProjectItemFinale: FC<Props> = (props: Props) => {
  const { project } = props;

  return (
    <motion.section
      className="container-bottom-border section-py  page-px lg:h-screen w-full relative flex flex-col xl:flex-row xl:items-center xl:justify-between 3xl:justify-center gap-8 pb-4"
      variants={stagger(0.15, 0.08)} // orchestrate children
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3, margin: "-120px 0px -120px 0px" }} // trigger later
    >
      {/* Text block with internal micro-stagger */}
      <motion.div
        className="col-start gap-8 md:mb-12 max-w-[400px] xl:ml-36 2xl:ml-48 3xl:ml-0"
        variants={stagger(0.06, 0.06)}
      >
        <motion.h2 className="text-white" variants={fadeInUp}>
          {renderGoldText(project.finale.header)}
        </motion.h2>

        <motion.p variants={fadeInUp}>{project.finale.subheader}</motion.p>

        {project.finale.cta && (
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            <Button
              title={project.finale.cta.text}
              callback={() => {
                window.open(project.finale.cta?.link, "_blank");
              }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Frame: soft slide-in from the right */}
      <motion.div
        className="
        xl:absolute xl:-right-20 0
        "
        variants={slideInRight}
        style={{ willChange: "transform" }}
      >
        <ProjectItemFrame
          videoId={project.finale.videoId}
          className="full-gold-border"
        />
      </motion.div>
    </motion.section>
  );
};

export default ProjectItemFinale;
