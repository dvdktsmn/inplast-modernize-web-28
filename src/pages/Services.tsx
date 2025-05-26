
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import ServiceCarousel from '../components/services/ServiceCarousel';

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: "overhaul",
      title: "Восстановление и модернизация оборудования",
      description: "Восстановите и модернизируйте Ваши активы. Мы выполняем капитальный ремонт и модернизацию оборудования для увеличения его долговечности, энергетической и операционной эффективности, приводя устаревшие системы в соответствие с современными стандартами.",
      images: [
        "/lovable-uploads/2585e457-92bb-4935-988a-2ba961e8fe45.png",
        "/lovable-uploads/ab933664-5aaf-4814-9d9d-4e20cb1782b8.png",
        "/lovable-uploads/0f867536-23a9-44c5-b5ff-0ffee7b38a17.png"
      ]
    },
    {
      id: "engineering",
      title: "Инжиниринг и модернизация систем управления",
      description: "От проектирования до внедрения, наши решения электротехнического инжиниринга и реализации систем автоматического управления поддерживают безопасное, интеллектуальное и масштабируемое управление Вашей производственной средой, повышая эффективность и сокращая потери.",
      images: [
        "/lovable-uploads/1dc4c4dc-881f-465a-b970-fd69ac5845e2.png",
        "/lovable-uploads/99933b14-caab-4d71-8acb-e9670b38d1cf.png",
        "/lovable-uploads/2d246b46-3ba2-4cdb-bca5-1e159a6ec659.png",
        "/lovable-uploads/ce79528d-6a07-4b95-a327-f26d29ae5163.png"
      ]
    },
    {
      id: "installation",
      title: "Монтаж и ввод в эксплуатацию",
      description: "Обеспечьте безупречную работу с первого дня. Наши эксперты управляют процессом установки и ввода в эксплуатацию от начала проекта и до ввода в эксплуатацию, предлагая как локальную техническую и технологическую поддержку, так и международный опыт с возможностью удалённой поддержки.",
      images: [
        "/lovable-uploads/8527f32f-6f15-4f6b-9bb2-baec7fd5b497.png",
        "/lovable-uploads/2cbd6041-5819-4f3c-afe9-162b2080c7b7.png",
        "/lovable-uploads/e41d37fe-a111-4f09-9d3f-81b90123a72a.png",
        "/lovable-uploads/50beace4-a86d-4334-ac2b-c04ba9b9b231.png",
        "/lovable-uploads/d23db893-c5a3-4dc1-8eba-2a6ce3c7ceba.png"
      ]
    },
    {
      id: "relocation",
      title: "Перемещение оборудования",
      description: "Мы специализируемся на безопасном и эффективном демонтаже, перемещении и сборке промышленного оборудования, включая комплексные производственные линии. Наш глобальный проектный опыт обеспечивает безопасную доставку ваших активов в новое место.",
      images: [
        "/lovable-uploads/d2d69cd4-0766-4486-9a80-b60fc87beae6.png",
        "/lovable-uploads/d27b654c-f8b6-42c5-8da0-f6b4f1162ccb.png",
        "/lovable-uploads/37477ea0-fd08-4236-a799-d4edb282d744.png",
        "/lovable-uploads/af4043e2-9028-40ad-a179-44747b766517.png",
        "/lovable-uploads/600c531c-712d-49aa-82cc-ca5fba294e27.png",
        "/lovable-uploads/6ac5fc62-9f37-48a2-b672-80f564889cc5.png",
        "/lovable-uploads/4f8a911d-51d1-44fc-a9d3-b22163157dbf.png"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20 pt-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предоставляем полный спектр промышленных услуг от капитального ремонта и замены устаревших деталей оборудования с его модернизацией до установки комплексных производственных линий и реализации проектов "под ключ".
           </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceCategories.map((category) => (
              <div key={category.id} className="flex flex-col h-full">
                <div className="mb-6">
                  <ServiceCarousel images={category.images} />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <Link to={`/services/${category.id}`}>
                    <h3 className="text-2xl font-bold text-inplast-blue hover:underline transition-all mb-4">
                      {category.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="mt-auto">
                    <Link to={`/services/${category.id}`}>
                      <Button variant="outline" className="text-inplast-blue border-inplast-blue hover:bg-inplast-blue/10">
                        Узнать больше <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
