// @flow

import * as apiService from '../services/productServices';

export const product = {
  state: {
    allProducts: null,
    productDetails: null,
  },
  reducers: {
    setProduct(state, allProducts) {
      return {...state, allProducts};
    },
    setProductDetails(state, productDetails) {
      return {...state, productDetails};
    },
  },
  effects: (dispatch) => ({
    getProducts: async () => {
      try {
        const response = await apiService.getProduct(); 
        if (response.data) {
          dispatch.product.setProduct(response.data);
        }
      } catch (e) {
        console.log(e);
        dispatch.alerts.raiseError({
          domain: 'product',
          message: e?.response?.data?.message,
        });
      }
    },
    getProductById: async (id) => {
      try {
        const response = await apiService.getProductById(id); 
        if (response.data) {
          dispatch.product.setProductDetails(response.data);
        }
      } catch (e) {
        console.log(e);
        dispatch.alerts.raiseError({
          domain: 'product',
          message: e?.response?.data?.message,
        });
      }
    },
  }),
};
