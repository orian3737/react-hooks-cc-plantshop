import React, { useState } from "react";

function Search({ updateSearchTerm }) {
  const [term, setTerm] = useState("");

  const handleSearchChange = (event) => {
    const newTerm = event.target.value;
    setTerm(newTerm);
    updateSearchTerm(newTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Type a name to search..."
        value={term}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;

