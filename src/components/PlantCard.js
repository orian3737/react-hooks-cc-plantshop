import React, { useState } from "react";

function PlantCard({ id, name, image, price }) {
  const [inStock, setInStock] = useState(true);

  const toggleStock = () => setInStock(!inStock);

  return (
    <li className="card" data-testid="plant-item">
      <img src={`http://localhost:6001/${image}`} alt={name} />
      <h4>{name}</h4>
      <p>Price: {parseFloat(price).toFixed(2)}</p>
      <button onClick={toggleStock}>{inStock ? "In Stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;

