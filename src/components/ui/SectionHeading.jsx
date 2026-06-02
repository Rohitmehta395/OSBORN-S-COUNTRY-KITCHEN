import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from '../animations/ScrollReveal';

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center', // 'left' | 'center' | 'right'
  dark = false,
  className,
  ...props
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div
      className={cn(
        'flex flex-col max-w-3xl mb-16 md:mb-20',
        alignmentClasses[align],
        align === 'center' ? 'mx-auto' : '',
        className
      )}
      {...props}
    >
      {subtitle && (
        <ScrollReveal direction="up" delay={0.1} start="top 90%">
          <span className={cn(
            "font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-3 inline-block",
            dark ? "text-secondary" : "text-primary"
          )}>
            {subtitle}
          </span>
        </ScrollReveal>
      )}

      {title && (
        <ScrollReveal direction="up" delay={0.2} start="top 90%">
          <h2 className={cn(
            "font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-4 tracking-wide",
            dark ? "text-background" : "text-dark"
          )}>
            {title}
          </h2>
        </ScrollReveal>
      )}

      {/* Elegant line separator */}
      <ScrollReveal direction="up" delay={0.3} start="top 90%">
        <div className={cn(
          "h-[1px] w-16 my-4",
          dark ? "bg-secondary/40" : "bg-primary/30"
        )} />
      </ScrollReveal>

      {description && (
        <ScrollReveal direction="up" delay={0.4} start="top 90%">
          <p className={cn(
            "font-sans text-sm sm:text-base leading-relaxed max-w-2xl font-light",
            dark ? "text-background/70" : "text-text/80"
          )}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
