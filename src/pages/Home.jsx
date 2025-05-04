"use client";

import { useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import recipes from "@/data/recipes";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Italian",
    "Vegan",
    "Indian",
    "Desserts",
    "Breakfast",
    "Seafood",
    "American",
  ];

  const filteredRecipes =
    selectedCategory === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);

  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800 max-w-5xl mx-auto">
      <div className="font-sans text-gray-800">
        {/* Hero Section */}
        <section
          className="relative bg-green-100 text-center 
    bg-[url('https://static.vecteezy.com/system/resources/thumbnails/049/647/928/small_2x/delicious-indian-meal-with-biryani-rice-photo.jpeg')] 
    bg-no-repeat bg-cover bg-center md:h-[65vh] h-[40vh]"
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Hero Text */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-white px-4">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                Discover Delicious Recipes
              </h1>
              <p className="text-gray-200 mb-6 max-w-md mx-auto">
                Fresh, tasty, and easy-to-make meals just for you.
              </p>
              <button
                onClick={() => navigate("/recipes")}
                className="border border-white text-white px-6 py-2 rounded-sm hover:bg-white hover:text-black transition-colors"
              >
                Explore Recipes
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Simplified Categories */}
      <section className="md:py-8 py-4 px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 text-sm transition-colors ${
                selectedCategory === cat
                  ? "border-b-2 border-gray-800 font-medium"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Recipes - Minimal Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.slice(0, 6).map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
              id={recipe.id}
            />
          ))}
          {filteredRecipes.length === 0 && (
            <p className="col-span-3 text-center py-10 text-gray-500">
              No recipes found in this category.
            </p>
          )}
        </div>

        <div className="text-center mt-12 mb-16">
          <Link
            to="/recipes"
            className="text-gray-800 border px-2 py-1 border-gray-800 pb-1 hover:text-gray-600 transition-colors"
          >
            View all recipes &rarr;
          </Link>
        </div>
      </section>

      {/* Combined Tips & Newsletter Section */}
      <section className="md:py-12 py-6 px-4 border-t">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-medium mb-6 text-center">
            Stay Inspired
          </h2>
          <form className="flex gap-2 mb-12">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-sm hover:bg-gray-700"
            >
              Subscribe
            </button>
          </form>

          <div className="text-sm text-gray-600 space-y-2">
            <p>• Store herbs in ice cube trays with olive oil</p>
            <p>• Use a hot pan to get the perfect sear on meat</p>
            <p>• Keep bread fresh longer by freezing slices</p>
            <p>• Keep your knives sharp for safer & cleaner cuts</p>
          </div>
        </div>
      </section>
    </div>
  );
}
