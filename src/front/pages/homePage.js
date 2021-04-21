import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardHomePage } from "../js/component/cardHomePage";
import { Carousel } from "../js/component/carousel";
import "../styles/homePageStyle.scss";

export const HomePage = () => {
	let namePsico = "PSICOLOGÍA";
	let infoPsico =
		"Ciencia social y una disciplina académica enfocadas en el análisis y la comprensión de la conducta humana y de los procesos mentales experimentados por individuos y por grupos sociales durante momentos y situaciones determinadas";
	let urlPsico =
		"https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9ycyUyMHByYWN0aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

	let namePsiquiatria = "PSIQUIATRÍA";
	let infoPsiquiatria =
		"Especialidad médica dedicada al estudio de los trastornos mentales de origen genético o neurológico con el objetivo de prevenir, evaluar, diagnosticar, tratar y rehabilitar a las personas con trastornos mentales";
	let urlPsiquiatria =
		"https://images.unsplash.com/photo-1584515933487-779824d29309?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGF0aWVudCUyMGNhcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
	let nameMedicina = "MEDICINA REPRODUCTIVA";
	let infoMedicina =
		"Procurar un mejor conocimiento de los factores que inciden en la salud sexual y reproductiva del ser humano, y aplicar dicho conocimiento para mejorar la salud y el bienestar de la población";
	let urlMedicina =
		"https://images.unsplash.com/photo-1606572733585-1c54ba3cf917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlcHJvZHVjdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

	let nameEducacion = "EDUCACION SEXUAL";
	let infoEducacion =
		"Enseñanza, difusión y divulgación acerca de la sexualidad humana en todas las edades del desarrollo, la orientación sexual, las relaciones sexuales, la planificación familiar, el uso de anticonceptivos y el sexo seguro";
	let urlEducacion =
		"https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

	return (
		<div>
			<div className="colCarousel">
				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Carousel />
					</Col>
				</Row>
			</div>
			<h2>Conozca sobre las Especialidades</h2>
			<Container>
				<Row>
					<Col sm={3}>
						<CardHomePage name={namePsico} info={infoPsico} url={urlPsico} />
					</Col>
					<Col sm={3}>
						<CardHomePage name={namePsiquiatria} info={infoPsiquiatria} url={urlPsiquiatria} />
					</Col>
					<Col sm={3}>
						<CardHomePage name={nameMedicina} info={infoMedicina} url={urlMedicina} />
					</Col>
					<Col sm={3}>
						<CardHomePage name={nameEducacion} info={infoEducacion} url={urlEducacion} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
