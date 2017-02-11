import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';



import Header from '../components/Header';


class App extends Component{
	componentDidMount(){
		browserHistory.push('catalog');
	}

	render(){
		return(
			<div className="wrapper">
				
				{this.props.children}
			</div>
		);
	}
}
// class App extends Component{
// 	componentDidMount(){
// 		browserHistory.push('catalog');
// 	}

// 	render(){
// 		return(
// 			<div className="wrapper">
// 				<Header />
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }


const mapStateToProps = state => {
	return {};
};
const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(App);