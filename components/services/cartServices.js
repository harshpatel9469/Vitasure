// @flow
import axios from 'axios';
import {API_URL} from '../Constant';

//getCart api
export const getCart = async (token) => {
  return await axios.get(`${API_URL}/wc/store/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//addToCart api
export const addToCart = async (data) => {
  console.log(data);

  return await axios.post(`${API_URL}/wc/store/cart/add-item`, data.data, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
};

//updateCart api
export const updateCart = async (data) => {
  return await axios.post(`${API_URL}/wc/store/cart/update-item`, data.data, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
};

//removeCart api
export const removeCart = async (data) => {
  return await axios.post(`${API_URL}/wc/store/cart/remove-item`, data.data, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
};
