import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import Routers from './router';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}
export default App;
