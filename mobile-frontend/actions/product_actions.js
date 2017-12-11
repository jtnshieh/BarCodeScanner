import axios from 'axios';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const fetchProduct = (upc_code) => dispatch => {
  axios.get(`http://localhost:3000/api/products/${upc_code}`, {upc_code})
  .then((response) => {
    dispatch(receiveProduct(response.data.product));
  });
};

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});
