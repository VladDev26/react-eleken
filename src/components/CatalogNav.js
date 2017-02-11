import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// import { setActiveClass, getCatalogNav } from '../actions/actions';
const INITIAL_LIMIT = 1;

class CatalogNav extends Component{
	componentDidMount(){
		this.props.getCatalogNav();
		this.props.setActiveClass('all');

		// this.props.fetchProducts();
		this.props.setProductsLimit(INITIAL_LIMIT);
		this.props.filterProducts();
	}
	render(){
		const props = this.props;
		return(
			<ul className="nav flex-column flex-sm-row justify-content-center catalog-nav">
				{props.catalogNav.map(el => (
					<li key={el.path}>
						<a href="javascript:void 0;" className={el.isActive ? 'active' : ''} 
							onClick={() => {
								props.setActiveClass(el.path);
								props.setProductsTag(el.path);
								props.setProductsLimit(INITIAL_LIMIT);
								props.filterProducts();
							}}
						>
							{el.name}
						</a>
					</li>
				))}
			</ul>
		)
	}
};

const mapStateToProps = state => {
	// console.log(state);
	return {
		catalogNav: state.catalogNav
	};
};
const mapDispatchToProps = dispatch => {
	return {
		setProductsTag: str => dispatch({type: 'SET_PRODUCTS_TAG', payload: str}),
		setProductsLimit: num => dispatch({type: 'SET_PRODUCTS_LIMIT', payload: num}),
		setActiveClass: str => dispatch({type: 'SET_CATALOGNAV_ACTIVE_CLASS', payload: str}),
		filterProducts: () => dispatch({type: 'FILTER_PRODUCTS'}),
		getCatalogNav: () => dispatch({type: 'GET_CATALOG_NAV'})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogNav);




