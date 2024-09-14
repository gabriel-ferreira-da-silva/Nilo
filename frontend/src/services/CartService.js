import axios from 'axios';


export const fetchAllCarts = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/api/cart`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};


export const fetchCartCurrent = async (userId) => {
  try {
    const response = await axios.get('http://localhost:4000/api/cart/user/current', {
      params: { id_user: userId } // Send userId as a query parameter
    });
    console.log('FetchCartCurrent Response:', response.data); // Log to verify data
    return response.data;
  } catch (error) {
    console.error('Error fetching current cart:', error);
    throw error;
  }
};




export const postCart = async (userId) => {
  try {
    const response = await axios.post(`http://localhost:4000/api/cart`, {id_user:userId});
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error posting product:', error);
    throw error;
  }
};
