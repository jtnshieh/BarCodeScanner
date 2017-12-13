import axios from 'axios';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const fetchProduct = (upc_code) => dispatch => {
  axios.get(`https://bar-code-scanner-app.herokuapp.com/api/products/${upc_code}`)
  .then((response) => dispatch(receiveProduct(response.data)))
  .catch((error) => console.log(error));
};

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});
