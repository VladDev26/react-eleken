import products from '../const/products';

export default function reducer(state={
	items: [],
	filtered: [],
	limit: 0,
	filter: 'all'
}, action){
	switch (action.type) {
		case 'FILTER_PRODUCTS': {
			let {filter} = state || action.payload;
			const filtered = products.filter(el => el.tags.includes(filter));
		 	
			return {...state, filtered};
		}
		case 'LIMIT_PRODUCTS': {
			let {filtered, limit} = state;
		 	const limited = filtered.length <= limit ? filtered : filtered.slice(0, limit);

			return {...state, items: limited};
		}
		case 'SET_PRODUCTS_LIMIT':
			return {...state, limit: action.payload};
		case 'SET_PRODUCTS_FILTER':
			return {...state, filter: action.payload};
		default:
			return state;
	}
}
