import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import DetailsProductPage from './pages/DetailsProductPage';
import LoginPage from './component/LoginPage/LoginPage';



function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {

  const token = getToken();

  if(!token) {
    return <LoginPage setToken={setToken} />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/login" element={<LoginPage /> }/>
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
