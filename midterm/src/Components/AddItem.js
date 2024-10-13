import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const AddItem = () => {
  const { addItem } = useContext(InventoryContext);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
    category: 'Clothing'
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...formData, quantity: Number(formData.quantity), price: Number(formData.price) };
    addItem(newItem);
    setMessage('Item added successfully!');
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
        <select name="category" onChange={handleChange}>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddItem;
