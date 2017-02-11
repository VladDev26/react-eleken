import React from 'react';
import { Link } from 'react-router';

import navbar from '../const/navbar';

const Navbar = props => {
	return(
    	<ul className="nav flex-column flex-sm-row justify-content-center main-nav">
			{navbar.map((el,i) => (
				<li className="nav-item" key={i}>
					<Link 
						to={'/' + el.path} 
						className="nav-link text-center" 
						activeClassName="active"
					>
						{el.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Navbar;

