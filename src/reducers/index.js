import { combineReducers } from 'redux';

import catalogNav from './catalogNavReducer';
import products from './productsReducer';
import currency from './currencyReducer';
import language from './languageReducer';
import subscribe from './subscribeReducer';

export default combineReducers({
	language, 
	subscribe, 
	currency, 
	catalogNav,
	products
});