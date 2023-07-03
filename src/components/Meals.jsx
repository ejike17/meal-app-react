import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const Meals = () => {
  const context = useGlobalContext();
  const { meals, loading, handleFavorites } = context;

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (meals === null) {
    return (
      <div>
        <h2>Sorry your result return no matching meal...</h2>
      </div>
    );
  }

  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal: id, strMeal: name, strMealThumb: image } = meal;
        return (
          <div key={id} className="card">
            <Link to={`/meal/${id}`}>
              <img
                src={image}
                alt={name}
                className="rounded card-img-top meal-img"
              />
            </Link>
            <div className="card-body d-flex justify-content-center align-items-space-between">
              {name}
              <button className="btn btn-warning ms-auto" onClick={()=>handleFavorites(id)}>Like</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Meals;
