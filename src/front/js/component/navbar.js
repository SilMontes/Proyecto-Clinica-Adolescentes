import React from "react";
import { Link } from "react-router-dom";
import Icono from "../../img/Icono.png";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="tracking-in-expand  navbar-brand mb-0 h1">Clínica de Adolescentes</span>
				<img className="heartbeat" src={Icono} style={{ width: "40px" }} alt="icono" />
			</Link>

			<div className="float-right d-flex flex-row ml-auto">
				<Link to="/iniciosesion">
					<p className="enter">Iniciar Sesión</p>
				</Link>
				<p className="linea"> - </p>
				<Link to="/registro">
					<p className=" regi ">Registrarse</p>
				</Link>
			</div>
			<div className=" menu col-12 mr-auto">
				<Link className="menu" to="/orientacion">
					Orientacion
				</Link>
				<Link className="menu" to="/derechos">
					Derechos
				</Link>
				<Link className="menu" to="/expertos">
					Expertos
				</Link>

				<Link className="menu" to="/testimonios">
					Testimonios
				</Link>

				<Link className="menu" to="/reporta">
					Reportar
				</Link>
			</div>
		</nav>
	);
};
