export interface Project {
  title: string;
  description?: string;
  date?: Date | string;
  website?: string;
  github?: string;
  filefigma?: string;
  preview?: string;
  prototype?: string;
  tags?: { label: string }[];
  // thumbnail: string;
}
