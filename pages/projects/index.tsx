import { PageLayout, ProjectsView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Projects: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout assets={assets}>
      <ProjectsView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Projects;
