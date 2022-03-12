// @flow

import * as apiService from '../services/cartServices';

export const cart = {
  state: {
    cartItem: null,
  },
  reducers: {
    setCartItem(state, cartItem) {
      return {...state, cartItem};
    },
  },
  effects: (dispatch) => ({
    getCart: async (token) => {
      try {
        const response = await apiService.getCart(token);
        console.log('res', response.data);
        if (response.data) {
          dispatch.cart.setCartItem(response.data);
        }
      } catch (e) {
        console.log(e);
        dispatch.alerts.raiseError({
          domain: 'cart2',
          message: e?.response?.data?.message,
        });
      }
    },
    addToCart: async (data) => {
      try {
        const response = await apiService.addToCart(data);
        console.log('res', response.data?.length);
        if (response.data) {
          dispatch.cart.getCart(data.token);
        }
      } catch (e) { 
        console.log(e.response.data);
        dispatch.alerts.raiseError({
          domain: 'cart1',
          message: e?.response?.data?.message,
        });
      }
    },
    updateCart: async (data) => {
      try {
        const response = await apiService.updateCart(data);
        console.log('res', response.data?.length);
        if (response.data) {
          dispatch.cart.getCart(data.token);
        }
      } catch (e) {
        dispatch.alerts.raiseError({
          domain: 'cart',
          message: e?.response?.data?.message,
        });
      }
    },
    removeItemCart: async (data) => {
      try {
        const response = await apiService.removeCart(data);
        console.log('res', response.data?.length);
        if (response.data) {
          dispatch.cart.getCart(data.token);
        }
      } catch (e) {
        console.log(e);
        dispatch.alerts.raiseError({
          domain: 'cart',
          message: e?.response?.data?.message,
        });
      }
    },
  }),
};
