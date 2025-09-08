import { Dispatch, SetStateAction, FC } from "react";
import { BackgroundImage, ProjectItemFrame } from "@components";
import { ProjectItemData } from "@constants";
import { renderGoldText } from "@utils";

interface IntroProps {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
  project: ProjectItemData;
}
const ProjectItemIntro: FC<IntroProps> = (props: IntroProps) => {
  const { setAssets, project } = props;
  return (
    <div className="page-pt h-screen w-full relative col-centered">
      <BackgroundImage setAssets={setAssets} fixed={false} />
      <div className="col-centered gap-0 md:gap-8 flex-grow f">
        <p className="text-white">{project.name}</p>
        <h1 className="max-w-[700px] xl:max-w-[800px] text-center">
          {renderGoldText(project.intro.header)}
        </h1>
        <p className="text-grayscale-300">{project.intro.subheader}</p>
      </div>
      <div className="lex flex-col items-end justify-end">
        <ProjectItemFrame videoId={project.intro.video} />
      </div>
    </div>
  );
};

export default ProjectItemIntro;
