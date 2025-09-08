import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Contact from '@/components/Contact';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;



