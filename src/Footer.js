import React from "react";

let Footer = props => {
  return (
    <ul>
      {props.arr.map((element, i) => {
        return <li key={i}>{element}</li>;
      })}
    </ul>
  );
};

export default Footer;
