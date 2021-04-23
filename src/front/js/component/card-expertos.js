import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "../../styles/index.scss";
import logodoctor from "../../img/logodoctor.png";

export const CardExpertos = () => {
	return (
		<React.Fragment>
			<Col xs={12} md={6} lg={4} className=" mt-3">
				<div className="especialista-container spring-fever">
					<img clasName="img-especialista" src={logodoctor} alt="vector de doctor" />
					<div className="nombre-especialidad">
						<h3>Nombre Cada Experto</h3>
						<div className="especilidad-expertos">Especialidad</div>
					</div>
					<div className="detalles-experto">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim...
						<Link to="#" className="read-more-experto row justify-content-center">
							<button className="col-6 btn  text-white rounded-pill">Más información</button>
						</Link>
					</div>
					<div className="color-overlay" />
				</div>
			</Col>
		</React.Fragment>
	);
};
