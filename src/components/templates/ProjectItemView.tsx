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

// Simple 404 component
const NotFound: FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[85vh]  text-center">
    <h1 className="text-3xl font-bold mb-4">404 - Project Not Found</h1>
    <p className="text-lg text-gray-400">
      Sorry, we couldn&apos;t find that project.
    </p>
  </div>
);

//main component
const ProjectItemView: FC<Props> = (props: Props) => {
  const { setAssets, id } = props;

  const project = projectsData.find((proj) => proj.id === id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col">
      <BackgroundImage setAssets={setAssets} fixed={false} />
      <ProjectItemIntro project={project} />
      <ProjectItemGallery project={project} />
      <ProjectItemDetails project={project} />
      <ProjectItemFinale project={project} />
      <LetsWorkLink />
    </div>
  );
};

export default ProjectItemView;
