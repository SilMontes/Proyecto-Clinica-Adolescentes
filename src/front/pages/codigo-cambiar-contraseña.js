import React from "react";
import { BotonIrInicioSesion } from "../js/component/boton-regresar-inicio-sesion";
export const CodigoCambiarContraseña = () => {
	return (
		<div className="changepasswordcontainer container-fluid vh-100 d-flex align-items-center justify-content-center p-5">
			<div className="formpassword container my-5 rounded p-4">
				<div className="boxcambiarcontraseña">
					<h4>Código de confimación</h4>
					<p>Por favor, ingrese el código de seguridad que enviamos a su email.</p>

					<form>
						<div className="inputBox">
							<input placeholder="Código de verificación" />
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
