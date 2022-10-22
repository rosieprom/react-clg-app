import React from 'react';
import data from "../../data/food.json";
import FoodListItem from "../foodListItem/foodListItem";

function FoodList() {
  return data.food.map((food, id) => {
    return <FoodListItem key={id} foodData={food} />;
  });
}

export default FoodList;
