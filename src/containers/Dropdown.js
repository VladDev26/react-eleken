import React, {Component} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';


class Dropdown extends Component{
	componentDidMount(){
		this.props.fetchCurrencies();
		this.props.setCurrency('us');

		this.props.fetchLanguages();
		this.props.setLanguage('en');
	}

	render(){
		const {
			currencies, currency, 
			languages, language,
			fetchCurrencies, setCurrency,
			fetchLanguages, setLanguage
		} = this.props;
		return(
			<div className='dropdown'>
				<Select className='dropdown__select dropdown__select--curr'
					clearable={false}
					searchable={false}
					value={currency}
					options={currencies}
					onChange={e => setCurrency(e.value)}
				/>
				<span className="dropdown__greyline"></span>
				<Select className='dropdown__select dropdown__select--lang'
					clearable={false}
					searchable={false}
					value={language}
					options={languages}
					onChange={e => setLanguage(e.value)}
				/>
			</div>
		);
	}
};


const mapStateToProps = state => {
	return {
		currencies: state.currency.currencies,
		currency: state.currency.currency,

		languages: state.language.languages,
		language: state.language.language,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		fetchCurrencies: () => dispatch({type: 'FETCH_CURRENCIES'}),
		setCurrency: str => dispatch({type: 'SET_CURRENCY', payload: str}),

		fetchLanguages: () => dispatch({type: 'FETCH_LANGUAGES'}),
		setLanguage: str => dispatch({type: 'SET_LANGUAGE', payload: str})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);













