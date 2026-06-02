import React from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import MagneticButton from '../animations/MagneticButton';

const buttonVariants = cva(
  "inline-flex items-center justify-center text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 relative overflow-hidden font-sans font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary border border-transparent rounded-sm",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/10",
        secondary: "bg-secondary text-dark hover:bg-secondary/95 hover:shadow-lg hover:shadow-secondary/10",
        accent: "bg-accent text-background hover:bg-accent/95 hover:shadow-lg hover:shadow-accent/10",
        outline: "border-primary/30 text-primary hover:bg-primary hover:text-background",
        outlineDark: "border-background/20 text-background hover:bg-background hover:text-dark",
        dark: "bg-dark text-background hover:bg-dark/95 border-background/10",
        text: "text-text hover:text-primary px-0 py-1 transition-colors duration-200 border-b border-transparent hover:border-primary/30 rounded-none"
      },
      size: {
        sm: "px-5 py-2.5 text-[9px]",
        md: "px-7 py-3.5",
        lg: "px-10 py-4.5 text-xs",
        text: "p-0"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export default function PremiumButton({
  children,
  className,
  variant,
  size,
  href,
  magnetic = true,
  magneticRange = 35,
  ...props
}) {
  const isLink = href !== undefined;
  
  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  );

  const classes = cn(buttonVariants({ variant, size }), className);

  const ButtonComponent = () => {
    if (isLink) {
      if (href.startsWith('#')) {
        return (
          <a href={href} className={classes} {...props}>
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={classes} {...props}>
          {content}
        </Link>
      );
    }
    return (
      <button className={classes} {...props}>
        {content}
      </button>
    );
  };

  if (magnetic && variant !== 'text') {
    return (
      <MagneticButton range={magneticRange} className="inline-block">
        <ButtonComponent />
      </MagneticButton>
    );
  }

  return <ButtonComponent />;
}
