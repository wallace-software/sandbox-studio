import { FC } from "react";
import { ProjectItemFrame, Reveal } from "@components";
import { fadeInUp, ProjectItemData, scaleInSoft } from "@constants";
import { renderGoldText } from "@utils";
import { useViewStore } from "@contexts";

interface IntroProps {
  project: ProjectItemData;
}
const ProjectItemIntro: FC<IntroProps> = (props: IntroProps) => {
  const { project } = props;
  const { showView } = useViewStore();
  return (
    <section className="container-bottom-border pt-24 md:pt-32 xl:pt-[100px] page-px h-screen w-full relative col-centered">
      <div className="col-centered gap-12 md:gap-8 xl:gap-4 flex-grow">
        <Reveal animate={showView} variants={fadeInUp}>
          <p className="text-white">{project.name}</p>
        </Reveal>

        <Reveal animate={showView} variants={fadeInUp} amount={0.6}>
          <h1 className="max-w-[700px] xl:max-w-[800px] text-center">
            {renderGoldText(project.intro.header)}
          </h1>
        </Reveal>

        <Reveal animate={showView} variants={fadeInUp}>
          <p className="text-grayscale-300">{project.intro.subheader}</p>
        </Reveal>
      </div>

      {/* Frame: subtle scale/fade on reveal */}
      <Reveal animate={showView} variants={scaleInSoft} amount={0.9}>
        <div className="flex flex-col items-end justify-end">
          <ProjectItemFrame videoId={project.intro.videoId} />
        </div>
      </Reveal>
    </section>
  );
};

export default ProjectItemIntro;
