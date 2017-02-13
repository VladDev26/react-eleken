import React, {Component} from 'react';
import { hashHistory } from 'react-router';



import Header from '../components/Header';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';


class App extends Component{
	componentDidMount(){
		hashHistory.push('catalog');
	}

	render(){
		return(
			<div className="wrapper">
				<Header />
				{this.props.children}
				<Subscribe />
				<Footer />
			</div>
		);
	}
}
export default App;

