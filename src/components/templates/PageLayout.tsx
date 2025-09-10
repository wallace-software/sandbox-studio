import { FC, ReactNode, useRef } from "react";
import {
  PageHead,
  Footer,
  SplashScreen,
  Navigation,
  MobileNavigation,
  Header,
  ContactWidget,
} from "@components";
import { enterAnimation } from "@constants";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  footer?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  headerType?: string;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = true,
    fixed = false,
    absolute = false,
    headerType = "scroll",
    children,
    assets = [],
  } = props;

  return (
    <div
      className={`flex flex-col min-h-[100svh] h-full justify-between overflow-none overflow-x-clip  ${
        fixed ? "fixed inset-0" : absolute ? "absolute inset-0" : "relative"
      }`}
    >
      <PageHead
        title="Sandbox | Design & Development Studio"
        description="Providing cutting-edge web design and development solutions"
        url="https://sandboxstud.io/"
        twitter="sandbox_studio_"
      />
      <main className="flex flex-col h-full w-full overflow-y-auto">
        {children}
      </main>
      <ContactWidget />
      {footer && <Footer />}
      {assets && <SplashScreen assets={assets} />}
    </div>
  );
};
export default PageLayout;
