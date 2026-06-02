"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useImageSequence from './useImageSequence';
import { SEQUENCE_CONFIG } from './sequenceConfig';
import PremiumButton from '../ui/PremiumButton';
import Container from '../layout/Container';

export default function HeroSequence() {
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const canvasRef = useRef(null);
  const textGroupRef = useRef(null);

  const { imagesLoaded, loadingProgress, drawFrame } = useImageSequence();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion media query match on client
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
    }
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw initial frame on asset load
    drawFrame(canvas, ctx, 0);

    // If reduced motion is preferred, render the static first frame and skip scroll interactions
    if (reducedMotion) return;

    const trigger = triggerRef.current;
    const pinTarget = pinRef.current;

    // Animatable object representing current frame index
    const sequenceObj = { frame: 0 };
    const totalFrames = SEQUENCE_CONFIG.totalFrames;

    // Create ScrollTrigger to drive frame scrubbing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // Smooth lag scrub for fluid progression
      }
    });

    // Animate frame property linearly so scroll progress matches frame count index
    tl.to(sequenceObj, {
      frame: totalFrames - 1,
      ease: 'none',
      onUpdate: () => {
        // Throttle canvas draw calls to requestAnimationFrame for 60+ FPS performance
        requestAnimationFrame(() => {
          drawFrame(canvas, ctx, Math.floor(sequenceObj.frame));
        });
      }
    });

    // Staggered entrance animation for text contents on page enter
    gsap.fromTo(
      textGroupRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      }
    );

    // Redraw current frame on window resize to match updated screen size correctly
    const handleResize = () => {
      drawFrame(canvas, ctx, Math.floor(sequenceObj.frame));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up GSAP timelines, triggers, and event listeners
      tl.kill();
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === trigger) t.kill();
      });
    };
  }, [imagesLoaded, drawFrame, reducedMotion]);

  return (
    <div 
      ref={triggerRef} 
      className="relative w-full bg-background"
      style={{ height: reducedMotion ? 'auto' : '250vh' }}
    >
      {/* Sticky Viewport Container */}
      <div 
        ref={pinRef} 
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-background"
      >
        {/* Fullscreen Canvas Background */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-10 select-none pointer-events-none"
        />

        {/* Text Wash Overlay: provides contrast on left side for text readability */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-background via-background/80 to-transparent z-15 pointer-events-none" />

        {/* Content Layout Overlay */}
        <Container className="relative z-20 w-full h-full flex items-center select-text">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            {/* Left column text placement leaving massive negative space on right */}
            <div 
              ref={textGroupRef}
              className="lg:col-span-6 flex flex-col items-start text-left max-w-xl space-y-6 sm:space-y-8"
            >
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary font-bold">
                Welcome to Osborn&apos;s
              </span>
              
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-dark tracking-wide">
                Homestyle Cooking Done Right
              </h1>
              
              <p className="font-sans text-sm sm:text-base text-text/80 leading-relaxed font-light">
                Fresh breakfasts, comfort food favorites, and warm hospitality served daily.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <PremiumButton href="#menu" variant="primary" size="lg">
                  View Menu
                </PremiumButton>
                <PremiumButton href="#visit" variant="outline" size="lg">
                  Visit Us
                </PremiumButton>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Loading Overlay Screen */}
      {!imagesLoaded && (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-6">
            <span className="font-serif text-lg tracking-widest text-dark block animate-pulse">
              Preparing the Kitchen...
            </span>
            {/* Loading progress bar */}
            <div className="h-[2px] w-full bg-primary/10 rounded-full overflow-hidden relative">
              <div 
                className="absolute left-0 top-0 h-full bg-primary transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-text/60 block font-semibold">
              Brewing the morning coffee ({loadingProgress}%)
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
