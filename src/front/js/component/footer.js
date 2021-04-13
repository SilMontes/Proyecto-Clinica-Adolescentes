import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Row>
			<Col>
				<h6>Sobre Nosotros</h6>
				<p>Contáctenos</p>
				<p>Reportá</p>
				<p>Comunidad juventud</p>
				<p>Clínicas cercanas</p>
			</Col>
			<Col>
				<h4>Clinica de Adolescentes</h4>
				<i className="fab fa-facebook-f" />
				<i className="fab fa-instagram" />
				<i className="fab fa-youtube" />
			</Col>
			<Col>
				<p>Todos los derechos estan reservados</p>
			</Col>
		</Row>
	</footer>
);
