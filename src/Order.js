import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

const Order = props => {
  const [order, setOrder] = useState(0);

  const orderOne = () => setOrder(order + 1);

  return (
    <li className="mx-auto my-2 col-3 p-0 d-flex justify-content-start align-items-center border border-info rounded">
      <RestaurantButton onClick={orderOne} text="add" />
      <p className="m-0">
        {props.orderType}: {order}{" "}
      </p>
    </li>
  );
};

export default Order;
