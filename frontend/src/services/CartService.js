import axios from 'axios';

export const fetchCartByUser = async (userId) => {
  try{
    const response = await fetch('http://localhost:4000/auth/cart/user', {
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

export const fetchCartByUserCurrent = async (userId) => {
  try{
    const response = await fetch('http://localhost:4000/auth/cart/user/current', {
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

export const postCart = async (userId) => {
  try{
    const response = await fetch('http://localhost:4000/auth/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id_user:userId})
    })
      .then(data => data.json())
      return response.data;
  }catch(e){
    throw e;
  }
};