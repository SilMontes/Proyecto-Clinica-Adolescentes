import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Clínica de Adolescentes</span>
			</Link>

			<div className="float-right d-flex flex-row ml-auto">
				<Link to="/demo">
					<p className="enter">Iniciar Sección</p>
				</Link>
				<p> - </p>
				<Link to="/demo">
					<p className=" enter ">Registrarse</p>
				</Link>
			</div>
			<div className=" menu col-12 mr-auto">
				<Link className="menu" href="/orientacion">
					Orientacion
				</Link>
				<Link className="menu" href="/derechos">
					Derechos
				</Link>
				<Link className="menu" href="#link">
					Expertos
				</Link>
				<Link className="menu" href="#link">
					Reportar
				</Link>
			</div>
		</nav>
	);
};
