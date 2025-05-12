
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
  // Combine beforeImages and afterImages into a single gallery array if they exist
  if ((index === 0) && (project.beforeImages || project.afterImages)) {
    // Create a combined array of images from beforeImages and afterImages
    const combinedImages = [
      ...(project.beforeImages || []), 
      ...(project.afterImages || [])
    ];
    
    return (
      <>
        <StandardGallery galleryImages={combinedImages} />
      </>
    );
  } else if (index === 1 && project.galleryImages) {
    return (
      <>
        <StandardGallery galleryImages={project.galleryImages} />
      </>
    );
  }

  // Default for other projects
  return (
    <>
      <DefaultProjectView image={project.image} title={project.title} />
    </>
  );
};

export default ProjectContent;
