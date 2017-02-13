import React, {Component} from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';



import Header from '../components/Header';
import Subscribe from '../components/Subscribe';


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
			</div>
		);
	}
}


const mapStateToProps = state => {
	return {};
};
const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(App);