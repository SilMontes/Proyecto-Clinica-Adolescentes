import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../js/store/appContext";
import { Redirect } from "react-router-dom";
import { Modal, Button, Alert } from "react-bootstrap";
import "../styles/index.scss";


export const InicioSesion = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		store.erroresInicioSesion = [];
	}, []);
	useEffect(
		() => {
			if (store.erroresInicioSesion.length > 0) {
				handleShow();
			}
		},
		[store.erroresInicioSesion]
	);
	return (
		<div className="containerLoginSignUp">
			<div className="mainLoginSignUp">
				<div className="login-register-formcontainer">
					<div className="titleFormloginRegister">Bienvenido</div>
					<form className="loginregisterform" onSubmit={e => actions.onSubmitInicioSesion(e)}>
						<input
							type="text"
							name="email"
							placeholder="Dirrección email"
							onChange={e => actions.onChangeInicioSesion(e)}
						/>
						<input
							type="password"
							name="contraseña"
							placeholder="Contraseña"
							onChange={e => actions.onChangeInicioSesion(e)}
						/>
						<button type="submit">Ingresar</button>
					</form>
					<div className="formfooter">
						<Link to="/emailcambiarcontraseña">
							<span
								onClick={() => {
									(store.erroresEmailContraseña = ""), (store.redirectCodigoConfirmacion = false);
								}}>
								¿Olvidó su contraseña
							</span>
						</Link>
						<Link to="/registro">
							<span>¿Aún no tiene una cuenta? ¡Registrese!</span>
						</Link>
					</div>
				</div>
			</div>
			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton />
				<Modal.Body>
					<Alert variant="danger">
						<ul>
							{store.erroresInicioSesion.map((error, index) => {
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
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
			{store.token != null && store.token != "" && <Redirect to="/" />}
		</div>
	);
};
