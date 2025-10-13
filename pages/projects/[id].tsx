import { PageLayout, ProjectItemView, ProjectsView } from "@components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const ProjectPage: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageLayout assets={assets}>
      {process.env.NODE_ENV === "development" ? (
        <div className="mt-8 text-sm text-gray-400">
          <ProjectItemView setAssets={setAssets} id={id} />
        </div>
      ) : (
        <div className="mt-8 text-sm text-gray-400">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-3xl font-bold text-white mb-4">Coming Soon</h1>
            <p className="text-lg text-sand font-medium">
              This project page is under construction.
            </p>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ProjectPage;
