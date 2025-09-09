import { Dispatch, SetStateAction, FC } from "react";
import {
  BackgroundImage,
  LetsWorkLink,
  ProjectItemDetails,
  ProjectItemFinale,
  ProjectItemGallery,
  ProjectItemIntro,
} from "@components";
import { useViewStore } from "@contexts";
import { projectsData } from "@constants";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
  id?: string | string[] | undefined;
}

//main component
const ProjectItemView: FC<Props> = (props: Props) => {
  const { setAssets, id } = props;

  const project = projectsData.find((proj) => proj.id === id);

  return (
    <div className="flex flex-col">
      <BackgroundImage setAssets={setAssets} fixed={false} />
      {project && (
        <>
          <ProjectItemIntro project={project} />
          <ProjectItemGallery project={project} />
          <ProjectItemDetails project={project} />
          <ProjectItemFinale project={project} />
          <LetsWorkLink />
        </>
      )}
    </div>
  );
};

export default ProjectItemView;
