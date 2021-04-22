import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "../../styles/card-expertos.scss";
import propTypes from "prop-types";
export const CardExpertos = props => {
	return (
		<React.Fragment>
			<Col xs={12} md={6} lg={4} className="mt-3">
				<div
					className="imagen-especialista-container spring-fever"
					style={{
						backgroundImage: `url(${props.imagen})`
					}}>
					<div className="nombre-especialidad">
						<h3>{props.nombre}</h3>
						<div className="especilidad-expertos">{props.especialidad}</div>
					</div>
					<div className="detalles-experto">
						{props.detalles}
						<Link to={`/especialista/${props.id}`} className="read-more-experto row justify-content-center">
							<button className="col-6">Más información</button>
						</Link>
					</div>
				</div>
			</Col>
		</React.Fragment>
	);
};
CardExpertos.propTypes = {
	id: propTypes.number,
	nombre: propTypes.string,
	especialidad: propTypes.string,
	imagen: propTypes.string,
	detalles: propTypes.string
};
