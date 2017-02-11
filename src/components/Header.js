import React from 'react';

import Dropdown from '../containers/Dropdown';
import Navbar from './Navbar';
import Logo from './Logo';
import Cart from './Cart';

const Header = props => (
	<header className="header">
		<div className="header__top">
			<div className="sub-nav">
				<ul className="nav">
					<li className="nav-item">
						<a href='#' className="nav-link">
							delivery
						</a>
					</li>
					<li className="nav-item">
						<a href='#' className="nav-link">
							faq
						</a>
					</li>
					<li className="nav-item">
						<a href='#' className="nav-link">
							help
						</a>
					</li>
				</ul>
			</div>
			<Dropdown/>
		</div>

		<div className="header__bottom">
			<Logo/>

			<Navbar/>

			<Cart/>
		</div>
	</header>
);


export default Header;
