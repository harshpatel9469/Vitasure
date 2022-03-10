// @flow

import * as apiService from '../services/productServices';

export const product = {
  state: {
    allProducts: null,
  },
  reducers: {
    setProduct(state, allProducts) {
      return {...state, allProducts};
    },
  },
  effects: (dispatch) => ({
    getProducts: async () => {
      try { 
        const response = await apiService.getProduct();
        console.log('res', response.data?.length);
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
  }),
};
