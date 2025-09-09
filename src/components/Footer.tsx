
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground pt-12 pb-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo and Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2 mb-5">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo1.svg" 
                  alt="DB German Training Institute Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <div className="font-display">
                <p className="text-lg font-semibold tracking-tight">DB German</p>
                <p className="text-sm text-foreground/70">Training Institute</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Professional, outcome‑driven German language training for study, work, and life in German‑speaking countries.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold border-b border-primary/30 pb-2 mb-4">Contact us</h3>
            <div className="space-y-3 text-foreground/80">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary/80 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm">
                  
                  Kapsabet
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary/80 mr-3 flex-shrink-0" />
                <p className="text-sm">+254 715 934626</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary/80 mr-3 flex-shrink-0" />
                <a href="mailto:info@dbgti.co.ke" className="text-sm hover:text-primary transition-colors">
                  info@dbgti.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold border-b border-primary/30 pb-2 mb-4">Programs</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors flex items-center">
                  <span className="text-primary mr-2">›</span>
                  German Training
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors flex items-center">
                  <span className="text-primary mr-2">›</span>
                  Translation services
                </a>
              </li>
            </ul>
          </div>

          {/* Get Help */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold border-b border-primary/30 pb-2 mb-4">Get help</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <a href="#contact" className="text-sm hover:text-primary transition-colors flex items-center">
                  <span className="text-primary mr-2">›</span>
                  Contact Us
                </a>
              </li>
              
          
            </ul>
          </div>
        </div>

      

        {/* Divider */}
        <div className="border-t border-border/50 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 text-sm font-medium">
              Copyright © {currentYear} DB German Training Institute
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-foreground/70 text-sm font-medium hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/70 text-sm font-medium hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/70 text-sm font-medium hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
