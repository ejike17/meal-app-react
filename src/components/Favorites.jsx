import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";


const Favorites = () => {
  const context = useGlobalContext();
  const { favorites, removeFavorites } = context;
  return (
    <section className="favorite-section mt-4 rounded">
      {favorites.map((favorite) => {
        const { idMeal: id, strMealThumb: image } = favorite;
        return (
          <div key={id} className="">
            <Link to={`/meal/${id}`}>
              <img src={image} style={{ width: "10%", borderRadius: "50%" }} />
            </Link>
            <button
              className="btn btn-success btn-sm"
              onClick={() => removeFavorites(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Favorites;
