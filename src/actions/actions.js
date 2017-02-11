// function authHasErrored(bool) {
//     return {
//         type: 'AUTH_HAS_ERRORED',
//         hasErrored: bool
//     };
// }

// function authSetToken(token) {
//     return {
//         type: 'AUTH_SET_TOKEN',
//         authToken: token
//     };
// }


export function setActiveClass(obj) {
    return {
        type: 'SET_ACTIVE_CLASS',
        payload: obj
    };
}


export function filterProducts(obj) {
    return {
        type: 'FILTER_PRODUCTS',
        payload: obj
    };
}

export function changeCurrency(obj) {
    return {
        type: 'CHANGE_CURRENCY',
        payload: obj
    };
}

export function changeLang(obj) {
    return {
        type: 'CHANGE_LANG',
        payload: obj
    };
}

export function getCatalogNav(arr) {
    return {
        type: 'GET_CATALOG_NAV',
        payload: arr
    };
}

export function setCatalogNav(obj) {
    return {
        type: 'SET_CATALOG_NAV',
        payload: obj
    };
}


































// export default function authAuthorize(event, url, username, password){
// 	return dispatch => {
// 		event.preventDefault();
// 		if( validateAuth(username, password, dispatch)) return null;

// 		requestAuth(url, username, password, dispatch)
// 			.then(data => {
// 				if(!data.success) {
// 					dispatch(authShowAlert(AuthAlerts.serverError(data.message)));
// 					return dispatch(authHasErrored(true));
// 				}
// 				dispatch(authSetLogin(username));
// 				dispatch(authSetToken(data.token));
// 				dispatch(authIsLogged(true));
// 				dispatch(authHasErrored(false));
// 				return {
// 			        type: 'AUTHORIZE',
// 			        data
// 			    };
// 			});
// 	};
// }