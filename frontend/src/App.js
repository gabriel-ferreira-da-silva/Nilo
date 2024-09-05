import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CartPage from './pages/CartPage';
import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/productlist" element={<ProductListPage />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
