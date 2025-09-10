import { Dispatch, SetStateAction, FC, useContext } from "react";
import {
  WelcomeSection,
  ContactForm,
  BackgroundImage,
  AnimateWrapper,
} from "@components";
import { useViewStore } from "src/contexts";
import { introContainerVariants, introItemVariants } from "@constants";
import { motion } from "framer-motion";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ContactView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useViewStore();

  return (
    <div className="page-py page-px col-centered relative w-full h-full min-h-[70svh] xl:min-h-screen overflow-hidden mb-10 ">
      <BackgroundImage setAssets={setAssets} />
      <motion.div
        className="col-start gap-8 md:gap-12 max-w-[824px] w-full"
        variants={introContainerVariants}
        initial="hidden"
        animate={showView ? "show" : "hidden"}
      >
        <motion.div
          className="flex w-full justify-between"
          variants={introItemVariants}
        >
          <div className="flex flex-col lg:gap-2">
            <h1 className="text-white">How can we help?</h1>
            <p className="max-w-[425px]">
              Take a few seconds to fill out the form below and we will get back
              to you as soon as possible!
            </p>
          </div>
          {/* <div className="hidden lg:flex flex-col pt-5 ">
            <p className="text-grayscale-300 font-ligh text-sm">
              Hate contact forms?
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:info@sandboxstud.io"
              className="underline tracking-wide font-barlow text-grayscale-300 text-sm"
            >
              info@sandboxstud.io
            </a>
          </div> */}
        </motion.div>

        <motion.div
          className="flex flex-col gap-5 lg:gap-10 w-full"
          variants={introItemVariants}
        >
          <div className="border-b border-white/20 pb-3">
            <p>
              Get a quote <br /> For new projects
            </p>
          </div>
          <ContactForm />
        </motion.div>
        <motion.div
          className="flex  flex-col mb-6  -mt-6"
          variants={introItemVariants}
        >
          <p className="font-light text-sm text-grayscale-200">
            Hate contact forms?
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:info@sandboxstud.io"
            className="underline tracking-wide font-barlow text-sm text-grayscale-200"
          >
            info@sandboxstud.io
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactView;
