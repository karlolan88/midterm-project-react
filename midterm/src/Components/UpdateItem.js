import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const UpdateItem = () => {
    const { items, updateItem } = useContext(InventoryContext);
    const [formData, setFormData] = useState({
        id: '',
        field: 'quantity',
        newValue: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, field, newValue } = formData;

        // Check if item exists
        const itemExists = items.some(item => item.id === id);
        if (!itemExists) {
            setError('Item not found. Please enter a valid ID.');
            return;
        }

        // Ensure newValue is a number if the field is price or quantity
        const parsedValue = field === 'price' ? parseFloat(newValue) : parseInt(newValue, 10);
        
        // If parsedValue is NaN, display an error
        if (isNaN(parsedValue)) {
            setError('Please enter a valid number for the new value.');
            return;
        }

        // Update item
        updateItem(id, field, parsedValue);
        setMessage('Item updated successfully!');
        setError('');
    };

    return (
        <div className="add-item-container">
            <h2 className="title">Update Item</h2>
            <div className="add-item-box">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="id"
                        placeholder="Enter Item ID"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                    <select name="field" value={formData.field} onChange={handleChange}>
                        <option value="quantity">Quantity</option>
                        <option value="price">Price</option>
                    </select>
                    <input
                        type="text"
                        name="newValue"
                        placeholder="New Value"
                        value={formData.newValue}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Update Item</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default UpdateItem;
