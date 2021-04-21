import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "../../styles/card-expertos.scss";
import propTypes from "prop-types";
export const CardExpertos = (props) => {
	return (
		<React.Fragment>
			<Col xs={12} md={6} lg={4} className="mt-3">
				<div
					className="imagen-especialista-container spring-fever"
					style={{
						backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54OFF1LVAHxAwDYPFZucxdxHi_RwvuV4rRQ&usqp=CAU")`
					}}>
					<div className="nombre-especialidad">
						<h3>Nombre Cada Experto</h3>
						<div className="especilidad-expertos">Especialidad</div>
					</div>
					<div className="detalles-experto">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim...
						<Link to="#" className="read-more-experto row justify-content-center">
							<button className="col-6">Más información</button>
						</Link>
					</div>
					<div className="color-overlay" />
				</div>
			</Col>
		</React.Fragment>
	);
};
CardExpertos.propTypes = {
	nombre: propTypes.string,
	especialidad: propTypes.string,
    imagen: propTypes.string,
    detalles:propTypes.string,
    ubicacion:propTypes.string
};