
import React, { useState, useEffect, useRef } from 'react';
import { FeaturedProject } from './ProjectsData';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, X, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface LargeProjectCardProps {
  project: FeaturedProject;
  reverseLayout?: boolean;
}

const LargeProjectCard = ({ project, reverseLayout = false }: LargeProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };
  
  // Effect to scroll to the initial slide when the lightbox opens
  useEffect(() => {
    if (carouselApi && lightboxOpen) {
      carouselApi.scrollTo(activeImageIndex);
    }
  }, [carouselApi, lightboxOpen, activeImageIndex]);

  // Function to render text with bullet points
  const renderTextWithBullets = (text: string) => {
    // Split by new lines and process each line
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    
    lines.forEach((line, index) => {
      if (line.trim().startsWith('•')) {
        // This is a bullet point
        elements.push(
          <li key={index} className="ml-4 text-gray-700">
            {line.replace('•', '').trim()}
          </li>
        );
      } else if (line.trim() === '') {
        // Empty line - add spacing
        elements.push(<br key={index} />);
      } else {
        // Regular text or heading
        if (line.match(/^\d+\./)) {
          // This looks like a numbered heading
          elements.push(
            <h5 key={index} className="text-lg font-semibold text-inplast-blue mt-4 mb-2">
              {line}
            </h5>
          );
        } else {
          elements.push(
            <p key={index} className="text-gray-700 mb-2">
              {line}
            </p>
          );
        }
      }
    });
    
    return elements;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Preview card - always visible */}
      <div className={`${reverseLayout ? 'md:flex-row-reverse' : ''} md:flex`}>
        {/* Image Carousel - 50% width on desktop, full width on mobile */}
        <div className="md:w-1/2">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 md:h-96 w-full">
                    <AspectRatio ratio={16 / 9} className="h-full">
                      <img 
                        src={image} 
                        alt={`${project.title} - изображение ${index + 1}`}
                        className="rounded-t-xl md:rounded-t-none md:rounded-l-xl object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        {/* Project details - 50% width on desktop, full width on mobile */}
        <div className="p-6 md:p-8 md:w-1/2">
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-inplast-blue">{project.title}</h3>
          </div>
          
          <div className="flex items-center mb-6">
            <span className="text-gray-600 font-medium">{project.location}</span>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
        </div>
      </div>

      {/* Read More Button - full width */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-center">
        <Button 
          variant="outline" 
          onClick={toggleExpand} 
          className="w-full max-w-xs text-inplast-blue border-inplast-blue hover:bg-inplast-blue/10"
        >
          {isExpanded ? (
            <>
              Читать меньше <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Читать больше <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className={`border-t border-gray-100 ${reverseLayout ? 'md:flex-row-reverse' : ''} md:flex`}>
          {/* Two-column Image Gallery - follows same side as the carousel above */}
          <div className="md:w-1/2 p-6">
            <h4 className="text-xl font-semibold text-inplast-blue mb-4">Галерея проекта</h4>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div 
                  key={`gallery-${index}`} 
                  className="cursor-pointer rounded-lg overflow-hidden transition-transform hover:scale-105"
                  onClick={() => openLightbox(index)}
                >
                  <AspectRatio ratio={3 / 2}>
                    <img 
                      src={image} 
                      alt={`${project.title} - детали ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>
          
          {/* Expanded Text Content - follows same side as the text above */}
          <div className="md:w-1/2 p-6">
            <div className="space-y-6">
              {project.id === "bopp-line-relocation" ? (
                // Russian content for BOPP line relocation project
                <>
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Первоначальная оценка состояния</h4>
                    <p className="text-gray-700">
                      Проект начался с детальной технической инспекции линии BOPP на её первоначальном месте. 
                      Команда оценила состояние экструдеров, охлаждающих валков, Т-штампов, рамочных растяжных машин, перематывающих устройств 
                      и связанных вспомогательных систем. Ключевые компоненты были проверены на механическую целостность и износ. 
                      Эта оценка легла в основу стратегии демонтажа и плана восстановления, обеспечивая безопасную транспортировку 
                      оборудования и эффективную переустановку.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Демонтаж и логистика транспортировки</h4>
                    <p className="text-gray-700">
                      После оценки команда провела структурированный процесс демонтажа. Более 1200 механических, 
                      электрических компонентов и компонентов систем управления были аккуратно демонтированы, маркированы и упакованы. Особое внимание 
                      было уделено критически важным деталям, таким как узлы растяжения пленки и прецизионные валки. Этап транспортировки включал 
                      значительное логистическое планирование из-за размера оборудования. Команда управляла безопасной транспортировкой компонентов морским 
                      фрахтом и автомобильным транспортом, координируя работу с таможенными и регулирующими органами для минимизации задержек. 
                      Все методы упаковки и крепления соответствовали международным стандартам для предотвращения повреждений при транспортировке.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Ремонт, восстановление и модернизация на новом объекте</h4>
                    <p className="text-gray-700">
                      По прибытии на новое предприятие команда выполнила запланированное восстановление. Изношенные и устаревшие компоненты 
                      были заменены, и механические выравнивания были восстановлены. Электрические системы и системы безопасности были приведены в соответствие с 
                      современными стандартами. Энергосберегающие улучшения и современные технологии автоматизации были 
                      интегрированы для повышения эффективности и надежности линии.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Сборка и модернизация программного обеспечения</h4>
                    <p className="text-gray-700">
                      Линия была собрана командой с точностью для восстановления полной функциональности. Инженеры полностью заменили
                      электрические системы и системы управления и установили обновленные системы PLC и SCADA, добавив новую диагностику, улучшенное управление процессами и современные 
                      интерфейсы оператора. Эти модернизации предоставили клиенту лучшие возможности мониторинга и управления 
                      для будущего производства.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Ввод в эксплуатацию и оптимизация производительности</h4>
                    <p className="text-gray-700">
                      Этап ввода в эксплуатацию включал систематический подход к тестированию каждого компонента и системы. Первоначальные запуски были 
                      проведены для проверки точности толщины пленки, прочности материала и постоянства качества. Команда тесно работала 
                      с клиентом для выполнения точных корректировок для обеспечения соответствия линии международным производственным стандартам для продукции BOPP пленки.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Обучение и передача знаний</h4>
                    <p className="text-gray-700">
                      Заключительный этап включал обучение операционного и технического персонала клиента. Команда предоставила инструкции
                      и практическое обучение на оборудовании. Темы включали безопасную эксплуатацию, 
                      рутинное техническое обслуживание, устранение неполадок и оптимизацию системы. Это обеспечило полную готовность персонала клиента 
                      к независимой и безопасной эксплуатации линии.
                    </p>
                  </section>
                </>
              ) : project.id === "factory-modernization" ? (
                // Factory Modernization project with orange arrow bullet points - Russian translation
                <div className="space-y-6">
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">1. Модернизация системы дозирования</h4>
                    <p className="text-gray-700 mb-2">Секция дозирования была улучшена с:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Новой системой автоматизации Siemens STEP 7</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Установкой новых силовых кабелей и системы сушки</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Заменой электрических шкафов</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Интеграцией новых тензометрических датчиков для повышения точности измерений</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">2. Восстановление системы экструзии</h4>
                    <p className="text-gray-700 mb-2">Две фазы модернизации экструзии включали:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Новые нагреватели и систему охлаждения</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Установку новых управляющих клапанов и муфт</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Капитальный ремонт двигателей</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Улучшенное управление нагревом через силовые модули Siemens и температурные контроллеры Meusburger</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Замену кабелей и термопар</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">3. Восстановление охлаждающего валка</h4>
                    <p className="text-gray-700 mb-2">Узел охлаждающего валка был полностью восстановлен с:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Новыми системами управления и трубопроводами</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Регулирующими клапанами расхода и полированными поверхностями валков</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Новыми теплообменниками для эффективного теплового управления</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">4. Капитальный ремонт MDO (машинное ориентирование)</h4>
                    <p className="text-gray-700 mb-2">Полный капитальный ремонт MDO включал:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Замену подшипников, ремней и валков</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Установку передовых систем температурного контроля и пневматики</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">5. Обслуживание TDO (поперечное ориентирование)</h4>
                    <p className="text-gray-700 mb-2">TDO прошел полное обслуживание с:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Капитальным ремонтом цепной гусеницы</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Новыми силовыми и управляющими кабелями</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Заменой термопар и капитальным ремонтом вентиляторных двигателей и редукторов</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Установкой новых электрических шкафов и систем управления Siemens</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Новыми приводами вентиляторных двигателей</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">6. Капитальный ремонт системы PRS</h4>
                    <p className="text-gray-700 mb-2">Улучшения системы PRS включали:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Восстановленные валки и новые подшипники</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Модернизированную коронную обработку (2 нижние, 1 верхняя корона)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Восстановленные генераторы и новые трансформаторы</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Установку новых электродов и пневматики</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Внедрение инфракрасной системы автоматического контроля толщины NDC</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">7. Восстановление намотчика</h4>
                    <p className="text-gray-700 mb-2">Оба намоточных устройства были полностью восстановлены:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Новыми системами управления Siemens STEP 7</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Установкой новых электрических шкафов</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">8. Модернизация первичного резчика ATLAS</h4>
                    <p className="text-gray-700 mb-2">Первичный резчик ATLAS был тщательно восстановлен и модернизирован с:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Новыми подшипниками и позиционными двигателями</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Новыми электрическими шкафами, пневматикой и гидравлическими системами управления</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Обновленными кабелями и системой управления Siemens STEP 7</span>
                      </li>
                    </ul>
                  </section>
                </div>
              ) : (
                // Default fallback for other projects
                project.expandedContent && (
                  <div className="space-y-6">
                    {Object.entries(project.expandedContent).map(([key, value], index) => (
                      <section key={index}>
                        <h4 className="text-xl font-semibold text-inplast-blue mb-2 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <div>{renderTextWithBullets(value || '')}</div>
                      </section>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Full-screen Image Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] max-h-[95vh] h-[95vh] p-0 bg-white border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 border-gray-300 text-gray-700"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Carousel className="w-full h-full" setApi={setCarouselApi} opts={{ loop: true }}>
              <CarouselContent className="h-full">
                {project.images.map((image, index) => (
                  <CarouselItem key={`lightbox-${index}`} className="h-full flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img 
                        src={image} 
                        alt={`${project.title} - крупный вид ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white hover:bg-gray-100 border-gray-300 text-gray-700" />
              <CarouselNext className="right-4 bg-white hover:bg-gray-100 border-gray-300 text-gray-700" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LargeProjectCard;
