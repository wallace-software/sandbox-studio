import {
  Dispatch,
  SetStateAction,
  FC,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  WelcomeSection,
  LetsWorkLink,
  BackgroundImage,
  AnimateWrapper,
} from "@components";
import Image from "next/image";
import { useViewStore } from "src/contexts";
import { useInView } from "framer-motion";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const yearsActive = 3;
const projectsCompleted = 12;

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useViewStore();

  const [showCounter, setCounter] = useState(false);
  const [showProjectsCounter, setShowProjectsCounter] = useState(false);

  const [yearsCount, setYearsCount] = useState<number>(0);
  const [projectsCount, setProjectsCount] = useState<number>(0);

  const teamRef = useRef<HTMLHRElement>(null);
  const darthRef = useRef<HTMLHRElement>(null);

  const teamInView = useInView(teamRef, {
    once: true,
  });
  const darthInView = useInView(darthRef, {
    once: true,
  });

  //years active counter
  useEffect(() => {
    const timer = setInterval(() => {
      if (showCounter && yearsCount < yearsActive) {
        setYearsCount((prevNumber) => prevNumber + 1);
      }
    }, 125);

    if (yearsCount === yearsActive) {
      clearInterval(timer);
      setShowProjectsCounter(true);
    }
    return () => {
      clearInterval(timer);
    };
  }, [projectsCount, showCounter, yearsCount]);

  //projects completed counter
  useEffect(() => {
    const timer = setInterval(() => {
      if (showProjectsCounter && projectsCount < projectsCompleted) {
        setProjectsCount((prevNumber) => prevNumber + 1);
      }
    }, 125);

    if (projectsCount === projectsCompleted) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [projectsCount, showProjectsCounter]);

  return (
    <div className="page-py-min relative w-full h-full items-center justify-center z-0">
      <BackgroundImage setAssets={setAssets} />

      <div className="relative z-10">
        <AnimateWrapper
          animate={showView}
          onAnimationComplete={() => setCounter(true)}
        >
          <WelcomeSection title1="About us." />

          <div className="left-margin mt-20 flex flex-col lg:flex-row justify-between max-w-[1220px]">
            <div className="font-medium">
              <p className="text-5xl mb-3">Our journey.</p>
              <p className="text-4xl md:text-5xl pb-10">
                Perfectionism freaks.
              </p>
            </div>

            <div className="lg:w-1/2 text-xl max-w-[608px]">
              <p>
                Founded in January 2023, Sandbox Studio emerged from the nearly
                decade-long partnership between Miguel Corzo and Wallace Palmer.
                Having spent over eight years working together, our
                collaborative journey began in diverse industries. Transitioning
                from SaaS engineers to trailblazers in the Web 3 space, we bring
                authentic expertise to the table.
              </p>
            </div>
          </div>

          <div className="left-margin mt-20 flex flex-row text-xl">
            <div>
              <p className="text-9xl font-light text-sand">{yearsCount}</p>
              <p>Years active</p>
            </div>

            <div className="ml-20">
              <p className="text-9xl font-light text-sand">{projectsCount}</p>
              <p>Projects completed</p>
            </div>
          </div>
        </AnimateWrapper>

        <hr className="border-white border-opacity-10 mt-32" />

        <AnimateWrapper animate={teamInView}>
          <div className="left-margin mt-20 text-5xl font-medium" ref={teamRef}>
            <p className="text-5xl text-custom-gray mb-3">Our team.</p>
            <p className="text-4xl md:text-5xl"> Chemistry personified.</p>

            <p className="text-xl lg:w-1/2 mt-10 font-normal">
              What sets us apart is not just our services but the passion and
              expertise each team member brings. We thrive on challenges, push
              creative boundaries, and are dedicated to delivering solutions
              that exceed expectations.
            </p>
          </div>
          <div className="left-margin mt-20 flex flex-col lg:flex-row gap-10">
            <a
              href="https://www.linkedin.com/in/miguel-andres-corzo/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/about/mig.jpeg`}
                alt="Miguel"
                width={500}
                height={500}
                className="rounded-md grayscale-image"
              />
            </a>

            <div className="flex flex-col justify-items-start lg:w-1/2 max-w-[608px] lg:ml-10">
              <p className="font-primary">Miguel Corzo (Otablem)</p>
              <p className="text-custom-gray">
                With a decade-long career, Miguel brings a wealth of experience
                to the table. As Sandbox Studio&apos;s project manager and
                founder, Miguel orchestrates seamless collaborations, and
                development cycles ensuring your vision comes to life with
                precision and creativity.
              </p>

              <p className="mt-5 font-primary">Web 2 Experience</p>
              <div className="text-custom-gray">
                <p>Account Support & Customer Service</p>
                <p>Technical Support</p>
                <p>Mobile Application Specialist</p>
                <p>Product Owner & Manager</p>
                <p>Software Sales</p>
              </div>

              <p className="mt-5 font-primary">Web 3 Experience</p>
              <div className="text-custom-gray">
                <p>Slimes Studio Project Manager</p>
                <p>Project Manager at DeGods & y00ts</p>
                <p>Project Manager at Hot Heads</p>
              </div>
            </div>
          </div>
        </AnimateWrapper>

        <AnimateWrapper animate={darthInView}>
          <div
            className="left-margin mt-10 flex flex-col-reverse lg:flex-row lg:items-end gap-10"
            ref={darthRef}
          >
            <div className="flex flex-col lg:w-1/2 max-w-[608px]">
              <p className="font-primary">Wallace Palmer (Darth)</p>
              <p className="text-custom-gray">
                As the lead developer, Wallace is the driving force behind the
                technical brilliance at Sandbox Studio. With over 10 years
                development experience in various industries he has evolved from
                SaaS web & mobile engineering to pioneering modern solutions.
              </p>

              <p className="mt-5 font-primary">Web 2 Experience</p>
              <div className="text-custom-gray">
                <p>Mobile Application Development Lead</p>
                <p>Full Stack Web Developer</p>
                <p>Technical Support</p>
              </div>

              <p className="mt-5 font-primary">Web 3 Experience</p>
              <div className="text-custom-gray">
                <p>Lead Developer at DeGods & y00ts</p>
                <p>Blockchain Freelancing</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/wallace-palmer-4b93473a/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/about/wmp-headshot.png`}
                alt="Wallace"
                width={500}
                height={500}
                className="rounded-md grayscale-image"
              />
            </a>
          </div>
        </AnimateWrapper>

        <hr className="border-white border-opacity-10 mt-20"></hr>

        <LetsWorkLink />
      </div>
    </div>
  );
};

export default AboutView;
