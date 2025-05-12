
import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/projects" className="inline-block">
          <h3 className="text-2xl font-bold text-inplast-teal mb-1 hover:underline">
            {project.title}
          </h3>
        </Link>
        <StandardGallery galleryImages={combinedImages} />
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
