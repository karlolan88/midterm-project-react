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

function App() {
  return (
    <InventoryProvider>
      <Router>
        <nav>
          <ul>
            <li><Link to="/add-item">Add Item</Link></li>
            <li><Link to="/update-item">Update Item</Link></li>
            <li><Link to="/remove-item">Remove Item</Link></li>
            <li><Link to="/display-category">Display Items by Category</Link></li>
            <li><Link to="/display-all">Display All Items</Link></li>
            <li><Link to="/search-item">Search Item</Link></li>
            <li><Link to="/sort-items">Sort Items</Link></li>
            <li><Link to="/low-stock">Low Stock Items</Link></li>
          </ul>
        </nav>
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
