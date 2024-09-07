import axios from 'axios';

export const fetchProductInfo = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/info/product`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
