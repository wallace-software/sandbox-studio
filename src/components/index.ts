import dynamic from "next/dynamic";

//icons
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const RightArrowIcon = dynamic(() => import("./@icons/RightArrowIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const TwoLinesIcon = dynamic(() => import("./@icons/TwoLinesIcon"));
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TensorIcon = dynamic(() => import("./@icons/TensorIcon"));
const ExchangeArtIcon = dynamic(() => import("./@icons/ExchangeArtIcon"));
const ArrowButtonIcon = dynamic(() => import("./@icons/ArrowButtonIcon"));
const ContactIcon = dynamic(() => import("./@icons/ContactIcon"));
const LinkedinIcon = dynamic(() => import("./@icons/LinkedinIcon"));
//atoms
const Button = dynamic(() => import("./atoms/Button"));
const AnimateWrapper = dynamic(() => import("./atoms/AnimateWrapper"));
const Logo = dynamic(() => import("./atoms/Logo"));
const Reveal = dynamic(() => import("./atoms/Reveal"));
const Stagger = dynamic(() => import("./atoms/Stagger"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const ServiceListItem = dynamic(() => import("./molecules/ServiceListItem"));
const ProductListItem = dynamic(() => import("./molecules/ProductListItem"));
const LetsWorkLink = dynamic(() => import("./molecules/LetsWorkLink"));
const BackgroundImage = dynamic(() => import("./molecules/BackgroundImage"));
const Dropdown = dynamic(() => import("./molecules/Dropdown"));
const HeroVideo = dynamic(() => import("./molecules/HeroVideo"), { ssr: false });
const CloudflareVideoPlayer = dynamic(() => import("./molecules/CloudflareVideoPlayer"));
const NavigationItem = dynamic(() => import("./molecules/NavigationItem"));
const ContactWidget = dynamic(() => import("./molecules/ContactWidget"));
const ContactWidgetForm = dynamic(() => import("./molecules/ContactWidgetForm"));
const ProjectItemFrame = dynamic(() => import("./molecules/ProjectItemFrame"));
//organisms
const SplashScreen = dynamic(() => import("./organisms/SplashScreen"));
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const WelcomeSection = dynamic(() => import("./organisms/WelcomeSection"));
const ProjectItem = dynamic(() => import("./organisms/ProjectItem"));
const ContactForm = dynamic(() => import("./organisms/ContactForm"));
const Testimonials = dynamic(() => import("./organisms/Testimonials"));
const ProductList = dynamic(() => import("./organisms/ProductList"));
const About = dynamic(() => import("./organisms/About"));
const NavigationMenu = dynamic(() => import("./organisms/NavigationMenu"));
const HeroSection = dynamic(() => import("./organisms/HeroSection"));
const TestimonialsItem = dynamic(() => import("./organisms/TestimonialsItem"));
const ProjectGallery = dynamic(() => import("./organisms/ProjectGallery"));
const Gallery = dynamic(() => import("./organisms/Gallery"));
const GalleryItem = dynamic(() => import("./organisms/GalleryItem"));
const TeamMemberCard = dynamic(() => import("./organisms/TeamMemberCard"));
const ProjectItemIntro = dynamic(() => import("./organisms/ProjectItemIntro"));
const ProjectItemGallery = dynamic(() => import("./organisms/ProjectItemGallery"));
const ProjectItemDetails = dynamic(() => import("./organisms/ProjectItemDetails"));
const ProjectItemFinale = dynamic(() => import("./organisms/ProjectItemFinale"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));
const ContactView = dynamic(() => import("./templates/ContactView"));
const ServicesView = dynamic(() => import("./templates/ServicesView"));
const ProjectsView = dynamic(() => import("./templates/ProjectsView"));
const ProjectItemView = dynamic(() => import("./templates/ProjectItemView"));

//old
const MobileNavigation = dynamic(() => import("./x-old/MobileNavigation"));
const Navigation = dynamic(() => import("./x-old/Navigation"));
const CardCarousel = dynamic(() => import("./x-old/CardCarousel"));
const CarouselSlider = dynamic(() => import("./x-old/CarouselSlider"));
const LandingScreen = dynamic(() => import("./x-old/LandingScreen"));


export {
  PageHead,
  Header,
  Footer,
  Button,
  Navigation,
  PageLayout,
  SplashScreen,
  LandingView,
  AboutView,
  ContactView,
  ServicesView,
  ProjectsView,
  TwitterIcon,
  WelcomeSection,
  ProjectItem,
  ServiceListItem,
  ProductListItem,
  ContactForm,
  CardCarousel,
  LetsWorkLink,
  BackgroundImage,
  MenuIcon,
  CloseIcon,
  ExpIcon,
  Testimonials,
  ProductList,
  About,
  RightArrowIcon,
  AnimateWrapper,
  MobileNavigation,
  TwoLinesIcon,
  Dropdown,
  ArrowIcon,
  NavigationMenu,
  CarouselSlider,
  LandingScreen,
  Logo,
  HeroVideo,
  TestimonialsItem,
  TensorIcon,
  ExchangeArtIcon,
  ProjectGallery,
  ArrowButtonIcon,
  Gallery,
  GalleryItem,
  CloudflareVideoPlayer,
  NavigationItem,
  HeroSection,
  ContactIcon,
  ContactWidget,
  ContactWidgetForm,
  TeamMemberCard,
  LinkedinIcon,
  ProjectItemView,
  ProjectItemFrame,
  ProjectItemIntro,
  ProjectItemGallery,
  ProjectItemDetails,
  ProjectItemFinale,
  Reveal,
  Stagger
};
