import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;



