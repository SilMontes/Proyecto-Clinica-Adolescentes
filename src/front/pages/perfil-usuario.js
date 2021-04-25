import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Container, Col, Row, Modal, Alert } from "react-bootstrap";
import { Context } from "../js/store/appContext";
import "../styles/perfil.scss";
export const PerfilUsuario = () => {
	const { store, actions } = useContext(Context);

	//whether to enviar or not request to update password
	const [iputBackGround, setIputBackGround] = useState("white");
	useEffect(
		() => {
			if (store.datosCambiarContraseña.nueva.length > 0) {
				if (store.datosCambiarContraseña.confirmarContraseña != store.datosCambiarContraseña.nueva) {
					setIputBackGround("#ff6961");
				} else {
					setIputBackGround("white");
				}
			}
		},
		[store.datosCambiarContraseña.confirmarContraseña, store.datosCambiarContraseña.nueva]
	);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<Container>
			<Form className="settings-form">
				<Row className="justify-content-center">
					<Col xs lg="2">
						<div className="picture-profile">
							<img src="https://www.pngitem.com/pimgs/m/361-3619018_imagen-de-perfil-gmail-hd-png-download.png" />
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md={4} lg={4} className="mb-2">
						<Form.Label className="ml-2">Primer Nombre</Form.Label>
						<Form.Control
							placeholder="Primer Nombre"
							name="primer_nombre"
							onChange={e => {
								actions.onChangePerfil(e);
							}}
						/>
					</Col>
					<Col md={4} lg={4} className="mb-2">
						<Form.Label className="ml-2">Apellidos</Form.Label>
						<Form.Control
							placeholder="Apellidos"
							name="apellidos"
							onChange={e => {
								actions.onChangePerfil(e);
							}}
						/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md={4} lg={4} className="mb-2">
						<Form.Label className="ml-2">Número telefónico</Form.Label>
						<Form.Control
							placeholder="Número telefónico"
							name="numero_telefonico"
							onChange={e => {
								actions.onChangePerfil(e);
							}}
						/>
					</Col>
					<Col md={4} lg={4} className="mb-2">
						<Form.Label className="ml-2">Dirrección Email</Form.Label>
						<Form.Control
							placeholder="Dirrección Email"
							name="email"
							onChange={e => {
								actions.onChangePerfil(e);
							}}
						/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs lg="2" className="mb-2">
						<span onClick={handleShow}>
							<i className="fas fa-key" /> Cambiar Contraseña
						</span>
						<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
							<Form>
								<Modal.Header closeButton>
									<Modal.Title>Cambiar Contraseña</Modal.Title>
								</Modal.Header>
								<Modal.Body className="modal-settings">
									<Row>
										<Form.Label>Actual Contraseña</Form.Label>
										<Form.Control
											type="Password"
											placeholder="Actual Contraseña"
											name="actualContraseña"
											onChange={e => {
												actions.onChangeCambiarContraseña(e);
											}}
										/>
									</Row>
									<Row>
										<Form.Label>Nueva Contraseña</Form.Label>
										<Form.Control
											type="Password"
											placeholder="Nueva Contraseña"
											name="nueva"
											onChange={e => {
												actions.onChangeCambiarContraseña(e);
											}}
										/>
									</Row>
									<Row>
										<Form.Label>Confirmar Contraseña</Form.Label>
										<Form.Control
											style={{ background: iputBackGround }}
											type="Password"
											placeholder="Contraseña de confirmación"
											name="confirmarContraseña"
											onChange={e => {
												onChangeCambiarContraseña(e.target.value);
											}}
										/>
										{iputBackGround == "#ff6961" ? (
											<Form.Text id="passwordHelpBlock" muted>
												<i className="fas fa-exclamation-triangle" style={{ color: "red" }} />
												Ambas contraseñas deben ser iguales
											</Form.Text>
										) : (
											<Form.Text className="text-muted">
												Su contraseña debe contener 8 carácteres como mínimo, al menos una letra
												mayúscula, una letra minúscula y un carácter especial
											</Form.Text>
										)}
									</Row>
								</Modal.Body>
								<Modal.Footer>
									<Button className="button-modal-close" onClick={handleClose}>
										Cerrar
									</Button>
									<Button className="button-modal-submit" type="submit">
										Enviar
									</Button>
								</Modal.Footer>
							</Form>
						</Modal>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs lg="2">
						<Button className="button-form ml-3" type="submit">
							Modificar
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};
