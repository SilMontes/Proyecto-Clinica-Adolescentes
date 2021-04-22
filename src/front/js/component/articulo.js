import React from "react";
import propTypes from "prop-types";
import "../../styles/index.scss";

export const Articulo = props => {
	return (
		<div className="card w-75 mt-4 rounded-start shadow-lg p-3 mb-5 bg-body ">
			<img
				// style={{ width: "100%", height: "12rem" }}
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
