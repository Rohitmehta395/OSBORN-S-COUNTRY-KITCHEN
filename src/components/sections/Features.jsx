"use client";

import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../animations/FadeIn';
import { Coffee, Utensils, Users, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Fresh Breakfast",
      description: "Start your day right with hot coffee and a made-to-order country breakfast.",
      icon: <Coffee size={24} className="text-primary" />
    },
    {
      title: "Daily Specials",
      description: "Rotating homemade specials crafted from fresh, local ingredients every day.",
      icon: <Utensils size={24} className="text-primary" />
    },
    {
      title: "Family Friendly",
      description: "A warm and inviting atmosphere where everyone is treated like family.",
      icon: <Users size={24} className="text-primary" />
    },
    {
      title: "Homemade Favorites",
      description: "Classic comfort food recipes passed down and perfected over generations.",
      icon: <Heart size={24} className="text-primary" />
    }
  ];

  return (
    <Section id="features" variant="warm">
      <Container>
        <SectionHeading
          subtitle="Fresh Every Day"
          title="Simple Ingredients. Honest Cooking."
          description="Fresh ingredients, made-to-order meals, and recipes that keep customers coming back. No shortcuts—just good food and friendly service."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn
              key={feature.title}
              direction="up"
              delay={0.1 * index}
              className="bg-background border border-primary/10 rounded-sm p-8 text-center flex flex-col items-center hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="font-serif text-xl text-dark mb-3 font-medium">{feature.title}</h4>
              <p className="font-sans text-sm text-text/80 leading-relaxed font-light">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
