// @flow
import * as apiService from '../services/userServices';

export const session = {
  state: {
    user: null,
    token: null,
    registerRes: null,
    userDetails: null,
  },
  reducers: {
    setUser(state, user) {
      return {...state, user};
    },
    setToken(state, token) {
      return {...state, token};
    },
    setUserProfile(state, userDetails) {
      return {...state, userDetails};
    },
    setRigsterMessage(state, registerRes) {
      return {...state, registerRes};
    },
  },
  effects: (dispatch) => ({
    authenticate: async (data) => {
      try {
        const response = await apiService.login(data);
        if (response.data) {
          dispatch.session.setUser(response.data);
          dispatch.session.setToken(response.data?.token);
        }
      } catch (e) {
        dispatch.alerts.raiseError({
          domain: 'session',
          message: e?.response?.data?.message,
        });
      }
    },
    signUp: async (data) => {
      try {
        const response = await apiService.signUp(data);
        console.log('res', response.data);
        if (response.data) {
          dispatch.session.setRigsterMessage(response.data);
          dispatch.alerts.raiseSuccess({
            domain: 'session',
            message: response?.data.message + ' please login ',
          });
        }
      } catch (e) {
        dispatch.alerts.raiseError({
          domain: 'session',
          message: e?.response?.data?.message,
        });
      }
    },
    getProfile: async (token) => {
      try {
        const response = await apiService.getProfile(token);
        if (response.data) {
          dispatch.session.setUserProfile(response.data);
        }
      } catch (e) {
        dispatch.alerts.raiseError({
          domain: 'session',
          message: e?.response?.data?.message,
        });
      }
    },
    updateProfile: async (data,token) => {
      try {
        const response = await apiService.updateProfile(data,token);
        if (response.data) {
          dispatch.session.setUserProfile(response.data);
        }
      } catch (e) {
        dispatch.alerts.raiseError({
          domain: 'session',
          message: e?.response?.data?.message,
        });
      }
    },
    logout: async () => {
      dispatch.session.setUser(null);
      dispatch.session.setToken(null);
      dispatch.session.setUserProfile(null);
    },
  }),
};
