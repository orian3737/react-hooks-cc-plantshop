import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(plant => ({
          ...plant,
          price: plant.price.toString() // Ensure price is formatted as a string
        }));
        setPlants(formattedData);
      });
  }, []);

  const addNewPlant = (newPlant) => {
    const formattedPlant = {
      ...newPlant,
      price: parseFloat(newPlant.price).toString() 
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(formattedPlant)
    })
    .then(response => response.json())
    .then(plant => {
      plant.price = plant.price.toString();
      setPlants([...plants, plant]);
    });
  };

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search updateSearchTerm={updateSearchTerm} />
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
