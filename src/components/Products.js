import React from 'react';

import {NoItems} from './Sections';

const Products = props => {
	const {
		products, limit, filtered, 
		setProductsLimit, limitProducts
	} = props.properties;
	
	let moreBtn = (
		<div className="products__more">
		<a href="javascript:void 0;" 
			onClick={() => {
				setProductsLimit(limit + 1);
				limitProducts();
			}}>Load more...</a>
		</div>
	);

	return(
    	<div className="products">
			{products.length ? products.map(p => {
				let price = (
					<div>
						<span className="products__price">{p.price + '$'}</span>
					</div>
				);
				let sale = (
					<div>
						<span className="products__price line-through">{p.price + '$'}</span>
						<span className="products__sale">{p.sale.price + '$'}</span>
					</div>
				);
				let nw = <span className="products__new">new</span>;

				return(
					<div key={p.id} className="products__item">
						<a href="javascript:void 0;">
							<img src={p.img} alt={p.name} />
							{p.new ? nw : null}
							<p>{p.name}</p>
							
							{p.sale.exists ? sale : price}
						</a>
					</div>
				)
			}) : <NoItems />}

			{filtered.length != products.length ? moreBtn : null}
		</div>
	);
};

export default Products;

