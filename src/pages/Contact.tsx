
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный адрес электронной почты",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        telephone: telephone || 'Не указан',
        message: message,
        to_email: 'info@bpleng.ru'
      };

      await emailjs.send(
        'service_8mjcvn8', // You'll need to replace with your EmailJS service ID
        'template_zby8cjo', // You'll need to replace with your EmailJS template ID
        templateParams,
        'XGQj7vpCRTP4TlGX7' // You'll need to replace with your EmailJS public key
      );

      toast({
        title: "Успешно",
        description: "Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время!",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setTelephone('');
      setMessage('');
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20 pt-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Связаться с нами</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы обсудить Ваш проект? Наши инженерные эксперты готовы помочь Вам модернизировать Ваши производственные мощности.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Свяжитесь с нами</h3>
                
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Ваше имя" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Электронная почта *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@company.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Телефон</Label>
                    <Input 
                      id="telephone" 
                      type="tel" 
                      placeholder="+7 123 4567890" 
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите нам о Вашем проекте" 
                      className="resize-none min-h-[140px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-inplast-blue hover:bg-inplast-darkgray text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                  </Button>
                </form>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-inplast-blue mb-2">Центральный офис</h4>
                  <p className="text-gray-600">
                    ул. 2-я Кабельная, д.2, строение 5, 4 этаж, помещение 10<br />
                    111024, г. Москва
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-inplast-blue mb-2">Контактная информация</h4>
                  <p className="text-gray-600">
                    Электронная почта: info@bpleng.ru<br />
                    Телефон: +7 (495) 974-22-11, доб. 149
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
