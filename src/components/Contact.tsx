
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your project? Our engineering experts are ready to help you modernize your production facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@company.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project requirements" rows={5} />
              </div>
              
              <Button type="submit" className="w-full bg-inplast-blue hover:bg-inplast-darkblue text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/129ca3ee-ca07-4fbf-b569-9f108d0b95fd.png" 
              alt="Manufacturing facility" 
              className="rounded-lg shadow-xl w-full h-auto mb-8"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-inplast-darkblue mb-2">Headquarters</h4>
                <p className="text-gray-600">
                  1234 Industry Avenue<br />
                  Warsaw, Poland<br />
                  00-001
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-inplast-darkblue mb-2">Contact Info</h4>
                <p className="text-gray-600">
                  Email: info@inplastholding.com<br />
                  Phone: +48 123 456 789
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
