"use client";

import React, { useState } from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import GalleryCard from '../ui/GalleryCard';
import FadeIn from '../animations/FadeIn';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800",
      alt: "Homemade biscuits covered in country gravy",
      title: "Biscuits & Gravy",
      category: "breakfast",
      categoryName: "Breakfast"
    },
    {
      src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
      alt: "Hearty country breakfast plate with eggs and bacon",
      title: "Country Breakfast",
      category: "breakfast",
      categoryName: "Breakfast"
    },
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
      alt: "Classic cheeseburger basket with fries",
      title: "Cheeseburger Basket",
      category: "comfort",
      categoryName: "Comfort Food"
    },
    {
      src: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
      alt: "Chicken fried steak with mashed potatoes",
      title: "Chicken Fried Steak",
      category: "comfort",
      categoryName: "Comfort Food"
    },
    {
      src: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800",
      alt: "Stack of fluffy pancakes with syrup",
      title: "Pancakes",
      category: "breakfast",
      categoryName: "Breakfast"
    },
    {
      src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
      alt: "Homestyle dinner plate",
      title: "Homestyle Dinner Plates",
      category: "comfort",
      categoryName: "Comfort Food"
    }
  ];

  const categories = [
    { id: 'all', name: 'Show All' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'comfort', name: 'Comfort Food' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Section id="gallery" variant="default" className="border-t border-primary/5">
      <Container>
        <SectionHeading
          subtitle="Customer Favorites"
          title="Local Favorites"
          description="Take a look at some of the most popular dishes that keep our guests coming back for more."
        />

        {/* Tab Filters */}
        <FadeIn direction="up" delay={0.1} className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-sans text-[10px] sm:text-xs uppercase tracking-widest px-6 py-3 transition-all duration-300 border rounded-sm font-semibold ${
                activeCategory === category.id
                  ? 'bg-primary text-background border-primary shadow-sm'
                  : 'bg-transparent text-text border-primary/10 hover:border-primary/30 hover:bg-primary/[0.02]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </FadeIn>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.title}
              src={item.src}
              alt={item.alt}
              title={item.title}
              category={item.categoryName}
              delay={index * 0.05}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
