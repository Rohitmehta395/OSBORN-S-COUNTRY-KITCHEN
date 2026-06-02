"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

export default function TextReveal({
  text,
  className,
  delay = 0,
  duration = 1.0,
  stagger = 0.02,
  type = 'words', // 'words' | 'chars'
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll('.reveal-item');
    if (!targets.length) return;

    const anim = gsap.fromTo(
      targets,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, [text, duration, stagger, delay, type]);

  if (!text) return null;

  if (type === 'chars') {
    return (
      <span ref={containerRef} className={cn('inline-block overflow-hidden py-1', className)}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={cn(
              'reveal-item inline-block split-char',
              char === ' ' ? 'w-[0.25em]' : ''
            )}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  }

  // Split by words
  const words = text.split(' ');
  return (
    <span ref={containerRef} className={cn('inline-flex flex-wrap overflow-hidden py-1', className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <span className="reveal-item inline-block split-word">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
