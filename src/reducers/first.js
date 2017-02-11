
import catalogNav from '../const/catalogNav';



// export function filterProducts(state = {}, action) {
// 	switch (action.type) {
// 		case 'FILTER_PRODUCTS':
// 			return filter(action.payload);
// 		default:
// 			return state;
// 	}
// }
export function changeCurrency(state = {}, action) {
	switch (action.type) {
		case 'CHANGE_CURRENCY':
			return action.payload;
		default:
			return state;
	}
}
export function changeLang(state = {}, action) {
	switch (action.type) {
		case 'CHANGE_LANG':
			return action.payload;
		default:
			return state;
	}
}


// export function getCatalogNav(state = [], action) {
// 	switch (action.type) {
// 		case 'GET_CATALOG_NAV':
// 			return catalogNav;
// 		case 'SET_ACTIVE_CLASS':
// 			let {nav, i} = action.payload;

// 			// console.log(i);
// 			for(let el of nav){el.isActive = false;}
// 			nav[i].isActive = true;
// 			// console.log(nav);
// 			return nav;
// 		default:
// 			return state;
// 	}
// }







