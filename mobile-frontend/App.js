import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import Routers from './router';
import { StyleSheet, Text, View } from 'react-native';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
