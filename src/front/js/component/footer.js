import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer bg-$yellow mt-auto py-3">
		<div className="row d-flex justify-content-center">
			<div className="col-4">
				<br />
				<p className="abajo">Sobre Nosotros</p>
				<p className="abajo">Contáctenos</p>
				<p className="abajo">Reportá</p>
				<p className="abajo">Comunidad juventud</p>
				<p className="abajo">Clínicas cercanas</p>
			</div>
			<div className="col-4">
				<h4 className=" titfoo text-center">Clinica de Adolescentes</h4>
				<i className="fab fa-facebook-f" />
				<i className="fab fa-instagram" />
				<i className="fab fa-youtube" />
			</div>
			<div className="col-4">
				<p className="todos text-right">Derechos Reservados</p>
			</div>
		</div>
	</footer>
);
