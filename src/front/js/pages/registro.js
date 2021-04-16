import React from "react";

export const Registro = () => {
	return (
		<div className="containerLoginSignUp">
			<div className="mainLoginSignUp">
				<div className="login-register-formcontainer">
					<div className="titleFormloginRegister">Crea una cuenta</div>
					<form className="loginregisterform">
						<div>
							<input type="text" name="first_name" placeholder="Primer nombre" />
							<input type="password" name="last_name" placeholder="Apellidos" />
							<input type="email" name="email" placeholder="Dirección email" />
							<input type="text" name="phonenumber" placeholder="Número telefónico" />
						</div>
						<div>
							<input type="password" name="password" placeholder="Contraseña" />
							<input type="password" name="confim_password" placeholder="Contraseña de confirmación" />
						</div>
						<button type="submit">Ingresar</button>
					</form>
				</div>
			</div>
		</div>
	);
};
