import { Link, useNavigate } from "react-router-dom";

const RecipeCard = ({ title, image, description, id }) => {
  return (
    <Link to={`/recipe/${id}`} className="group">
      <div className="overflow-hidden mb-3">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
    </Link>
  );
};

export default RecipeCard;
