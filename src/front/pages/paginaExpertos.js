import React, { useContext, useState, useEffect } from "react";
import { CardExpertos } from "../js/component/card-expertos";
import { Context } from "../js/store/appContext";
import { Form, Col, Container, InputGroup } from "react-bootstrap";
export const PaginaExpertos = () => {
	const { store, actions } = useContext(Context);

	const [listDatosE, setDatosE] = useState(store.datosEspecialistas);
	useEffect(() => {
		setDatosE(store.datosEspecialistas);
	}, []);

	const textFilter = event => {
		let text = event.target.value;
		if (text === "") {
			setDatosE(store.datosEspecialistas);
		} else {
			const personaResult = store.datosEspecialistas.filter(function(persona) {
				const provincia = persona.provincia
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "");
				const apellido = persona.apellido
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "");
				const nombre = persona.especialidad
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "");
				const especialidad = persona.nombre
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "");
				const texto = text
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "");

				return provincia === texto || apellido === texto || nombre === texto || especialidad === texto;
			});
			setDatosE(personaResult);
		}
	};

	return (
		<Container>
			<div className="row justify-content-center mb-3">
				<Form
					className=" col-10 col-lg-8 justify-content-center"
					style={{ background: "#0f4c75", marginLeft: "0", padding: "0" }}>
					<Form.Row className="justify-content-center">
						<Col xs="7">
							<Form.Group className="pt-3">
								<InputGroup>
									<Form.Control
										placeholder="Filtrar por nombre, apellido, provincia o especialidad "
										type="text"
										onChange={textFilter}
									/>
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
			{listDatosE.length > 0 ? (
				<Container fluid className="m-0 row justify-content-center align-items-center">
					{listDatosE.map((persona, index) => {
						return (
							<CardExpertos
								key={index}
								id={persona.id - 1}
								nombre={persona.nombre + " " + persona.apellido}
								especialidad={persona.especialidad}
								imagen={persona.imagen}
								detalles={persona.detalles}
							/>
						);
					})}
				</Container>
			) : null}
		</Container>
	);
};
