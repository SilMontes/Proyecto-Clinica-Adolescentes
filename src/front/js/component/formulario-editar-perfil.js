import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import "../../styles/perfil.scss";
import propTypes from "prop-types";
export const FormularioEditarperfil = props => {
	useEffect(() => {
		store.errorCambiarContraseña = "";
	}, []);

	const { store, actions } = useContext(Context);
	return (
		<Form className="settings-form" onSubmit={e => actions.onSubmitEditarPerfil(e)}>
			<div>
				{store.errorEditarPerfil.length > 0 && (
					<Alert variant="danger">
						<ul>
							{store.errorEditarPerfil.map((error, index) => {
								return (
									<div key={index}>
										<li>{error.msg}</li>
									</div>
								);
							})}
						</ul>
					</Alert>
				)}
			</div>
			<div className="general card text-left border-light mb-2 mt-3" style={{ background: "#F1FAEE" }}>
				<Row className="justify-content-center mb-2">
					<Col xs={6} lg={6} className="justify-content-center">
						<div
							className="picture-profile"
							style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}>
							<img src="https://www.pngitem.com/pimgs/m/361-3619018_imagen-de-perfil-gmail-hd-png-download.png" />
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md={6} lg={4} className="mb-2">
						<Form.Label className="ml-2">Primer Nombre</Form.Label>
						<Form.Control
							placeholder="Primer Nombre"
							name="primer_nombre"
							onChange={e => {
								actions.onChangePerfil(e);
							}}
							defaultValue={store.datosUsuarioActivo.primer_nombre}
						/>
					</Col>
					<Col md={6} lg={4} className="mb-2">
						<Form.Label className="ml-2">Apellidos</Form.Label>
						<Form.Control
							placeholder="Apellidos"
							name="apellidos"
							onChange={e => {
								actions.onChangePerfil(e);
							}}
							defaultValue={store.datosUsuarioActivo.apellidos}
						/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md={6} lg={4} className="mb-2">
						<Form.Label className="ml-2">Número telefónico</Form.Label>
						<Form.Control
							placeholder="Número telefónico"
							name="numero_telefonico"
							onChange={e => {
								actions.onChangePerfil(e);
							}}
							defaultValue={store.datosUsuarioActivo.numero_telefonico}
						/>
					</Col>
					<Col md={6} lg={4} className="mb-2">
						<Form.Label className="ml-2">Dirrección Email</Form.Label>
						<Form.Control
							placeholder="Dirrección Email"
							name="email"
							onChange={e => {
								actions.onChangePerfil(e);
							}}
							defaultValue={store.datosUsuarioActivo.email}
						/>
					</Col>
				</Row>
				<Row className="justify-content-center mb-2">
					<Col xs={12} lg={6} className="justify-content-center">
						<div
							style={{
								marginLeft: "auto",
								marginRight: "auto",
								display: "block",
								cursor: "pointer",
								textAlign: "center"
							}}>
							<p onClick={props.cerrarFormulario}>
								Cambiar Contraseña <i className="fas fa-key" />
							</p>
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={6} md={4} lg={2}>
						<Row className="justify-content-center">
							<Button className="button-form ml-3" type="submit">
								Modificar
							</Button>
						</Row>
					</Col>
				</Row>
			</div>
		</Form>
	);
};
FormularioEditarperfil.propTypes = {
	cerrarFormulario: propTypes.func
};
