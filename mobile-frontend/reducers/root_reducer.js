import { combineReducers } from 'redux';
import productReducer from './product_reducer';

const RootReducer = combineReducers({
  product: productReducer
});

export default RootReducer;
