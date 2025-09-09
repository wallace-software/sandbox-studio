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
    <div className="container-bottom-border page-pt page-px lg:h-screen w-full relative flex flex-col xl:flex-row xl:items-center xl:justify-center gap-8 pb-4">
      <div className="col-start gap-8 md:mb-12 max-w-[400px] xl:ml-36 2xl:ml-48">
        <h2 className=" text-white">{renderGoldText(project.finale.header)}</h2>
        <p>{project.finale.subheader}</p>
        {project.finale.cta && (
          <Button
            title={project.finale.cta.text}
            callback={() => {
              window.open(project.finale.cta?.link ?? "", "_blank");
            }}
          />
        )}
      </div>
      <div className="xl:absolute 3xl:relative xl:-right-20 3xl:right-0 xl:top-1/2 3xl:top-0 xl:-translate-y-1/2 3xl:-translate-y-0 xl:self-center">
        <ProjectItemFrame
          videoId={project.finale.videoId}
          className="full-gold-border "
        />
      </div>
    </div>
  );
};

export default ProjectItemFinale;
