import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;



