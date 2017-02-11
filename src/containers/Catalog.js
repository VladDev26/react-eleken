import React, {Component} from 'react';
import { connect } from 'react-redux';

import CatalogNav from '../components/CatalogNav';
import Products from '../components/Products';

class Catalog extends Component{
	
	render(){
		let {products, limit, filterProducts, setProductsLimit} = this.props;
		return (
			<div className="">
				<CatalogNav />
				<Products 
					limit={limit}
					products={products} 
					filterProducts={filterProducts}
					setProductsLimit={setProductsLimit}
				/>
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		products: state.products.items,
		limit: state.products.limit
	};
};
const mapDispatchToProps = dispatch => {
	return {
		filterProducts: () => dispatch({type: 'FILTER_PRODUCTS'}),
		setProductsLimit: num => dispatch({type: 'SET_PRODUCTS_LIMIT', payload: num})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
