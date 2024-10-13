import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const addItem = (item) => {
    // Check for duplicate ID
    const idExists = items.some(existingItem => existingItem.id === item.id);
    if (idExists) {
      setErrorMessage("The ID you entered already exists in our system. Please enter a unique ID.");
      return; // Exit the function if ID is a duplicate
    }

    setItems([...items, item]);
    setErrorMessage(''); // Clear error message if item added successfully
  };

  const updateItem = (id, field, newValue) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, [field]: newValue } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <InventoryContext.Provider value={{ items, addItem, updateItem, removeItem, errorMessage }}>
      {children}
    </InventoryContext.Provider>
  );
};
