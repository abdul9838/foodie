import { useParams } from "react-router-dom";
import recipes from "../data/recipes"; // adjust the path as needed

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div className="p-4 text-red-600">Recipe not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      <h1 className="text-lg font-bold mb-4 text-green-500">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover rounded mb-6"
      />
      <p className="text-lg text-gray-700 mb-6">{recipe.description}</p>

      {recipe.recipe && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-6 text-gray-800">
            {recipe.recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-2">Steps</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            {recipe.recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
