import React from 'react';
import SmoothScrollProvider from '@/components/animations/SmoothScrollProvider';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Menu from '@/components/sections/Menu';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Visit from '@/components/sections/Visit';
import Features from '@/components/sections/Features';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen w-full bg-background text-text">
        <Hero />
        <Menu />
        <About />
        <Features />
        <Gallery />
        <Testimonials />
        <Visit />
      </main>
    </SmoothScrollProvider>
  );
}
