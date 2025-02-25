import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText]=useState("")
  const[itemList,setItemList]=useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(newSearchText){
    setSearchText(newSearchText)
  }
  function handleItemFormSubmit(newItem){
    setItemList((prevItems)=>[...prevItems,newItem]);
  }

  const itemsToDisplay = itemList.filter((item) => {
    const matchedCategory= selectedCategory === "All" || item.category===selectedCategory; 
    const matchedSearch=item.name.toLowerCase().includes(searchText.toLowerCase());

    return matchedCategory && matchedSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={handleItemFormSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      search={searchText} 
      onSearchChange={handleSearchChange} 
      selectedCategory={selectedCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
