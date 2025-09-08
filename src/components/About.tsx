
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 md:py-16 bg-foreground/5">
      <div className="section">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="/learn.png"
                loading="lazy"
                className="rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white p-3 md:p-4 rounded-xl shadow-lg glass-card max-w-[200px] hidden sm:block">
                <p className="text-primary text-xs font-medium">Our Mission</p>
                <h3 className="text-lg font-display font-medium mt-1 mb-2 text-gray-900">DB German Training Institute</h3>
                <p className="text-gray-700 text-xs">Professional training that turns intention into fluent action</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200} className="order-1 md:order-2">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Why choose DB German Training Institute
              </div>
             
              <div className="space-y-6 text-foreground/70">
                <p className="leading-relaxed">
                  Based in Nairobi, we deliver structured A1–B2 programs focused on clarity, practice, and measurable progress. Our instructors combine expertise with practical, real‑world usage.
                </p>
                <p className="leading-relaxed">
                  Flexible schedules, small groups, and guided exam preparation ensure you build the confidence to study, work, and live in German‑speaking environments.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Beginner Friendly</h4>
                    <p className="text-sm text-foreground/70 mt-1">Perfect for complete beginners</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Affordable Courses</h4>
                    <p className="text-sm text-foreground/70 mt-1">Value-based pricing for all levels</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Premium Class</h4>
                    <p className="text-sm text-foreground/70 mt-1">Small groups for personalized attention</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Online Classes Available</h4>
                    <p className="text-sm text-foreground/70 mt-1">Learn from anywhere in Kenya</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#services" className="button-transition bg-primary text-white px-6 py-3 rounded-md text-base font-medium text-center">
                    View More
                  </a>
                  <a href="#contact" className="button-transition bg-transparent border border-primary/20 text-primary hover:bg-primary/5 px-6 py-3 rounded-md text-base font-medium text-center">
                    Register Today
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
