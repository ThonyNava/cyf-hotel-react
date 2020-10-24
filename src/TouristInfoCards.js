import React from "react";

let TouristInfoCards = props => {
  return (
    <div className="card mt-4 text-center">
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <a href={props.url} className="btn btn-primary">
          Go {props.name}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
