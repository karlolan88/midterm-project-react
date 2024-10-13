import React, { useContext, useState } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const DisplayItemsByCategory = () => {
  const { items } = useContext(InventoryContext);
  
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState('Clothing');

  // Function to filter items by the selected category
  const getItemsByCategory = (category) => {
    return items.filter(item => item.category === category);
  };

  // Categories for the dropdown
  const categories = ['Clothing', 'Electronics', 'Entertainment'];

  // Handle category selection change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h1 className="title">Display Items by Category</h1>

      {/* Centered Dropdown */}
      <div className="dropdown-container">
        <select value={selectedCategory} onChange={handleCategoryChange} className="category-dropdown">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display table for the selected category */}
      <h2 className="subtitle">{selectedCategory}</h2>
      <table className="display-items-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {getItemsByCategory(selectedCategory).map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayItemsByCategory;
