
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
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
    
    // Mock form submission
    toast({
      title: "Success",
      description: "Your message has been sent. We'll get back to you soon!",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setTelephone('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20 pt-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your project? Our engineering experts are ready to help you modernize your production facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              
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
                    placeholder="+48 123 456 789" 
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <Label htmlFor="message" className="mb-2">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements" 
                    className="flex-grow resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-inplast-blue hover:bg-inplast-darkgray text-white">
                  Send Message
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
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
