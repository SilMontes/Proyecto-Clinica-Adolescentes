import React from "react";
import { Row, Col } from "react-bootstrap";
import { Articulo } from "../component/articulo";
import "../../styles/orientacion.scss";

export const Orientacion = () => {
	return (
		<div className="orientacionArticulos">
			<Row>
				<Col>
					<Articulo />
				</Col>
			</Row>
			<Row>
				<Col>
					<Articulo />
				</Col>
			</Row>
			<Row>
				<Col>
					<Articulo />
				</Col>
			</Row>
			<Row>
				<Col>
					<Articulo />
				</Col>
			</Row>
		</div>
	);
};
