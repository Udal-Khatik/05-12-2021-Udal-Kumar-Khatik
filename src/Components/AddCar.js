import React, { useState } from "react";
import "../App.css";
const AddCar = ({ setCars, cars }) => {
  const [formItems, setFormItems] = useState({
    modelName: "",
    description: "",
    source: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setCars([...cars, formItems]);
    setFormItems({
      modelName: "",
      description: "",
      source: "",
    });
  };
  return (
    <form className="car-form" onSubmit={(e) => onSubmit(e)}>
      <p>Add a Car</p>
      <input
        value={formItems.modelName}
        required
        onChange={(e) =>
          setFormItems({ ...formItems, modelName: e.target.value })
        }
        type="text"
        placeholder="Model name"
      />
      <input
        required
        value={formItems.source}
        onChange={(e) => setFormItems({ ...formItems, source: e.target.value })}
        type="text"
        placeholder="Picture url"
      />
      <textarea
        required
        value={formItems.description}
        onChange={(e) =>
          setFormItems({ ...formItems, description: e.target.value })
        }
        placeholder="Description"
      ></textarea>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;
