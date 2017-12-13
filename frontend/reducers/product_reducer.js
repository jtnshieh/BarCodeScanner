const defaultState = {};

import { RECEIVE_PRODUCT } from '../actions/product_actions';

const productReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default productReducer;
