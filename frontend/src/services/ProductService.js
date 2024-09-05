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


export const postProduct = async (data) => {
  try {
    const response = await axios.post(`http://localhost:4000/products/`, data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error posting product:', error);
    throw error;
  }
};

export const putProduct = async (data) => {
  try {
    const response = await axios.post(`http://localhost:4000/products/`, data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error posting product:', error);
    throw error;
  }
};


export const deleteProduct = async (data) => {
  try {
    const response = await axios.post(`http://localhost:4000/products/`, data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error posting product:', error);
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
  
    