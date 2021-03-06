import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div className="text-center">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
