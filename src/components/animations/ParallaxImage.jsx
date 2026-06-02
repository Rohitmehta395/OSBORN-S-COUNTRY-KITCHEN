"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

export default function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  speed = 1.15, // Multiplier for speed differential
  ...props
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const img = imageRef.current;

    // Calculate vertical movement (translation percent)
    // Speed of 1.15 translates to roughly yPercent moving from -15% to 15%
    const movementPercent = (speed - 1.0) * 100;

    const anim = gsap.fromTo(
      img,
      { yPercent: -movementPercent },
      {
        yPercent: movementPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden w-full h-full', className)}
      {...props}
    >
      <div
        ref={imageRef}
        className="absolute -top-[20%] left-0 w-full h-[140%] relative-image-wrapper"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', imageClassName)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={props.priority}
        />
      </div>
    </div>
  );
}
