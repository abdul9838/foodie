import React, { useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import recipes from "@/data/recipes";

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-5">
      {/* Search Input */}
      <div className="mb-6">
        <label
          htmlFor="search"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Search Recipes
        </label>
        <input
          id="search"
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg mt-10">
          No recipes found.
        </p>
      )}
    </div>
  );
}
