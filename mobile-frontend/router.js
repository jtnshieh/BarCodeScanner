import React from 'react';
import { StackNavigator } from 'react-navigation';
import ProductContainer from './components/product_container';

const Routers = StackNavigator(
  {
    Splash: {
      screen: ProductContainer,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },

  { headerMode: 'none' }
);

export default Routers;
