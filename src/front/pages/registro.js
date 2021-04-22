import React, { useContext, useState, useEffect } from "react";
import { Context } from "../js/store/appContext";
import { Modal, Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [colorInput, setColorInput] = useState("none");
	useEffect(() => {
		store.erroresRegistro = [];
	}, []);
	useEffect(
		() => {
			if (store.erroresRegistro.length > 0) {
				handleShow();
			}
		},
		[store.erroresRegistro]
	);

	useEffect(
		() => {
			if (store.datosRegistro.confirmar_Contraseña != store.datosRegistro.contraseña) {
				setColorInput("2px solid #ff0000");
			} else if (store.datosRegistro.confirmar_Contraseña === store.datosRegistro.contraseña) {
				setColorInput("none");
			}
		},
		[store.datosRegistro.confirmar_Contraseña, store.datosRegistro.contraseña]
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
								name="contraseña"
								placeholder="Contraseña"
								onChange={e => actions.onChangeRegistro(e)}
							/>
							<input
								type="password"
								style={{ outline: colorInput }}
								name="confirmar_Contraseña"
								placeholder="Contraseña de confirmación"
								onChange={e => actions.onChangeRegistro(e)}
							/>
							{colorInput === "2px solid #ff0000" && (
								<label>
									<i className="fas fa-exclamation" style={{ color: "#ffd23f" }}>
										{" "}
										Ambas contraseñas deben ser iguales
									</i>
								</label>
							)}
						</div>
						<button type="submit">Ingresar</button>
					</form>
				</div>
			</div>

			<Modal show={show} onHide={handleClose} animation={false}>
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
