import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Routers from './router';
import { StyleSheet, Text, View } from 'react-native';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}
