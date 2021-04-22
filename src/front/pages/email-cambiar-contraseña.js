import React, { useContext, useEffect } from "react";
import { BotonIrInicioSesion } from "../js/component/boton-regresar-inicio-sesion";
import Swal from "sweetalert2";
import { Context } from "../js/store/appContext";
import { Redirect } from "react-router-dom";
export const EmailCambiarContraseña = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		store.redirectCodigoConfirmacion = false;
	}, []);
	useEffect(
		() => {
			if (store.erroresEmailContraseña != "") {
				Swal.fire({
					text: store.erroresEmailContraseña.msg,
					iconHtml: "❗",
					timer: 2000,
					confirmButtonText: "Entendido"
				});
			}
		},
		[store.erroresEmailContraseña]
	);

	return (
		<div className="changepasswordcontainer container-fluid vh-100 d-flex align-items-center justify-content-center p-5">
			<div className="formpassword container my-5 rounded p-4">
				<div className="boxcambiarcontraseña">
					<h4>Recuperación de contraseña</h4>
					<p>Por favor, provea la dirección email que utilizó al crear su cuenta.</p>

					<form
						onSubmit={e => {
							actions.onSubmitEmail(e);
						}}>
						<div className="inputBox">
							<input
								placeholder="Dirección email"
								onChange={e => (store.emailContraseña = e.target.value)}
							/>
						</div>
						<div className="form-row justify-content-center">
							<BotonIrInicioSesion />
							<button className="btnCambiarContraseña px-3" type="submit">
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
			{store.redirectCodigoConfirmacion === true && <Redirect to="/codigoconfirmacion" />}
		</div>
	);
};
