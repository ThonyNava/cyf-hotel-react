import React from "react";

let Footer = props => {
  return (
    <ul className="text-center mt-4 pt-4">
      {props.arr.map((element, i) => {
        return <li key={i}>{element}</li>;
      })}
    </ul>
  );
};

export default Footer;
