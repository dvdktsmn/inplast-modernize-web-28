
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serviceDetails } from '../components/services/ServiceData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCarousel from '../components/services/ServiceCarousel';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  // Find the service details based on the ID from the URL
  const serviceDetail = serviceDetails.find(service => service.id === serviceId);
  
  // If service not found, redirect to home page
  useEffect(() => {
    if (!serviceDetail) {
      navigate('/');
    }
  }, [serviceDetail, navigate]);
  
  if (!serviceDetail) {
    return null; // This will be handled by the useEffect redirect
  }

  const renderServiceContent = () => {
    // Special layout for engineering service page
    if (serviceId === 'engineering') {
      return (
        <>
          <div className="space-y-8">
            <div>
              {serviceDetail.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our services include:</h2>
              <ul className="list-disc pl-5 space-y-2">
                {serviceDetail.process.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-semibold">{item.title}</span> - {item.description}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6">
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-inplast-teal hover:bg-inplast-teal/90"
              >
                Request a Consultation
              </Button>
            </div>
          </div>
        </>
      );
    }
    
    // Special layout for relocation service page
    if (serviceId === 'relocation') {
      return (
        <>
          <div className="space-y-8">
            <div>
              {serviceDetail.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our services include:</h2>
              <ul className="list-disc pl-5 space-y-2">
                {serviceDetail.process.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-semibold">{item.title}</span> - {item.description}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6">
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-inplast-teal hover:bg-inplast-teal/90"
              >
                Request a Consultation
              </Button>
            </div>
          </div>
        </>
      );
    }
    
    // Default layout for other service pages
    return (
      <>
        <div className="space-y-8">
          <div>
            {serviceDetail.fullDescription.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits</h2>
            <ul className="list-disc pl-5 space-y-2">
              {serviceDetail.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Process</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceDetail.process.map((step, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-inplast-darkgray mb-2">{index + 1}. {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-6">
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-inplast-teal hover:bg-inplast-teal/90"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/#services')} 
            className="mb-6"
          >
            <ArrowLeft className="mr-2" size={16} /> Back to Services
          </Button>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative">
              <div className="max-w-5xl mx-auto p-6 lg:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-inplast-teal mb-4">
                  {serviceDetail.title}
                </h1>
                
                <div className="mb-10">
                  <ServiceCarousel images={serviceDetail.images} />
                </div>
                
                {renderServiceContent()}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
