import { combineReducers } from 'redux';
import * as first from './first';
import catalogNav from './catalogNavReducer';
import products from './productsReducer';

export default combineReducers({
	first, 
	catalogNav,
	products
});