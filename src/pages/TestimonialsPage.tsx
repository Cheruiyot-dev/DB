import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default TestimonialsPage;



