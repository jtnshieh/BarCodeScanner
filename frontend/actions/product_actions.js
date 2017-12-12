import axios from 'axios';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const fetchProduct = (upc_code) => dispatch => {
  console.log(upc_code);
  axios.get(`https://localhost:3000/api/products/1`, {upc_code})
  .then((response) => console.log(response.json()))
  .catch((error) => console.log(error));
};

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});
