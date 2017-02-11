import React, {Component} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import {changeCurrency, changeLang} from '../actions/actions';

import {currencies, languages} from '../const/dropdowns';


class Dropdown extends Component{
	componentDidMount(){
		this.props.setCurrency(currencies[0]);
		this.props.setLang(languages[0]);
	}

	render(){
		const props = this.props;
		return(
			<div className='dropdown'>
				<Select className='dropdown__select dropdown__select--curr'
					clearable={false}
					searchable={false}
					value={props.currency}
					options={currencies}
					onChange={props.setCurrency}
				/>
				<span className="dropdown__greyline"></span>
				<Select className='dropdown__select dropdown__select--lang'
					clearable={false}
					searchable={false}
					value={props.lang}
					options={languages}
					onChange={props.setLang}
				/>
			</div>
		);
	}
};


const mapStateToProps = state => {
	return {
		currency: state.changeCurrency.value,
		lang: state.changeLang.value
	};
};
const mapDispatchToProps = dispatch => {
	return {
		setCurrency: obj => dispatch(changeCurrency(obj)),
		setLang: obj => dispatch(changeLang(obj))
	};
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Dropdown);





























// const Dropdown = props => {
// 	let dropdown = (
// 		<div className="dropdown-menu">
// 			<a className="dropdown-item" href="#">dollars</a>
// 			<a className="dropdown-item" href="#">hrivnas</a>
// 			<a className="dropdown-item" href="#">euros</a>
// 		</div>
// 	);
// 	return(
// 		<div className="dropdown show">
// 			<button className="btn btn-secondary dropdown-toggle">
// 				hello
// 			</button>

// 			{dropdown}
// 		</div>
// 	);
// };

// export default Dropdown;















// import React, {Component} from 'react';

// class Dropdown extends Component{
// 	render(){
// 		let dropdown = (
// 			<div className="dropdown-menu">
// 				<a className="dropdown-item" href="#" 
// 					onClick={e => this.hello2(e, 'dollars')}
// 				>dollars</a>
// 				<a className="dropdown-item" href="#" 
// 					onClick={e => this.hello2(e, 'hrivnas')}
// 				>hrivnas</a>
// 				<a className="dropdown-item" href="#" 
// 					onClick={e => this.hello2(e, 'euros')}
// 				>euros</a>
// 			</div>
// 		);
// 		let state = this.state;
// 		return(
// 			<div className="dropdown show">
// 				<button className="btn btn-secondary dropdown-toggle"
// 					onClick={this.hello.bind(this)}>
// 					{state.aaa}
// 				</button>

// 				{!state.flag ? null : dropdown}
// 			</div>
// 		);
// 	}
// };

// export default Dropdown;


