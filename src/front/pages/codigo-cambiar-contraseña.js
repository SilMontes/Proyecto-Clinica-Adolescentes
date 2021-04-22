import React, { useContext, useEffect } from "react";
import { BotonIrInicioSesion } from "../js/component/boton-regresar-inicio-sesion";
import { Context } from "../js/store/appContext";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
export const CodigoCambiarContraseña = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		store.redirectNuevaContraseña = false;
	}, []);
	useEffect(
		() => {
			if (store.erroresCodigoContraseña != "") {
				Swal.fire({
					text: store.erroresCodigoContraseña,
					iconHtml: "❌",
					timer: 2000,
					confirmButtonText: "Entendido"
				});
			}
		},
		[store.erroresCodigoContraseña]
	);
	return (
		<div className="changepasswordcontainer container-fluid vh-100 d-flex align-items-center justify-content-center p-5">
			<div className="formpassword container my-5 rounded p-4">
				<div className="boxcambiarcontraseña">
					<h4>Código de confimación</h4>
					<p>Por favor, ingrese el código de seguridad que enviamos a su email.</p>

					<form onSubmit={e => actions.codigoConfimacion(e)}>
						<div className="inputBox">
							<input
								placeholder="Código de verificación"
								onChange={e => (store.codigoCambiarContraseña = e.target.value)}
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
			{store.redirectNuevaContraseña == true && <Redirect to="/nuevacontraseña" />}
		</div>
	);
};
