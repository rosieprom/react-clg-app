import React from 'react';

function FoodListItem(props) {
  return (
    <div>
      {props.foodData.haveTried && <h1>MUST TRY</h1>}
      <img src={props.foodData.image} height={280} alt={props.foodData.title} />
      <h3>
        {props.foodData.title} |{" "}
        {props.foodData.rating > 0 ? `${props.foodData.rating}/5` : `No Rating`}
      </h3>
      <p>{props.foodData.description}</p>
    </div>
  );
}

export default FoodListItem;
