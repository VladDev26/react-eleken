import React, {Component} from 'react';
import { connect } from 'react-redux';

import CatalogNav from '../components/CatalogNav';
import Products from '../components/Products';

class Catalog extends Component{
	componentDidMount(){
		this.props.getCatalogNav();
		this.props.setActiveClass('all');

		this.props.setProductsLimit(1);
		this.props.filterProducts();
		this.props.limitProducts();
	}
	render(){
		return (
			<main>
				<CatalogNav properties={this.props} />
				
				<Products properties={this.props} />
			</main>
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













// class Catalog extends Component{
// 	componentDidMount(){
// 		this.props.getCatalogNav();
// 		this.props.setActiveClass('all');

// 		this.props.setProductsLimit(1);
// 		this.props.filterProducts();
// 	}
// 	render(){
// 		let {
// 			products, limit, catalogNav,
// 			filterProducts, setProductsLimit,
// 			getCatalogNav, setActiveClass, setProductsTag
// 		} = this.props;
// 		return (
// 			<div className="">
// 				<CatalogNav 
// 					catalogNav={catalogNav}
// 					setActiveClass={setActiveClass} 
// 					setProductsTag={setProductsTag}
// 					setProductsLimit={setProductsLimit}
// 					filterProducts={filterProducts}
// 				/>
// 				<Products 
// 					limit={limit}
// 					products={products} 
// 					filterProducts={filterProducts}
// 					setProductsLimit={setProductsLimit}
// 				/>
// 			</div>
// 		);
// 	}
// };
