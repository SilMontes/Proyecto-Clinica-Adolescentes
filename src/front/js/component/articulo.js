import React from "react";
import "../../styles/articuloStyle.scss";
import { Link } from "react-router-dom";

export const Articulo = () => {
	return (
		<div className="card rounded-start shadow-lg p-3 mb-5 bg-body rounded">
			<h5 className="card-header">Featured</h5>
			<div className="card-body">
				<h5 className="card-title">Special title treatment</h5>
				<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
				<Link to="/demo">
					<button className="btn btn-lg text-white rounded-pill">Learn</button>
				</Link>
			</div>
		</div>
	);
};
