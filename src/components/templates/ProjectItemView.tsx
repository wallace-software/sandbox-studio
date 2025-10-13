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
  <div className="mt-8 text-sm text-gray-400">
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
      <p className="text-lg text-sand font-medium">
        Sorry, we couldn&apos;t find this one.
      </p>
    </div>
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
