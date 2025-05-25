
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-inplast-blue mb-8">Политика конфиденциальности</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">1. Общие положения</h2>
              <p className="mb-4">
                BPL Engineering ("мы", "наша компания") уважает вашу конфиденциальность и стремится защитить персональные данные, 
                которые вы нам предоставляете. Данная Политика конфиденциальности описывает, как мы собираем, используем и 
                защищаем вашу персональную информацию.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">2. Сбор информации</h2>
              <p className="mb-4">Мы можем собирать следующую информацию:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Имя и контактная информация</li>
                <li>Информация о компании</li>
                <li>Технические данные о посещении сайта</li>
                <li>Переписка с нашей компанией</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">3. Использование информации</h2>
              <p className="mb-4">Мы используем собранную информацию для:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Предоставления наших услуг</li>
                <li>Улучшения качества обслуживания</li>
                <li>Связи с клиентами</li>
                <li>Соблюдения правовых требований</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">4. Защита данных</h2>
              <p className="mb-4">
                Мы принимаем соответствующие технические и организационные меры для защиты ваших персональных данных 
                от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">5. Передача третьим лицам</h2>
              <p className="mb-4">
                Мы не продаем, не обмениваем и не передаем персональные данные третьим лицам без вашего согласия, 
                за исключением случаев, предусмотренных законодательством.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">6. Ваши права</h2>
              <p className="mb-4">У вас есть право:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Запросить доступ к вашим персональным данным</li>
                <li>Запросить исправление неточных данных</li>
                <li>Запросить удаление ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">7. Контактная информация</h2>
              <p className="mb-4">
                Если у вас есть вопросы по данной Политике конфиденциальности, обращайтесь к нам по электронной почте 
                или через форму обратной связи на нашем сайте.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
