import { Dispatch, SetStateAction, FC } from "react";
import {
  LetsWorkLink,
  ProjectItemDetails,
  ProjectItemGallery,
  ProjectItemIntro,
} from "@components";
import { useViewStore } from "@contexts";
import { ProjectItemData } from "@constants";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
  id?: string | string[] | undefined;
}

export const projectsData: ProjectItemData[] = [
  {
    id: "folio",
    name: "Folio",
    intro: {
      header:
        "A modern refresh to brand & website. <gold>Folio takes a step forward.</gold>",
      subheader: "Internship hiring, streamlined and polished.",
      video: "",
    },
    gallery: {
      header: "Giving the <gold>brand</gold> a second chance.",
      subheader:
        "Folio requested a brand refresh, taking the original logo and working it into something new. Something that matched their moves. Progressive, sleek and modern.",
      assets: ["", ""],
    },
    details: {
      header: "Refreshing the <gold>website</gold> to look the part.",
      subheader:
        "The new brand needed a website to match. We made sure to make use of what was working before, and rid of everything that was not.",
      video: "",
    },
    finale: {
      header: "The grand finale.",
      subheader:
        "The work that goes into the website is great, but delivering the project is the most important. At Sandbox, delivering is our speciality.",
      assets: [""],
      cta: { text: "Visit Site", link: "/contact" },
    },
  },
];

//main component
const ProjectItemView: FC<Props> = (props: Props) => {
  const { setAssets, id } = props;
  const { showView } = useViewStore();

  const project = projectsData.find((proj) => proj.id === id);
  return (
    <div className="flex flex-col">
      {project && showView && (
        <>
          <ProjectItemIntro setAssets={setAssets} project={project} />
          <ProjectItemGallery project={project} />
          <ProjectItemDetails project={project} />
          <LetsWorkLink />
        </>
      )}
    </div>
  );
};

export default ProjectItemView;
