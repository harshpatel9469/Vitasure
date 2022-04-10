// @flow
import React, {Component} from 'react';
import {init} from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import {Provider as ReduxProvider} from 'react-redux';
import {persistCombineReducers, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import reduxLogger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import models from './components/models';
import {name as appName} from './app.json';
import Navigator from './components/Navigator';
import {StatusBar} from 'react-native';
const middlewares = [];

if (__DEV__) {
  // middlewares.push(reduxLogger);
}

const reduxConfig = {
  combineReducers: persistCombineReducers.bind(null, {
    key: `@${appName}:redux`,
    storage: AsyncStorage,
    whitelist: ['session'],
    version: 1,
    throttle: 2000,
  }),
  middlewares: middlewares,
};

const store = init({
  models,
  plugins: [createLoadingPlugin()],
  redux: reduxConfig,
});

const persistor = persistStore(store);

export default class AppComponent extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar />
          <Navigator />
        </PersistGate>
      </ReduxProvider>
    );
  }
}
