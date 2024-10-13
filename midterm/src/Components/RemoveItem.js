import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const RemoveItem = () => {
    const { items, removeItem } = useContext(InventoryContext);
    const [itemId, setItemId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setItemId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if item exists
        const itemExists = items.some(item => item.id === itemId);
        if (!itemExists) {
            setError('Item not found. Please enter a valid ID.');
            return;
        }

        // Remove item
        removeItem(itemId);
        setMessage('Item removed successfully!');
        setError('');
        setItemId(''); // Reset input field
    };

    return (
        <div className="add-item-container">
            <h2 className="title">Remove Item</h2>
            <div className="add-item-box">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Item ID"
                        value={itemId}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Remove Item</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default RemoveItem;
