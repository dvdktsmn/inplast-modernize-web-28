
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCarousel from './projects/ProjectCarousel';
import { projectsData } from './projects/ProjectData';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-inplast-blue mb-4">Ключевые проекты компании: крупные кейсы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ознакомьтесь с нашими успешными проектами промышленной трансформации по всему миру
          </p>
        </div>

        <ProjectCarousel projects={projectsData} />
        
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline" className="text-inplast-blue border-inplast-blue hover:bg-inplast-blue/10">
              Узнать больше о наших проектах <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
