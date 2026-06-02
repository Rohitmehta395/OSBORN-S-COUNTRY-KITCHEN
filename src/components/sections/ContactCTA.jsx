import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import PremiumButton from '../ui/PremiumButton';
import FadeIn from '../animations/FadeIn';

export default function ContactCTA() {
  return (
    <Section id="contact" variant="dark" className="text-center py-32 md:py-44">
      {/* Decorative dark background mesh */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d9a066_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none" />
      
      <Container className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <SectionHeading
          dark
          subtitle="An Unforgettable Evening"
          title="Prepare for the Hearth Experience"
          description="Immerse yourself in Chef Sunny's wood-fired culinary theater. Private table bookings, culinary masterclasses, and customized tastings are available."
          className="mb-6"
        />

        <FadeIn direction="up" delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <PremiumButton href="#visit" variant="secondary" size="lg">
            Reserve Online
          </PremiumButton>
          <PremiumButton href="mailto:events@firesidesunnys.com" variant="outlineDark" size="lg">
            Private Events
          </PremiumButton>
        </FadeIn>
      </Container>
    </Section>
  );
}
