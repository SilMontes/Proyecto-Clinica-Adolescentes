import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardHomePage } from "../component/cardHomePage";
import { Carousel } from "../component/carousel";
import "../../styles/homePageStyle.scss";

export const HomePage = () => {
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
						<CardHomePage />
					</Col>
					<Col sm={3}>
						<CardHomePage />
					</Col>
					<Col sm={3}>
						<CardHomePage />
					</Col>
					<Col sm={3}>
						<CardHomePage />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
