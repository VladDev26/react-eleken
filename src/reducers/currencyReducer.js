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
			console.log(currency);
			return {...state, currency};

		default:
			return state;
	}
}

// export default function reducer(state=[], action){
// 	switch(action.type){
// 		case 'GET_CATALOG_NAV':
// 			return [...catalogNav];
// 		case 'SET_CATALOGNAV_ACTIVE_CLASS':
// 			return state.map(el => {
// 				if(el.path === action.payload){
// 					return {...el, isActive: true };
// 				}else{
// 					return {...el, isActive: false };
// 				}
// 			});
// 		default:
// 			return state;
// 	}
// }