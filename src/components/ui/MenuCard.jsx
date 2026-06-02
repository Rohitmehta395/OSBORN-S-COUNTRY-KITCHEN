import React from 'react';
import { cn } from '@/lib/utils';
import { Flame } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

export default function MenuCard({
  title,
  price,
  description,
  tags = [],
  isSignature = false,
  className,
  ...props
}) {
  return (
    <FadeIn
      direction="up"
      className={cn(
        "group relative flex flex-col justify-between p-6 transition-all duration-500 rounded-sm border",
        isSignature 
          ? "bg-secondary/5 border-secondary/15 shadow-sm" 
          : "bg-transparent border-primary/5 hover:border-primary/10 hover:bg-primary/[0.02]"
      )}
      {...props}
    >
      <div>
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="font-serif text-lg sm:text-xl font-normal text-dark group-hover:text-primary transition-colors flex items-center gap-2">
            {title}
            {isSignature && (
              <Flame size={14} className="text-accent animate-pulse" />
            )}
          </h3>
          <div className="flex-grow border-b border-dashed border-text/15 mx-3 hidden sm:block" />
          <span className="font-serif text-base sm:text-lg font-medium text-primary">{price}</span>
        </div>

        <p className="font-sans text-xs sm:text-sm text-text/75 leading-relaxed mb-4 font-light">
          {description}
        </p>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-none bg-primary/5 text-primary border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </FadeIn>
  );
}
