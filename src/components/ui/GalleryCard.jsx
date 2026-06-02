import React from 'react';
import { cn } from '@/lib/utils';
import ParallaxImage from '../animations/ParallaxImage';
import FadeIn from '../animations/FadeIn';

export default function GalleryCard({
  src,
  alt,
  title,
  category,
  className,
  ...props
}) {
  return (
    <FadeIn
      direction="none"
      className={cn(
        "group relative aspect-[4/5] w-full overflow-hidden bg-dark cursor-pointer rounded-none border border-primary/5",
        className
      )}
      {...props}
    >
      {/* Background Parallax Image */}
      <ParallaxImage
        src={src}
        alt={alt}
        speed={1.1}
        className="w-full h-full"
        imageClassName="transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/45 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-500 z-10" />

      {/* Floating Info */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
        <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-secondary mb-1.5 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          {category}
        </span>
        <h3 className="font-serif text-base sm:text-lg md:text-xl text-background font-normal tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {title}
        </h3>
        
        {/* Animated decorative accent line */}
        <div className="w-0 group-hover:w-10 h-[1px] bg-secondary/50 mt-3 transition-all duration-500 ease-out" />
      </div>
    </FadeIn>
  );
}
