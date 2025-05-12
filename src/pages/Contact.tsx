
import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20 pt-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <Contact isStandalone={true} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
