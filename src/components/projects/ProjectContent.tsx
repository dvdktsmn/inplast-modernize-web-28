
import React from 'react';
import { Link } from 'react-router-dom';
import BeforeAfterGallery from './BeforeAfterGallery';
import StandardGallery from './StandardGallery';
import DefaultProjectView from './DefaultProjectView';

interface Project {
  title: string;
  location: string;
  image: string;
  description: string;
  beforeImages?: string[];
  afterImages?: string[];
  galleryImages?: string[];
}

interface ProjectContentProps {
  project: Project;
  index: number;
}

const ProjectContent = ({ project, index }: ProjectContentProps) => {
  if (index === 0 && project.beforeImages && project.afterImages) {
    return (
      <>
        <Link to="/projects" className="inline-block">
          <h3 className="text-2xl font-bold text-inplast-teal mb-1 hover:underline">
            {project.title}
          </h3>
        </Link>
        <BeforeAfterGallery beforeImages={project.beforeImages} afterImages={project.afterImages} />
      </>
    );
  } else if (index === 1 && project.galleryImages) {
    return (
      <>
        <Link to="/projects" className="inline-block">
          <h3 className="text-2xl font-bold text-inplast-teal mb-1 hover:underline">
            {project.title}
          </h3>
        </Link>
        <StandardGallery galleryImages={project.galleryImages} />
      </>
    );
  }

  // Default for other projects
  return (
    <>
      <Link to="/projects" className="inline-block">
        <h3 className="text-2xl font-bold text-inplast-teal mb-1 hover:underline">
          {project.title}
        </h3>
      </Link>
      <DefaultProjectView image={project.image} title={project.title} />
    </>
  );
};

export default ProjectContent;
