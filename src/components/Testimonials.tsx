
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const testimonials = [
    {
      name: "David Ruto",
      role: "Nurse",
     
      text: "DB German Training Institute prepared me for my role in Germany. Practical lessons, clear structure, and measurable progress made all the difference."
    },
    {
      name: "Grace Cherotich",
      role: "Student",
      
      text: "As a student heading to Germany, DB German’s exam prep guided me step‑by‑step to certification. I felt supported and confident throughout."
    },
    {
      name: "James Kariuki",
      role: "Nurse Specialist",
    
      text: "I needed professional conversational skills fast. DB German’s coaching helped me communicate clearly with clients in weeks. Highly recommended."
    }
  ];
  

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-foreground/5">
      <div className="section">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-3 text-sm font-medium tracking-wide">
              Success Stories
            </div>
            <h2 className="section-title text-center mb-6">What our students say</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Real outcomes from learners who advanced their German with DB German Training Institute.
            </p>
          </div>
        </AnimatedSection>

     

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={100 + (index * 100)}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-border/60 hover:border-primary/20 transition-all hover:shadow-elegant-hover h-full flex flex-col hover-lift">
                <div className="flex-grow">
                  <svg className="h-10 w-10 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"></path>
                  </svg>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">{testimonial.text}</p>
                </div>
                <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                 
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
