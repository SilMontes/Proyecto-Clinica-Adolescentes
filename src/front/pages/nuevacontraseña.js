import React from "react";
import { BotonIrInicioSesion } from "../js/component/boton-regresar-inicio-sesion";
export const NuevaContraseña = () => {
	return (
		<div className="changepasswordcontainer container-fluid vh-100 d-flex align-items-center justify-content-center p-5">
			<div className="formpassword container my-5 rounded p-4">
				<div className="boxcambiarcontraseña">
					<h4>Restablecer la contraseña</h4>
					<small style={{ color: "#bbe1fa" }}>
						Su contraseña debe contener 8 carácteres como mínimo, al menos una letra mayúscula, una letra
						minúscula y un carácter especial
					</small>
					<form>
						<div className="inputBox">
							<input placeholder="Nueva contraseña" />
						</div>
						<div className="inputBox">
							<input placeholder="Vuelva a escribir la contraseña" />
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
