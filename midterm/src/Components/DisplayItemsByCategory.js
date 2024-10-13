import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const DisplayItemsByCategory = () => {
  const { items } = useContext(InventoryContext); // Access the inventory items from context
  const [selectedCategory, setSelectedCategory] = useState('Clothing');
  
  // Filter items based on selected category
  const filteredItems = items.filter(item => item.category === selectedCategory);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h2>Display Items by Category</h2>
      
      {/* Category dropdown for selecting category */}
      <label>Select Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      {filteredItems.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items found in the selected category.</p>
      )}
    </div>
  );
};

export default DisplayItemsByCategory;
