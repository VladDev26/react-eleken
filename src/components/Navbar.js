import React from 'react';
import { Link } from 'react-router';

import navbar from '../const/navbar';

const Navbar = props => {
	return(
    	<ul className="main-nav">
			{navbar.map(el => (
				<li className="main-nav__item" key={el.path}>
					<Link className={el.mainNavClasses} to={'/' + el.path} activeClassName="active">
						{el.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Navbar;

