export interface IProject {
  id: string;
  title: string;
  src: string | null;
  description: string;
  technologies: string[];
  content: string;
}