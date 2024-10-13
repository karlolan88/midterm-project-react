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
      <h2>Search Item by ID</h2>
      
      {/* Search input field */}
      <label htmlFor="search-id">Enter Item ID: </label>
      <input 
        type="text" 
        id="search-id" 
        value={searchId} 
        onChange={(e) => setSearchId(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display found item details */}
      {itemFound ? (
        <div>
          <h3>Item Details:</h3>
          <p><strong>ID:</strong> {itemFound.id}</p>
          <p><strong>Name:</strong> {itemFound.name}</p>
          <p><strong>Quantity:</strong> {itemFound.quantity}</p>
          <p><strong>Price:</strong> ${itemFound.price}</p>
          <p><strong>Category:</strong> {itemFound.category}</p>
        </div>
      ) : (
        errorMessage && <p>{errorMessage}</p> // Display 'Item not found!' if not found
      )}
    </div>
  );
};

export default SearchItem;
