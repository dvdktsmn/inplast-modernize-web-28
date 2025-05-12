
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
    return <BeforeAfterGallery beforeImages={project.beforeImages} afterImages={project.afterImages} />;
  } else if (index === 1 && project.galleryImages) {
    return <StandardGallery galleryImages={project.galleryImages} />;
  }

  // Default for other projects
  return <DefaultProjectView image={project.image} title={project.title} />;
};

export default ProjectContent;
