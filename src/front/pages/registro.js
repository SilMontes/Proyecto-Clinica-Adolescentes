import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../js/store/appContext";
import { Modal, Button, Alert } from "react-bootstrap";
export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [errores, setErrores] = useState([]);
	const { history } = useHistory();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	return (
		<div className="containerLoginSignUp">
			<div className="mainLoginSignUp">
				<div className="login-register-formcontainer">
					<div className="titleFormloginRegister">Crea una cuenta</div>
					<form
						className="loginregisterform"
						onSubmit={e =>
							actions
								.onSubmitRegistro(e)
								.then(data => history.push("/iniciosesion"))
								.catch(error => setErrores(error.errores))
						}>
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
			{/*errores.length > 0 && setShow(true)*/}
			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton />
				<Modal.Body>
					<Alert variant="danger">
						<ul>
							{/*errores.map((error, index) => {
								<div key={index}>
									<li>{error.msg || error.message}</li>
								</div>;
							})*/}
						</ul>
					</Alert>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Entendido
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
