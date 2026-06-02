"use client";

import React from 'react';
import Link from 'next/link';
import { Award, ArrowUpRight } from 'lucide-react';
import Container from './Container';

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-background pt-24 pb-12 border-t border-secondary/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-background/10">
          {/* Brand Info */}
          <div className="space-y-6 md:col-span-1">
            <Link href="#" className="flex flex-col tracking-widest text-background">
              <span className="font-serif text-2xl font-bold leading-none">OSBORN&apos;S</span>
              <span className="font-sans text-[10px] font-semibold text-secondary mt-0.5 tracking-[0.25em]">COUNTRY KITCHEN</span>
            </Link>
            <p className="font-sans text-sm text-background/60 leading-relaxed max-w-xs">
              Serving fresh breakfasts, comfort food favorites, and friendly hometown hospitality every day.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="font-sans text-xs uppercase tracking-wider text-secondary font-semibold">Hometown Hospitality</span>
            </div>
          </div>

          {/* Operational Hours */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-secondary font-medium tracking-wide">Opening Hours</h4>
            <ul className="space-y-3 font-sans text-sm text-background/65">
              <li>
                <span className="block font-semibold text-background/85">Monday – Sunday</span>
                <span className="block text-xs mt-0.5">Breakfast & Lunch: 6:00 AM – 2:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-secondary font-medium tracking-wide">Location & Contact</h4>
            <ul className="space-y-3 font-sans text-sm text-background/65">
              <li>
                <span className="block font-semibold text-background/85">Address</span>
                <span className="block text-xs mt-0.5">123 Main Street, Hometown, USA</span>
              </li>
              <li>
                <span className="block font-semibold text-background/85">Inquiries</span>
                <span className="block text-xs mt-0.5">hello@osbornscountrykitchen.com</span>
                <span className="block text-xs mt-0.5">+1 (555) 019-2834</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Club */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-secondary font-medium tracking-wide">Stay Connected</h4>
            <p className="font-sans text-sm text-background/60 leading-relaxed">
              Join our newsletter for daily specials and updates.
            </p>
            <form className="flex w-full max-w-sm border-b border-background/25 pb-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-none text-sm text-background placeholder:text-background/40 w-full focus:outline-none pr-3"
              />
              <button type="submit" className="text-secondary hover:text-background transition-colors p-1" aria-label="Subscribe">
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 text-background/45 font-sans text-xs">
          <div className="mb-4 sm:mb-0">
            <p>&copy; {currentYear} Osborn&apos;s Country Kitchen. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Dining</a>
            <div className="flex items-center gap-3 ml-4">
              <a href="#" className="text-background/60 hover:text-secondary transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
