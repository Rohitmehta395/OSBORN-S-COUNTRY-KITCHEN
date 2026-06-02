import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Best breakfast in town hands down! The biscuits and gravy taste just like my grandma used to make, and the portions are huge. Staff always greets us with a smile.",
      author: "Sarah Jenkins",
      role: "Local Resident",
      rating: 5,
      date: "May 2026"
    },
    {
      quote: "A true hidden gem. We bring our kids here every Sunday morning and they love the pancakes. The family atmosphere is so warm and welcoming.",
      author: "Mark Thompson",
      role: "Family of 4",
      rating: 5,
      date: "April 2026"
    },
    {
      quote: "The chicken fried steak is out of this world. It's the ultimate comfort food! The coffee is always hot and the waitresses treat you like an old friend.",
      author: "David Miller",
      role: "Regular Customer",
      rating: 5,
      date: "March 2026"
    }
  ];

  return (
    <Section id="testimonials" variant="warm">
      <Container>
        <SectionHeading
          subtitle="Reviews"
          title="What Our Guests Are Saying"
          description="Read why our guests consider us the best spot in town for a homestyle breakfast and comforting meals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard
              key={review.author}
              quote={review.quote}
              author={review.author}
              role={review.role}
              rating={review.rating}
              date={review.date}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
