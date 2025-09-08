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
    <div className="page-pt h-screen w-full relative col-centered gap-8">
      <h1 className="max-w-[700px] xl:max-w-[830px] text-center">
        {renderGoldText(project.details.header)}
      </h1>
      <p className="max-w-[768px] mb-12 text-center">
        {project.details.subheader}
      </p>
      <ProjectItemFrame videoId={project.details.video} />
    </div>
  );
};

export default ProjectItemDetails;
