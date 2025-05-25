
import React from 'react';

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
              Мы предоставляем полный комплекс промышленных решений, направленных на оптимизацию и подготовку вашего производства к будущему. От модернизации единичного оборудования и обновления систем управления до проектов "под ключ" и сборки полноценных производственных линий — мы являемся вашим надежным партнером для эффективного выполнения всех этапов жизненного цикла производства.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Наши услуги включают индивидуальное электрическое и механическое проектирование, интеграцию современных систем управления и автоматизации, прецизионное управление движением, демонтаж и повторную сборку оборудования, логистику транспортировки и мониторинг энергоэффективности. Мы также предоставляем полную модернизацию и капитальный ремонт оборудования, включая модификацию и валидацию производительности, чтобы помочь вам продлить срок службы и повысить продуктивность существующих активов.
            </p>

            <p className="text-lg text-gray-600">
              Мы поставляем индивидуальные инженерные решения, которые минимизируют простои, максимизируют производительность и обеспечивают соответствие ваших операций требованиям современных производственных сред.
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
