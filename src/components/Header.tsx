import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Programs' },
    { href: '/testimonials', label: 'Success Stories' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morphism shadow-xl' : 'bg-background/80 backdrop-blur'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <img 
                src="/logo.svg" 
                alt="DB German Training Institute Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="flex flex-col justify-center min-h-12">
              <h1 className="text-lg sm:text-xl font-display font-bold text-foreground leading-tight">DB German Training Institute</h1>
              <p className="text-xs text-muted-foreground leading-tight">Professional German Language Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/contact" className="glow-button text-sm px-6 py-2">
              Start Learning
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 glass-morphism rounded-2xl mt-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-foreground/80 hover:text-primary font-medium transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href="/contact" onClick={() => setIsMenuOpen(false)} className="w-full inline-block text-center glow-button text-sm py-3">
                Start Learning
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;