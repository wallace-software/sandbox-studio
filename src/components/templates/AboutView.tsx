import { Dispatch, SetStateAction, FC } from "react";
import { BackgroundImage, LetsWorkLink, TeamMemberCard } from "@components";
import { useViewStore } from "src/contexts";
import { motion } from "framer-motion";
import {
  introContainerVariants,
  introItemVariants,
  teamMembers,
} from "@constants";
import { useWindowSize } from "@hooks";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useViewStore();
  const [winWidth, winHeight] = useWindowSize();

  return (
    <div className="flex flex-col h-full">
      <div
        className={`page-min-h page-py page-px relative max-w-[1440px] self-center w-full items-center justify-center h-full`}
      >
        <BackgroundImage setAssets={setAssets} />
        <motion.div
          className="flex flex-col gap-2 flex-grow h-full sm:items-center justify-center 2xl:mt-10 3xl:mt-20"
          variants={introContainerVariants}
          initial="hidden"
          animate={showView ? "show" : "hidden"}
        >
          <motion.h1 variants={introItemVariants}>
            Meet the <span className="text-sand font-medium">Sandbox</span> Team
          </motion.h1>
          <motion.p
            variants={introItemVariants}
            className="subheading max-w-[500px] lg:max-w-[700px] pb-8"
          >
            Our team is a tight-knit unit of talented individuals. Years of
            collaboration has made us not only a team with strong chemistry, but
            a team that delivers.
          </motion.p>
          {/* Team Members */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-4 xl:gap-8 3xl:gap-10 px-4 md:px-0"
            variants={introItemVariants}
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <hr className="border-white border-opacity-10 top-margin" />
      <LetsWorkLink />
    </div>
  );
};

export default AboutView;
