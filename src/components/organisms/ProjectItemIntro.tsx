import { FC } from "react";
import { ProjectItemFrame } from "@components";
import { ProjectItemData } from "@constants";
import { renderGoldText } from "@utils";

interface IntroProps {
  project: ProjectItemData;
}
const ProjectItemIntro: FC<IntroProps> = (props: IntroProps) => {
  const { project } = props;
  return (
    <div className="container-bottom-border pt-24 md:pt-32 xl:pt-[100px] page-px h-screen w-full relative col-centered">
      <div className="col-centered gap-12 md:gap-8 xl:gap-4 flex-grow f">
        <p className="text-white">{project.name}</p>
        <h1 className="max-w-[700px] xl:max-w-[800px] text-center">
          {renderGoldText(project.intro.header)}
        </h1>
        <p className="text-grayscale-300">{project.intro.subheader}</p>
      </div>
      <div className="flex flex-col items-end justify-end">
        <ProjectItemFrame videoId={project.intro.videoId} />
      </div>
    </div>
  );
};

export default ProjectItemIntro;
