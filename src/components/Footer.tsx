
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
              Инновации, инжиниринг, превосходство в промышленных решениях для модернизации, перемещения и ввода в эксплуатацию оборудования
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-inplast-orange transition-colors">Главная</Link></li>
              <li><Link to="/products" className="text-white hover:text-inplast-orange transition-colors">Продукция</Link></li>
              <li><Link to="/services" className="text-white hover:text-inplast-orange transition-colors">Услуги</Link></li>
              <li><Link to="/projects" className="text-white hover:text-inplast-orange transition-colors">Проекты</Link></li>
              <li><Link to="/contact" className="text-white hover:text-inplast-orange transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/services/overhaul" className="text-white hover:text-inplast-orange transition-colors">Полный капитальный ремонт оборудования</Link></li>
              <li><Link to="/services/engineering" className="text-white hover:text-inplast-orange transition-colors">Инжиниринг и системы управления</Link></li>
              <li><Link to="/services/installation" className="text-white hover:text-inplast-orange transition-colors">Установка и ввод в эксплуатацию</Link></li>
              <li><Link to="/services/relocation" className="text-white hover:text-inplast-orange transition-colors">Перемещение оборудования</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Группа компаний</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-inplast-orange transition-colors">BPL Engineering</a></li>
              <li><a href="https://visopack.pl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-inplast-orange transition-colors">Visopack</a></li>
              <li><a href="https://moplefan-group.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-inplast-orange transition-colors">Moplefan</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
