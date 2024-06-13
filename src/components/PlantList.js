import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {
  return (
    <ul className="cards">
      {plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(plant => <PlantCard key={plant.id} {...plant} />)}
    </ul>
  );
}

export default PlantList;

