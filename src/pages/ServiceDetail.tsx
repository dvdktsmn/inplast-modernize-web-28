
import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serviceDetails } from '../components/services/ServiceData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCarousel from '../components/services/ServiceCarousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  
  // Find the service details based on the ID from the URL
  const serviceDetail = serviceDetails.find(service => service.id === serviceId);
  
  // If service not found, redirect to home page
  useEffect(() => {
    if (!serviceDetail) {
      navigate('/');
    }
  }, [serviceDetail, navigate]);

  // Auto scrolling effect with inactivity detection
  useEffect(() => {
    const startAutoScroll = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = window.setTimeout(() => {
        if (carouselRef.current) {
          const scrollableArea = carouselRef.current.querySelector('.embla__container');
          const emblaApi = (carouselRef.current as any).__emblaApi;
          
          if (emblaApi && typeof emblaApi.scrollNext === 'function') {
            emblaApi.scrollNext();
          }
        }
        startAutoScroll();
      }, 7000);
    };

    startAutoScroll();

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [serviceId]);
  
  if (!serviceDetail) {
    return null; // This will be handled by the useEffect redirect
  }

  const renderServiceContent = () => {
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Services Include:</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceDetail.process.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-inplast-teal mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Added pt-16 to account for the fixed navbar height and some extra space */}
      <main className="flex-grow bg-gray-50 py-12 pt-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative">
              <div className="max-w-5xl mx-auto p-6 lg:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-inplast-teal mb-4">
                  {serviceDetail.title}
                </h1>
                
                <div className="mb-10" ref={carouselRef}>
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
