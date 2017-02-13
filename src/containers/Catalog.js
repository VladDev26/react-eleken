import React, {Component} from 'react';
import { connect } from 'react-redux';

import CatalogNav from '../components/CatalogNav';
import Products from '../components/Products';

class Catalog extends Component{
	componentDidMount(){
		this.props.getCatalogNav();
		this.props.setActiveClass('all');

		this.props.setProductsLimit(4);
		this.props.filterProducts();
		this.props.limitProducts();
	}
	render(){
		return (
			<div>
				<h1 className="main-head">catalog</h1>
				<CatalogNav properties={this.props} />
				<Products properties={this.props} />
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		catalogNav: state.catalogNav,
		products: state.products.items,
		filtered: state.products.filtered,
		limit: state.products.limit
	};
};
const mapDispatchToProps = dispatch => {
	return {
		filterProducts: () => dispatch({type: 'FILTER_PRODUCTS'}),
		limitProducts: () => dispatch({type: 'LIMIT_PRODUCTS'}),

		getCatalogNav: () => dispatch({type: 'GET_CATALOG_NAV'}),
		setProductsLimit: num => dispatch({type: 'SET_PRODUCTS_LIMIT', payload: num}),
		setProductsFilter: str => dispatch({type: 'SET_PRODUCTS_FILTER', payload: str}),
		setActiveClass: str => dispatch({type: 'SET_CATALOGNAV_ACTIVE_CLASS', payload: str})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

