import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CartPage from './pages/CartPage';
import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import DetailsProductPage from './pages/DetailsProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/productlist" element={<ProductListPage />} />
        <Route path="/product/add" element={<AddProductPage />} />
        <Route path="/product/edit/:productId" element={<EditProductPage/>} />
        <Route path="/product/details/:productId" element={<DetailsProductPage/>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
