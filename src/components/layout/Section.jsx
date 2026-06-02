import React from 'react';
import { cn } from '@/lib/utils';

export default function Section({
  as: Component = 'section',
  className,
  id,
  variant = 'default',
  children,
  ...props
}) {
  const variantClasses = {
    default: 'bg-background text-text',
    dark: 'bg-dark text-background',
    warm: 'bg-secondary/15 text-text',
    accent: 'bg-accent text-background',
    transparent: 'bg-transparent text-text'
  };

  return (
    <Component
      id={id}
      className={cn(
        'relative py-24 md:py-36 overflow-hidden',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
