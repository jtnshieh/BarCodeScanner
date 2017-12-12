import merge from 'lodash/merge';
const defaultState = [];

import { RECEIVE_PRODUCT } from '../actions/product_actions';

const productReducer = (state = defaultState, action) => {
  // console.log("I am in reducer", action);
  switch(action.type) {
    case RECEIVE_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default productReducer;
