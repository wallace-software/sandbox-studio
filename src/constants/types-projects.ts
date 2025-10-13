// Data structures for project sections
export interface CallToAction {
  text: string;
  link: string;
}
export interface ProjectSection {
  header: string;
  subheader: string;
  videoId?: string;
  assets?: string[];
  cta?: CallToAction;
}
export interface ProjectItemData {
  id: string;
  name: string;
  intro: ProjectSection;
  gallery: ProjectSection;
  details: ProjectSection;
  finale: ProjectSection;
}