import React, { useContext, useHistory } from "react";
import { Context } from "../js/store/appContext";
import { BotonIrInicioSesion } from "../js/component/boton-regresar-inicio-sesion";
export const EmailCambiarContraseña = () => {
    const { store, actions } = useContext(Context);
    const {history}=useHistory()
	return (
		<div className="changepasswordcontainer container-fluid vh-100 d-flex align-items-center justify-content-center p-5">
			<div className="formpassword container my-5 rounded p-4">
				<div className="boxcambiarcontraseña">
					<h4>Recuperación de contraseña</h4>
					<p>Por favor, provea la dirección email que utilizó al crear su cuenta.</p>

                    <form onSubmit={e=>{actions.onSubmitEmail(e)
                         history.push('/codigoconfirmacion')}}>
						<div className="inputBox">
							<input placeholder="Dirección email" onChange={store.emailPassword=e.target.value}/>
						</div>
						<div className="form-row justify-content-center">
							<BotonIrInicioSesion />
							<button className="btnCambiarContraseña px-3" type="submit" >
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
