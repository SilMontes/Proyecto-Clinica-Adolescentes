import React from "react";
import { Row, Col } from "react-bootstrap";
import { Articulo } from "../component/articulo";
import "../../styles/index.scss";

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

			<Row>
				<Col />
			</Row>
		</div>
	);
};
