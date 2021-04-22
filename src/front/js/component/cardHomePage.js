import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/cardHomePage.scss";
import propTypes from "prop-types";

export const CardHomePage = props => {
	return (
		<div className="card bg-body rounded" style={{ width: "17rem", border: "none", padding: "0px, 0px, 0px, 0px" }}>
			<img
				style={{ width: "100%", height: "12rem" }}
				src={props.url}
				className="card-img-top"
				alt="Imagen faltante"
			/>
			<div className="card-body text-center">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.info}</p>
				<Link to="/expertos">
					<button className="btn btn-lg text-white rounded-pill">Búsqueda</button>
				</Link>
			</div>
		</div>
	);
};

// validar props

CardHomePage.propTypes = {
	url: propTypes.string,
	name: propTypes.string,
	info: propTypes.string
};
