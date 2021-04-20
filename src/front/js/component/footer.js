import React, { Component } from "react";

export const Footer = () => (
	<div className="container-fluid">
		<footer className="mt-auto py-3">
			<div className="row d-flex justify-content-center">
				<div className=" footer col-4">
					<h6 className="abajo">Sobre Nosotros</h6>
					<p className="abajo">Contáctenos</p>
					<p className="abajo">Reportá</p>
					<p className="abajo">Comunidad juventud</p>
					<p className="abajo">Clínicas cercanas</p>
				</div>
				<div className="footer col-4">
					<h4 className=" titfoo text-center">Clinica de Adolescentes</h4>
					<i className="fab fa-facebook-f" target="_blank" href="https://www.facebook.com/PANICR/" />
					<i className="fab fa-instagram" target="_blank" href="" />
					<i className="fab fa-youtube" target="_blank" href="" />
				</div>

				<div className="footer col-4">
					<p className="todos text-right">Todos los derechos estan reservados</p>
				</div>
			</div>
		</footer>
	</div>
);
