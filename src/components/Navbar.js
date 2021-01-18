import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
	const [ click, setClick ] = useState(false);
	const [ button, setButton ] = useState(true);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobileMenu = () => {
		setClick(false);
	};

	return (
		<React.Fragment>
			<Router>
				<nav className="navbar">
					<div className="navbar_container">
						<Link to="/" className="navbar_logo">
							TRVL <i className="fab fa-typo3" />
						</Link>
						<div className="menu_icon" onClick={handleClick}>
							<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
						</div>
						<ul className={click ? 'nav_menu_active' : 'nav_menu'}>
							<li className="nav_item">
								<Link to="/" className="nav_links" onClick={closeMobileMenu}>
									Home
								</Link>
							</li>
							<li className="nav_item">
								<Link to="/services" className="nav_links" onClick={closeMobileMenu}>
									Services
								</Link>
							</li>
							<li className="nav_item">
								<Link to="/products" className="nav_links" onClick={closeMobileMenu}>
									Products
								</Link>
							</li>
							<li className="nav_item">
								<Link to="/sign-up" className="nav_links_mobile" onClick={closeMobileMenu}>
									Sign Up
								</Link>
							</li>
						</ul>
						{button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
					</div>
				</nav>
			</Router>
		</React.Fragment>
	);
};

export default Navbar;
