import React from "react";
import propTypes from "prop-types";

export const Articulo = props => {
	return (
		<div className="card bg-body rounded" style={{ width: "17rem", height: "16rem" }}>
			<img
				style={{ width: "100%", height: "12rem" }}
				src={props.url}
				className="card-img-top"
				alt="Imagen faltante"
			/>
			<div className="card-body text-center">
				<h5 className="card-title">{props.name}</h5>
			</div>
		</div>
	);
};

Articulo.propTypes = {
	url: propTypes.string,
	name: propTypes.string
};
