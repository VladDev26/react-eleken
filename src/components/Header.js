import React from 'react';
import {Link} from 'react-router';

import Dropdown from '../containers/Dropdown';
import Navbar from './Navbar';
// import Logo from './Logo';
import Cart from './Cart';

const Header = props => (
	<header className="header">
		<div className="header__top">
			<div className="container">
				<div className="sub-nav">
					<ul className="sub-nav__list">
						<li className="sub-nav__item">
							<a href='#' className="sub-nav__link">
								delivery
							</a>
						</li>
						<li className="sub-nav__item">
							<a href='#' className="sub-nav__link">
								faq
							</a>
						</li>
						<li className="sub-nav__item">
							<a href='#' className="sub-nav__link">
								help
							</a>
						</li>
					</ul>
				</div>
				<Dropdown/>
			</div>
		</div>

		<div className="header__bottom">
			<div className="container">
				<div className="logo">
					<Link to='/home'>
						<img alt="logo" className="img-fluid"
							src="http://vladdev.zzz.com.ua/examples/eleken/images/logo.jpg" />
					</Link>
				</div>

				<Navbar/>

				<Cart/>
			</div>
		</div>
	</header>
);


export default Header;
