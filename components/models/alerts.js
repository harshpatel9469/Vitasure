 
import {createModel} from '@rematch/core'; 

export const alerts = createModel()({
  state: {
    all: [],
  },
  reducers: {
    add(state, alert) {
      console.log(alert);
      return {...state, all: state.all.concat([alert])};
    },
  },
  effects: (dispatch) => ({
    async raiseError(payload) {
      dispatch.alerts.add({
        title: 'Error',
        ...payload,
        type: 'error',
      });
    },
    raiseWarning(payload) {
      dispatch.alerts.add({
        title: 'Problem',
        ...payload,
        type: 'warn',
      });
    },
    raiseInfo(payload) {
      dispatch.alerts.add({
        title: 'Info',
        ...payload,
        type: 'info',
      });
    },
    raiseSuccess(payload) {
      dispatch.alerts.add({
        title: 'Success!',
        ...payload,
        type: 'success',
      });
    },
  }),
});
