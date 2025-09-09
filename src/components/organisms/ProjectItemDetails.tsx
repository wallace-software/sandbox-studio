import { FC } from "react";
import { ProjectItemFrame } from "@components";
import { ProjectItemData } from "@constants";
import { renderGoldText } from "@utils";

interface Props {
  project: ProjectItemData;
}

const ProjectItemDetails: FC<Props> = (props: Props) => {
  const { project } = props;

  return (
    <div className="container-bottom-border page-pt page-px lg:h-screen w-full relative flex flex-col justify-end items-center gap-8">
      <div className="col-centered gap-8 mb-12">
        <h2 className="max-w-[700px] xl:max-w-[830px] text-center text-white">
          {renderGoldText(project.details.header)}
        </h2>
        <p className="max-w-[680px] text-center">{project.details.subheader}</p>
      </div>
      <ProjectItemFrame videoId={project.details.videoId} />
    </div>
  );
};

export default ProjectItemDetails;
