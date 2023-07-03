import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";

const SingleMeal = () => {
  const params = useParams();
  const context = useGlobalContext();
  const { meals } = context;
  const [singleMeal, setSingleMeal] = useState({});

  const fetchSingleMeal = (id) => {
    const selectedMeal = meals.find((meal) => meal.idMeal === id);
    setSingleMeal(selectedMeal);
  };

  useEffect(() => {
    fetchSingleMeal(params.id);
  }, [params.id]);

  console.log(singleMeal);
  const {
    strMeal: name,
    strMealThumb: image,
    strInstructions: steps,
  } = singleMeal;
  return (
    <div className="card py-4 align-items-center ">
      <img src={image} className="card-img-top" style={{ maxWidth: "40%" }} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3>Step by Step instructions</h3>
        <p className="card-text">{steps}</p>
        <Link to={"/"}>Go back home</Link>
      </div>
    </div>
  );
};

export default SingleMeal;
