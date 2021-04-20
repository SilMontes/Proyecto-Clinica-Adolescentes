import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/cardHomePage.scss";

export const CardHomePage = () => {
	return (
		<div className="card bg-body rounded">
			<img
				style={{ width: "100%", height: "12rem" }}
				src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9ycyUyMHByYWN0aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">PSICOLOGÍA</h5>
				<p className="card-text">
					Ciencia social y una disciplina académica enfocadas en el análisis y la comprensión de la conducta
					humana y de los procesos mentales experimentados por individuos y por grupos sociales durante
					momentos y situaciones determinadas.
				</p>
				<Link to="/expertos">
					<button className="btn btn-lg text-white rounded-pill" style={{ marginLeft: "60px" }}>
						More
					</button>
				</Link>
			</div>
		</div>
	);
};
