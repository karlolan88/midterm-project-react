import React, { useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const DisplayLowStockItems = () => {
  const { items } = useContext(InventoryContext); // Access inventory items from context

  // Filter items with quantity of 5 or below
  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div className="low-stock-container">
      <h2 className="title">Low Stock Items (Quantity ≤ 5)</h2>

      {lowStockItems.length > 0 ? (
        <table className="display-items-table" border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>No low stock items found.</p>
      )}
    </div>
  );
};

export default DisplayLowStockItems;
