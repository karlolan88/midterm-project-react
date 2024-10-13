import React, { useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const DisplayAllItems = () => {
  const { items } = useContext(InventoryContext); // Access the inventory items from context

  return (
    <div>
      <h1 className="title">All Inventory Items</h1>
      {items.length > 0 ? (
        <div className="table-container">
          <table className="display-items-table">
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
                  <td>{item.price.toFixed(2)}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No items available in the inventory.</p>
      )}
    </div>
  );
};

export default DisplayAllItems;
