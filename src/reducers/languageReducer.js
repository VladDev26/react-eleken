import {languages} from '../const/dropdowns';

export default function reducer(state = {
	languages: [],
	language: null
}, action) {
	switch (action.type) {
		case 'FETCH_LANGUAGES':
			return {...state, languages};

		case 'SET_LANGUAGE':
			let language = action.payload;
			return {...state, language};

		default:
			return state;
	}
}
