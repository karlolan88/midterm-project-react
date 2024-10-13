import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const UpdateItem = () => {
  const { items, updateItem } = useContext(InventoryContext);
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = items.find(i => i.id === id);
    if (item) {
      const oldValue = item[field];
      updateItem(id, field, Number(newValue));
      setMessage(`Item ${item.name} updated: ${field} from ${oldValue} to ${newValue}`);
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
        <select value={field} onChange={(e) => setField(e.target.value)}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input type="number" placeholder="New Value" value={newValue} onChange={(e) => setNewValue(e.target.value)} required />
        <button type="submit">Update Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;
