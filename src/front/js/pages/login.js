import React from "react";

export const Login = () => {
	return (
		<div className="containerLoginSignUp">
			<div className="mainLoginSignUp">
				<div className="login-register-formcontainer">
					<div className="titleFormloginRegister">Bienvenido</div>
					<form className="loginregisterform">
						<input type="text" name="username" placeholder="Ingrese su nombre de usuario" />
						<input type="password" name="loginpassword" placeholder="Ingrese su contraseña" />
						<button type="submit">Ingresar</button>
					</form>
					<div className="formfooter">
						<span>¿Olvidó su contraseña</span>
						<span>¿Aún no tiene una cuenta? ¡Registrese!</span>
					</div>
				</div>
			</div>
		</div>
	);
};
