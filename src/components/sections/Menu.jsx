"use client";

import React, { useState } from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import MenuCard from '../ui/MenuCard';
import PremiumButton from '../ui/PremiumButton';
import FadeIn from '../animations/FadeIn';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    // Breakfast
    {
      title: "Country Breakfast",
      price: "$12",
      description: "Two farm-fresh eggs, choice of bacon or sausage, hash browns, and homemade toast.",
      category: "breakfast",
      tags: ["Classic", "Local Favorite"],
      isSignature: true
    },
    {
      title: "Biscuits & Gravy",
      price: "$10",
      description: "Two fluffy homemade biscuits smothered in our signature country sausage gravy.",
      category: "breakfast",
      tags: ["Signature", "Hearty"],
      isSignature: true
    },
    {
      title: "Pancake Stack",
      price: "$9",
      description: "Three golden buttermilk pancakes served with warm syrup and whipped butter.",
      category: "breakfast",
      tags: ["Sweet", "Fluffy"],
      isSignature: false
    },
    {
      title: "Farmhouse Omelet",
      price: "$13",
      description: "Three-egg omelet loaded with ham, cheddar cheese, peppers, and onions.",
      category: "breakfast",
      tags: ["Protein", "Savory"],
      isSignature: false
    },
    {
      title: "French Toast",
      price: "$10",
      description: "Thick-cut brioche dipped in our cinnamon-vanilla batter and grilled to perfection.",
      category: "breakfast",
      tags: ["Sweet", "Classic"],
      isSignature: false
    },
    {
      title: "Breakfast Skillet",
      price: "$14",
      description: "Crispy potatoes topped with bacon, sausage, cheese, and two eggs your way.",
      category: "breakfast",
      tags: ["Hearty", "Savory"],
      isSignature: true
    },
    // Comfort
    {
      title: "Country Fried Steak",
      price: "$16",
      description: "Tender beef battered and fried golden brown, topped with rich country gravy.",
      category: "comfort",
      tags: ["Signature", "Classic"],
      isSignature: true
    },
    {
      title: "Chicken Tenders",
      price: "$12",
      description: "Hand-breaded chicken tenders fried crisp, served with fries and choice of dipping sauce.",
      category: "comfort",
      tags: ["Crispy", "Favorite"],
      isSignature: false
    },
    {
      title: "Classic Cheeseburger",
      price: "$13",
      description: "A juicy beef patty topped with American cheese, lettuce, tomato, and pickles.",
      category: "comfort",
      tags: ["Juicy", "Classic"],
      isSignature: false
    },
    {
      title: "Hot Roast Beef Sandwich",
      price: "$15",
      description: "Slow-roasted beef piled high on white bread and smothered in brown gravy.",
      category: "comfort",
      tags: ["Hearty", "Homestyle"],
      isSignature: true
    },
    {
      title: "Homemade Meatloaf",
      price: "$14",
      description: "Our special recipe meatloaf served with mashed potatoes and green beans.",
      category: "comfort",
      tags: ["Comforting", "Homestyle"],
      isSignature: false
    },
    {
      title: "Daily Specials",
      price: "Market",
      description: "Ask your server about our rotating selection of homemade daily specials.",
      category: "comfort",
      tags: ["Fresh", "Daily"],
      isSignature: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Full Menu' },
    { id: 'breakfast', name: 'Breakfast Favorites' },
    { id: 'comfort', name: 'Comfort Food Classics' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <Section id="menu" variant="warm">
      <Container>
        <SectionHeading
          subtitle="Our Menu"
          title="Homestyle Favorites"
          description="Start your day with fluffy pancakes and homemade biscuits, or enjoy our hearty comfort food classics prepared with care."
        />

        {/* Categories Tab Selector */}
        <FadeIn direction="up" delay={0.2} className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-16">
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

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredItems.map((item, index) => (
            <MenuCard
              key={item.title}
              title={item.title}
              price={item.price}
              description={item.description}
              tags={item.tags}
              isSignature={item.isSignature}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* View Wine List Button */}
        <FadeIn direction="up" delay={0.3} className="text-center mt-20">
          <PremiumButton href="#visit" variant="outline" size="lg">
            Download Full Menu
          </PremiumButton>
        </FadeIn>
      </Container>
    </Section>
  );
}
