
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-inplast-blue mb-8">Условия использования</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">1. Общие условия</h2>
              <p className="mb-4">
                Настоящие Условия использования регулируют использование веб-сайта BPL Engineering и услуг, 
                предоставляемых нашей компанией. Используя наш сайт, вы соглашаетесь с данными условиями.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">2. Описание услуг</h2>
              <p className="mb-4">
                BPL Engineering предоставляет инжиниринговые услуги, включая полный капитальный ремонт оборудования, 
                системы управления, установку и ввод в эксплуатацию, а также перемещение промышленного оборудования.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">3. Использование сайта</h2>
              <p className="mb-4">Вы обязуетесь:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Использовать сайт только в законных целях</li>
                <li>Не нарушать права интеллектуальной собственности</li>
                <li>Не передавать вредоносное программное обеспечение</li>
                <li>Предоставлять точную информацию при обращении к нам</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">4. Интеллектуальная собственность</h2>
              <p className="mb-4">
                Все материалы на данном сайте, включая тексты, изображения, логотипы и дизайн, являются 
                собственностью BPL Engineering и защищены авторским правом.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">5. Ограничение ответственности</h2>
              <p className="mb-4">
                BPL Engineering не несет ответственности за любые прямые, косвенные или случайные убытки, 
                возникающие в результате использования нашего сайта или услуг, кроме случаев, 
                предусмотренных применимым законодательством.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">6. Условия оказания услуг</h2>
              <p className="mb-4">
                Конкретные условия оказания инжиниринговых услуг определяются в отдельных договорах между 
                BPL Engineering и клиентом. Данные Условия использования не заменяют такие договоры.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">7. Изменения условий</h2>
              <p className="mb-4">
                Мы оставляем за собой право изменять данные Условия использования в любое время. 
                Изменения вступают в силу с момента их публикации на сайте.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">8. Применимое право</h2>
              <p className="mb-4">
                Данные Условия использования регулируются и толкуются в соответствии с законодательством 
                юрисдикции, в которой зарегистрирована BPL Engineering.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">9. Контактная информация</h2>
              <p className="mb-4">
                По вопросам, связанным с данными Условиями использования, обращайтесь к нам через 
                контактную форму на сайте или по указанным контактным данным.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
