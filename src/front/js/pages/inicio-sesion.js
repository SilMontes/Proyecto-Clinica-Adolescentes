import React from "react";
import { Link } from "react-router-dom";

export const InicioSesion = () => {
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
						<Link to="/emailcambiarcontraseña">
							<span>¿Olvidó su contraseña</span>
						</Link>
						<Link to="/registro">
							<span>¿Aún no tiene una cuenta? ¡Registrese!</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
