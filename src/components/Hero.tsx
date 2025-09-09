
import React from 'react';
import { Play, Star, Users, Trophy, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="section relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
              <Star className="w-4 h-4" />
              <span>Professional German Training in Kenya</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Master <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">German</span> with Confidence
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              DB German Training Institute delivers structured, outcome‑driven courses taught by expert instructors. Build fluency for study, work, and life in German‑speaking countries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="glow-button group">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
             
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12">
             
              <div className="text-center lg:text-left">
                <div className="text-3xl font-display font-bold text-accent">A1–B2</div>
                <div className="text-sm text-muted-foreground">Comprehensive Levels</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-display font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Student Rating</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 glass-morphism p-4 md:p-8 rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern German learning environment"
                className="rounded-2xl w-full h-56 sm:h-72 md:h-96 object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 neo-card p-3 md:p-4 max-w-48 hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Live Classes</p>
                    <p className="text-xs text-muted-foreground">Interactive sessions</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 neo-card p-3 md:p-4 max-w-48 hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Certified Results</p>
                    <p className="text-xs text-muted-foreground">Official recognition</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
