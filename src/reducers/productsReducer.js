import products from '../const/products';

export default function reducer(state={
	items: [],
	limit: 0,
	id: 'all'
}, action){
	switch (action.type) {
		// case 'FETCH_PRODUCTS':
		// 	return [...products];
		case 'FILTER_PRODUCTS':
			let {id, limit} = state || action.payload;

			const filtered = products.filter(el => el.tags.includes(id));
		 	const limited = filtered.length <= limit ? filtered : filtered.slice(0, limit);

			return {...state, items: limited};

		case 'SET_PRODUCTS_LIMIT':
			return {...state, limit: action.payload};
		case 'SET_PRODUCTS_TAG':
			return {...state, id: action.payload};
		default:
			return state;
	}
}