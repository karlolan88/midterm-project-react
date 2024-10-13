import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const SearchItem = () => {
  const { items } = useContext(InventoryContext); // Access inventory items from context
  const [searchId, setSearchId] = useState('');
  const [itemFound, setItemFound] = useState(null); // To store the found item or null if not found
  const [errorMessage, setErrorMessage] = useState(''); // For handling the 'Item not found' message

  const handleSearch = () => {
    const foundItem = items.find(item => item.id === searchId); // Find item by ID
    if (foundItem) {
      setItemFound(foundItem);
      setErrorMessage('');
    } else {
      setItemFound(null);
      setErrorMessage('Item not found!');
    }
  };

  return (
    <div>
      <h1 className="title">Search Item by ID</h1>

      {/* Search input field container */}
      <div className="add-item-container">
        <label htmlFor="search-id">Enter Item ID: </label>
        <input 
          type="text" 
          id="search-id" 
          className="add-item-box" // Apply same styling as Add Item
          value={searchId} 
          onChange={(e) => setSearchId(e.target.value)} 
        />
        <button onClick={handleSearch} className="add-item-button">Search</button>
      </div>

      {/* Display found item details */}
      {itemFound ? (
        <div>
          <h3 className="subtitle">Item Details:</h3>
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
              <tr key={itemFound.id}>
                <td>{itemFound.id}</td>
                <td>{itemFound.name}</td>
                <td>{itemFound.quantity}</td>
                <td>${itemFound.price.toFixed(2)}</td>
                <td>{itemFound.category}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        errorMessage && <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default SearchItem;
