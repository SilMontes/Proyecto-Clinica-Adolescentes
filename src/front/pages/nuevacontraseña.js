import React, { useContext, useEffect, useState } from "react";
import { BotonIrInicioSesion } from "../js/component/boton-regresar-inicio-sesion";
import { Context } from "../js/store/appContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/index.scss";

export const NuevaContraseña = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [errorSmallMessage, setErrorSmallMessage] = useState(false);
	useEffect(() => {
		store.redirect = false;
	}, []);
	useEffect(
		() => {
			if (store.nuevaContraseñaDatos.nuevaContraseña != store.nuevaContraseñaDatos.confirmarNuevaContraseña) {
				setErrorSmallMessage(true);
			} else if (
				store.nuevaContraseñaDatos.nuevaContraseña === store.nuevaContraseñaDatos.confirmarNuevaContraseña
			) {
				setErrorSmallMessage(false);
			}
		},
		[store.nuevaContraseñaDatos.nuevaContraseña, store.nuevaContraseñaDatos.confirmarNuevaContraseña]
	);
	useEffect(
		() => {
			if (store.erroresNuevaContraseña != "") {
				Swal.fire({
					text: store.erroresNuevaContraseña,
					iconHtml: "❗",
					timer: 3000,
					confirmButtonText: "Entendido"
				});
			}
		},
		[store.erroresNuevaContraseña]
	);

	return (
		<div
			className="changepasswordcontainer container-fluid vh-100 d-flex align-items-center justify-content-center p-5"
			style={{ marginTop: "50px" }}>
			<div className="formpassword container my-5 rounded p-4">
				<div className="boxcambiarcontraseña">
					<h4>Restablecer la contraseña</h4>
					{errorSmallMessage == false ? (
						<small style={{ color: "#bbe1fa" }}>
							Su contraseña debe contener 8 carácteres como mínimo, al menos una letra mayúscula, una
							letra minúscula y un carácter especial
						</small>
					) : (
						<p className="ml-4">
							<i
								className="fas fa-exclamation"
								style={{ color: "#ffd23f", fontSize: "18px", left: "10%" }}>
								{" "}
								Ambas contraseñas deben ser iguales
							</i>
						</p>
					)}
					<form onSubmit={e => actions.crearNuevaContraseña(e)}>
						<div className="inputBox">
							<input
								placeholder="Nueva contraseña"
								name="nuevaContraseña"
								onChange={e => {
									actions.onChangeNuevaContraseña(e);
								}}
							/>
						</div>
						<div className="inputBox">
							<input
								placeholder="Vuelva a escribir la contraseña"
								name="confirmarNuevaContraseña"
								onChange={e => {
									actions.onChangeNuevaContraseña(e);
								}}
							/>
						</div>
						<div className="form-row justify-content-center">
							<BotonIrInicioSesion />
							<button
								className="btnCambiarContraseña px-3"
								type="submit"
								onClick={() => store.redirect == true && history.push("/iniciosesion")}>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
