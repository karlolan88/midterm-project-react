import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryContext';
import AddItem from './Components/AddItem';
import UpdateItem from './Components/UpdateItem';
import RemoveItem from './Components/RemoveItem';
import DisplayItemsByCategory from './Components/DisplayItemsByCategory';
import DisplayAllItems from './Components/DisplayAllItems';
import SearchItem from './Components/SearchItem';
import SortItems from './Components/SortItems';
import DisplayLowStockItems from './Components/DisplayLowStockItems';
import './Styles.css';

function App() {
  return (
    <InventoryProvider>
      <Router>
        <div className="title">Inventory Management System</div>
        <div className="subtitle">For Clothing, Electronics, and Entertainment</div>
        <div className="options-container">
          <div className="option"><Link to="/add-item">Add Item</Link></div>
          <div className="option"><Link to="/update-item">Update Item</Link></div>
          <div className="option"><Link to="/remove-item">Remove Item</Link></div>
          <div className="option"><Link to="/display-category">Display Items by Category</Link></div>
          <div className="option"><Link to="/display-all">Display All Items</Link></div>
          <div className="option"><Link to="/search-item">Search Item</Link></div>
          <div className="option"><Link to="/sort-items">Sort Items</Link></div>
          <div className="option"><Link to="/low-stock">Low Stock Items</Link></div>
        </div>

        {/* Routes for different components */}
        <Routes>
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/update-item" element={<UpdateItem />} />
          <Route path="/remove-item" element={<RemoveItem />} />
          <Route path="/display-category" element={<DisplayItemsByCategory />} />
          <Route path="/display-all" element={<DisplayAllItems />} />
          <Route path="/search-item" element={<SearchItem />} />
          <Route path="/sort-items" element={<SortItems />} />
          <Route path="/low-stock" element={<DisplayLowStockItems />} />
        </Routes>
      </Router>
    </InventoryProvider>
  );
}

export default App;
