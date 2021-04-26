import React, { useContext, useState } from "react";
import { CardExpertos } from "../js/component/card-expertos";
import { Context } from "../js/store/appContext";
import { Form, Col, Container, InputGroup } from "react-bootstrap";
export const PaginaExpertos = () => {
	const { store, actions } = useContext(Context);

	const [listDatosE, setDatosE] = useState(store.datosEspecialistas);

	const textFilterProvincia = event => {
		let text = event.target.value;
		if (text === "") {
			setDatosE(store.datosEspecialistas);
		} else {
			const personaResult = store.datosEspecialistas.filter(function(persona) {
				return persona.provincia === text;
			});
			setDatosE(personaResult);
		}
	};

	const textFilterApellido = event => {
		let text = event.target.value;
		if (text === "") {
			setDatosE(store.datosEspecialistas);
		} else {
			const personaResult = store.datosEspecialistas.filter(function(persona) {
				return persona.apellido === text;
			});
			setDatosE(personaResult);
		}
	};

	const textFilterEspecialidad = event => {
		let text = event.target.value;
		if (text === "") {
			setDatosE(store.datosEspecialistas);
		} else {
			const personaResult = store.datosEspecialistas.filter(function(persona) {
				return persona.especialidad === text;
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
										defaultValue="Filtrar por apellido, provincia y especialidad "
										type="text"
										onChange={(textFilterApellido, textFilterProvincia, textFilterEspecialidad)}
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
