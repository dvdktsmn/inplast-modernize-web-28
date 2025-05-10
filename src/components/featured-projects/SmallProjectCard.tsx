
import React from 'react';
import { FeaturedProject } from './ProjectsData';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface SmallProjectCardProps {
  project: FeaturedProject;
}

const SmallProjectCard = ({ project }: SmallProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        
        {project.images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
            +{project.images.length - 1} photos
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-inplast-teal">{project.title}</CardTitle>
        </div>
        <p className="text-sm text-gray-500 mt-1">{project.location}</p>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.tags?.slice(0, 2).map(tag => (
              <Badge key={tag} variant="outline" className="bg-gray-50 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          {project.completionDate && (
            <span className="text-xs text-gray-500">Completed: {project.completionDate}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SmallProjectCard;
