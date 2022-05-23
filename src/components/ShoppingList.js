import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [allItems, setAllItems] = useState([])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const addNewItemsToList = (newItem) => {
    allItems.push({...newItem, id: allItems.length + 1})
    setAllItems([...allItems, {...newItem, id: allItems.length + 1}])
  }

  const handleFiltering = (item) => {
    if(selectedCategory === 'All' && search.length === 0) {
      return true;
    } else if(selectedCategory === 'All' && search.length > 0) {
      return item.name.toLowerCase().includes(search.toLowerCase())
    } else if(selectedCategory !== 'All' && search.length === 0) {
      return item.category === selectedCategory;
    } else {
      return item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase());
    }
  }

  useEffect(() => {
    setAllItems(items)
  },[allItems])

  return (
    <div className="ShoppingList">
      <ItemForm add={addNewItemsToList}/>
      <Filter search={search} onSearchChange={handleSearchChange} changeCategory={handleCategoryChange}/>
      <ul className="Items">
        {allItems.filter(item => handleFiltering(item)).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
