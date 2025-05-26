
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inplast-blue py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-bold text-2xl mb-4">
              BPL Engineering
            </div>
            <p className="text-white mb-4">
              Комплексные промышленные решения для модернизации, перемещения и ввода в эксплуатацию оборудования
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-inplast-orange transition-colors">Главная</Link></li>
              <li><Link to="/products" className="text-white hover:text-inplast-orange transition-colors">Оборудование</Link></li>
              <li><Link to="/services" className="text-white hover:text-inplast-orange transition-colors">Услуги</Link></li>
              <li><Link to="/projects" className="text-white hover:text-inplast-orange transition-colors">Проекты</Link></li>
              <li><Link to="/contact" className="text-white hover:text-inplast-orange transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/services/overhaul" className="text-white hover:text-inplast-orange transition-colors">Восстановление и модернизация оборудования</Link></li>
              <li><Link to="/services/engineering" className="text-white hover:text-inplast-orange transition-colors">Инжиниринг и системы управления</Link></li>
              <li><Link to="/services/installation" className="text-white hover:text-inplast-orange transition-colors">Монтаж и ввод в эксплуатацию</Link></li>
              <li><Link to="/services/relocation" className="text-white hover:text-inplast-orange transition-colors">Перемещение оборудования</Link></li>
            </ul>
          </div>
          
          
        </div>
        
        {/* Legal Section */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
            <p className="mb-4 md:mb-0">
              © {currentYear} BPL Engineering. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-inplast-orange transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms-of-service" className="hover:text-inplast-orange transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
