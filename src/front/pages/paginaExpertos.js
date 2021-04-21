import React from "react";
import { CardExpertos } from "../js/component/card-expertos";
import { Form, Col, Container, InputGroup } from "react-bootstrap";
export const PaginaExpertos = () => {
	return (
		<Container>
			<div className="row justify-content-center mb-3">
				<Form
					className=" col-10 col-lg-8 justify-content-center"
					style={{ background: "#0f4c75", marginLeft: "0", padding: "0" }}>
					<Form.Row className="justify-content-center">
						<Col xs="5" md="3">
							<Form.Group className="pt-3">
								<Form.Control as="select" defaultValue="Filtrar por...">
									<option>Filtrar por...</option>
									<option>Provincia</option>
									<option>Nombre</option>
									<option>Especialidad</option>
								</Form.Control>
							</Form.Group>
						</Col>
						<Col xs="7">
							<Form.Group className="pt-3">
								<InputGroup>
									<Form.Control type="text" />
									<InputGroup.Prepend style={{ width: "fit-content" }}>
										<InputGroup.Text className="filtradoBusquedaBtn">
											<i className="fas fa-search" />
										</InputGroup.Text>
									</InputGroup.Prepend>
								</InputGroup>
							</Form.Group>
						</Col>
					</Form.Row>
				</Form>
			</div>
			<Container fluid className="m-0 row justify-content-center align-items-center">
				<CardExpertos />
				<CardExpertos />
				<CardExpertos />
				<CardExpertos />
				<CardExpertos />
				<CardExpertos />
				<CardExpertos />
			</Container>
		</Container>
	);
};
