import { Dispatch, SetStateAction, FC } from "react";
import {
  WelcomeSection,
  ProjectItem,
  LetsWorkLink,
  BackgroundImage,
  AnimateWrapper,
} from "@components";
import { useViewStore } from "@contexts";
import { projects } from "@constants";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ProjectsView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useViewStore();

  return (
    <div className="relative w-full h-full page-py-min">
      <BackgroundImage setAssets={setAssets} />
      <AnimateWrapper animate={showView}>
        <WelcomeSection title1="Our work." />
        <hr className="border-white border-opacity-10 mt-16 md:mt-28"></hr>
      </AnimateWrapper>

      {projects.map((project, index) => (
        <ProjectItem project={project} key={index} showView={showView} />
      ))}

      <LetsWorkLink />
    </div>
  );
};

export default ProjectsView;
