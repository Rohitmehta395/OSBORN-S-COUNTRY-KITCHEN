import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../animations/FadeIn';
import { MapPin, Phone, Clock } from 'lucide-react';
import PremiumButton from '../ui/PremiumButton';

export default function Visit() {
  return (
    <Section id="visit" variant="default" className="border-t border-primary/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-10">
            <SectionHeading
              align="left"
              subtitle="Location & Hours"
              title="Stop By And Say Hello"
              description="Join us for a hot cup of coffee and a delicious meal. We can't wait to serve you."
              className="mb-0"
            />

            <FadeIn direction="up" delay={0.2} className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-primary/5 text-primary border border-primary/10 rounded-sm h-fit">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-base text-dark font-medium">Our Location</h4>
                  <p className="font-sans text-sm text-text/80 mt-1 leading-relaxed font-light">
                    123 Main Street<br />
                    Hometown, USA 12345
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-primary/5 text-primary border border-primary/10 rounded-sm h-fit">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-base text-dark font-medium">Opening Hours</h4>
                  <div className="font-sans text-sm text-text/80 mt-1 space-y-1 font-light">
                    <p><span className="font-semibold text-text">Monday – Sunday:</span> 6:00 AM – 2:00 PM</p>
                    <p><span className="font-semibold text-text">Breakfast & Lunch</span> served all day</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-primary/5 text-primary border border-primary/10 rounded-sm h-fit">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-base text-dark font-medium">Inquiries</h4>
                  <p className="font-sans text-sm text-text/80 mt-1 font-light">
                    hello@osbornscountrykitchen.com<br />
                    +1 (555) 019-2834
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Interactive Map/Form Placeholder */}
          <div className="lg:col-span-7 h-[420px] w-full bg-secondary/5 border border-primary/5 p-8 relative rounded-sm flex items-center justify-center overflow-hidden">
            {/* Styled aesthetic grid lines / map placeholder */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8b4513_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
            
            <FadeIn direction="none" className="text-center max-w-md space-y-6 relative z-10">
              <h3 className="font-serif text-2xl text-dark font-medium">Find Us Here</h3>
              <p className="font-sans text-sm text-text/75 leading-relaxed font-light">
                We are located right in the heart of town. No reservations required—just come on in and grab a seat. We have plenty of room for families and large groups.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <PremiumButton href="tel:+15550192834" variant="outline" size="md">
                  Call Us
                </PremiumButton>
                <PremiumButton href="https://maps.google.com" variant="primary" size="md">
                  Get Directions
                </PremiumButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
