import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ add }) {

  const clickButtonHandler = (e) => {
    e.preventDefault();
    add(newItem)
    setNewItem({...newItem, name: ''})
  }

  const [newItem, setNewItem] = useState({
    name: '',
    category: 'Produce',
  })

  return (
    <form className="NewItem">
      <label>
        Name:
        <input onChange={(event) => setNewItem({...newItem, name: event.target.value})} value={newItem.name} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={(event) => setNewItem({...newItem, category: event.target.value })}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onClick={clickButtonHandler} type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
