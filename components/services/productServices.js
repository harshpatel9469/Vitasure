// @flow
import axios from 'axios';
import {API_URL} from '../Constant';

//getProduct api
export const getProduct = async () => {
  return await axios.get(`${API_URL}/wc/store/products`);
};
export const getProductById = async (id) => {
  return await axios.get(`${API_URL}/wc/store/products/${id}`);
};
