import React from "react";
import "../App.css";
const Car = ({ item }) => {
  return (
    <div className="car">
      <h2>{item.modelName}</h2>
      <div>
        <img width="100%" src={item.source} alt="" />
      </div>
      <p>{item.description}</p>
      <p>
        <strong>{item.prize}</strong>
      </p>
    </div>
  );
};

export default Car;
