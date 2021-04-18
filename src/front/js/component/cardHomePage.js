import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/cardHomePage.scss";

export const CardHomePage = () => {
	return (
		<div className="card bg-body rounded" style={{ width: "17rem" }}>
			<img
				style={{ width: "100%", height: "12rem" }}
				src="https://lafuerzanoticias.files.wordpress.com/2018/10/mustafar-tall.jpg?w=1536&h=768&crop=1"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					un profesor de Latin de la Universidad de Hampden-Sydney en Virginia encontró una de las palabras
				</p>
				<Link to="/demo">
					<button className="btn btn-lg text-white rounded-pill" style={{ marginLeft: "60px" }}>
						More
					</button>
				</Link>
			</div>
		</div>
	);
};
