
import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">          
          <div className="w-full">
            <div className="flex items-center mb-6 justify-center">
              <h2 className="text-3xl font-bold text-inplast-blue">О нас</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Компания БПЛ ИНЖИНИРИНГ предоставляет полный цикл услуг, направленных на оптимизацию и увеличение эффективности работы промышленного производства.
От модернизации единичных узлов и агрегатов и обновления систем автоматизации до ремонта и модернизации полноценных производственных линий. Мы решаем задачи эффективной эксплуатации производства на всех этапах жизненного цикла, обеспечивая соответствие производственных систем современным требованиям и вызовам настоящего времени.
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
                  <span>демонтаж, логистику, монтаж и ввод в эксплуатацию оборудования;</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>обучение персонала;</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>реализацию систем мониторинга производственных процессов и технологической и энергетической эффективности.</span>
                </li>
              </ul>
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Чтобы помочь вам продлить срок службы и повысить продуктивность существующих активов, мы предоставляем услуги полной модернизации и капитального ремонта оборудования, включая последующую валидацию производительности и эффективности.
            </p>
            <p className="text-lg text-gray-600">
              Индивидуальные инженерные решения БПЛ ИНЖИНИРИНГ, минимизируют простои оборудования и максимизируют эффективность процессов, обеспечивая соответствие производственных возможностей требованиям передовых предприятий.
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
