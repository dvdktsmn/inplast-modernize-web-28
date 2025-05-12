
import React from 'react';
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
  // Check if the project has a galleryImages array
  if (project.galleryImages) {
    return (
      <>
        <StandardGallery galleryImages={project.galleryImages} />
      </>
    );
  }

  // Fallback for other projects without gallery images
  return (
    <>
      <DefaultProjectView image={project.image} title={project.title} />
    </>
  );
};

export default ProjectContent;
