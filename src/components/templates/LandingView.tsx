import { Dispatch, SetStateAction, FC, useRef } from "react";
import {
  LetsWorkLink,
  BackgroundImage,
  Testimonials,
  ProductList,
  About,
  ProjectGallery,
  HeroSection,
} from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="relative w-full h-full">
      <BackgroundImage setAssets={setAssets} fixed={false} />
      <HeroSection />
      <ProductList />
      <ProjectGallery />
      <About />
      <Testimonials />

      <LetsWorkLink />
    </div>
  );
};

export default LandingView;
