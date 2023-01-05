import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="flex-row navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="starWarsLogo" src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
