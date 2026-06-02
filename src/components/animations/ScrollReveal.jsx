"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollReveal({
  children,
  className,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'fade'
  duration = 1.2,
  delay = 0,
  distance = 40,
  start = 'top 85%',
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = elementRef.current;

    let x = 0;
    let y = 0;

    if (direction === 'up') y = distance;
    else if (direction === 'down') y = -distance;
    else if (direction === 'left') x = distance;
    else if (direction === 'right') x = -distance;

    // Initialize hidden state
    gsap.set(element, {
      opacity: 0,
      x: x,
      y: y,
    });

    // Create animation timeline triggered on scroll
    const anim = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: duration,
      delay: delay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      anim.kill();
    };
  }, [direction, duration, delay, distance, start]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
