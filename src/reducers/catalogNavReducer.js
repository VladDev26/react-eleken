import catalogNav from '../const/catalogNav';

export default function reducer(state=[], action){
	switch(action.type){
		case 'GET_CATALOG_NAV':
			return [...catalogNav];
		case 'SET_CATALOGNAV_ACTIVE_CLASS':
			// for(let el of state){el.isActive = false;}
			return state.map(el => {
				if(el.path === action.payload){
					// return Object.assign({}, el, { isActive: true });
					return {...el, isActive: true };
				}else{
					return {...el, isActive: false };
				}
			});
		default:
			return state;
	}
}