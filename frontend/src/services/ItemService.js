import axios from 'axios';


export const fetchAllItem = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/api/item`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const postItem = async (id,userId,cartDate) => {
  try {
    const response = await axios.post(`http://localhost:4000/api/item`, {id_product:id,id_user:userId,cart_date:cartDate});
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error posting product:', error);
    throw error;
  }
};
