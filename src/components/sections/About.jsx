import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ParallaxImage from '../animations/ParallaxImage';
import FadeIn from '../animations/FadeIn';

export default function About() {
  return (
    <Section id="story" variant="default">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              subtitle="Our Story"
              title="A Place Where Everyone Feels Like Family"
              description="At Osborn's Country Kitchen, we believe great food brings people together. Whether you're joining us for breakfast before work or gathering with family for a weekend meal, we're proud to serve fresh food with genuine hometown hospitality."
              className="mb-8"
            />
            
            <FadeIn direction="up" delay={0.2} className="space-y-5 text-sm sm:text-base text-text/80 font-light leading-relaxed">
              <p>
                We've been serving the community for years, pouring hot coffee and making sure no one leaves hungry. Our recipes have been passed down and perfected, offering the comforting taste of home in every bite.
              </p>
              <p>
                From our scratch-made biscuits baked fresh every morning to our hand-breaded chicken fried steak, we take pride in doing things the right way. No shortcuts—just good food, friendly service, and a welcoming atmosphere.
              </p>
            </FadeIn>
          </div>

          {/* Editorial Image Grid */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 h-[400px] sm:h-[500px]">
            <div className="col-span-7 h-full relative">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800"
                alt="Hearty country breakfast spread"
                speed={1.08}
                className="w-full h-full rounded-sm"
              />
            </div>
            <div className="col-span-5 flex flex-col gap-4 h-full">
              <div className="h-1/2 relative">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800"
                  alt="Stack of fresh pancakes"
                  speed={1.12}
                  className="w-full h-full rounded-sm"
                />
              </div>
              <div className="h-1/2 relative">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
                  alt="Cozy hometown diner seating"
                  speed={1.05}
                  className="w-full h-full rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
