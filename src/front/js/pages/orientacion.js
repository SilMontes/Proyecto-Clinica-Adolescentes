import React from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { Articulo } from "../component/articulo";
import "../../styles/index.scss";
import ReactPlayer from 'react-player/youtube'

export const Orientacion = () => {
	return (
		<div className="orientacionArticulos">
			<Row>
				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>
			</Row>
		</div>
	);
};
