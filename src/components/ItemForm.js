import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [formData,setFormData]=useState({
    id: uuid(), 
    name: "",
    category: "Produce",
  })

  function handleChange(e){
    const name=e.target.name;
    const value=e.target.value;

    setFormData({
      ...formData,
      [name]:value,
    });

  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onItemFormSubmit(formData);

    setFormData({
      id: uuid(), 
      name: "",
      category: "Produce",});

  
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
