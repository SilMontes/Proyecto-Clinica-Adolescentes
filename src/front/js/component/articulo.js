import React from "react";
import "../styles/index.scss";
import { Link } from "react-router-dom";

export const Articulo = () => {
	return (
		<div className="card w-75 mt-4 rounded-start shadow-lg p-3 mb-5 bg-body ">
			<div className="card-body">
				<h5 className="card-title">Special title treatment</h5>
				<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
				<Link to="/demo">
					<button className="btn  text-white rounded-pill">Mas Info</button>
				</Link>
			</div>
		</div>
	);
};
