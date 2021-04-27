import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Container, Col, Row, Modal, Alert } from "react-bootstrap";
import { FormularioEditarperfil } from "../js/component/formulario-editar-perfil";
import { Context } from "../js/store/appContext";
import { ComentariosUsuario } from "../js/component/comentarios-usuario";
import { TestimonioUsuario } from "../js/component/testimonio-usuario";
import Swal from "sweetalert2";
export const PerfilUsuario = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		const id_usuario = sessionStorage.getItem("user_id");
		if (id_usuario != "" && id_usuario != null) {
			actions.obtenerInformacionusuario();
			actions.obtenerComentariosusuario();
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
					<Modal.Header style={{ backgroundColor: "#F1FAEE" }} closeButton>
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
							<Col sm={11}>
								<Form.Label>Actual Contraseña</Form.Label>
								<Form.Control
									type="Password"
									placeholder="Actual Contraseña"
									name="actualContraseña"
									onChange={e => {
										actions.onChangeCambiarContraseña(e);
									}}
								/>
							</Col>
						</Row>
						<Row>
							<Col sm={11}>
								<Form.Label>Nueva Contraseña</Form.Label>
								<Form.Control
									type="text"
									placeholder="Nueva Contraseña"
									name="nueva"
									onChange={e => {
										actions.onChangeCambiarContraseña(e);
									}}
								/>
							</Col>
						</Row>
						<Row>
							<Col sm={11}>
								<Form.Label>Confirmar Contraseña</Form.Label>
								<Form.Control
									type="Password"
									placeholder="Contraseña de confirmación"
									name="confirmarContraseña"
									onChange={e => {
										actions.onChangeCambiarContraseña(e);
									}}
								/>
								{iputBackGround == "#ff6961" ? (
									<Form.Text id="passwordHelpBlock" muted>
										<Row>
											<Col sm={9}>
												<div className="alert alert-danger">
													Ambas contraseñas deben ser iguales
												</div>
											</Col>
											<Col>
												<i className="fas fa-exclamation-triangle" style={{ color: "red" }} />
											</Col>
										</Row>
									</Form.Text>
								) : (
									<Form.Text className="text-muted">
										Su contraseña debe contener 8 carácteres como mínimo, al menos una letra
										mayúscula, una letra minúscula y un carácter especial
									</Form.Text>
								)}
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer style={{ backgroundColor: "#F1FAEE" }}>
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
				{store.testimonioUsuario.length > 0 ? (
					<div className="general card  text-left border-light mb-3">
						<div className="card-header">Testimonio</div>
						{store.testimonioUsuario.map((dato, index) => {
							return (
								<TestimonioUsuario
									key={index}
									fecha={dato.fecha}
									titulo={dato.titulo}
									experiencia={dato.experiencia}
									multimedia={dato.multimedia}
									testimonioId={dato.id}
								/>
							);
						})}
					</div>
				) : (
					<div>Sus comentarios sobre los especialistas aparecerá aquí.</div>
				)}
			</Row>
			<Row className="justify-content-center">
				<div className="general card  text-left border-light mb-3">
					<div className="card-header">Comentarios a especialiestas</div>
					{store.comentarioUsuario.length > 0 ? (
						<ComentariosUsuario />
					) : (
						<div>Sus comentarios sobre los especialistas aparecerá aquí.</div>
					)}
				</div>
			</Row>
		</Container>
	);
};
