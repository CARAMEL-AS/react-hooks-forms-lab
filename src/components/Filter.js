import React from "react";

function Filter({ search, onSearchChange, changeCategory }) {
  return (
    <div className="Filter">
      <input value={search} onChange={onSearchChange} type="text" name="search" id='screen' placeholder="Search..." />
      <select name="filter" onChange={changeCategory} >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
