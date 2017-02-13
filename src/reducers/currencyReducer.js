import {currencies} from '../const/dropdowns';

export default function reducer(state = {
	currencies: [],
	currency: null
}, action) {
	switch (action.type) {
		case 'FETCH_CURRENCIES':
			return {...state, currencies};

		case 'SET_CURRENCY':
			let currency = action.payload;
			return {...state, currency};

		default:
			return state;
	}
}