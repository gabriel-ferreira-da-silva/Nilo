import axios from 'axios';

export const fetchItem = async () => {
  try{
    const response = await fetch('http://localhost:4000/auth/item', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
    console.log(response.data);
    return response.data;
  }catch(e){
    throw e;
  }
};

export const postItem = async (userId, cartDate, productId) => {
  try{
    const response = await fetch('http://localhost:4000/auth/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
    console.log(response.data);
    return response.data;
  }catch(e){
    throw e;
  }
};