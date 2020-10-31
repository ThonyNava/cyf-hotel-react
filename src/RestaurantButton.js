import React, { useState } from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.onClick} className="btn btn-info mr-2">
      {props.text}
    </button>
  );
};

export default RestaurantButton;
