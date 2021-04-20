import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardHomePage } from "../component/cardHomePage";
import { Carousel } from "../component/carousel";
import "../../styles/homePageStyle.scss";

export const HomePage = () => {
	return (
		<div>
			<div className="colCarousel">
				<Row>
					<Col>
						<Carousel />
					</Col>
				</Row>
			</div>
			<h2>Conozca sobre las Especialidades</h2>
			<div className="colCardHomePage">
				<Row>
					<Col>
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
									Ciencia social y una disciplina académica enfocadas en el análisis y la comprensión
									de la conducta humana y de los procesos mentales experimentados por individuos y por
									grupos sociales durante momentos y situaciones determinadas.
								</p>
								<Link to="/expertos">
									<button
										className="btn btn-lg text-white rounded-pill"
										style={{ marginLeft: "60px" }}>
										Búsqueda
									</button>
								</Link>
							</div>
						</div>
					</Col>
					<Col>
						<div className="card bg-body rounded">
							<img
								style={{ width: "100%", height: "12rem" }}
								src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGF0aWVudCUyMGNhcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">PSIQUIATRÍA</h5>
								<p className="card-text">
									Especialidad médica dedicada al estudio de los trastornos mentales de origen
									genético o neurológico con el objetivo de prevenir, evaluar, diagnosticar, tratar y
									rehabilitar a las personas con trastornos mentales.
								</p>
								<Link to="/expertos">
									<button
										className="btn btn-lg text-white rounded-pill"
										style={{ marginLeft: "60px" }}>
										Búsqueda
									</button>
								</Link>
							</div>
						</div>
					</Col>
					<Col>
						<div className="card bg-body rounded">
							<img
								style={{ width: "100%", height: "12rem" }}
								src="https://images.unsplash.com/photo-1606572733585-1c54ba3cf917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlcHJvZHVjdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">MEDICINA REPRODUCTIVA</h5>
								<p className="card-text">
									Procurar un mejor conocimiento de los factores que inciden en la salud sexual y
									reproductiva del ser humano, y aplicar dicho conocimiento para mejorar la salud y el
									bienestar de la población.
								</p>
								<Link to="/expertos">
									<button
										className="btn btn-lg text-white rounded-pill"
										style={{ marginLeft: "60px" }}>
										Búsqueda
									</button>
								</Link>
							</div>
						</div>
					</Col>
					<Col>
						<div className="card bg-body rounded">
							<img
								style={{ width: "100%", height: "12rem" }}
								src="https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">EDUCACION SEXUAL</h5>
								<p className="card-text">
									Enseñanza, difusión y divulgación acerca de la sexualidad humana en todas las edades
									del desarrollo, la orientación sexual, las relaciones sexuales, la planificación
									familiar, el uso de anticonceptivos y el sexo seguro,.
								</p>
								<Link to="/expertos">
									<button
										className="btn btn-lg text-white rounded-pill"
										style={{ marginLeft: "60px" }}>
										Búsqueda
									</button>
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

// <Row>
// 	<Col style={{ width: "350px" }}>
// 		<CardHomePage />
// 	</Col>
// 	<Col style={{ width: "350px" }}>
// 		<CardHomePage />
// 	</Col>
// 	<Col style={{ width: "350px" }}>
// 		<CardHomePage />
// 	</Col>
// 	<Col style={{ width: "350px" }}>
// 		<CardHomePage />
// 	</Col>
// </Row>
