
import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">          
          <div className="w-full">
            <div className="flex items-center mb-6 justify-center">
              <h2 className="text-3xl font-bold text-inplast-blue">Наша миссия</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Мы предоставляем полный комплекс промышленных решений, направленных на оптимизацию Вашего производства и обеспечение соответствия современным требованиям и вызовам. От модернизации единичного оборудования или обновления систем автоматизации до проектов "под ключ" и сборки полноценных производственных линий — мы являемся надежным партнером для эффективной эксплуатации Вашего производства на всех этапах жизненного цикла.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Наши услуги включают:
              <ul className="space-y-2 mt-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>индивидуальное проектирование электрических и механических систем и оборудования;</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>интеграцию современных систем управления и автоматизации;</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>реализацию систем прецизионного управления движением;</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>демонтаж, логистику и повторную сборку оборудования;</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>реализацию систем мониторинга технологической и энергетической эффективности.</span>
                </li>
              </ul>
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Мы также предоставляем услуги по полной модернизации и капитальному ремонту оборудования, включая последующую валидацию производительности и эффективности, чтобы помочь вам продлить срок службы и повысить продуктивность существующих активов.
            </p>
            <p className="text-lg text-gray-600">
              Мы поставляем индивидуальные инженерные решения, которые минимизируют простои, максимизируют производительность/эффективность и обеспечивают соответствие Ваших производственных возможностей к требованиям современных и передовых производств.
</p>
            
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
                <span className="text-3xl font-bold text-inplast-blue mb-2">25+</span>
                <span className="text-gray-600 text-center">Лет опыта</span>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
                <span className="text-3xl font-bold text-inplast-blue mb-2">50+</span>
                <span className="text-gray-600 text-center">Завершенных проектов</span>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
                <span className="text-3xl font-bold text-inplast-blue mb-2">24/7</span>
                <span className="text-gray-600 text-center">Глобальная поддержка</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
