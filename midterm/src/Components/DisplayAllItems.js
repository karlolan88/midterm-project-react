import React, { useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const DisplayAllItems = () => {
  const { items } = useContext(InventoryContext); // Access the inventory items from context

  return (
    <div>
      <h2>All Inventory Items</h2>
      {items.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
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
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items available in the inventory.</p>
      )}
    </div>
  );
};

export default DisplayAllItems;
