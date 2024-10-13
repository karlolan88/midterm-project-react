import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    // Check for duplicate ID
    const idExists = items.some(existingItem => existingItem.id === item.id);
    if (idExists) {
      console.error('Item ID already exists!'); // Log an error message
      return; // Exit the function if ID is a duplicate
    }

    setItems([...items, item]);
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
    <InventoryContext.Provider value={{ items, addItem, updateItem, removeItem }}>
      {children}
    </InventoryContext.Provider>
  );
};
