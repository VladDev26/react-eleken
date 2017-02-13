import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import { Router, Route, hashHistory } from 'react-router';

import configureStore from './store/configureStore';

import App from './containers/App';
import Catalog from './containers/Catalog';
import {Home, News, Sale, About, Contact} from './components/Sections';

import 'react-select/dist/react-select.css';
import './styles/index.scss';

const initialState = {};

const store = configureStore(initialState);

// store.subscribe(()=>{
// 	console.log('st', store.getState());
// });

// hashHistory.listen( location =>  {
// 	console.log(location);
// });

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
 				<Route path={'home'} component={Home} />
 				<Route path={'catalog'} component={Catalog} />
 				<Route path={'news'} component={News} />
 				<Route path={'sale'} component={Sale} />
 				<Route path={'about'} component={About} />
 				<Route path={'contact'} component={Contact} />
			</Route>
		</Router>
	</Provider>, 
	document.getElementById('app')
);


