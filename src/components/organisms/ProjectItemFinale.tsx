import { FC } from "react";
import { Button, ProjectItemFrame } from "@components";
import { ProjectItemData } from "@constants";
import { renderGoldText } from "@utils";

interface Props {
  project: ProjectItemData;
}

const ProjectItemFinale: FC<Props> = (props: Props) => {
  const { project } = props;

  return (
    <div className="container-bottom-border page-pt page-px lg:h-screen w-full relative flex flex-col xl:flex-row items-center  gap-8">
      <div className="col-centered gap-8 mb-12 max-w-[442px]">
        <h2 className="max-w-[700px] xl:max-w-[830px] text-center text-white">
          {renderGoldText(project.finale.header)}
        </h2>
        <p className="max-w-[680px] text-center">{project.finale.subheader}</p>
        {project.finale.cta && (
          <Button
            title={project.finale.cta.text}
            callback={() => {
              window.open(project.finale.cta?.link ?? "", "_blank");
            }}
          />
        )}
      </div>
      <ProjectItemFrame videoId={project.finale.video} />
    </div>
  );
};

export default ProjectItemFinale;
