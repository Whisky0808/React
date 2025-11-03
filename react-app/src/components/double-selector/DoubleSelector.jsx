import React, { useState } from "react";

const items = [
  { name: "apple", category: "fruit" },
  { name: "Cucumber", category: "vegetable" },
  { name: "Banana", category: "fruit" },
  { name: "Celery", category: "vegetable" },
  { name: "orange", category: "fruit" },
  { name: "sausage", category: "meat" },
  { name: "bacon", category: "meat" },
];

export default function DoubleSelector() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  // get unique categories
  const categories = [...new Set(items.map((item) => item.category))];

  // filter items by selected category
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
    const filteredItem = items.find(
      (item) => item.category === e.target.value
    );
    if (!filteredItem) setSelectedItem("");
    else setSelectedItem(filteredItem.name);
  }

  function handleItemChange(e) {
    setSelectedItem(e.target.value);
    const filterCategory = items.find((item)=>item.name === e.target.value);
    if(!filterCategory) setSelectedCategory("");
    else setSelectedCategory(filterCategory.category);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Select Category and Item</h2>

      {/* Select category */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">-- Select a category --</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <br />
      <br />

      {/* Select item */}
      <select
        value={selectedItem}
        onChange={handleItemChange}
        disabled={!selectedCategory}
      >
        <option value="">-- Select an item --</option>
        {filteredItems.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <br />
      <br />

      {/* Display selected item name */}
      {selectedItem && (
        <div>
          <strong>Selected Item:</strong> {selectedItem}
        </div>
      )}

      {selectedCategory && (
        <div>
          <strong>Selected Category:</strong> {selectedCategory}
        </div>
      )}
    </div>
  );
}
