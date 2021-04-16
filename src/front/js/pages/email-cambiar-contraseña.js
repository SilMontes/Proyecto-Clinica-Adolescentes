import React from "react";
export const EmailCambiarContraseña = () => {
	return (
		<div className="changepasswordcontainer container-fluid vh-100 d-flex align-items-center justify-content-center p-5">
			<div className="formpassword container my-5 rounded p-4">
				<div className="boxcambiarcontraseña">
					<h4>Recuperación de contraseña</h4>
					<p>Por favor, provea la dirección email que utilizó al crear su cuenta.</p>

					<form>
						<div className="inputBox">
							<input placeholder="Dirección email" />
						</div>
						<div className="form-row justify-content-center">
							<button className="btnCambiarContraseña px-3" type="submit">
								Enviar Email
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
