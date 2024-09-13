import axios from 'axios';

export const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/products/${productId}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};


export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/api/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchProductsBatch = async (currentPage, limit) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/products/batch`, {
      params: {
        _page: currentPage,
        _limit: limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};



export const postProduct = async (data) => {
  try {
    const response = await axios.post(`http://localhost:4000/api/products/`, data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error posting product:', error);
    throw error;
  }
};

export const putProduct = async (productId, data) => {
  try {
    const response = await axios.put(`http://localhost:4000/api/products/${productId}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};


export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`http://localhost:4000/api/products/${productId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};    