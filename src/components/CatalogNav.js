import React from 'react';
import { Link } from 'react-router';

// import { setActiveClass, getCatalogNav } from '../actions/actions';

const CatalogNav = props => {
	let {
		catalogNav, 
		setActiveClass, 
		setProductsFilter, 
		setProductsLimit, 
		filterProducts,
		limitProducts
	} = props.properties;
	return(
		<ul className="nav flex-column flex-sm-row justify-content-center catalog-nav">
			{catalogNav.map(el => (
				<li key={el.path}>
					<a href="javascript:void 0;" className={el.isActive ? 'active' : ''} 
						onClick={() => {
							setActiveClass(el.path);
							setProductsFilter(el.path);
							setProductsLimit(1);
							filterProducts();
							limitProducts();
						}}
					>
						{el.name}
					</a>
				</li>
			))}
		</ul>
	);
};
export default CatalogNav;

