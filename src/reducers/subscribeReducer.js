export default function reducer(state={
	value: null,
	valid: false,
	success: false
}, action){
	switch (action.type) {
		case 'SET_EMAIL': {
			let value = action.payload;
			return {...state, value};
		}

		case 'VALIDATE_EMAIL': {
			const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
			let value = state.value;
			let checked = regex.test(value);

			if(!checked){ 
				return {...state, valid: false} 
			}

			return {...state, valid: true};
		}

		case 'MOCK_SENDING_EMAIL': {
			let {valid, success} = state;
			if(!valid) return state;
			return {...state, success: true};
		}
		
		default: 
			return state;
	}
}