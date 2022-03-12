// @flow
import axios from 'axios';
import {API_URL} from '../Constant';

//login api
export const login = async (data) => {
  return await axios.post(`${API_URL}/jwt-auth/v1/token`, data,{
    headers: {
      Bearer: `vitasure_@07_secret`,
    },
  });
};
//signUp api
export const signUp = async (data) => {
  return await axios.post(`${API_URL}/wp/v2/users/register`, data);
};

//get Profile api
export const getProfile = async (token) => {
  return await axios.get(`${API_URL}/wp/v2/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
//updateProfile  api
export const updateProfile = async (data,token) => {
  return await axios.post(`${API_URL}/wp/v2/users/register`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
