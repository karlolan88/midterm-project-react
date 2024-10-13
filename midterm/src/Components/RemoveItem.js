import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const RemoveItem = () => {
  const { items, removeItem } = useContext(InventoryContext);
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = items.find(i => i.id === id);
    if (item) {
      removeItem(id);
      setMessage(`Item ${item.name} has been removed from the inventory`);
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div>
      <h2>Remove Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
        <button type="submit">Remove Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RemoveItem;
