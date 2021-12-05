import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Car from "./Components/Car";
import { initialCars } from "./cars";
import { additionalCars } from "./cars";
import AddCar from "./Components/AddCar";

const App = () => {
  const [cars, setCars] = useState(initialCars);
  const [flag, setFlag] = useState(false);
  const loadAdditionalCars = (e) => {
    e.preventDefault();
    setFlag(true);
    setCars([...cars, ...additionalCars]);
  };

  return (
    <div>
      <Header text="Tata motors" />
      <p className="App-intro">Some info about tata cars.</p>
      <div className="cars">
        {cars.map((item, key) => (
          //   <div key={key}>
          <Car item={item} />
          //   </div>
        ))}
      </div>
      <div className="add-cars">
        {!flag ? (
          <button
            onClick={(e) => loadAdditionalCars(e)}
            style={{ cursor: "pointer" }}
          >
            See more...
          </button>
        ) : (
          <button
            onClick={(e) => loadAdditionalCars(e)}
            style={{ cursor: "pointer" }}
            disabled
          >
            See more...
          </button>
        )}
      </div>
      <AddCar cars={cars} setCars={setCars} />
    </div>
  );
};
export default App;
