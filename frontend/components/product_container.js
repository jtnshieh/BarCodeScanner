import { connect } from 'react-redux';
import Product from './product';
import { fetchProduct } from '../actions/product_actions';

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: (upc_code) => dispatch(fetchProduct(upc_code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
