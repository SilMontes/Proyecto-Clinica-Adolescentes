import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
<<<<<<< HEAD
import "../../styles/index.scss";
import logodoctor from "../../img/logodoctor.png";

export const CardExpertos = () => {
	return (
		<React.Fragment>
			<Col xs={12} md={6} lg={4} className=" mt-3">
				<div className="especialista-container spring-fever">
					<img clasName="img-especialista" src={logodoctor} alt="vector de doctor" />
=======
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
>>>>>>> e2ff7691e16dfa5b44c7717f4bf583165a40871e
					<div className="nombre-especialidad">
						<h3>{props.nombre}</h3>
						<div className="especilidad-expertos">{props.especialidad}</div>
					</div>
					<div className="detalles-experto">
<<<<<<< HEAD
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim...
						<Link to="#" className="read-more-experto row justify-content-center">
							<button className="col-6 btn  text-white rounded-pill">Más información</button>
=======
						{props.detalles}
						<Link to={`/especialista/${props.id}`} className="read-more-experto row justify-content-center">
							<button className="col-6">Más información</button>
>>>>>>> e2ff7691e16dfa5b44c7717f4bf583165a40871e
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
