import React from "react";
import { Row, Col, CardDeck } from "react-bootstrap";
import { Articulo } from "../component/articulo";
import "../../styles/orientacion.scss";

export const Orientacion = () => {
	return (
		<div>
			<Row mb="auto">
				<Col xs lg="8" md={{ span: 6, offset: 2 }}>
					<div>
						<div style={{ border: "1px solid blue" }} autoComplete="true">
							<div className="gcse-search" />
						</div>
					</div>
				</Col>
			</Row>
			{/* <CardDeck> */}
			{/* <Row mb="auto" className="orientacionArticulos"> */}
			{/* <Col xs lg="3" md={{ span: 6, offset: 2 }}> */}
			<Articulo />
			{/* </Col> */}
			{/* </Row> */}
			{/* <Row mb="auto" className="orientacionArticulos"> */}
			{/* <Col xs lg="3" md={{ span: 6, offset: 2 }}> */}
			{/* <Articulo /> */}
			{/* </Col> */}
			{/* </Row> */}
			{/* <Row mb="auto" className="orientacionArticulos"> */}
			{/* <Col xs lg="3" md={{ span: 6, offset: 2 }}> */}
			{/* <Articulo /> */}
			{/* </Col> */}
			{/* </Row> */}
			{/* </CardDeck> */}
		</div>
	);
};
