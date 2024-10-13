import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const AddItem = () => {
  const { addItem, items } = useContext(InventoryContext); // Include items from context
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
    category: 'Clothing',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent negative values and decimals for quantity
    if (name === 'quantity') {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue) && numericValue > 0) {
        setFormData({ ...formData, quantity: numericValue });
      } else {
        setFormData({ ...formData, quantity: '' }); // Reset if invalid input
      }
    }
    // Prevent negative values for price
    else if (name === 'price') {
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue) && numericValue >= 0) {
        setFormData({ ...formData, price: numericValue });
      } else {
        setFormData({ ...formData, price: '' }); // Reset if invalid input
      }
    }
    // Handle other fields normally
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, quantity, price } = formData;

    // Validations: Ensure fields are not empty and valid
    if (!id || !name || quantity <= 0 || price < 0) {
      setError('Please provide valid inputs for all fields.');
      return;
    }

    // Check for ID duplication
    const idExists = items.some(item => item.id === id);
    if (idExists) {
      setError('The ID you entered already exists in our system. Please enter a unique ID.');
      return;
    }

    const newItem = {
      ...formData,
      quantity: parseInt(quantity, 10), // Ensure quantity is an integer
      price: parseFloat(price), // Ensure price is a float
    };

    addItem(newItem);
    setMessage('Item added successfully!');
    setError('');
    setFormData({ id: '', name: '', quantity: '', price: '', category: 'Clothing' }); // Reset form
  };

  return (
    <div className="add-item-container">
      <div className="add-item-box">
        <h2>Add Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={formData.id}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1" // Prevent less than 1 in input
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0" // Prevent negative prices
            step="0.01" // Allows up to 2 decimal places
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <button type="submit">Add Item</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default AddItem;
