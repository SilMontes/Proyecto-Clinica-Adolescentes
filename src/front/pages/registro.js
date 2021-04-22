import React, { useContext, useState, useEffect } from "react";
import { Context } from "../js/store/appContext";
import { Modal, Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(
		() => {
			if (store.erroresRegistro.length > 0) {
				handleShow();
			}
		},
		[store.erroresRegistro]
	);
	return (
		<div className="containerLoginSignUp">
			<div className="mainLoginSignUp">
				<div className="login-register-formcontainer">
					<div className="titleFormloginRegister">Crea una cuenta</div>
					<form
						className="loginregisterform"
						onSubmit={e => {
							actions.onSubmitRegistro(e);
						}}>
						<div>
							<input
								type="text"
								name="primer_nombre"
								placeholder="Primer nombre"
								onChange={e => actions.onChangeRegistro(e)}
							/>
							<input
								type="text"
								name="apellidos"
								placeholder="Apellidos"
								onChange={e => actions.onChangeRegistro(e)}
							/>
							<input
								type="email"
								name="email"
								placeholder="Dirección email"
								onChange={e => actions.onChangeRegistro(e)}
							/>
							<input
								type="text"
								name="numero_telefonico"
								placeholder="Número telefónico"
								onChange={e => actions.onChangeRegistro(e)}
							/>
						</div>
						<div>
							<input
								type="text"
								name="password"
								placeholder="Contraseña"
								onChange={e => actions.onChangeRegistro(e)}
							/>
							<input type="password" name="confim_password" placeholder="Contraseña de confirmación" />
						</div>
						<button type="submit">Ingresar</button>
					</form>
				</div>
			</div>

			<Modal show={show} onHide={() => handleClose} animation={false}>
				<Modal.Header closeButton />
				<Modal.Body>
					<Alert variant="danger">
						<ul>
							{store.erroresRegistro.map((error, index) => {
								return (
									<div key={index}>
										<li style={{ listStyleType: "none" }}>{error.msg || error}</li>
									</div>
								);
							})}
						</ul>
					</Alert>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Entendido
					</Button>
				</Modal.Footer>
			</Modal>
			{store.redirect == true && <Redirect to="/iniciosesion" />}
		</div>
	);
};
