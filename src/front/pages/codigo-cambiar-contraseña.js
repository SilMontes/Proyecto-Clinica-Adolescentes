import React, { useContext, useEffect } from "react";
import { BotonIrInicioSesion } from "../js/component/boton-regresar-inicio-sesion";
import { Context } from "../js/store/appContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
export const CodigoCambiarContraseña = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	useEffect(() => {
		store.redirectNuevaContraseña = false;
		store.erroresCodigoContraseña = "";
	}, []);
	useEffect(
		() => {
			if (store.redirectNuevaContraseña == true) {
				history.push("/nuevacontraseña");
			}
		},
		[store.redirectNuevaContraseña]
	);
	useEffect(
		() => {
			if (store.erroresCodigoContraseña != "") {
				Swal.fire({
					text: store.erroresCodigoContraseña,
					timer: 2000,
					confirmButtonText: "Entendido"
				});
			}
		},
		[store.erroresCodigoContraseña]
	);
	return (
		<div
			className="changepasswordcontainer container-fluid vh-100 d-flex align-items-center justify-content-center p-5"
			style={{ marginTop: "50px" }}>
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
		</div>
	);
};
