"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import PremiumButton from '../ui/PremiumButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        const rect = menuSection.getBoundingClientRect();
        // Header turns full width once the top of the Menu section meets the header boundaries
        setIsScrolled(rect.top <= 100);
      } else {
        setIsScrolled(window.scrollY > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check in case page is loaded mid-scroll

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#story' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#visit' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed z-50 transition-all duration-500 ease-in-out',
          isScrolled 
            ? 'top-0 left-0 right-0 mx-auto w-full max-w-none bg-background/98 py-4 shadow-md border-b border-primary/10 backdrop-blur-md rounded-none' 
            : 'top-6 left-0 right-0 mx-auto w-[92%] max-w-6xl bg-background py-3 shadow-lg border border-primary/10 backdrop-blur-md rounded-full'
        )}
      >
        <div className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500",
          isScrolled ? "max-w-7xl px-6 lg:px-8" : "w-full px-6 lg:px-8"
        )}>
          {/* Logo */}
          <Link 
            href="#" 
            className="flex flex-col tracking-widest text-dark"
          >
            <span className="font-serif text-lg md:text-xl font-bold leading-none">OSBORN&apos;S</span>
            <span className="font-sans text-[9px] font-semibold text-primary mt-0.5 tracking-[0.25em]">COUNTRY KITCHEN</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs uppercase tracking-widest text-text/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Book Table Button */}
          <div className="hidden md:flex items-center gap-4">
            <PremiumButton href="#visit" variant="outline" size="sm">
              Visit Us
            </PremiumButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-dark/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Content Container */}
        <div
          className={cn(
            'absolute right-0 top-0 bottom-0 w-4/5 max-w-sm glassmorphism bg-background/95 shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-out-expo border-l border-primary/10',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="space-y-12 mt-16">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-text hover:text-primary transition-colors py-2 border-b border-primary/5 block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-text/75">
              <Phone size={16} className="text-primary" />
              <span>+1 (555) 019-2834</span>
            </div>
            <PremiumButton href="#visit" onClick={() => setMobileMenuOpen(false)} className="w-full text-center">
              Visit Us
            </PremiumButton>
          </div>
        </div>
      </div>
    </>
  );
}
