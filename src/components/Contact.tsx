
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface ContactProps {
  isStandalone?: boolean;
}

const Contact = ({ isStandalone = false }: ContactProps) => {
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
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
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
        telephone: telephone || 'Not provided',
        message: message,
        to_email: 'dvdktsmn@gmail.com'
      };

      await emailjs.send(
        'service_default', // You'll need to replace with your EmailJS service ID
        'template_default', // You'll need to replace with your EmailJS template ID
        templateParams,
        'your_public_key' // You'll need to replace with your EmailJS public key
      );

      toast({
        title: "Success",
        description: "Your message has been sent. We'll get back to you soon!",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setTelephone('');
      setMessage('');
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 ${isStandalone ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-inplast-blue mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your project? Our engineering experts are ready to help you modernize your production facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full flex flex-col">
            <h3 className="text-2xl font-bold text-inplast-blue mb-6">Get In Touch</h3>
            
            <form className="flex flex-col h-full gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telephone">Telephone</Label>
                <Input 
                  id="telephone" 
                  type="tel" 
                  placeholder="+0 123 456 789" 
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </div>
              
              <div className="flex flex-col flex-grow">
                <Label htmlFor="message" className="mb-2">Message *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project requirements" 
                  className="flex-grow resize-none min-h-[140px]" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-inplast-blue hover:bg-inplast-orange text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center mb-8">
              <img 
                src="/lovable-uploads/129ca3ee-ca07-4fbf-b569-9f108d0b95fd.png"
                alt="Manufacturing facility" 
                className="rounded-lg shadow-xl w-full h-96 object-cover" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-inplast-blue mb-2">Headquarters</h4>
                <p className="text-gray-600">
                  87b M.Sklodowskiej-Curie Street<br />
                  87-100 Torun, Poland
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-inplast-blue mb-2">Contact Info</h4>
                <p className="text-gray-600">
                  Email: info@inplast-novex.com<br />
                  Phone: +48 538 421 002
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
