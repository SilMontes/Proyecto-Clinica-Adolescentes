import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Container, Col, Row, Modal, Alert } from "react-bootstrap";
import { FormularioEditarperfil } from "../js/component/formulario-editar-perfil";
import { Context } from "../js/store/appContext";
import Swal from "sweetalert2";
export const PerfilUsuario = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		const id_usuario = sessionStorage.getItem("user_id");
		if (id_usuario != "" && id_usuario != null) {
			actions.obtenerInformacionusuario();
			actions.obtenerComentariosusuario();
			actions.obtenerFavoritos();
			store.correcto == false;
		}
	}, []);

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
	useEffect(
		() => {
			if (store.correcto == true) {
				Swal.fire({
					text: "Los cambios se han ejecutado exitosamente",
					timer: 2000,
					confirmButtonText: "Ok"
				});
				setShow(false);
			}
		},
		[store.correcto]
	);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<Container>
			<FormularioEditarperfil cerrarFormulario={handleShow} />
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Form onSubmit={e => actions.onSubmitCambiarContraseña(e)}>
					<Modal.Header closeButton>
						<Modal.Title>Cambiar Contraseña</Modal.Title>
					</Modal.Header>
					<Modal.Body className="modal-settings">
						<div>
							{store.errorCambiarContraseña != "" && (
								<Alert variant="danger">
									<ul>
										<li>{store.errorCambiarContraseña}</li>
									</ul>
								</Alert>
							)}
						</div>
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
								type="text"
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
									actions.onChangeCambiarContraseña(e);
								}}
							/>
							{iputBackGround == "#ff6961" ? (
								<Form.Text id="passwordHelpBlock" muted>
									<i className="fas fa-exclamation-triangle" style={{ color: "red" }} />
									Ambas contraseñas deben ser iguales
								</Form.Text>
							) : (
								<Form.Text className="text-muted">
									Su contraseña debe contener 8 carácteres como mínimo, al menos una letra mayúscula,
									una letra minúscula y un carácter especial
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
			<Row className="justify-content-center">
				<h5>Mi testimonio</h5>
			</Row>
			<Row className="justify-content-center">
				<h5>Comentarios a especialistas</h5>
			</Row>
		</Container>
	);
};
