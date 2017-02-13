import React from 'react';


const CatalogNav = props => {
	const productsLimit = 8;

	let {
		catalogNav, setActiveClass, setProductsFilter, 
		setProductsLimit, filterProducts, limitProducts
	} = props.properties;

	function handleClick(path){
		setActiveClass(path);
		setProductsFilter(path);
		setProductsLimit(productsLimit);
		filterProducts();
		limitProducts();
	}
	
	return(
		<ul className="catalog-nav">
			{catalogNav.map(el => (
				<li className="catalog-nav__item" key={el.path}>
					<a href="javascript:void 0;" 
						className={el.isActive ? 'catalog-nav__link active' : 'catalog-nav__link'} 
						onClick={ () => handleClick(el.path) }
					>
						{el.name}
					</a>
				</li>
			))}
		</ul>
	);
};
export default CatalogNav;






// const CatalogNav = props => {
// 	const productsLimit = 1;

// 	let {
// 		catalogNav, setActiveClass, setProductsFilter, 
// 		setProductsLimit, filterProducts, limitProducts
// 	} = props.properties;

// 	function handleClick(path){
// 		setActiveClass(path);
// 		setProductsFilter(path);
// 		setProductsLimit(productsLimit);
// 		filterProducts();
// 		limitProducts();
// 	}
	
// 	return(
// 		<ul className="nav flex-column flex-sm-row justify-content-center catalog-nav">
// 			{catalogNav.map(el => (
// 				<li key={el.path}>
// 					<a href="javascript:void 0;" 
// 						className={el.isActive ? 'active' : ''} 
// 						onClick={ () => handleClick(el.path) }
// 					>
// 						{el.name}
// 					</a>
// 				</li>
// 			))}
// 		</ul>
// 	);
// };
// export default CatalogNav;
