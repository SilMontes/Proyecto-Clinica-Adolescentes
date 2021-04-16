import React from "react";
import { Row, Col } from "react-bootstrap";
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
			<h2>Conozca a los expertos en el tema</h2>
			<div className="colCardHomePage">
				<Row>
					<Col>
						<CardHomePage />
					</Col>
					<Col>
						<CardHomePage />
					</Col>
					<Col>
						<CardHomePage />
					</Col>
					<Col>
						<CardHomePage />
					</Col>
				</Row>
			</div>
		</div>
	);
};
