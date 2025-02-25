import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange,search, selectedCategory}) {

function handleSearchChange(e){
 onSearchChange(e.target.value)
}
function handleCategoryChange(e){
  onCategoryChange(e.target.value);
}

  
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange} />
      <select name="filter" value={selectedCategory} onChange={onCategoryChange} >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
