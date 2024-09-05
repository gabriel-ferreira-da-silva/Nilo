// src/services/productService.js
import axios from 'axios';

export const fetchProduct = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:4000/products/${productId}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };
  
export const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };
  
    