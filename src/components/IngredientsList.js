import React from "react";
import Ingredient from "./Ingredient";
import StarRating from "./StarRating";

export default function IngredientsList({ list }) {
  return (
    <>
      <StarRating />
      <ul className="ingredients">
        {list.map((ingredient, i) => (
          <Ingredient key={i} {...ingredient} />
        ))}
      </ul>
    </>
  );
}
