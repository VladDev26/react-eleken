import React from 'react';
import {Link} from 'react-router';

import navbar from '../const/navbar';

const Footer = props => (
	<footer className="footer">
		<div className="container">
			<div className="logo">
				<Link to='/home'>
					<img alt="logo" className="img-fluid"
						src="http://vladdev.zzz.com.ua/examples/eleken/images/logo.jpg" />
				</Link>
			</div>

			<ul className="footer-nav">
				{navbar.map(el => (
					<li className="footer-nav__item" key={el.path}>
						<Link className='footer-nav__link' to={'/' + el.path} activeClassName="active">
							{el.name}
						</Link>
					</li>
				))}
			</ul>

			<ul className="copyright">
				<li className="copyright__years">&copy; 2010 - 2016</li>
				<li className="copyright__text">All rights reserved</li>
			</ul>
		</div>
	</footer>
);


export default Footer;