import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const SortItems = () => {
  const { items } = useContext(InventoryContext); // Access inventory items from context
  const [sortBy, setSortBy] = useState('quantity'); // Default sort by 'quantity'
  const [order, setOrder] = useState('ascending'); // Default sort order 'ascending'

  // Function to sort items based on the selected criteria
  const sortItems = () => {
    let sortedItems = [...items]; // Create a copy of the items array to sort
    if (sortBy === 'quantity') {
      sortedItems.sort((a, b) => a.quantity - b.quantity);
    } else if (sortBy === 'price') {
      sortedItems.sort((a, b) => a.price - b.price);
    }

    if (order === 'descending') {
      sortedItems.reverse(); // Reverse the array for descending order
    }

    return sortedItems;
  };

  return (
    <div>
      <h1 className="title">Sort Items</h1>

      {/* Dropdown for sorting by quantity or price */}
      <div className="sort-container">
        <label htmlFor="sort-by">Sort by: </label>
        <select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="dropdown">
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>

        {/* Dropdown for sorting in ascending or descending order */}
        <label htmlFor="order">Order: </label>
        <select id="order" value={order} onChange={(e) => setOrder(e.target.value)} className="dropdown">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {/* Display sorted items in a table */}
      <table className="display-items-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortItems().map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortItems;
