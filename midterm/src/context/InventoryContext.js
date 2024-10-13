import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
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
