import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

export default function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  date,
  className,
  ...props
}) {
  return (
    <FadeIn
      direction="up"
      className={cn(
        "relative flex flex-col justify-between p-8 sm:p-10 bg-background border border-primary/5 hover:border-primary/10 transition-all duration-500 shadow-sm",
        className
      )}
      {...props}
    >
      <div className="absolute top-6 right-8 text-primary/10 pointer-events-none">
        <Quote size={40} className="transform rotate-180" />
      </div>

      <div className="space-y-4">
        {rating > 0 && (
          <div className="flex items-center gap-0.5">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-secondary text-xs sm:text-sm">★</span>
            ))}
          </div>
        )}

        <blockquote className="font-serif text-sm sm:text-base md:text-lg text-text/90 italic leading-relaxed font-light">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      <div className="mt-8 pt-6 border-t border-primary/5 flex justify-between items-center">
        <div>
          <cite className="font-sans text-xs sm:text-sm font-semibold text-dark not-italic block">
            {author}
          </cite>
          {role && (
            <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-text/50 block mt-0.5">
              {role}
            </span>
          )}
        </div>
        {date && (
          <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-widest text-text/40">
            {date}
          </span>
        )}
      </div>
    </FadeIn>
  );
}
